# Form & Interactive State UX Standards
**Author:** Talha Irfan ([@talhairfandev](https://github.com/talhairfandev))

Editorial interfaces require functional clarity under all operational conditions. Every interactive surface must account for loading, empty, validation, and error states without fallback to unstyled browser defaults or visual clutter.

---

## 1. Form Inputs & Validation

### 1.1 Structural Anatomy
- Always pair `<input>` and `<textarea>` elements with explicit `<label>` tags. Placeholders must never replace labels.
- Use `rounded-md` (6px) or `rounded-lg` (8px) corners matching button standards.
- Surface color: Dark `#121318` on `#0a0a0c` canvas, subtle 1px border `border-white/10 focus:border-blue-500`.

```tsx
<div className="space-y-1.5">
  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-[0.2em] text-zinc-400">
    Email Address
  </label>
  <input
    id="email"
    name="email"
    type="email"
    required
    aria-invalid={Boolean(error)}
    aria-describedby={error ? "email-error" : "email-desc"}
    className="w-full px-3.5 py-2.5 bg-[#121318] border border-white/10 rounded-lg text-sm text-white placeholder-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent transition-colors"
    placeholder="editor@domain.com"
  />
  {error ? (
    <p id="email-error" role="alert" className="text-xs text-rose-400 font-medium mt-1">
      {error}
    </p>
  ) : (
    <p id="email-desc" className="text-xs text-zinc-500">
      Your direct contact email.
    </p>
  )}
</div>
```

### 1.2 Interactive Button Lifecycle
Action buttons must reflect client-side lifecycle states:
- **Idle:** Full contrast, clear label, interactive hover state.
- **Submitting:** `disabled`, opacity `0.7`, cursor `not-allowed`, inline indicator or progressive status text (`"Publishing..."`).
- **Success:** Brief confirmation state (`"Saved"`) before resetting.

---

## 2. Skeleton Loaders

Avoid generic spinning wheels in large viewport layouts. Use geometric skeleton pulses that match the final content's exact bounding boxes:

```tsx
export function CardSkeleton() {
  return (
    <div 
      aria-hidden="true" 
      className="p-8 rounded-xl border border-white/5 bg-[#121318] animate-pulse space-y-4"
    >
      <div className="h-3 w-20 bg-white/10 rounded" />
      <div className="h-6 w-3/4 bg-white/10 rounded" />
      <div className="h-4 w-full bg-white/5 rounded" />
      <div className="h-4 w-5/6 bg-white/5 rounded" />
    </div>
  );
}
```

---

## 3. Empty States

Empty states should never be an empty void. Present a purposeful, structured placeholder with an actionable path forward:

```tsx
export function EmptyState({ 
  title, 
  description, 
  actionLabel, 
  onAction 
}: EmptyStateProps) {
  return (
    <div className="w-full py-16 px-6 border border-dashed border-white/10 rounded-xl text-center flex flex-col items-center justify-center">
      <span className="text-xs font-mono tracking-[0.25em] uppercase text-zinc-500 mb-2">
        [ NO ENTRIES ]
      </span>
      <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
      <p className="text-sm text-zinc-400 max-w-sm mb-6 leading-relaxed">
        {description}
      </p>
      <button
        type="button"
        onClick={onAction}
        className="px-4 py-2 text-xs font-mono uppercase tracking-wider bg-white text-black rounded-md hover:bg-zinc-200 transition-colors"
      >
        {actionLabel}
      </button>
    </div>
  );
}
```

---

## 4. Notifications & Toasts

- Position in the viewport corner (`bottom-6 right-6` or `top-6 right-6`).
- Include `role="status"` and `aria-live="polite"`.
- Minimal Swiss aesthetic: Obsidian surface, 1px border, concise message, manual dismiss button.
