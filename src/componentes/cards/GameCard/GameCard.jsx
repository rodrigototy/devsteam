import Button from '@/componentes/forms/button/Button';
import styles from './GameCard.module.css'
import Image from 'next/image'

function GameCard ({saleImageSrc, saleImageAlt, saleTitle, saleCategory, saleFullPrice, onAdd}) {
    return (
        <div className={styles.gameCard}>
            <Image
                className={styles.image}
                src={saleImageSrc}
                alt={saleImageAlt}
                width={200}
                height={145}
            />
            <div className={styles.info}>
                <h3 className={styles.title}>{saleTitle}</h3>
                <p className={styles.category}>{saleCategory}</p>
                <div className={styles.pricing}>
                    <h2>{saleFullPrice}</h2>
                    <Button onClick={onAdd}>Adicionar ao carrinho</Button>
                </div>
            </div>
        </div>
    )
}

export default GameCard;