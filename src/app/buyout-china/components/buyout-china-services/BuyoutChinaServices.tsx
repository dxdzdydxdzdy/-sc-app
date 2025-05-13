import Image from 'next/image'
import styles from './BuyoutChinaServices.module.scss'

const BuyoutChinaServices = () => {
	return (
		<div className={styles.container}>
			<h2>Услуги SELLERCHINA для вашего бизнеса</h2>
			<p className={styles.subLabel}>
				Комплексные решения для выкупа и доставки товаров из Китая
			</p>
			<div className={styles.grid}>
				<div className={styles.card}>
					<h3 className={styles.cardHeader}>Поиск и выкуп товара</h3>
					<Image
						width={287}
						height={50}
						alt='фабрики'
						src={'/buyout-china/buyoutChinaFabrics.webp'}
						className={styles.img1}
					/>
					<p className={styles.cardInfo}>
						Ищем надежных поставщиков и выкупаем товары по лучшим ценам.
						Работаем с <strong>Alibaba, 1688, Taobao</strong> и напрямую с
						фабриками.
						<br />
						<br />
						Гарантируем качество и выгодные условия.
						<br />
						Найдите идеальный товар для продаж уже сегодня!
					</p>
					<div className={styles.cardDiv}>
						<p className={styles.divText}>
							Найдите идеальный товар для продаж уже сегодня!
						</p>
						<button className={styles.btn}>Заказать поиск товара</button>
					</div>
				</div>
				<div className={styles.card}>
					<h3 className={styles.cardHeader}>Карго доставка</h3>
					<p className={styles.cardInfo}>
						Быстрая и недорогая <strong>доставка грузов</strong> из Китая в
						Россию. Оптимизируем логистику, чтобы вы получили товар в кратчайшие
						сроки
					</p>

					<div className={styles.cardDiv}>
						<p className={styles.divText}>
							Закажите карго доставку и сократите расходы!
						</p>
						<button className={styles.btn}>Рассчитать доставку</button>
					</div>
				</div>
				<div className={styles.card}>
					<h3 className={styles.cardHeader}>Белая доставка</h3>
					<p className={styles.cardInfo}>
						Полностью легальная доставка с оформлением всех документов. Подходит
						для работы с маркетплейсами и крупными партиями товаров
					</p>
					<Image
						width={243}
						height={186}
						alt='карго'
						src={'/buyout-china/buyoutChinaTruck.png'}
						className={styles.img2}
					/>
					<div className={styles.cardDiv}>
						<p className={styles.divText}>
							Обеспечьте прозрачную доставку с SELLERCHINA!
						</p>
						<button className={styles.btn}>Узнать стоимость</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BuyoutChinaServices
