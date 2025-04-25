import Image from 'next/image'
import styles from './WhiteWhyUs.module.scss'

const WhiteWhyUs = () => {
	const data = [
		{
			label: 'Виды перевозок',
			text: 'Авиа, ж/д, авто и морские перевозки',
			subText: 'под ваш бюджет',
			img: '/white-delivery/whiteWhyUsIcon1.webp',
			w: 116,
		},
		{
			label: 'Оптимальные сроки',
			text: 'Доставка за 25-60 дней',
			subText: 'с учетом всех этапов',
			img: '/white-delivery/whiteWhyUsIcon2.webp',
			w: 72,
		},
		{
			label: 'Доступные тарифы',
			text: 'Прозрачные цены',
			subText: 'без скрытых платежей',
			img: '/white-delivery/whiteWhyUsIcon3.webp',
			w: 113,
		},
		{
			label: 'Офисы в РФ и Китае',
			text: 'Полный контроль',
			subText: 'на всех этапах логистики',
			img: '/white-delivery/whiteWhyUsIcon4.webp',
			w: 60,
		},
	]

	return (
		<div className={styles.container}>
			<h2>ПОЧЕМУ ВЫБИРАЮТ НАС?</h2>
			<div className={styles.grid}>
				{data.map((item, index) => (
					<div key={index} className={styles.card}>
						<h3 className={styles.label}>{item.label}</h3>
						<div className={styles.cardContent}>
							<Image
								src={item.img}
								alt={item.label}
								height={65}
								width={item.w}
								className={styles.icon}
								style={{ '--icon-width': `${item.w}px` } as React.CSSProperties}
							/>
							<p className={styles.text}>{item.text}</p>
							<p className={styles.subText}>{item.subText}</p>
						</div>
					</div>
				))}
			</div>
			<p className={styles.sign}>
				С <strong>SELLERCHINA</strong> вы получаете надежного партнера для
				стабильных поставок
			</p>
			<div className={styles.bottom}>
				<p className={styles.bottomSign}>
					Узнайте, как мы оптимизируем вашу логистику!
				</p>
				<button className={styles.button}>Рассчитать стоимость</button>
			</div>
		</div>
	)
}

export default WhiteWhyUs
