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
              <SaleCard />
              <SaleCard />
              <SaleCard />
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
