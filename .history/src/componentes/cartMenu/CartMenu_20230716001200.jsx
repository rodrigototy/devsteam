//  src/componentes/cartMenu/CartMenu.jsx
import { useContext } from 'react';
import { CartContext } from '@/providers/CartContext';
import styles from './CartMenu.module.css'
import CartOption from '@/componentes/cartOption/CartOption'

function CartMenu() {
    const { cart, handleRemoveFromCart } = useContext(CartContext);
    return (
        <div className={styles.menu}>
            <div className={styles.options}>
                {
                    cart.length === 0 && <p className={styles.empty}>Carrinho vazio</p>
                }
                {
                    cart.map((cartInfo) => 
                        <CartOption
                            image={cartInfo.image}
                            title={cartInfo.title}
                            price={cartInfo.price}
                            onRemove={() => handleRemoveFromCart(cartInfo.id)}
                            key={`cart-id-${cartInfo.id}`}
                        />
                    )
                }
            </div>
            <div className={styles.priceLine}>
                <h2>Total</h2>
                <h2 className={styles.price}>R$ {
                    cart.reduce((prev, current) => prev + current.price, 0).toFixed(2).replace('.', ',')
                }</h2>
            </div>
        </div>
    )
}

export default CartMenu
