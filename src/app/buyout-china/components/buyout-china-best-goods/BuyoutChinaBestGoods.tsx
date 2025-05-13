import Image from 'next/image'
import Link from 'next/link'
import styles from './BuyoutChinaBestGoods.module.scss'

const BuyoutChinaBestGoods = () => {
	return (
		<div className={styles.container}>
			<h2>Найдем лучшие товары для ваших продаж</h2>
			<p className={styles.subLabel}>
				Профессиональный подбор поставщиков и товаров для Wildberries, Ozon{' '}
				<br />и других платформ
			</p>
			<div className={styles.content}>
				<div className={styles.lunaContainer}>
					<div className={styles.lunaTop}>
						<div className={styles.imgContainer}>
							<Image
								width={253}
								height={253}
								alt='менеджер'
								src={'/buyout-china/buyoutChinaGoodsLuna.webp'}
								className={styles.img}
							/>
						</div>
						<div className={styles.lunaInfo}>
							<p className={styles.lunaName}>Луна</p>
							<button className={styles.lunaBtn}>Написать</button>
						</div>
					</div>
					<p className={styles.lunaBot}>
						Напишите мне, и я отвечу
						<br /> в течение <b>10 минут</b>
					</p>
				</div>
				<div className={styles.serviceContainer}>
					<div className={styles.service}>
						<h3 className={styles.serviceHeader}>
							Услуга по поиску поставщика
						</h3>
						<p className={styles.serviceText}>
							Находим проверенных поставщиков на Alibaba, 1688, Taobao и
							напрямую на фабриках. Проверяем репутацию, качество и условия
							сотрудничества.
						</p>
						<Link href={'/'} target='blank' className={styles.link}>
							Заказать поиск поставщика
						</Link>
					</div>
					<div className={styles.service}>
						<h3 className={styles.serviceHeader}>Услуга по подбору товара</h3>
						<p className={styles.serviceText}>
							Анализируем рынок и подбираем товары с высоким спросом для
							успешных продаж на маркетплейсах. Учитываем ваши цели и бюджет.
						</p>
						<Link href={'/'} target='blank' className={styles.link}>
							Заказать подбор товара
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BuyoutChinaBestGoods
