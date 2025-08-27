import Image from 'next/image'
import styles from './Buyout1688WhyUs.module.scss'

const Buyout1688WhyUs = () => {
	return (
		<div className={styles.container}>
			<h2>Почему выбирают SELLERCHINA для выкупа с 1688?</h2>
			<p className={styles.subLabel}>Ваши выгоды от сотрудничества с нами:</p>
			<div className={styles.cards}>
				<div className={styles.card}>
					<div className={styles.cardTop}>
						<Image
							width={67}
							height={67}
							src={'/buyout-1688/buyout1688WhyUsIcon1.svg'}
							alt=''
							className={styles.icon}
						/>
						<div className={styles.cardInfo}>
							<h3 className={styles.cardInfoHeader}>Низкая комиссия</h3>
							<p className={styles.cardInfoText}>
								Закупайте товары с 1688 с минимальными затратами! Наша комиссия
								за выкуп — <b>всего 1%</b>
							</p>
						</div>
					</div>
					<div className={styles.cardBot}>
						<p className={styles.cardBotText}>Сэкономьте на закупках с 1688!</p>
						<button className={styles.btn}>Рассчитать стоимость</button>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.cardTop}>
						<Image
							width={67}
							height={67}
							src={'/buyout-1688/buyout1688WhyUsIcon2.svg'}
							alt=''
							className={styles.icon}
						/>
						<div className={styles.cardInfo}>
							<h3 className={styles.cardInfoHeader}>Полный цикл</h3>
							<p className={styles.cardInfoText}>
								От поиска поставщика до доставки в Россию — мы берем на себя все
								этапы.{' '}
							</p>
						</div>
					</div>
					<div className={styles.cardBot}>
						<p className={styles.cardBotText}>Доверьте нам весь процесс!</p>
						<button className={styles.btn}>Заказать выкуп</button>
					</div>
				</div>
			</div>
			<div className={styles.card3}>
				<div className={styles.cardTop}>
					<Image
						width={67}
						height={67}
						src={'/buyout-1688/buyout1688WhyUsIcon3.svg'}
						alt=''
						className={styles.icon}
					/>
					<div className={styles.cardInfo}>
						<h3 className={styles.cardInfoHeader}>Фулфилмент</h3>
						<p className={styles.cardInfoText}>
							Упаковка, маркировка и доставка до маркетплейсов — мы обеспечим{' '}
							<strong>полный цикл</strong> логистики для вашего бизнеса
						</p>
					</div>
				</div>
				<div className={styles.cardBot}>
					<p className={styles.cardBotText}>Запустите продажи уже завтра!</p>
					<button className={styles.btn}>Узнать подробности</button>
				</div>
			</div>
		</div>
	)
}

export default Buyout1688WhyUs
