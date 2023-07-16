//  src/pages/_app.js
import { CartProvider } from '@/componentes/CartContext';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </CartProvider>
  );
}

