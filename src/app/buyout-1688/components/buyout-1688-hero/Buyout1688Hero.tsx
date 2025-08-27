import Image from 'next/image'
import styles from './Buyout1688Hero.module.scss'

const Buyout1688Hero = () => {
	return (
		<div className={styles.container}>
			<h1>выкуп товара с 1688</h1>
			<p className={styles.subLabel}>с доставкой в Россию</p>
			<p className={styles.info1}>
				Мы надежная компания для закупок на 1688 — от поиска поставщика до
				доставки на ваш склад
			</p>
			<p className={styles.info2}>
				Хотите закупать товары с 1688 без лишних затрат и рисков?
				<br />
				<strong>SELLERCHINA</strong> — ваш надежный партнер для выкупа товаров с
				китайской платформы 1688.
			</p>
			<p className={styles.info3}>
				Мы берем на себя весь процесс: от поиска поставщика и проверки качества
				до логистики и таможенного оформления. Экономьте время и деньги с
				профессиональным подходом!
			</p>

			<div className={styles.btnContainer}>
				<button className={styles.btn1}>Рассчитать выкуп</button>
				{/* <div className={styles.btn2Container}>
					<button className={styles.btn2}>Скачать бланк</button>
					<Image
						width={31}
						height={31}
						alt=''
						src={'/buyout-1688/buyout1688HeroDownload.svg'}
						className={styles.imgDownload}
					/>
				</div> */}
			</div>
			<Image
				width={217}
				height={217}
				alt=''
				src={'/buyout-1688/buyout1688Hero1688Logo.svg'}
				className={styles.img1688Logo}
			/>
			<p className={styles.back1688}>1688</p>
		</div>
	)
}

export default Buyout1688Hero
