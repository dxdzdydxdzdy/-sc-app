import Image from 'next/image'
import styles from './WhiteHero.module.scss'

const WhiteHero = () => {
	return (
		<div className={styles.container}>
			<h1>
				ДОСТАВКА ГРУЗОВ ИЗ КИТАЯ <br />
				<span>В БЕЛУЮ</span>
			</h1>
			<div className={styles.banner}>
				<div className={styles.imageWrapper}>
					<Image
						width={631}
						height={337}
						src={'/white-delivery/whiteDeliveryHero.webp'}
						alt='Белая доставка'
						className={styles.image}
					/>
				</div>
				<div className={styles.background}></div>
			</div>
			<p className={styles.days}>25-60 ДНЕЙ</p>
			<p className={styles.subtext}>
				Надежная и прозрачная логистика для вашего бизнеса
			</p>
			<div className={styles.btnContainer}>
				<button className={styles.btn1}>Рассчитать стоимость</button>
				<button className={styles.btn2}>Бесплатная консультация</button>
			</div>
		</div>
	)
}

export default WhiteHero
