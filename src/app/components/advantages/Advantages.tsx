import Image from 'next/image'
import Link from 'next/link'
import styles from './Advantages.module.scss'
import Icon1 from './icons/Icon1.svg'
import Icon2 from './icons/Icon2.svg'
import Icon3 from './icons/Icon3.svg'
import Icon4 from './icons/Icon4.svg'
import Icon5 from './icons/Icon5.svg'
import Icon6 from './icons/Icon6.svg'
import Icon7 from './icons/Icon7.svg'
import Icon8 from './icons/Icon8.svg'
import Sticker1 from './icons/Sticker1.svg'
import Sticker2 from './icons/Sticker2.svg'

const Advantages = () => {
	const advantagesData = [
		{
			icon: Icon1,
			label: 'Сроки',
			text: 'Быстрая доставка благодаря оптимизированным маршрутам',
			sticker: '',
		},
		{
			icon: Icon2,
			label: 'Цены',
			text: 'Конкурентные тарифы с отличным качеством',
			sticker: '',
		},
		{
			icon: Icon3,
			label: 'Фулфилмент',
			text: 'Полный цикл услуг от упаковки до доставки',
			sticker: Sticker1,
			link: 'http://selff.ru/',
		},
		{
			icon: Icon4,
			label: 'Работа с селлерами',
			text: 'Эффективная поддержка продавцов на всех этапах',
			sticker: Sticker2,
			link: 'https://storetail.ru/',
		},
		{
			icon: Icon5,
			label: 'Гибкость',
			text: 'Адаптация под нужды клиента и выбор транспорта',
			sticker: '',
		},
		{
			icon: Icon6,
			label: 'Профессионализм',
			text: 'Опытные специалисты решают все вопросы',
			sticker: '',
		},
		{
			icon: Icon7,
			label: 'Склады',
			text: 'Удобные склады для хранения и обработки грузов в России и Китае',
			sticker: '',
		},
		{
			icon: Icon8,
			label: 'Офисы',
			text: 'Наличие офисов в России и Китае для оперативной помощи клиентам',
			sticker: '',
		},
	]

	return (
		<div className={styles.container}>
			<span>ВЫГОДНО</span>
			<h2>НАШИ ПРЕИМУЩЕСТВА</h2>
			<div className={styles.grid}>
				{advantagesData.map((advantage, index) => (
					<div key={index} className={styles.card}>
						{advantage.sticker && (
							<Link href={advantage.link ?? ''} passHref target='blank'>
								<Image
									className={`${styles.sticker} ${
										advantage.sticker === Sticker1 ? styles.sticker1 : ''
									} ${advantage.sticker === Sticker2 ? styles.sticker2 : ''}`}
									src={advantage.sticker}
									alt='Sticker'
									width={95}
									height={26}
								/>
							</Link>
						)}
						<div className={styles.iconWrapper}>
							<Image
								src={advantage.icon}
								alt={advantage.label}
								width={66}
								height={66}
							/>
						</div>
						<div className={styles.textWrapper}>
							<h4>{advantage.label}</h4>
							<p>{advantage.text}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Advantages
