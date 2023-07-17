//  src/componentes/cartButton/CartButton.jsx
import { useState } from 'react'
import CartMenu from '@/componentes/cartMenu/CartMenu'
import styles from './CartButton.module.css'
import { BsCart4 } from 'react-icons/bs'

function CartButton() {
    const [open, setOpen] = useState(false)

    return (
    <div className={styles.cartButton} onClick={() => {setOpen(!open)}} >
        <BsCart4 size={40} />
        <div className={styles.cartCounter}>{cart.length}</div>
        {open && <CartMenu />}
    </div>
  )
}

export default CartButton