import Image from 'next/image'
import styles from './CalculateNow.module.scss'

const CalculateNow = () => {
	return (
		<div className={styles.container}>
			<p>
				Узнайте стоимость <span>карго доставки</span> из Китая прямо сейчас
			</p>
			<Image
				width={603}
				height={270}
				alt='Грузовик'
				src={'/cargo-delivery/calculateTruck.webp'}
				className={styles.image}
			/>
		</div>
	)
}

export default CalculateNow
