import clsx from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    variant?: 'PRIMARY' | 'SECONDARY' | 'TEXT' | 'INACTIVE';
    disabled?: boolean;
    text: string;
    icon?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    color?: string;
}

export default function Button ({
    onClick,
    variant = 'PRIMARY',
    disabled,
    text,
    style,
    className,
    icon,
    color
}:ButtonProps) {
    return (
        <button 
        onClick={onClick}
        disabled={disabled}
        className={
            clsx(
                styles.button,
                variant === 'PRIMARY' && styles.primary,
                variant === 'SECONDARY' && styles.secondary,
                variant === 'TEXT' && styles.text,
                variant === 'INACTIVE' && styles.inactive,
                className
            )
        } style={{
            color: color,
            ...style,
        }}>
            {icon}
            {text}
        </button>
    )
}