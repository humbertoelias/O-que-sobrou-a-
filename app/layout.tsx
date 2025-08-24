import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Sobras Brasileiras - Transforme Sobras em Delícias',
  description: 'Receitas criativas para reaproveitar sobras da cozinha brasileira. Transforme arroz, feijão e carnes em pratos deliciosos.',
  keywords: 'receitas brasileiras, sobras, reaproveitamento, culinária sustentável',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
