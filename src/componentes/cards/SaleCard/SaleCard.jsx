import styles from './SaleCard.module.css'
import Image from 'next/image'
import Button from '@/componentes/forms/button/Button'

// Função para calcular o preço de venda
function calculateSalePrice(saleFullPrice, saleDiscountPrice) {
    // Convertendo as strings em números
    let fullPrice = parseFloat(saleFullPrice.replace(',', '.'));
    let discount = parseFloat(saleDiscountPrice.replace(',', '.'));
  
    // Calculando o preço de venda
    let salePrice = fullPrice * (1 - (discount / 100));
  
    // Arredondando para 2 casas decimais
    salePrice = salePrice.toFixed(2);
    salePrice = salePrice.replace('.', ',');

    return salePrice;
  }

function SaleCard({saleImageSrc, saleImageAlt, saleImagePriority, saleTitle, saleFullPrice, saleDiscountPrice}) {
    // Chama a função calculateSalePrice para obter o preço de venda calculado
    var salePrice = calculateSalePrice(saleFullPrice, saleDiscountPrice);

    return (
        <div className={styles.saleCard}>
            <Image
                src={saleImageSrc}
                alt={saleImageAlt}
                width={250}
                height={300}
                priority={saleImagePriority === true ? true : false}
            />
            <div className={styles.info}>
                <h3 className={styles.title}>{saleTitle}</h3>
                <div className={styles.priceCard}>
                    <div className={styles.percent}>-{saleDiscountPrice}%</div>
                    <div className={styles.price}>
                        <p className={styles.fullPrice}>R$ {saleFullPrice}</p>
                        <h4 className={styles.discountPrice}>R$ {salePrice}</h4>
                    </div>
                </div>
                <Button fullWidth={true}>Adicionar ao carrinho</Button>
            </div>
        </div>
    )
}

export default SaleCard