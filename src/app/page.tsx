import Image from 'next/image'
import styles from './Home.module.scss'
import Marquee from './components/shared/marquee/Marquee'

export default function Home() {
	return (
		<>
			<section className={styles.delivery}>
				<div className={styles.container}>
					<div className={styles.relative}>
						<h1>
							<strong>ДОСТАВКА ГРУЗА</strong> ОТ 30 КГ ИЗ КИТАЯ В РОССИЮ
						</h1>
						<p className={styles.absolute}>БЕЗ ПОСРЕДНИКОВ</p>
					</div>
					<div className={styles.truck}>
						<Image
							src={'/truck.svg'}
							width={467}
							height={433}
							alt='Доставка оптом'
						/>
					</div>
					<div className={styles.info}>
						<div className={styles.top}>
							<p>Полный цикл для селлеров</p>
							<div className={styles.consultation}>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</div>
						</div>
						<div className={styles.mid}>
							<div className={styles.content}>
								<Image
									width={66}
									height={66}
									src={'/china-flag.svg'}
									alt='Флаг Китая'
								/>
								<p>Китай</p>
							</div>
							<div className={styles.lineContainer}>
								<div className={styles.line1}></div>
							</div>
							<div className={styles.content}>
								<Image
									width={66}
									height={66}
									src={'/sc-logo-home.svg'}
									alt='Лого SellerChina'
								/>
								<p>Sellerchina</p>
							</div>
							<div className={styles.lineContainer}>
								<div className={styles.line2}></div>
							</div>
							<div className={styles.content}>
								<Image
									width={106}
									height={76}
									src={'/markets.svg'}
									alt='Маркетплейсы'
								/>
								<p>Маркетплейсы</p>
							</div>
						</div>
						<div className={styles.bot}>
							<p>Оставьте свой контакт для быстрого расчёта</p>
							<form method='post'>
								<div>
									<input
										type='tel'
										name='phone'
										placeholder='Номер телефона'
										required
									/>
									<Image
										width={28}
										height={28}
										src={'/phone.svg'}
										alt='tel'
										className={styles.phone}
									/>
								</div>
								<button type='submit'>Отправить</button>
							</form>
						</div>
					</div>
				</div>
			</section>
			<section>
				<Marquee />
			</section>
		</>
	)
}
