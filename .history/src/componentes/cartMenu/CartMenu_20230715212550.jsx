//  src/

import styles from './CartMenu.module.css'
import CartOption from '@/componentes/cartOption/CartOption'

function CartMenu({ cart, onRemove }) {
    return (
        <div className={styles.menu}>
            <div className={styles.options}>
                {
                    cart.length === 0 && <p>Carrinho vazio</p>
                }
                {
                    cart.map((cartInfo, index) => 
                        <CartOption
                            image={cartInfo.image}
                            title={cartInfo.title}
                            price={cartInfo.price}
                            onRemove={() => onRemove(index)}
                            key={`cart-info-${index}`}
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
