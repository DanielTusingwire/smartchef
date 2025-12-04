(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/chef-gemini-clone/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/chef-gemini-clone/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/chef-gemini-clone/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/chef-gemini-clone/lib/time-greeting.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTimeBasedGreeting",
    ()=>getTimeBasedGreeting
]);
function getTimeBasedGreeting() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
        return {
            greeting: "Good morning, Cheff!",
            placeholder: "What are you making for breakfast?",
            mealType: "breakfast"
        };
    } else if (hour >= 12 && hour < 17) {
        return {
            greeting: "Good afternoon, Chef!",
            placeholder: "What are you making for lunch?",
            mealType: "lunch"
        };
    } else {
        return {
            greeting: "Good evening, Cheff!",
            placeholder: "What are you making for dinner?",
            mealType: "dinner"
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/chef-gemini-clone/components/scroll-aware-header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAwareHeader",
    ()=>ScrollAwareHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ScrollAwareHeader({ rightContent, maxWidth = "max-w-2xl", className }) {
    _s();
    const [showHeader, setShowHeader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [lastScrollY, setLastScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollAwareHeader.useEffect": ()=>{
            const controlNavbar = {
                "ScrollAwareHeader.useEffect.controlNavbar": ()=>{
                    if ("TURBOPACK compile-time truthy", 1) {
                        if (window.scrollY > lastScrollY && window.scrollY > 50) {
                            setShowHeader(false);
                        } else {
                            setShowHeader(true);
                        }
                        setLastScrollY(window.scrollY);
                    }
                }
            }["ScrollAwareHeader.useEffect.controlNavbar"];
            window.addEventListener("scroll", controlNavbar);
            return ({
                "ScrollAwareHeader.useEffect": ()=>window.removeEventListener("scroll", controlNavbar)
            })["ScrollAwareHeader.useEffect"];
        }
    }["ScrollAwareHeader.useEffect"], [
        lastScrollY
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 left-0 right-0 z-50 w-full bg-white px-4 py-4 transition-transform duration-300 shadow-sm", showHeader ? "translate-y-0" : "-translate-y-full", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mx-auto flex items-center justify-between", maxWidth),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/chef-logo.png",
                    alt: "Chef",
                    className: "h-10"
                }, void 0, false, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/scroll-aware-header.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                rightContent
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/chef-gemini-clone/components/scroll-aware-header.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/chef-gemini-clone/components/scroll-aware-header.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(ScrollAwareHeader, "Lh1F4cJh6fZ2JHTSDasMFq7/MVY=");
_c = ScrollAwareHeader;
var _c;
__turbopack_context__.k.register(_c, "ScrollAwareHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/chef-gemini-clone/convex/_generated/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable */ /**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */ __turbopack_context__.s([
    "api",
    ()=>api,
    "components",
    ()=>components,
    "internal",
    ()=>internal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/convex/dist/esm/server/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/convex/dist/esm/server/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$components$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/convex/dist/esm/server/components/index.js [app-client] (ecmascript) <locals>");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anyApi"];
const internal = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anyApi"];
const components = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$components$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["componentsGeneric"])();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeedbackModal",
    ()=>FeedbackModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/convex/dist/esm/react/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/convex/dist/esm/react/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/convex/_generated/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function FeedbackModal({ isOpen, onClose }) {
    _s();
    const [rating, setRating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [comment, setComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSuccess, setShowSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const submitFeedback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].mutations.submitFeedback);
    if (!isOpen) return null;
    const ratings = [
        {
            value: 1,
            emoji: "😖",
            label: "Poor"
        },
        {
            value: 2,
            emoji: "🙁",
            label: "Bad"
        },
        {
            value: 3,
            emoji: "😐",
            label: "Okay"
        },
        {
            value: 4,
            emoji: "🙂",
            label: "Good"
        },
        {
            value: 5,
            emoji: "🤩",
            label: "Amazing"
        }
    ];
    const handleSubmit = async ()=>{
        if (!rating) return;
        setIsSubmitting(true);
        try {
            await submitFeedback({
                rating,
                comment: comment.trim() || undefined
            });
            // Show success message
            setShowSuccess(true);
            // Auto-close after 2 seconds
            setTimeout(()=>{
                setRating(null);
                setComment("");
                setShowSuccess(false);
                onClose();
            }, 2000);
        } catch (error) {
            console.error("Failed to submit feedback:", error);
            alert("Failed to submit feedback. Please try again.");
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-white rounded-3xl p-6 sm:p-8 w-full max-w-md shadow-2xl animate-in fade-in zoom-in-95 duration-200",
                children: showSuccess ? // Success Message
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 text-6xl",
                            children: "✅"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-bold text-neutral-900 mb-2",
                            children: "Thank you!"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-neutral-600 text-sm",
                            children: "Your feedback has been submitted successfully"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
                    lineNumber: 68,
                    columnNumber: 11
                }, this) : // Feedback Form
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center space-y-1 sm:space-y-2 mb-6 sm:mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl sm:text-2xl font-bold text-neutral-900",
                                    children: "Enjoying Chef?"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
                                    lineNumber: 77,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-neutral-500 text-xs sm:text-sm px-2 sm:px-4",
                                    children: "Your feedback will help us improve to give you a better experience in future"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
                                    lineNumber: 78,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
                            lineNumber: 76,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center gap-1 mb-1",
                            children: ratings.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setRating(r.value),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-3xl sm:text-4xl p-1.5 sm:p-2 transition-all duration-300 transform hover:scale-110 relative group", rating === r.value ? "scale-110" : "grayscale opacity-40 hover:grayscale-0 hover:opacity-100"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative z-10",
                                            children: r.emoji
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
                                            lineNumber: 94,
                                            columnNumber: 16
                                        }, this),
                                        rating === r.value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-yellow-400/20 blur-xl rounded-full z-0"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
                                            lineNumber: 96,
                                            columnNumber: 18
                                        }, this)
                                    ]
                                }, r.value, true, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
                                    lineNumber: 86,
                                    columnNumber: 14
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
                            lineNumber: 84,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center h-5 sm:h-6 mb-6 sm:mb-8 font-bold text-neutral-900 text-base sm:text-lg",
                            children: rating ? ratings.find((r)=>r.value === rating)?.label : ""
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
                            lineNumber: 103,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            value: comment,
                            onChange: (e)=>setComment(e.target.value),
                            placeholder: "Why this experience? You can leave it empty",
                            className: "w-full bg-neutral-50 border border-neutral-200 rounded-2xl p-3 sm:p-4 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all resize-none h-28 sm:h-32 mb-6 sm:mb-8 text-sm sm:text-base"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
                            lineNumber: 108,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSubmit,
                            disabled: isSubmitting || !rating,
                            className: "w-full bg-neutral-900 text-white font-bold py-3.5 sm:py-4 rounded-full hover:bg-neutral-800 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base",
                            children: isSubmitting ? "Sending..." : "Send Feedback"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
                            lineNumber: 116,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(FeedbackModal, "UrBbBJfDo6e9odzIkCH0asK+HZ4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = FeedbackModal;
var _c;
__turbopack_context__.k.register(_c, "FeedbackModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RecipeInput",
    ()=>RecipeInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$time$2d$greeting$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/lib/time-greeting.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$scroll$2d$aware$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/components/scroll-aware-header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$feedback$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/components/feedback-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function RecipeInput({ onGenerate, isLoading }) {
    _s();
    const [youtubeUrl, setYoutubeUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [recipeText, setRecipeText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [inputType, setInputType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("youtube");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [greeting, setGreeting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [placeholder, setPlaceholder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isFocused, setIsFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showFeedback, setShowFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RecipeInput.useEffect": ()=>{
            const { greeting: g, placeholder: p } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$time$2d$greeting$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTimeBasedGreeting"])();
            setGreeting(g);
            setPlaceholder(p);
            const interval = setInterval({
                "RecipeInput.useEffect.interval": ()=>{
                    const { greeting: newG, placeholder: newP } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$time$2d$greeting$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTimeBasedGreeting"])();
                    setGreeting(newG);
                    setPlaceholder(newP);
                }
            }["RecipeInput.useEffect.interval"], 60000);
            return ({
                "RecipeInput.useEffect": ()=>clearInterval(interval)
            })["RecipeInput.useEffect"];
        }
    }["RecipeInput.useEffect"], []);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        const input = inputType === "youtube" ? youtubeUrl : recipeText;
        if (!input.trim()) {
            setError("Please enter a YouTube URL or recipe text");
            return;
        }
        try {
            await onGenerate(input, inputType);
        } catch  {
            setError("Failed to generate recipe. Please try again.");
        }
    };
    const textareaClass = "flex-grow text-4xl sm:text-5xl font-medium placeholder:text-neutral-300 text-neutral-900 " + "bg-transparent border-none outline-none focus:outline-none focus-visible:outline-none " + "focus:ring-0 focus:ring-transparent shadow-none resize-none p-0 leading-tight";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-neutral-100 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$scroll$2d$aware$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAwareHeader"], {
                        rightContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowFeedback(true),
                            className: "px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-sm font-semibold rounded-full transition-colors",
                            children: "Feedback"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                        lineNumber: 66,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-grow flex flex-col items-center justify-center px-4 py-8 pt-24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-2xl space-y-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6 text-left sm:text-left pl-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight",
                                        children: greeting
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                                        lineNumber: 83,
                                        columnNumber: 11
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                                    lineNumber: 81,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-8 border-b border-transparent px-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setInputType("youtube"),
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pb-2 text-lg font-semibold transition-all relative", inputType === "youtube" ? "text-neutral-900" : "text-neutral-400 hover:text-neutral-700"),
                                                    children: [
                                                        "Youtube",
                                                        inputType === "youtube" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "absolute bottom-0 left-0 w-full h-0.5 bg-neutral-900 rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setInputType("text"),
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pb-2 text-lg font-semibold transition-all relative", inputType === "text" ? "text-neutral-900" : "text-neutral-400 hover:text-neutral-700"),
                                                    children: [
                                                        "Text",
                                                        inputType === "text" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "absolute bottom-0 left-0 w-full h-0.5 bg-neutral-900 rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                                                            lineNumber: 114,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 13
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                                            lineNumber: 91,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleSubmit,
                                            className: "relative",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-white rounded-[2.5rem] p-8  min-h-[550px] flex flex-col transition-all duration-200", isFocused ? "border-2 border-neutral-900 shadow-md" : "border border-transparent"),
                                                children: [
                                                    inputType === "youtube" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        placeholder: "Place the YouTube url here",
                                                        value: youtubeUrl,
                                                        onChange: (e)=>setYoutubeUrl(e.target.value),
                                                        onFocus: ()=>setIsFocused(true),
                                                        onBlur: ()=>setIsFocused(false),
                                                        className: textareaClass,
                                                        disabled: isLoading
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 17
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        placeholder: placeholder,
                                                        value: recipeText,
                                                        onChange: (e)=>{
                                                            const val = e.target.value;
                                                            setRecipeText(val.charAt(0).toUpperCase() + val.slice(1));
                                                        },
                                                        onFocus: ()=>setIsFocused(true),
                                                        onBlur: ()=>setIsFocused(false),
                                                        className: textareaClass,
                                                        disabled: isLoading
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 17
                                                    }, this),
                                                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-red-500 text-sm font-medium mt-2",
                                                        children: error
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-8",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            type: "submit",
                                                            size: "lg",
                                                            className: "w-full h-14 bg-neutral-900 hover:bg-neutral-800 text-white text-lg font-medium rounded-full shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]",
                                                            disabled: isLoading,
                                                            children: isLoading ? "Cooking..." : "Create Recipe"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 17
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                                                lineNumber: 121,
                                                columnNumber: 13
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                                            lineNumber: 120,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                                    lineNumber: 88,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                            lineNumber: 78,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                        lineNumber: 77,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                lineNumber: 65,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$feedback$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeedbackModal"], {
                isOpen: showFeedback,
                onClose: ()=>setShowFeedback(false)
            }, void 0, false, {
                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx",
                lineNumber: 181,
                columnNumber: 3
            }, this)
        ]
    }, void 0, true);
}
_s(RecipeInput, "7OmhwabxLtBQ1j4n4Lk0uBq/R6k=");
_c = RecipeInput;
var _c;
__turbopack_context__.k.register(_c, "RecipeInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RecipeOverview",
    ()=>RecipeOverview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$scroll$2d$aware$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/components/scroll-aware-header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function RecipeOverview({ recipe, onStartCooking, onBack }) {
    _s();
    const originalServings = Number.parseInt(recipe.servings) || 4;
    const [currentServings, setCurrentServings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(originalServings);
    const [imageLoaded, setImageLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const servingsMultiplier = currentServings / originalServings;
    const decreaseServings = ()=>{
        setCurrentServings(Math.max(1, currentServings - 1));
    };
    const increaseServings = ()=>{
        setCurrentServings(currentServings + 1);
    };
    // Calculate adjusted calories based on servings
    const adjustedCalories = recipe.nutritional_info?.calories ? Math.round(Number.parseInt(recipe.nutritional_info.calories) * servingsMultiplier) : null;
    // Determine which image to use: YouTube thumbnail or AI-generated
    const imageUrl = recipe.youtube_thumbnail ? recipe.youtube_thumbnail : `https://pollinations.ai/p/${encodeURIComponent(recipe.image_keywords || recipe.recipe_name)}?width=1280&height=720&seed=42&model=flux`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-neutral-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$scroll$2d$aware$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAwareHeader"], {
                maxWidth: "max-w-4xl",
                rightContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onBack,
                    className: "p-2 -mr-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "w-6 h-6"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                    lineNumber: 60,
                    columnNumber: 11
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-32 pt-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full aspect-video bg-neutral-100 rounded-3xl overflow-hidden mb-8 shadow-sm relative",
                        children: [
                            !imageLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center justify-center bg-neutral-100 z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/loadLogo.png",
                                    alt: "Loading...",
                                    className: "w-20 h-20 animate-spin object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: imageUrl,
                                alt: recipe.recipe_name,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full h-full object-cover transition-opacity duration-700", imageLoaded ? "opacity-100" : "opacity-0"),
                                loading: "lazy",
                                onLoad: ()=>setImageLoaded(true)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl sm:text-5xl font-bold text-foreground",
                                    children: recipe.recipe_name
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "text-2xl text-muted-foreground hover:text-foreground transition-colors",
                                    children: "🔗"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-3xl p-5 sm:p-6 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base sm:text-lg text-muted-foreground leading-relaxed mb-8",
                                children: recipe.summary
                            }, void 0, false, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-neutral-100 px-4 py-4 rounded-2xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground mb-1",
                                                children: "Cooking time"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                                lineNumber: 110,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-foreground text-lg",
                                                children: recipe.prep_time
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                                lineNumber: 111,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-neutral-100 px-4 py-4 rounded-2xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground mb-1",
                                                children: "Servings"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                                lineNumber: 114,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-foreground text-lg",
                                                children: currentServings
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                                lineNumber: 115,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    adjustedCalories && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-neutral-100 px-4 py-4 rounded-2xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground mb-1",
                                                children: "Calories"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-foreground text-lg",
                                                children: [
                                                    adjustedCalories,
                                                    " kcal"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: decreaseServings,
                                        className: "w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-lg sm:text-xl font-semibold transition-colors",
                                        children: "−"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-semibold text-foreground",
                                        children: [
                                            "Cooking for ",
                                            currentServings
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: increaseServings,
                                        className: "w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-lg sm:text-xl font-semibold transition-colors",
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-foreground mb-6 pl-2",
                                children: "Things to note"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-3xl p-5 sm:p-6",
                                children: [
                                    recipe.tools && recipe.tools.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-foreground mb-4",
                                                children: "Tools"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: recipe.tools.map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-4 py-2 bg-neutral-100 rounded-xl text-sm text-foreground font-medium",
                                                        children: tool
                                                    }, tool, false, {
                                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this),
                                    recipe.allergens && recipe.allergens.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-foreground",
                                                        children: "Potential Allergens"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-muted-foreground cursor-help",
                                                        title: "Allergen information",
                                                        children: "ⓘ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                                lineNumber: 169,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: recipe.allergens.map((allergen)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-4 py-2 bg-yellow-50 text-yellow-700 rounded-xl text-sm font-medium border border-yellow-100",
                                                        children: allergen
                                                    }, allergen, false, {
                                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                                lineNumber: 173,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed bottom-8 left-1/2 -translate-x-1/2 z-40 w-full max-w-md px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onStartCooking,
                            className: "w-full bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-3 px-5 sm:py-4 sm:px-6 rounded-full shadow-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] text-base sm:text-lg flex items-center justify-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Start Cooking"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xl",
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(RecipeOverview, "IY9zrNFXq1crBS651NZiOe42z/U=");
_c = RecipeOverview;
var _c;
__turbopack_context__.k.register(_c, "RecipeOverview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CookingInterface",
    ()=>CookingInterface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$scroll$2d$aware$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/components/scroll-aware-header.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CookingInterface({ recipe, onBack }) {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ingredients");
    const [checkedIngredients, setCheckedIngredients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [currentStepIndex, setCurrentStepIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Store timers as a map: "stepIndex-partIndex" -> { remaining: number, isRunning: boolean, original: number }
    const [timers, setTimers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isScrollingDown, setIsScrollingDown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastScrollY, setLastScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const directionsContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stepRefsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    // For TikTok-style snap scroll
    const isSnappingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastScrollYRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const wheelTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const extractTimer = (text)=>{
        const match = text.match(/(\d+)\s*(minutes?|mins?|hours?|hrs?)/i);
        if (!match) return null;
        const val = parseInt(match[1]);
        const unit = match[2].toLowerCase();
        if (unit.includes("hour")) return val * 3600;
        return val * 60;
    };
    const formatTime = (seconds)=>{
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    };
    // Timer Logic - Decrement all running timers
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CookingInterface.useEffect": ()=>{
            const interval = setInterval({
                "CookingInterface.useEffect.interval": ()=>{
                    setTimers({
                        "CookingInterface.useEffect.interval": (prev)=>{
                            const next = {
                                ...prev
                            };
                            let hasChanges = false;
                            Object.keys(next).forEach({
                                "CookingInterface.useEffect.interval": (key)=>{
                                    if (next[key].isRunning && next[key].remaining > 0) {
                                        next[key] = {
                                            ...next[key],
                                            remaining: next[key].remaining - 1
                                        };
                                        hasChanges = true;
                                        // Auto-pause when reaching 0
                                        if (next[key].remaining === 0) {
                                            next[key].isRunning = false;
                                        }
                                    }
                                }
                            }["CookingInterface.useEffect.interval"]);
                            return hasChanges ? next : prev;
                        }
                    }["CookingInterface.useEffect.interval"]);
                }
            }["CookingInterface.useEffect.interval"], 1000);
            return ({
                "CookingInterface.useEffect": ()=>clearInterval(interval)
            })["CookingInterface.useEffect"];
        }
    }["CookingInterface.useEffect"], []);
    const getStepIngredients = (step)=>recipe.ingredients.filter((ing)=>step.toLowerCase().includes(ing.split(",")[0].toLowerCase()));
    // Detect active step (keep this untouched)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CookingInterface.useEffect": ()=>{
            if (activeTab !== "directions") return;
            const observer = new IntersectionObserver({
                "CookingInterface.useEffect": (entries)=>{
                    let topIndex = currentStepIndex;
                    let maxRatio = 0;
                    for (const entry of entries){
                        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
                            maxRatio = entry.intersectionRatio;
                            const idx = Number(entry.target.getAttribute("data-step-index"));
                            if (!isNaN(idx)) topIndex = idx;
                        }
                    }
                    if (maxRatio > 0.4) setCurrentStepIndex(topIndex);
                }
            }["CookingInterface.useEffect"], {
                threshold: 0.5
            });
            stepRefsRef.current.forEach({
                "CookingInterface.useEffect": (r)=>r && observer.observe(r)
            }["CookingInterface.useEffect"]);
            return ({
                "CookingInterface.useEffect": ()=>observer.disconnect()
            })["CookingInterface.useEffect"];
        }
    }["CookingInterface.useEffect"], [
        activeTab
    ]);
    // 👉 **TikTok Vertical Feed Scroll**
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CookingInterface.useEffect": ()=>{
            if (activeTab !== "directions") return;
            const container = directionsContainerRef.current;
            if (!container) return;
            const onWheel = {
                "CookingInterface.useEffect.onWheel": (e)=>{
                    if (isSnappingRef.current) {
                        e.preventDefault();
                        return;
                    }
                    e.preventDefault(); // block default scrolling
                    const direction = e.deltaY > 0 ? "down" : "up";
                    if (wheelTimeoutRef.current) clearTimeout(wheelTimeoutRef.current);
                    wheelTimeoutRef.current = setTimeout({
                        "CookingInterface.useEffect.onWheel": ()=>{
                            isSnappingRef.current = true;
                            if (direction === "down" && currentStepIndex < recipe.instructions.length - 1) {
                                stepRefsRef.current[currentStepIndex + 1]?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "center"
                                });
                            } else if (direction === "up" && currentStepIndex > 0) {
                                stepRefsRef.current[currentStepIndex - 1]?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "center"
                                });
                            }
                            setTimeout({
                                "CookingInterface.useEffect.onWheel": ()=>{
                                    isSnappingRef.current = false;
                                }
                            }["CookingInterface.useEffect.onWheel"], 450);
                        }
                    }["CookingInterface.useEffect.onWheel"], 50);
                }
            }["CookingInterface.useEffect.onWheel"];
            container.addEventListener("wheel", onWheel, {
                passive: false
            });
            return ({
                "CookingInterface.useEffect": ()=>container.removeEventListener("wheel", onWheel)
            })["CookingInterface.useEffect"];
        }
    }["CookingInterface.useEffect"], [
        activeTab,
        currentStepIndex
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CookingInterface.useEffect": ()=>{
            const handleScroll = {
                "CookingInterface.useEffect.handleScroll": ()=>{
                    const currentScrollY = window.scrollY;
                    if (currentScrollY > lastScrollY && currentScrollY > 50) {
                        setIsScrollingDown(true);
                    } else {
                        setIsScrollingDown(false);
                    }
                    setLastScrollY(currentScrollY);
                }
            }["CookingInterface.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "CookingInterface.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["CookingInterface.useEffect"];
        }
    }["CookingInterface.useEffect"], [
        lastScrollY
    ]);
    const toggleAllIngredients = ()=>setCheckedIngredients((prev)=>{
            const allChecked = recipe.ingredients.every((_, i)=>prev[i]);
            if (allChecked) return {};
            return Object.fromEntries(recipe.ingredients.map((_, i)=>[
                    i,
                    true
                ]));
        });
    const copyIngredients = ()=>navigator.clipboard.writeText(recipe.ingredients.join("\n"));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col bg-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes shine {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .timer-shine {
          background: linear-gradient(to right, #15803d 20%, #fbbf24 40%, #fbbf24 60%, #15803d 80%);
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 2s linear 1 forwards;
        }
      `
            }, void 0, false, {
                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$scroll$2d$aware$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAwareHeader"], {
                maxWidth: "max-w-4xl",
                rightContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onBack,
                    className: "p-2 -mr-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "w-6 h-6"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                        lineNumber: 196,
                        columnNumber: 13
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                    lineNumber: 192,
                    columnNumber: 11
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("sticky z-30 flex justify-center px-4 py-4 pointer-events-none transition-all duration-500 ease-in-out", isScrollingDown ? "top-2" : "top-[80px]"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-auto bg-white/70 backdrop-blur-xl shadow-lg rounded-full p-1.5 flex items-center gap-1 border border-white/20 ring-1 ring-black/5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab("ingredients"),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300", activeTab === "ingredients" ? "bg-neutral-900 text-white shadow-md transform scale-105" : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100"),
                            children: "Ingredients list"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab("directions"),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300", activeTab === "directions" ? "bg-neutral-900 text-white shadow-md transform scale-105" : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100"),
                            children: "Directions"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                    lineNumber: 208,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-24 px-4 sm:px-6 pb-4 max-w-4xl mx-auto w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl sm:text-3xl font-bold text-neutral-900",
                    children: recipe.recipe_name
                }, void 0, false, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                    lineNumber: 238,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-hidden",
                children: activeTab === "ingredients" ? // -------------------------
                // INGREDIENTS TAB (unchanged)
                // -------------------------
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 sm:px-6 py-8 max-w-4xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-end justify-between mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-neutral-900",
                                                children: "Get Ingredients"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                lineNumber: 251,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-neutral-500 text-sm mt-1",
                                                children: "Select the ingredients you have missing to view nearby store options or add to your list."
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                lineNumber: 252,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                        lineNumber: 250,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleAllIngredients,
                                        className: "text-sm font-semibold text-neutral-900 underline decoration-2 underline-offset-4 hover:text-neutral-600 whitespace-nowrap ml-4",
                                        children: "Select All"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                        lineNumber: 256,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                lineNumber: 249,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                            lineNumber: 248,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-3xl p-2 border border-neutral-100 mb-24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: recipe.ingredients.map((ingredient, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group flex items-center gap-4 p-4 rounded-2xl hover:bg-neutral-50 transition-colors cursor-pointer",
                                        onClick: ()=>setCheckedIngredients((prev)=>({
                                                    ...prev,
                                                    [idx]: !prev[idx]
                                                })),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-medium transition-all", checkedIngredients[idx] ? "text-neutral-400 line-through" : "text-neutral-900"),
                                                    children: ingredient
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                lineNumber: 275,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-8 h-8 rounded-lg border-2 flex items-center justify-center transition-all", checkedIngredients[idx] ? "bg-neutral-900 border-neutral-900" : "border-neutral-200 group-hover:border-neutral-300"),
                                                children: checkedIngredients[idx] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5 text-white",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M5 13l4 4L19 7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                    lineNumber: 295,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                lineNumber: 286,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                        lineNumber: 268,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                lineNumber: 266,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                            lineNumber: 265,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-4 w-full max-w-md px-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: copyIngredients,
                                    className: "flex-1 bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-200 font-bold py-4 px-6 rounded-full shadow-xl flex items-center justify-center gap-3 transition-all transform active:scale-95",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                            lineNumber: 311,
                                            columnNumber: 17
                                        }, this),
                                        "Copy List"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                    lineNumber: 307,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex-1 bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-4 px-6 rounded-full shadow-xl flex items-center justify-center gap-3 transition-all transform active:scale-95",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                            lineNumber: 315,
                                            columnNumber: 17
                                        }, this),
                                        "Find Stores"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                    lineNumber: 314,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                            lineNumber: 306,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                    lineNumber: 247,
                    columnNumber: 11
                }, this) : // -------------------------
                // DIRECTIONS TAB
                // -------------------------
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: directionsContainerRef,
                    className: "h-full overflow-y-scroll px-4 sm:px-6 py-8 max-w-4xl mx-auto snap-y snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pb-32",
                        children: recipe.instructions.map((instruction, idx)=>{
                            const isActive = idx === currentStepIndex;
                            const stepIngredients = getStepIngredients(instruction);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: (el)=>stepRefsRef.current[idx] = el,
                                "data-step-index": idx,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("transition-all duration-500 rounded-3xl overflow-hidden snap-center snap-always mb-6 last:mb-0", "min-h-[calc(100vh-280px)] h-[calc(100vh-280px)]", isActive ? "bg-white scale-100 opacity-100" : "bg-neutral-200 scale-95 opacity-50 cursor-pointer hover:opacity-70"),
                                onClick: ()=>!isActive && stepRefsRef.current[idx]?.scrollIntoView({
                                        behavior: "smooth",
                                        block: "center"
                                    }),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8 h-full flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-1 rounded-lg flex items-center gap-2", isActive ? "bg-neutral-100" : "bg-neutral-300"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-neutral-900",
                                                        children: [
                                                            "Step ",
                                                            idx + 1
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                        lineNumber: 358,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-neutral-500",
                                                        children: "↗"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                        lineNumber: 359,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                lineNumber: 352,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                            lineNumber: 351,
                                            columnNumber: 23
                                        }, this),
                                        isActive && stepIngredients.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2 mb-6",
                                            children: stepIngredients.map((ing, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-3 py-1 bg-neutral-100 rounded-lg text-sm text-neutral-600 font-medium",
                                                    children: ing.split(",")[0]
                                                }, i, false, {
                                                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                    lineNumber: 366,
                                                    columnNumber: 29
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                            lineNumber: 364,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-medium transition-all", isActive ? "text-3xl sm:text-4xl leading-[1.5] text-neutral-900" : "text-lg text-neutral-600 line-clamp-3 leading-relaxed"),
                                            children: isActive ? instruction.split(/(\d+\s*(minutes?|mins?))/gi).map((part, i)=>{
                                                if (/\d+\s*(minutes?|mins?)/i.test(part)) {
                                                    const t = extractTimer(part);
                                                    const timerKey = `${idx}-${i}`;
                                                    const timerState = timers[timerKey];
                                                    const hasRemainingTime = timerState && timerState.remaining > 0;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            if (t) {
                                                                setTimers((prev)=>{
                                                                    const current = prev[timerKey];
                                                                    if (current) {
                                                                        // Toggle running state
                                                                        return {
                                                                            ...prev,
                                                                            [timerKey]: {
                                                                                ...current,
                                                                                isRunning: !current.isRunning
                                                                            }
                                                                        };
                                                                    } else {
                                                                        // Initialize and start
                                                                        return {
                                                                            ...prev,
                                                                            [timerKey]: {
                                                                                remaining: t,
                                                                                isRunning: true,
                                                                                original: t
                                                                            }
                                                                        };
                                                                    }
                                                                });
                                                            }
                                                        },
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-bold cursor-pointer inline-flex items-center gap-2 px-3 py-1 rounded-2xl transition-all", hasRemainingTime ? "bg-green-50 text-green-600 border-2 border-green-200" : "text-green-600 hover:bg-green-50", isActive && !hasRemainingTime && "timer-shine"),
                                                        style: {
                                                            WebkitTextFillColor: isActive && !hasRemainingTime ? 'transparent' : 'initial'
                                                        },
                                                        children: hasRemainingTime ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono",
                                                            children: [
                                                                formatTime(timerState.remaining),
                                                                !timerState.isRunning && " (Paused)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                            lineNumber: 426,
                                                            columnNumber: 39
                                                        }, this) : part
                                                    }, i, false, {
                                                        fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                        lineNumber: 393,
                                                        columnNumber: 35
                                                    }, this);
                                                }
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: part
                                                }, i, false, {
                                                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                                    lineNumber: 436,
                                                    columnNumber: 38
                                                }, this);
                                            }) : instruction
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                            lineNumber: 376,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                    lineNumber: 350,
                                    columnNumber: 21
                                }, this)
                            }, idx, false, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                lineNumber: 334,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                        lineNumber: 328,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                    lineNumber: 324,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            activeTab === "directions" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-8 left-1/2 -translate-x-1/2 z-40 w-full max-w-md px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/90 backdrop-blur-xl border border-neutral-200 shadow-2xl rounded-2xl p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-semibold text-neutral-900",
                                    children: [
                                        "Step ",
                                        currentStepIndex + 1,
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-neutral-400",
                                            children: [
                                                "of ",
                                                recipe.instructions.length
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                            lineNumber: 456,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                    lineNumber: 454,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-bold text-neutral-900",
                                    children: [
                                        Math.round((currentStepIndex + 1) / recipe.instructions.length * 100),
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                    lineNumber: 458,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                            lineNumber: 453,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-1.5 h-3",
                            children: recipe.instructions.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-full flex-1 rounded-full transition-all duration-300", i <= currentStepIndex ? "bg-neutral-900" : "bg-neutral-100")
                                }, i, false, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                                    lineNumber: 465,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                            lineNumber: 463,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                    lineNumber: 452,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
                lineNumber: 451,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx",
        lineNumber: 174,
        columnNumber: 5
    }, this);
}
_s(CookingInterface, "ePEHUvD4tTHReysalS8KnyN47Ns=");
_c = CookingInterface;
var _c;
__turbopack_context__.k.register(_c, "CookingInterface");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingModal",
    ()=>LoadingModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function LoadingModal({ onCancel }) {
    _s();
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoadingModal.useEffect": ()=>{
            const interval = setInterval({
                "LoadingModal.useEffect.interval": ()=>{
                    setProgress({
                        "LoadingModal.useEffect.interval": (prev)=>{
                            if (prev >= 95) return prev;
                            const increment = Math.random() * 30;
                            return Math.min(prev + increment, 95);
                        }
                    }["LoadingModal.useEffect.interval"]);
                }
            }["LoadingModal.useEffect.interval"], 500);
            return ({
                "LoadingModal.useEffect": ()=>clearInterval(interval)
            })["LoadingModal.useEffect"];
        }
    }["LoadingModal.useEffect"], []);
    // Food icons for the spinner circle
    const foodEmojis = [
        "🍗",
        "🍅",
        "🍎",
        "🥦",
        "🍲",
        "🥕",
        "🍄",
        "🥒"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-neutral-900/60 backdrop-blur-sm flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-3xl p-12 max-w-sm w-full mx-4 text-center space-y-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center items-center h-40",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-40 h-40",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 animate-spin",
                                style: {
                                    animationDuration: "4s"
                                },
                                children: foodEmojis.map((emoji, i)=>{
                                    const angle = i / foodEmojis.length * 360;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute w-12 h-12 flex items-center justify-center text-2xl",
                                        style: {
                                            transform: `rotate(${angle}deg) translateY(-80px) rotate(-${angle}deg)`,
                                            top: "50%",
                                            left: "50%",
                                            marginLeft: "-24px",
                                            marginTop: "-24px"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-full w-12 h-12 flex items-center justify-center",
                                            children: emoji
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx",
                                            lineNumber: 44,
                                            columnNumber: 21
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx",
                                        lineNumber: 33,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 border-4 border-neutral-200 border-t-neutral-900 rounded-full animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl font-bold text-neutral-900",
                            children: "Extracting recipe..."
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-neutral-500",
                            children: "Estimated time: 15 to 25 seconds"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-neutral-200 rounded-full h-2 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-neutral-900 h-full rounded-full transition-all duration-300 ease-out",
                            style: {
                                width: `${progress}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                onCancel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onCancel,
                    className: "w-full py-3 px-4 text-neutral-600 hover:bg-neutral-100 rounded-2xl transition-colors text-sm font-medium",
                    children: "Cancel"
                }, void 0, false, {
                    fileName: "[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx",
                    lineNumber: 78,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(LoadingModal, "ZVQpwjU6Dz5R8VBOzPsnxGRmMVo=");
_c = LoadingModal;
var _c;
__turbopack_context__.k.register(_c, "LoadingModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/chef-gemini-clone/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$recipe$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/components/recipe-input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$recipe$2d$overview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/components/recipe-overview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$cooking$2d$interface$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/components/cooking-interface.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$loading$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/components/loading-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/convex/dist/esm/react/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/node_modules/convex/dist/esm/react/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/chef-gemini-clone/convex/_generated/api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function HomePage() {
    _s();
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("home");
    const [generatedRecipe, setGeneratedRecipe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const generateRecipeAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].actions.generateRecipe);
    const handleGenerateRecipe = async (input, inputType)=>{
        setIsLoading(true);
        try {
            // const response = await fetch("/api/generate-recipe", {
            //   method: "POST",
            //   headers: { "Content-Type": "application/json" },
            //   body: JSON.stringify({ input, inputType }),
            // })
            // if (!response.ok) {
            //   const errorData = await response.json()
            //   throw new Error(errorData.error || "Failed to generate recipe")
            // }
            // const recipe = await response.json()
            const recipe = await generateRecipeAction({
                input,
                inputType
            });
            setGeneratedRecipe(recipe);
            setCurrentPage("overview");
        } catch (error) {
            console.error("Error generating recipe:", error);
            alert(error.message || "Failed to generate recipe. Please try again.");
        } finally{
            setIsLoading(false);
        }
    };
    const handleStartCooking = ()=>{
        setCurrentPage("cooking");
    };
    const handleBackHome = ()=>{
        setCurrentPage("home");
        setGeneratedRecipe(null);
    };
    const handleBackToOverview = ()=>{
        setCurrentPage("overview");
    };
    const handleCancelLoading = ()=>{
        setIsLoading(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-neutral-50",
        children: [
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$loading$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingModal"], {
                onCancel: handleCancelLoading
            }, void 0, false, {
                fileName: "[project]/Downloads/chef-gemini-clone/app/page.tsx",
                lineNumber: 65,
                columnNumber: 21
            }, this),
            currentPage === "home" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$recipe$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RecipeInput"], {
                onGenerate: handleGenerateRecipe,
                isLoading: isLoading
            }, void 0, false, {
                fileName: "[project]/Downloads/chef-gemini-clone/app/page.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, this) : currentPage === "overview" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 sm:px-6 lg:px-8 py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$recipe$2d$overview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RecipeOverview"], {
                    recipe: generatedRecipe,
                    onStartCooking: handleStartCooking,
                    onBack: handleBackHome
                }, void 0, false, {
                    fileName: "[project]/Downloads/chef-gemini-clone/app/page.tsx",
                    lineNumber: 71,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/chef-gemini-clone/app/page.tsx",
                lineNumber: 70,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$components$2f$cooking$2d$interface$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CookingInterface"], {
                recipe: generatedRecipe,
                onBack: handleBackToOverview
            }, void 0, false, {
                fileName: "[project]/Downloads/chef-gemini-clone/app/page.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/chef-gemini-clone/app/page.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(HomePage, "oF3fRghA3F2zgyqd07Oq+gUUROE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$chef$2d$gemini$2d$clone$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAction"]
    ];
});
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_chef-gemini-clone_c9c73cfc._.js.map