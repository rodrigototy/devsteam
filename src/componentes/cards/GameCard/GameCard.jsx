import Button from '@/componentes/forms/button/Button';
import styles from './GameCard.module.css'
import Image from 'next/image'

function GameCard () {
    return (
        <div className={styles.gameCard}>
            <Image className={styles.image} src='/products/counter-strike.jpg' alt='Counter Strike' width={200} height={145} />
            <div className={styles.info}>
                <h3 className={styles.title}>Counter Strike: Global Offensive</h3>
                <p className={styles.category}>Ação, estratégia, multijogador.</p>
                <div className={styles.pricing}>
                    <h2>R$ 99,90</h2>
                    <Button>Adicionar ao carrinho</Button>
                </div>
            </div>
        </div>
    )
}

export default GameCard;