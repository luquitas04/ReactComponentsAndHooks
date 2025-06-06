# ReusableInput Component

A customizable and reusable input component built with Material UI. Supports multiple input types, optional password visibility toggle, and input validation for numeric fields

## Features

- Supports input types: `text`, `password`, `number`, `email`, and `date`
- Optional show/hide password toggle for password fields
- Prevents non-numeric characters for numeric input
- Fully compatible with MUI's `TextFieldProps`
- Built-in accessibility support

## Props

### `type` (optional)
- **Type:** `"text" | "password" | "number" | "date" | "email"`
- **Default:** `"text"`
- Determines the input type

### `placeholder` (optional)
- **Type:** `string`
- Placeholder text displayed inside the input when empty

### `onChange` (optional)
- **Type:** `(value: string) => void`
- Callback function called when the input value changes

### `showPasswordToggle` (optional)
- **Type:** `boolean`
- **Default:** `false`
- If true and type is "password", displays an icon to toggle password visibility

### `fullWidth` (optional)
- **Type:** `boolean`
- **Default:** `"true"`
- When true, input takes full width of its container

### `disabled` (optional)
- **Type:** `boolean`
- Disables the input if true

### `className` (optional)
- **Type:** `string`
- Additional CSS class names

### `label` (optional)
- **Type:** `string`
- Text label displayed above the input field

### `InputProps` (optional)
- **Type:** `TextFieldProps['InputProps']`
- Pass additional props to the MUI TextField input element

### `...props ` (optional)
- **Type:** `TextFieldProps`
- All other props supported by Material UI's TextField component can be passed here


## Usage

```tsx
import ReusableInput from './ReusableInput';

<ReusableInput
  type="password"
  label="Password"
  placeholder="Enter your password"
  showPasswordToggle
  onChange={(value) => console.log(value)}
/>
