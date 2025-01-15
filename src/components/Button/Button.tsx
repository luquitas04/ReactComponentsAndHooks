import clsx from 'classnames'

import styles from './Button.module.scss'

interface ButtonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    variant?: 'SUCCESS' | 'ERROR' | 'WARNING' | 'INFO' | 'NEUTRAL' | 'NEUTRAL-GRAY';
    disabled?: boolean;
    text: string;
    icon?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    type?: 'GHOST' | 'OUTLINE' | 'FILL';
    color?: string;
}

export default function Button ({
    onClick,
    variant = 'NEUTRAL',
    disabled,
    text,
    style,
    className,
    icon,
    type = 'FILL',
    color,
}:ButtonProps) {
    return (
        <button 
        onClick={onClick}
        disabled={disabled}
        className={
            clsx(
                styles.button,
                variant === 'SUCCESS' && styles.success,
                variant === 'ERROR' && styles.error,
                variant === 'WARNING' && styles.warning,
                variant === 'INFO' && styles.info,
                variant === 'NEUTRAL-GRAY' && styles.neutralgray,
                type === 'FILL' && styles.fill ,
                type === 'GHOST' && styles.ghost,
                type === 'OUTLINE' && styles.outline,
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