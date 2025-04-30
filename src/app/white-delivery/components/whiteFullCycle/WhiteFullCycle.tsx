import Image from 'next/image'
import Link from 'next/link'
import styles from './WhiteFullCycle.module.scss'

const WhiteFullCycle = () => {
	const data = [
		{
			logo: 'cycleSellerChina.svg',
			label: 'Логистика',
			subLabel: 'Карго и белая доставка из Китая в РФ',
			arrow: 'cycleArrow1.svg',
			link: '/',
		},
		{
			logo: 'cycleSellff.svg',
			label: 'Фулфилмент',
			subLabel: 'Упаковка, маркировка, отправка на маркетплейсы',
			arrow: 'cycleArrow2.svg',
			link: 'https://sellff.ru/',
		},
		{
			logo: 'cycleStoRetail.svg',
			label: 'Маркетплейсы',
			subLabel: 'Ведение магазина, дизайн карточек, вывод на прибыль',
			arrow: 'cycleArrow3.svg',
			link: 'https://storetail.ru/',
		},
	]

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h2>
					Белая Доставка для Маркетплейсов <br />
					<span>Полный Цикл</span> от Китая до Продаж
				</h2>
				<Image
					width={136}
					height={99}
					alt='markets'
					src={'/cargo-delivery/markets.webp'}
					className={styles.markets}
				/>
				<Image
					width={136}
					height={99}
					alt='markets'
					src={'/cargo-delivery/marketsSplit.webp'}
					className={styles.marketsMobile}
				/>
			</div>
			<div className={styles.info}>
				<p className={styles.infoTop}>
					Хотите запустить бизнес на Ozon или Wildberries? SellerChina берет на
					себя весь процесс: поиск поставщиков,
					<strong> белая доставка для маркетплейсов</strong>, проверка качества
					и отправка товаров на склады. С нашей услугой полного цикла доставки
					из Китая вы начнете продавать без лишних хлопот.
				</p>
				<p className={styles.infoBot}>
					Три компании — одно решение для вашего бизнеса<span>3</span>
				</p>
			</div>
			<div className={styles.cycle}>
				{data.map((item, index) => (
					<div key={index} className={styles.card}>
						<div className={styles.cycleHeader}>
							<Link href={item.link} target='_blank'>
								<Image
									src={`/cargo-delivery/${item.logo}`}
									alt={item.label}
									width={82}
									height={82}
									className={styles.logo}
								/>
							</Link>
							<div className={styles.text}>
								<h3>{item.label}</h3>
								<p>{item.subLabel}</p>
							</div>
						</div>
						<Image
							src={`/cargo-delivery/${item.arrow}`}
							alt='arrow'
							width={368}
							height={41}
						/>
					</div>
				))}
			</div>
			<div className={styles.buttonContainer}>
				<Link target='_blank' href={'/'}>
					<button>Начать бизнес с полного цикла</button>
					<Image
						src={`/cargo-delivery/cycleButtonArrow.svg`}
						alt='arrow'
						width={34}
						height={34}
						className={styles.arrow}
					/>
				</Link>
			</div>
		</div>
	)
}

export default WhiteFullCycle
