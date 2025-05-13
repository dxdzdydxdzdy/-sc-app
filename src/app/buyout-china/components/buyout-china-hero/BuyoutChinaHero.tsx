import Image from 'next/image'
import styles from './BuyoutChinaHero.module.scss'

const BuyoutChinaHero = () => {
	return (
		<div className={styles.container}>
			<h1>ПОДБОР, выкуп И ДОСТАВКА ТОВАРОВ ИЗ кИТАЯ</h1>
			<div className={styles.content}>
				<Image
					width={555}
					height={434}
					alt=''
					src={'/buyout-china/buyoutChinaHero.webp'}
					className={styles.img}
				/>
				<div className={styles.stickers}>
					<p className={styles.sticker1}>
						Комиссия <b>от 1%</b>
					</p>
					<p className={styles.sticker2}>
						Выкуп <b>от 30000₽</b>
					</p>
				</div>
				<ul className={styles.list}>
					<li>
						Доступный курс <b>¥</b>
					</li>
					<li>
						Оплата в рублях <b>₽</b>
					</li>
					<li>Полный цикл</li>
					<li>Прозрачный расчёт</li>
				</ul>
				<div className={styles.btnContainer}>
					<button className={styles.btn1}>Бесплатный расчёт</button>
					<button className={styles.btn2}>Консультация по товарам</button>
				</div>
			</div>
		</div>
	)
}

export default BuyoutChinaHero
