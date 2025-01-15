//#region Imports
import clsx from 'classnames'
import styles from './Input.module.scss'
//#endregion 

//#region Props
interface InputProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void ;
    type?: 'date' | 'text' | 'number';
    disabled?: boolean;
    placeholder?: string;
    label?: string;
    className?: string;
    style?: React.CSSProperties;
    value?: string;
    prefixText?: string
}
//#endregion 

export default function Input({
    onChange,
    type,
    disabled,
    placeholder,
    label,
    className,
    style,
    value,
    prefixText
} : InputProps) {
    return (
        <div className={styles.container}>
            <span className={styles.label}>{label}</span>
            <div className={styles.inputWrapper}>
                { prefixText && (
                    <span className={styles.prefixText}>
                        {prefixText}
                    </span>
                )}

                <input 
                    value={value} 
                    onChange={onChange} 
                    disabled={disabled} 
                    style={style} 
                    placeholder={placeholder} 
                    className={clsx(
                        styles.input,
                        className
                    )} 
                    type={type}
                    autoComplete='off'
                {...(type === 'date' ? {max: '9000-12-12'} : {})}
                />
            </div>
        </div>
    )
}