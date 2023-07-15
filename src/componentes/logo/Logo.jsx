import styles from './Logo.module.css';
import Image from 'next/image';

function Logo() {
  return (
    <div className={styles.logo}>
        <Image
          src="/logo.svg"
          alt="Logo"
          width={60}
          height={60}
        />
        <h1 className={styles.name}>DevSteam</h1>
    </div>
  )
}

export default Logo;