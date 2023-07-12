import Head from 'next/head'
import styles from '@/styles/index.module.css'
import NavBar from '@/componentes/navbar/NavBar'
import Subtitle from '@/componentes/tipography/subtitle/Subtitle'
import Container from '@/componentes/tipography/container/container'
import SaleCard from '@/componentes/cards/SaleCard/SaleCard'
import GameCard from '@/componentes/cards/GameCard/GameCard'

export default function Home() {
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavBar />
        <Container>
          <div className={styles.session}>
            <Subtitle>Promoções</Subtitle>
            <div className={styles.saleContainer}>
              <SaleCard saleImageSrc='/products/league-of-legends.jpg' saleImageAlt='League of Legends' saleImageWidth={250} saleImageHeight={300}
                saleTitle='Oferta Exclusiva' saleDiscountPrice='-20%' salePrice='R$ 79,90' saleFullPrice='R$ 99,90' saleButton='Adicionar ao Carrinho'
              />
              <SaleCard saleImageSrc='/products/spider-man.jpg' saleImageAlt='Spider Man' saleImageWidth={250} saleImageHeight={300}
                saleTitle='Oferta Exclusiva' saleDiscountPrice='-30%' salePrice='R$ 49,90' saleFullPrice='R$ 71,28' saleButton='Adicionar ao Carrinho'
              />
              <SaleCard saleImageSrc='/products/valorant.jpg' saleImageAlt='Valorant' saleImageWidth={250} saleImageHeight={300}
                saleTitle='Oferta Exclusiva' saleDiscountPrice='-40%' salePrice='R$ 53,94' saleFullPrice='R$ 89,90' saleButton='Adicionar ao Carrinho'
              />
            </div>
          </div>
          <div className={styles.gameContainer}>
            <Subtitle>Outros Jogos</Subtitle>
            <GameCard />
            <GameCard />
            <GameCard />
          </div>
        </Container>
      </div>
    </>
  )
}
