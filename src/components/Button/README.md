# Button Component

A reusable button component with multiple variants and customization options.

## Features

- Four visual variants: primary, secondary, text, and inactive
- Support for icons alongside text
- Full customization of colors and styles
- Built-in accessibility features

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