# Alert Component

A flexible alert component that supports both modal dialogs and non-modal notifications with automatic dismissal.

## Features

- Two alert types: modal (interruptive) and non-modal (auto-dismissible)
- Customizable timing for auto-closing non-modal alerts
- Fully controllable via props

## Props

### `type` (required)
- **Type:** `"modal" | "non-modal"`
- **Default:** `"modal"`
- Determines the alert behavior:
  - `"modal"`: Requires user interaction (blocks other page interactions)
  - `"non-modal"`: Appears as a temporary notification banner

### `title` (required)
- **Type:** `string`
- The heading text displayed in the alert

### `message` (required)
- **Type:** `string`
- The main content text of the alert

### `open` (optional)
- **Type:** `boolean`
- **Default:** `false`
- Controls whether the alert is visible
- When not provided, the component manages its own visibility state

### `onClose` (optional)
- **Type:** `() => void`
- Callback function triggered when the alert closes

### `autoCloseDelay` (optional)
- **Type:** `number` (milliseconds)
- **Default:** `5000` (5 seconds)
- For non-modal alerts only
- Time before the alert automatically closes
- Set to `0` to disable auto-closing

### `textButton` (optional)
- **Type:** `string`
- Text for the action button in modal alerts

### `severity` (optional in modal alert / required in non-modal alert)
- **Type:** `'success' | 'info' | 'warning' | 'error'`
- **Default:** `info`

## Usage Examples

### Modal Alert
<ReusableAlert
  type="modal"
  title="Confirm Action"
  message="Are you sure you want to proceed?"
  textButton="Confirm"
  open={} variable that returns true
/>

### Non-Modal Alert
<ReusableAlert
  type="non-modal"
  title="Oops!"
  message="Something went wrong."
  severity="error"
  open={} variable that returns true 
/>
