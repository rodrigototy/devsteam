//  src/componentes/cartButton/CartButton.jsx
import { useState } from 'react'
import CartMenu from '@/componentes/cartMenu/CartMenu'
import styles from './CartButton.module.css'
import { BsCart4 } from 'react-icons/bs'

function CartButton({ cart, onRemove }) {
    const [open, setOpen] = useState(false)

    return (
    <div className={styles.cartButton} onClick={() => {setOpen(!open)}} >
        <BsCart4 size={40}  />
        {open && <CartMenu />}
    </div>
  )
}

export default CartButton