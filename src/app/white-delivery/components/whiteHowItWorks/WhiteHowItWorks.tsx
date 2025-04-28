import Image from 'next/image'
import styles from './WhiteHowItWorks.module.scss'

const WhiteHowItWorks = () => {
	const data = [
		{
			number: '1',
			header: 'Заявка',
			text: 'Вы оставляете заявку, мы подбираем маршрут и способ доставки',
		},
		{
			number: '2',
			header: 'Забор груза',
			text: 'Забираем товар у поставщика в Китае',
		},
		{
			number: '3',
			header: 'Таможенное оформление',
			text: 'Полное сопровождение на таможне',
		},
		{
			number: '4',
			header: 'Доставка в РФ',
			text: 'Перевозка до нашего склада',
		},
		{
			number: '5',
			header: 'Отчетность',
			text: 'Предоставляем все документы',
		},
	]
	return (
		<div className={styles.container}>
			<h2>
				Как работает белая доставка
				<br /> с SELLERCHINA
			</h2>
			<p className={styles.subHeader}>Прозрачный процесс от А до Я</p>
			<div className={styles.content}>
				<div className={styles.left}>
					{data.map((item, index) => (
						<div key={index} className={styles.step}>
							<div className={styles.number}>{item.number}</div>
							<div className={styles.textBlock}>
								<h3 className={styles.header}>{item.header}</h3>
								<p className={styles.text}>{item.text}</p>
							</div>
						</div>
					))}
				</div>
				<div className={styles.right}>
					<div className={styles.top}>
						<div className={styles.photo1}>
							<Image
								width={365}
								height={350}
								alt='фото склада'
								src={'/white-delivery/WhiteHowItWorksImg1.webp'}
							/>
						</div>
						<div className={styles.photo2}>
							<Image
								width={280}
								height={350}
								alt='фото офиса'
								src={'/white-delivery/WhiteHowItWorksImg2.webp'}
							/>
						</div>
					</div>
					<div className={styles.bot}>
						<div className={styles.botLeft}>
							<p className={styles.botSign1}>
								Каждый этап под контролем наших специалистов
							</p>
							<p className={styles.botSign2}>
								От забора груза до таможни и доставки.{' '}
								<b>Узнайте этапы и закажите!</b>
							</p>
							<div className={styles.botSign3}>
								<p className={styles.botSign3Text}>
									Запустите процесс доставки уже сегодня
								</p>
								<div className={styles.borderWrapper}>
									<svg
										className={styles.animatedBorder}
										viewBox='0 0 293 89'
										preserveAspectRatio='none'
									>
										<rect
											x='1.5'
											y='1.5'
											width='290'
											height='86'
											rx='8'
											ry='8'
											fill='none'
											stroke='#febd6d'
											strokeWidth='3'
											strokeDasharray='17 15'
											strokeDashoffset='0'
										>
											<animate
												attributeName='stroke-dashoffset'
												values='0;-32'
												dur='1s'
												repeatCount='indefinite'
											/>
										</rect>
									</svg>
								</div>
							</div>
						</div>
						<div className={styles.botRight}>
							<Image
								width={362}
								height={350}
								alt='фото офиса'
								src={'/white-delivery/WhiteHowItWorksImg3.webp'}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WhiteHowItWorks
