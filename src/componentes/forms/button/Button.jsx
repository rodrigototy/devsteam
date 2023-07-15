import styles from './Button.module.css'

function Button({children, fullWidth, ...props}) {
    return (
        <button className={`${styles.button} ${fullWidth && styles.fullWidth}`} {...props}>
            {children}
        </button>
    )
}   

export default Button