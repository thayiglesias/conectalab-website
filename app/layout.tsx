import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

const title = 'CONECTALAB | Automação e IA para atendimento e crescimento';
const description =
  'A ConectaLab é um studio de automação e IA que cria atendimento inteligente, integrações e estratégia conversacional para negócios digitais e serviços.';

export const metadata: Metadata = {
  metadataBase: new URL('https://conectalab.vercel.app'),
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'pt_BR',
    siteName: 'CONECTALAB'
  },
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
