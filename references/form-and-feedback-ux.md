# Form and Feedback UX — Editorial State Patterns

Functionality and accessibility still matter, but state UI must belong to the embedded editorial output system.

## Inputs

- Use explicit labels, concise helper text, and semantic error relationships.
- Inputs, selects, textareas, dialogs, and status surfaces use hard-edged rectangular framing, a 1px rule, solid black/white/charcoal/cream surfaces, and no shadow or blur.
- Use a square 2px focus outline with sufficient contrast; do not turn focus into a pill or glow.

```tsx
<div>
  <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-[.18em]">Email</label>
  <input
    id="email"
    name="email"
    type="email"
    required
    aria-invalid={Boolean(error)}
    aria-describedby={error ? "email-error" : undefined}
    className="w-full border border-black/30 bg-white px-3 py-3 text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D71920]"
  />
  {error && <p id="email-error" role="alert" className="mt-2 text-sm text-[#D71920]">{error}</p>}
</div>
```

## Action Lifecycle

Idle, submitting, success, and failure states need clear text and disabled behavior. Do not use decorative spinner circles; use a short status line or a rectangular progress rule.

## Loading and Empty States

Match the final geometry with sharp rectangular blocks and simple opacity changes. Empty states should be concise: `[ NO ENTRIES ]`, one sentence, and one rectangular action.

## Notifications

Use `role="status"` and `aria-live="polite"`. Keep the message short, use a flat surface and 1px border, and provide a rectangular dismiss control.
