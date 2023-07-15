import styles from './NavBar.module.css';
import Logo from '@/componentes/logo/Logo';
import Input from '@/componentes/forms/input/Input';
import CartButton from '@/componentes/forms/cartButton/CartButton';

function NavBar({ cart, onRemove }) {
  return (
    <nav className={styles.navbar}>
        <Logo />
        <div className={styles.search}>
          <Input type="text" placeholder="Pesquisar" fullWidth={true} />
        </div>
        <CartButton
          cart={cart}
          onRemove={onRemove}
        />
    </nav>
  )
}

export default NavBar