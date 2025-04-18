import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'
import './globals.css'

const montserrat = Montserrat({
	variable: '--font-geist-sans',
	subsets: ['cyrillic', 'latin'],
})

export const metadata: Metadata = {
	title: 'Доставка грузов из Китая. Белая доставка и Карго',
	description:
		'Карго доставка из Китая по выгодным тарифам! Выкуп доставка товара для маркетплейсов OZON и Wildberries! Бесплатная консультация. Sellerchina.',
	openGraph: {
		title: 'Доставка из Китая — быстро и просто',
		description:
			'Карго и белая доставка с полным сопровождением. Рассчитайте стоимость онлайн.',
		images: [
			{
				url: 'https://storetail.ru/og-preview.png',
				width: 1200,
				height: 630,
				alt: 'Storetail — доставка из Китая',
			},
		],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<head>
				<meta name='apple-mobile-web-app-title' content='SellerChina' />
			</head>
			<body className={`${montserrat.variable} antialiased`}>
				<Header />
				<main
					className='min-h-screen flex flex-col  items-center relative
        '
				>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	)
}
