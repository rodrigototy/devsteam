import { useState } from 'react'
import CartMenu from '@/componentes/cartMenu/CartMenu.1'
import styles from './CartButton.module.css'
import { BsCart4 } from 'react-icons/bs'

function CartButton({ cart, onRemove }) {
    const [open, setOpen] = useState(false)

    return (
    <div>
        <BsCart4
            className={styles.cartIcon}
            size={40}
            onClick={() =>setOpen(!open)} />
        {open &&< CartMenu cart={cart} onRemove={onRemove} />}
    </div>
  )
}

export default CartButton