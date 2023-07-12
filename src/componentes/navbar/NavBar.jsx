import styles from './NavBar.module.css';
import { BsCart4 } from 'react-icons/bs';
import Logo from '@/componentes/logo/Logo';
import Input from '@/componentes/forms/input/Input';

function NavBar() {
  return (
    <nav className={styles.navbar}>
        <Logo />
        <div className={styles.search}>
          <Input type="text" placeholder="Pesquisar" fullWidth={true} />
        </div>
        <BsCart4 size={40} />
    </nav>
  )
}

export default NavBar