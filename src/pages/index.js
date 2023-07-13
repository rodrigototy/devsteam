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
              <SaleCard 
                saleImageSrc='/products/league-of-legends.jpg'
                saleImageAlt='League of Legends'
                saleTitle='Oferta Exclusiva'
                saleDiscountPrice='-20%'
                salePrice='R$ 79,90'
                saleFullPrice='R$ 99,90'
              />
              <SaleCard
                saleImageSrc='/products/dota-2.jpg'
                saleImageAlt='Dota 2'
                saleTitle='Oferta Exclusiva'
                saleDiscountPrice='-30%'
                salePrice='R$ 49,90'
                saleFullPrice='R$ 71,28'
              />
              <SaleCard
                saleImageSrc='/products/valorant.jpg'
                saleImageAlt='Valorant'
                saleTitle='Oferta Exclusiva'
                saleDiscountPrice='-40%'
                salePrice='R$ 53,94'
                saleFullPrice='R$ 89,90'
              />
            </div>
          </div>
          <div className={styles.gameContainer}>
            <Subtitle>Outros Jogos</Subtitle>
            <GameCard
              saleImageSrc='/products/counter-strike.jpg'
              saleImageAlt='Counter Strike'
              saleTitle='Counter Strike: Global Offensive'
              saleCategory='Ação, Estratégia, Multijogador.'
              saleFullPrice='R$ 99,90'
            />
            <GameCard
              saleImageSrc='/products/spider-man.jpg'
              saleImageAlt='Spider Man'
              saleTitle='Marvel’s Spider-Man Remastered'
              saleCategory='Ação, Super-Heróis, Mundo Aberto, Um Jogador.'
              saleFullPrice='R$ 249,90'
            />
            <GameCard
              saleImageSrc='/products/project-zomboid.jpg'
              saleImageAlt='Project Zomboid'
              saleTitle='Project Zomboid'
              saleCategory='Sobrevivência, Zumbis, Mundo Aberto, Fabricação.'
              saleFullPrice='R$ 59,90'
            />
            <GameCard
              saleImageSrc='/products/gta-v.jpg'
              saleImageAlt='Grand Theft Auto V'
              saleTitle='Grand Theft Auto V'
              saleCategory='Ação, Mundo Aberto, Multijogador, Crime, Tiro.'
              saleFullPrice='R$ 109,90'
            />
            <GameCard
              saleImageSrc='/products/sackboy.jpg'
              saleImageAlt='Sackboy: Uma Grande Aventura'
              saleTitle='GSackboy™: Uma Grande Aventura'
              saleCategory='Aventura, Multijogador, Plataforma, Cooperativo.'
              saleFullPrice='R$ 149,90'
            />
          </div>
        </Container>
      </div>
    </>
  )
}
