//  src/componentes/cartButton/CartButton.jsx
import { useState, useContext } from 'react'
import CartMenu from '@/componentes/cartMenu/CartMenu'
import { CartContext } from '@/providers/CartContext';
import styles from './CartButton.module.css'
import { BsCart4 } from 'react-icons/bs'

function CartButton() {
    const { cart } = useContext(CartContext);
    const [open, setOpen] = useState(false)

    return (
    <div className={styles.cartButton} onClick={() => {setOpen(!open)}} >
        <BsCart4 size={40} />
        {cart.length > 0 && <div className={styles.cartCounter}>{cart.length}</div>}
        {open && <CartMenu />}
    </div>
  )
}

export default CartButton