import Image from 'next/image'
import Link from 'next/link'
import styles from './CargoSuppliers.module.scss'

const CargoSuppliers = () => {
	const data = [
		{
			label: 'Одежда, обувь и сумки',
			image: '/cargo-delivery/cargoSuppliersImage1.webp',
		},
		{
			label: 'Оборудование',
			image: '/cargo-delivery/cargoSuppliersImage2.webp',
		},
		{
			label: 'Автозапчасти',
			image: '/cargo-delivery/cargoSuppliersImage3.webp',
		},
		{
			label: 'Электроника',
			image: '/cargo-delivery/cargoSuppliersImage4.webp',
		},
		{ label: 'Мебель', image: '/cargo-delivery/cargoSuppliersImage5.webp' },
		{ label: 'Бижутерия', image: '/cargo-delivery/cargoSuppliersImage6.webp' },
		{ label: 'Косметика', image: '/cargo-delivery/cargoSuppliersImage7.webp' },
		{ label: 'Игрушки', image: '/cargo-delivery/cargoSuppliersImage8.webp' },
	]

	return (
		<div className={styles.container}>
			<h2>Найдем надежных поставщиков в Китае уже сегодня</h2>
			<p className={styles.header}>
				<Link href='/' target='_blank' className={styles.sellerChinaLink}>
					Sellerchina
				</Link>{' '}
				помогает с поиском поставщиков в Китае для вашего бизнеса. Мы работаем с
				популярными платформами: Taobao, 1688, Alibaba. Организуем карго
				доставку с поставщиками в нишах: одежда, электроника, товары для дома и
				другие.
			</p>

			<div className={styles.grid}>
				{data.map((item, index) => (
					<div key={index} className={styles.card}>
						<h3>{item.label}</h3>
						<div className={styles.imageWrapper}>
							<Image
								src={`${item.image}`}
								alt={item.label}
								width={280}
								height={106}
								className={styles.image}
							/>
						</div>
						<button className={styles.button}>
							<Link href='/contacts'>Связаться с поставщиком</Link>
						</button>
					</div>
				))}
			</div>
		</div>
	)
}

export default CargoSuppliers
