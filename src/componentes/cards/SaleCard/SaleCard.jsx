import styles from './SaleCard.module.css'
import Image from 'next/image'
import Button from '@/componentes/forms/button/Button'

function SaleCard({sale}) {
    return (
        <div className={styles.saleCard}>
            <Image src='/products/league-of-legends.jpg' alt='League of Legends' width={250} height={300} />
            <div className={styles.info}>
                <h3 className={styles.title}>Oferta Exclusiva</h3>
                <div className={styles.priceCard}>
                    <div className={styles.percent}>-20%</div>
                    <div className={styles.price}>
                        <p className={styles.fullPrice}>R$ 99,90</p>
                        <h4 className={styles.discountPrice}>R$ 89,90</h4>
                    </div>
                </div>
                <Button fullWidth={true}>Adicionar ao Carrinho</Button>
            </div>
        </div>
    )
}

export default SaleCard