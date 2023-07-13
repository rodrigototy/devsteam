import styles from './SaleCard.module.css'
import Image from 'next/image'
import Button from '@/componentes/forms/button/Button'

function SaleCard({saleImageSrc, saleImageAlt, saleImageWidth, saleImageHeight, saleTitle, salePrice, saleFullPrice, saleDiscountPrice}) {
    return (
        <div className={styles.saleCard}>
            <Image src={saleImageSrc} alt={saleImageAlt} width={250} height={300} />
            <div className={styles.info}>
                <h3 className={styles.title}>{saleTitle}</h3>
                <div className={styles.priceCard}>
                    <div className={styles.percent}>{saleDiscountPrice}</div>
                    <div className={styles.price}>
                        <p className={styles.fullPrice}>{saleFullPrice}</p>
                        <h4 className={styles.discountPrice}>{salePrice}</h4>
                    </div>
                </div>
                <Button fullWidth={true}>Adicionar ao carrinho</Button>
            </div>
        </div>
    )
}

export default SaleCard