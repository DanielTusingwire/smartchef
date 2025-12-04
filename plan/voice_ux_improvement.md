# 🎙️ True Hands-Free Voice UX Plan

## The Challenge

Browsers require a user gesture (tap/click) to activate the microphone. They also tend to stop listening after a period of silence or a single result to save battery/privacy. This forces users to keep tapping the mic, defeating the purpose of "hands-free" when hands are messy.

## The Solution: "Cooking Mode" 👨‍🍳

We will implement a robust **"Always-On"** session that requires only **one initial tap** to start.

### 1. Continuous Listening Loop (The "Heartbeat")

- **Current Behavior**: The mic stops after a result or silence.
- **New Behavior**:
  - When the microphone stops (`onend` event), we check if the user _intended_ to stop.
  - If not, we **immediately restart** the recognition engine.
  - This creates a seamless loop where the mic is always ready.

### 2. Screen Wake Lock API 📱

- **Problem**: If the user is reading a step for 2 minutes, the phone screen turns off. Unlocking with messy hands is impossible.
- **Solution**: Implement the `navigator.wakeLock` API.
- **Effect**: The screen stays bright and active as long as "Cooking Mode" is running.

### 3. Smart Command Parsing

- **Problem**: Continuous listening might pick up background conversation ("I need to go to the **next step** of my life").
- **Solution**:
  - Implement **Strict Command Matching**.
  - (Optional) Add a "Wake Word" requirement? (e.g., "Chef, next step"). _Recommendation: Keep it simple for now (direct commands), but add strict phrase matching._

### 4. Audio Feedback (The "Earcon") 🔔

- **Problem**: User doesn't know if the command worked without looking.
- **Solution**:
  - Play a subtle "ding" sound when a command is recognized.
  - Play a different sound if an error occurs.
  - Use `window.speechSynthesis` to confirm actions (e.g., "Timer started for 10 minutes").

## Implementation Steps

1.  **Modify `useVoiceControl` Hook**:
    - Add `autoRestart` logic to `onend`.
    - Add `WakeLock` management.
    - Refine error handling to ignore "aborted" errors during restart.

2.  **Update UI**:
    - Change the Mic button behavior: It becomes a toggle for "Cooking Mode" (On/Off).
    - When "On", show a distinct "Listening..." pulsing state that _never_ goes away.

3.  **Testing**:
    - Verify battery usage (warn user?).
    - Test background noise resilience.

---

_Ready to implement Step 1?_
