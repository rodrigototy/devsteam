import { useState } from 'react'
import CartMenu from '@/componentes/cartMenu/CartMenu'
import styles from './CartButton.module.css'
import { BsCart4 } from 'react-icons/bs'

function CartButton({ onClick }) {
    const [cart, setCart] = useState(false)

    return (
    <div>
        <BsCart4
            className={styles.cartIcon}
            size={40}
            onClick={() =>setCart(!cart)} />
        {cart &&< CartMenu />}
    </div>
  )
}

export default CartButton