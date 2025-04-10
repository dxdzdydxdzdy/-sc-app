import Image from 'next/image'
import styles from './Home.module.scss'
import Banner from './components/banner/Banner'
import CalculateDelivery from './components/calculate-delivery/CalculateDelivery'
import Services from './components/services/Services'
import Marquee from './components/shared/marquee/Marquee'
import TextLuna from './components/text-luna/TextLuna'

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
								<p>SellerChina</p>
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
			<section className={styles.marquee}>
				<Marquee />
			</section>
			<section className={styles.servicesContainer}>
				<div className={styles.signs}>
					<h2>НАШИ УСЛУГИ</h2>
					<p>
						Подберем самый выгодный и безопасный тариф для вашего груза. С нами
						доставлять товар дешевле и надежнее.
					</p>
				</div>
				<div className={styles.cards}>
					<CalculateDelivery />
					<TextLuna />
				</div>
				<Services />
				<Banner />
			</section>
		</>
	)
}
