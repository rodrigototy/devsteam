import styles from './NavBar.module.css';
import { BsCart4 } from 'react-icons/bs';
import Logo from '../logo/Logo';

function NavBar() {
  return (
    <nav className={styles.navbar}>
        <Logo />
        <input />
        <BsCart4 size={40} />
    </nav>
  )
}

export default NavBar