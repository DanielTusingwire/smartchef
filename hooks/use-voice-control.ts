import { useEffect, useRef, useState, useCallback } from 'react';

interface VoiceControlOptions {
  onNextStep?: () => void;
  onPreviousStep?: () => void;
  onGoToStep?: (stepNumber: number) => void;
  onStartTimer?: () => void;
  onPauseTimer?: () => void;
  onResumeTimer?: () => void;
  onStopTimer?: () => void;
  onShowIngredients?: () => void;
  onShowDirections?: () => void;
  onReadStep?: () => void;
  currentStepText?: string;
  totalSteps?: number;
}

interface VoiceControlState {
  isListening: boolean;
  isSupported: boolean;
  lastCommand: string | null;
  error: string | null;
}

export function useVoiceControl(options: VoiceControlOptions) {
  const [state, setState] = useState<VoiceControlState>({
    isListening: false,
    isSupported: false,
    lastCommand: null,
    error: null,
  });

  // Awake state (internal to avoid frequent re-renders if not needed, but we might want UI feedback)
  const [isAwake, setIsAwake] = useState(false);
  const wakeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Refs to avoid closure staleness
  const stateRef = useRef(state);
  const isAwakeRef = useRef(isAwake);
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const optionsRef = useRef(options);

  // Keep refs updated
  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  useEffect(() => {
    isAwakeRef.current = isAwake;
  }, [isAwake]);

  useEffect(() => {
    optionsRef.current = options;
  }, [options]);

  const speak = useCallback((text: string) => {
    if (!synthRef.current) return;
    synthRef.current.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    synthRef.current.speak(utterance);
  }, []);

  const activateAwakeMode = useCallback(() => {
    setIsAwake(true);
    // Play a subtle sound or give feedback?
    // speak("Yes?"); // Optional: might be annoying if too frequent
    
    if (wakeTimeoutRef.current) clearTimeout(wakeTimeoutRef.current);
    wakeTimeoutRef.current = setTimeout(() => {
      setIsAwake(false);
      // speak("Sleeping"); // Optional debug
    }, 10000); // Stay awake for 10 seconds
  }, []);

  const readCurrentStep = useCallback(() => {
    if (optionsRef.current.currentStepText) {
      speak(optionsRef.current.currentStepText);
    }
  }, [speak]);

  const processCommand = useCallback((transcript: string) => {
    const lowerTranscript = transcript.toLowerCase().trim();
    console.log('Heard:', lowerTranscript);

    // Direct processing - No wake word required
    setState(prev => ({ ...prev, lastCommand: lowerTranscript, error: null }));
    const opts = optionsRef.current;

    // Navigation
    if (lowerTranscript.includes('next') || lowerTranscript.includes('forward')) {
      opts.onNextStep?.();
      speak('Moving to next step');
    } 
    else if (lowerTranscript.includes('previous') || lowerTranscript.includes('back')) {
      opts.onPreviousStep?.();
      speak('Going back');
    }
    else if (lowerTranscript.includes('repeat') || lowerTranscript.includes('read')) {
      readCurrentStep();
    }
    else if (lowerTranscript.match(/step (\d+)/)) {
      const match = lowerTranscript.match(/step (\d+)/);
      if (match) {
        const stepNum = parseInt(match[1]);
        if (stepNum > 0 && stepNum <= (opts.totalSteps || 0)) {
          opts.onGoToStep?.(stepNum - 1);
          speak(`Going to step ${stepNum}`);
        }
      }
    }
    // Timers
    else if (lowerTranscript.includes('start timer')) {
      opts.onStartTimer?.();
      speak('Timer started');
    }
    else if (lowerTranscript.includes('pause timer') || lowerTranscript.includes('stop timer')) {
      opts.onPauseTimer?.();
      speak('Timer paused');
    }
    else if (lowerTranscript.includes('resume timer')) {
      opts.onResumeTimer?.();
      speak('Timer resumed');
    }
    // Tabs
    else if (lowerTranscript.includes('ingredients')) {
      opts.onShowIngredients?.();
      speak('Showing ingredients');
    }
    else if (lowerTranscript.includes('directions') || lowerTranscript.includes('steps')) {
      opts.onShowDirections?.();
      speak('Showing directions');
    }
  }, [speak, readCurrentStep]);

  // Wake Lock Ref
  const wakeLockRef = useRef<any>(null);

  const requestWakeLock = useCallback(async () => {
    if ('wakeLock' in navigator) {
      try {
        wakeLockRef.current = await (navigator as any).wakeLock.request('screen');
        console.log('Wake Lock active');
      } catch (err) {
        console.error('Wake Lock error:', err);
      }
    }
  }, []);

  const releaseWakeLock = useCallback(async () => {
    if (wakeLockRef.current) {
      try {
        await wakeLockRef.current.release();
        wakeLockRef.current = null;
        console.log('Wake Lock released');
      } catch (err) {
        console.error('Wake Lock release error:', err);
      }
    }
  }, []);

  // Initialize Speech Recognition
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true; // Keep listening!
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setState(prev => ({ ...prev, isListening: true, error: null }));
        requestWakeLock(); // Keep screen on
      };

      recognition.onend = () => {
        // Auto-restart loop
        if (stateRef.current.isListening) {
          console.log('Restarting listener...');
          try {
            recognition.start();
          } catch (e) {
            // Ignore errors on restart
          }
        } else {
          setState(prev => ({ ...prev, isListening: false }));
          releaseWakeLock(); // Let screen sleep
        }
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        if (event.error === 'not-allowed') {
          setState(prev => ({ ...prev, isListening: false, error: 'Microphone access denied' }));
        }
        // For continuous, we might get 'no-speech' errors, just ignore them
      };

      recognition.onresult = (event: any) => {
        // Handle continuous results
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            const transcript = event.results[i][0].transcript;
            processCommand(transcript);
          }
        }
      };

      recognitionRef.current = recognition;
      setState(prev => ({ ...prev, isSupported: true }));
    }

    if (window.speechSynthesis) {
      synthRef.current = window.speechSynthesis;
    }

    return () => {
      if (recognitionRef.current) recognitionRef.current.abort();
      if (synthRef.current) synthRef.current.cancel();
      if (wakeTimeoutRef.current) clearTimeout(wakeTimeoutRef.current);
      releaseWakeLock();
    };
  }, [processCommand, requestWakeLock, releaseWakeLock]);

  const startListening = useCallback(() => {
    if (!recognitionRef.current || state.isListening) return;
    try {
      recognitionRef.current.start();
    } catch (error: any) {
      let msg = 'Failed to start';
      if (error.name === 'NotAllowedError') msg = 'Microphone denied';
      setState(prev => ({ ...prev, error: msg }));
    }
  }, [state.isListening]);

  const stopListening = useCallback(() => {
    if (!recognitionRef.current) return;
    setState(prev => ({ ...prev, isListening: false }));
    recognitionRef.current.stop();
    setIsAwake(false);
    if (wakeTimeoutRef.current) clearTimeout(wakeTimeoutRef.current);
  }, []);

  return {
    ...state,
    isAwake, // Export this so UI can show "Awake" state
    startListening,
    stopListening,
    speak,
    readCurrentStep,
  };
}
