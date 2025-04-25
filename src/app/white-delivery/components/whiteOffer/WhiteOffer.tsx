import Image from 'next/image'
import styles from './WhiteOffer.module.scss'
const WhiteOffer = () => {
	return (
		<div className={styles.container}>
			<h2>
				Индивидуальное предложение
				<br /> для вашего бизнеса
			</h2>
			<p className={styles.subHeader}>Оптимизируйте логистику с SELLERCHINA</p>
			<div className={styles.content}>
				<p className={styles.left}>
					<b>Каждый бизнес уникален,</b> и мы готовы предложить решение,
					идеально подходящее для вас.{' '}
				</p>
				<div className={styles.right}>
					<Image
						alt='bell'
						src={'/white-delivery/WhiteOffer1.webp'}
						width={131}
						height={142}
						className={styles.imgBell}
					/>
					<Image
						alt='arrow'
						src={'/white-delivery/WhiteOffer2.svg'}
						width={67}
						height={353}
						className={styles.imgArrow}
					/>
					<p className={styles.rightText}>
						<b>Заполните форму,</b> и мы подготовим персональное предложение по
						белой доставке, фулфилменту или другим услугам
					</p>
				</div>
			</div>
		</div>
	)
}

export default WhiteOffer
