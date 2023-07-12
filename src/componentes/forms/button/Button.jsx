import styles from './Button.module.css'

function Button({children, fullWidth, onClick}) {
    return (
        <button className={`${styles.button} ${fullWidth && styles.fullWidth}`} onClick={onClick}>
            {children}
        </button>
    )
}   

export default Button