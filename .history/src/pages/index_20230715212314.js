//  src/pages/

import Head from 'next/head'
import styles from '@/styles/index.module.css'
import NavBar from '@/componentes/navbar/NavBar'
import Subtitle from '@/componentes/typography/subtitle/Subtitle'
import Container from '@/componentes/typography/container/container'
import SaleCard from '@/componentes/cards/SaleCard/SaleCard'
import GameCard from '@/componentes/cards/GameCard/GameCard'
import { useState } from 'react'

export default function Home() {
  const [Cart, setCart]  = useState([])

  const handleAddToCart = (game) => { 
    setCart([...Cart, game])
  }

  const handleRemoveFromCart = (pos) => {
    setCart(Cart.filter((obj, posObj) => posObj !== pos))
  }
  
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavBar cart={Cart} onRemove={handleRemoveFromCart}/>
        <Container>
          <div className={styles.session}>
            <Subtitle>Promoções</Subtitle>
            <div className={styles.saleContainer}>
              <SaleCard 
                saleImageSrc='/products/league-of-legends.jpg'
                saleImageAlt='League of Legends'
                saleImagePriority={true}
                saleTitle='Oferta Exclusiva'
                saleDiscountPrice='25'
                saleFullPrice='99,90'
                onAdd={() => handleAddToCart({
                  title: 'League of Legends',
                  image: '/products/league-of-legends.jpg',
                  price: 74.93
                })}
              />
              <SaleCard
                saleImageSrc='/products/dota-2.jpg'
                saleImageAlt='Dota 2'
                saleTitle='Oferta Exclusiva'
                saleDiscountPrice='30'
                saleFullPrice='71,28'
                onAdd={() => handleAddToCart({
                  title: 'Dota 2',
                  image: '/products/dota-2.jpg',
                  price: 49.90
                })}
              />
              <SaleCard
                saleImageSrc='/products/valorant.jpg'
                saleImageAlt='Valorant'
                saleTitle='Oferta Exclusiva'
                saleDiscountPrice='40'
                saleFullPrice='89,90'
                onAdd={() => handleAddToCart({
                  title: 'Valorant',
                  image: '/products/valorant.jpg',
                  price: 53.94
                })}
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
              onAdd={() => handleAddToCart({
                title: 'Counter Strike',
                image: '/products/counter-strike.jpg',
                price: 99.90
              })}
            />
            <GameCard
              saleImageSrc='/products/spider-man.jpg'
              saleImageAlt='Spider Man'
              saleTitle='Marvel’s Spider-Man Remastered'
              saleCategory='Ação, Super-Heróis, Mundo Aberto, Um Jogador.'
              saleFullPrice='R$ 249,90'
              onAdd={() => handleAddToCart({
                title: 'Spider Man',
                image: '/products/spider-man.jpg',
                price: 249.90
              })}
            />
            <GameCard
              saleImageSrc='/products/project-zomboid.jpg'
              saleImageAlt='Project Zomboid'
              saleTitle='Project Zomboid'
              saleCategory='Sobrevivência, Zumbis, Mundo Aberto, Fabricação.'
              saleFullPrice='R$ 59,90'
              onAdd={() => handleAddToCart({
                title: 'Project Zomboid',
                image: '/products/project-zomboid.jpg',
                price: 59.90
              })}
            />
            <GameCard
              saleImageSrc='/products/gta-v.jpg'
              saleImageAlt='Grand Theft Auto V'
              saleTitle='Grand Theft Auto V'
              saleCategory='Ação, Mundo Aberto, Multijogador, Crime, Tiro.'
              saleFullPrice='R$ 109,90'
              onAdd={() => handleAddToCart({
                title: 'Grand Theft Auto V',
                image: '/products/gta-v.jpg',
                price: 109.90
              })}
            />
            <GameCard
              saleImageSrc='/products/sackboy.jpg'
              saleImageAlt='Sackboy: Uma Grande Aventura'
              saleTitle='GSackboy™: Uma Grande Aventura'
              saleCategory='Aventura, Multijogador, Plataforma, Cooperativo.'
              saleFullPrice='R$ 149,90'
              onAdd={() => handleAddToCart({
                title: 'GSackboy™: Uma Grande Aventura',
                image: '/products/sackboy.jpg',
                price: 149.90
              })}
            />
          </div>
        </Container>
      </div>
    </>
  )
}
