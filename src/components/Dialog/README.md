## ReusableDialog Component

A flexible and reusable dialog (modal) component built with Material UI. Designed to handle confirmations, warnings, and custom content modals with ease.

## Features

- Customizable title and message (supports plain text or JSX)
- Optional primary and secondary buttons
- Optional close icon
- Full control over visibility and behavior
- Supports all standard `DialogProps` from Material UI

---
## Props

### `variant` (optional)
- **Type:** `"PRIMARY" | "SECONDARY" | "TEXT" | "INACTIVE"`
- **Default:** `"PRIMARY"`
- Determines the button's visual style:
  - `"PRIMARY"`: Main call-to-action button
  - `"SECONDARY"`: Secondary action button
  - `"TEXT"`: Minimal text-only button
  - `"INACTIVE"`: Visually inactive but still clickable

### `text` (required)
- **Type:** `string`
- The button's display text

### `onClick` (optional)
- **Type:** `(e: React.MouseEvent<HTMLButtonElement>) => void`
- Click handler function

### `disabled` (optional)
- **Type:** `boolean`
- **Default:** `false`
- When true, disables the button and applies disabled styling

### `icon` (optional)
- **Type:** `React.ReactNode`
- An icon element to display alongside the text

### `style` (optional)
- **Type:** `React.CSSProperties`
- Additional inline styles

### `className` (optional)
- **Type:** `string`
- Additional CSS class names

### `color` (optional)
- **Type:** `string`
- Custom text color (overrides variant default)

### `type` (optional)
- **Type:** `"button" | "submit" | "reset"`
- **Default:** `"button"`
- Button type attribute for form handling

### `ariaLabel` (optional)
- **Type:** `string`
- Accessibility label (falls back to `text` if not provided)

## Example Usage

```tsx
import ReusableDialog from './ReusableDialog';

<ReusableDialog
  open={isOpen}
  title="Delete Item"
  message="Are you sure you want to delete this item? This action cannot be undone."
  primaryButtonText="Delete"
  secondaryButtonText="Cancel"
  onPrimaryAction={handleDelete}
  onSecondaryAction={() => console.log('Cancelled')}
  onClose={handleClose}
/>
