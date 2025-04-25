import Image from 'next/image'
import Link from 'next/link'
import WhiteAnyQuestion from '../whiteAnyQuestion/WhiteAnyQuestion'
import styles from './WhiteOtherServices.module.scss'

const WhiteOtherServices = () => {
	const data = [
		{
			label: 'Карго доставка',
			img: '/white-delivery/WhiteOtherServices1.webp',
			text: 'Быстрая и экономичная доставка грузов из Китая',
		},
		{
			label: 'Выкуп из Китая',
			img: '/white-delivery/WhiteOtherServices2.webp',
			text: 'Поможем закупить товары у китайских поставщиков',
		},
		{
			label: 'Фулфилмент в Спб и Мск',
			img: '/white-delivery/WhiteOtherServices3.webp',
			text: 'Хранение, упаковка и отправка заказов на маркетплейсы',
		},
	]

	return (
		<div className={styles.container}>
			<h2>ДРУГИЕ услуги SELLERCHINA</h2>
			<p className={styles.subHeader}>Все для вашего бизнеса в одном месте</p>
			<div className={styles.grid}>
				{data.map((item, index) => (
					<div key={index} className={styles.card}>
						<p className={styles.cardLabel}>{item.label}</p>
						<div className={styles.imageWrapper}>
							<Image
								src={item.img}
								alt={item.label}
								width={364}
								height={81}
								className={styles.image}
							/>
						</div>
						<p className={styles.cardText}>{item.text}</p>
					</div>
				))}
				<div className={styles.sticker}>
					<Link target='blank' href={'https://sellff.ru/'}>
						<Image
							alt='Фулфилмент'
							width={95}
							height={26}
							src={'/white-delivery/Sticker1.svg'}
						/>
					</Link>
				</div>
			</div>
			<p className={styles.consultation}>
				Получите <span>консультацию</span> по всем услугам!
			</p>
			<WhiteAnyQuestion />
		</div>
	)
}

export default WhiteOtherServices
