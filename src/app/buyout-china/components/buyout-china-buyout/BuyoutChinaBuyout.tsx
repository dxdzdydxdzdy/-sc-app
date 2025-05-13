import Image from 'next/image'
import styles from './BuyoutChinaBuyout.module.scss'

const BuyoutChinaBuyout = () => {
	return (
		<div className={styles.container}>
			<h2>Выкуп товаров с популярных платформ Китая</h2>
			<p className={styles.subLabel}>
				Работаем с <strong>Alibaba, 1688, Taobao</strong> и напрямую с фабриками
			</p>
			<div className={styles.platforms}>
				<div className={styles.platform}>
					<Image
						width={105}
						height={105}
						alt='Платформа'
						src={'/buyout-china/buyoutChinaPlatform1.webp'}
					/>
					<div className={styles.platformInfo}>
						<h3 className={styles.platformName}>Alibaba</h3>
						<p className={styles.platformText}>
							Оптовые поставки от проверенных продавцов
						</p>
					</div>
				</div>
				<div className={styles.platform}>
					<Image
						width={105}
						height={105}
						alt='Платформа'
						src={'/buyout-china/buyoutChinaPlatform2.webp'}
					/>
					<div className={styles.platformInfo}>
						<h3 className={styles.platformName}>1688</h3>
						<p className={styles.platformText}>
							Доступные цены для малого и среднего бизнеса
						</p>
					</div>
				</div>
				<div className={styles.platform}>
					<Image
						width={105}
						height={105}
						alt='Платформа'
						src={'/buyout-china/buyoutChinaPlatform3.webp'}
					/>
					<div className={styles.platformInfo}>
						<h3 className={styles.platformName}>Taobao</h3>
						<p className={styles.platformText}>
							Уникальные товары для розничных продаж
						</p>
					</div>
				</div>
			</div>
			<div className={styles.payment}>
				<Image
					width={44}
					height={60}
					alt='₽'
					src={'/buyout-china/buyoutChinaRuble.svg'}
					className={styles.bankImg}
				/>
				<div className={styles.paymentInfo}>
					<p className={styles.paymentTop}>Удобная оплата в рублях</p>
					<p className={styles.paymentBot}>
						Принимаем платежи от любых российских банков
					</p>
				</div>
			</div>
			<div className={styles.banks}>
				<div className={styles.bank}>
					<Image
						width={256}
						height={90}
						alt='Банк'
						src={'/buyout-china/buyoutChinaBank1.webp'}
						className={styles.bankImg}
					/>
				</div>
				<div className={styles.bank}>
					<Image
						width={256}
						height={90}
						alt='Банк'
						src={'/buyout-china/buyoutChinaBank2.webp'}
						className={styles.bankImg}
					/>
				</div>
				<div className={styles.bank}>
					<Image
						width={256}
						height={90}
						alt='Банк'
						src={'/buyout-china/buyoutChinaBank3.webp'}
						className={styles.bankImg}
					/>
				</div>
				<div className={styles.bank}>
					<Image
						width={256}
						height={90}
						alt='Банк'
						src={'/buyout-china/buyoutChinaBank4.webp'}
						className={styles.bankImg}
					/>
				</div>
			</div>
			<p className={styles.botInfo1}>
				С SELLERCHINA вы можете оплачивать выкуп и доставку товаров в рублях
				через любой банк России. Никаких сложностей с валютными переводами –
				просто, быстро и безопасно
			</p>
			<p className={styles.botInfo2}>
				Оформите заказ и оплатите удобным способом!
			</p>
			<button className={styles.btn}>Рассчитать стоимость</button>
		</div>
	)
}

export default BuyoutChinaBuyout
