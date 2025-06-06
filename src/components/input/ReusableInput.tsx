import {
  TextField,
  TextFieldProps,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState, ChangeEvent, KeyboardEvent } from 'react';

interface InputProps extends Omit<TextFieldProps, 'onChange'> {
  type?: 'text' | 'password' | 'number' | 'date' | 'email';
  placeholder?: string;
  onChange?: (value: string) => void;
  showPasswordToggle?: boolean;
  fullWidth?: boolean;
  label?: string;
}

const ReusableInput = ({
  type = 'text',
  placeholder,
  onChange,
  disabled = false,
  className,
  showPasswordToggle = false,
  fullWidth = true,
  label,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (type === 'number' && isNaN(Number(value))) return;
    onChange?.(value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const getActualType = () => {
    if (type !== 'password') return type;
    return showPassword ? 'text' : 'password';
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (type !== 'number') return;

    const allowedKeys = [
      'Backspace',
      'Tab',
      'ArrowLeft',
      'ArrowRight',
      'Delete',
      'Enter',
      '.',
      '-',
    ];
    const isNumber = /^[0-9]$/.test(e.key);

    if (!isNumber && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <TextField
      type={getActualType()}
      placeholder={placeholder}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      className={className}
      fullWidth={fullWidth}
      label={label}
      variant="outlined"
      InputProps={{
        ...props.InputProps,
        endAdornment:
          type === 'password' && showPasswordToggle ? (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ) : null,
      }}
      {...props}
    />
  );
};

export default ReusableInput;
