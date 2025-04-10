import Image from 'next/image'
import styles from './Marquee.module.scss'

const Marquee = () => {
	const items = Array.from({ length: 12 })

	return (
		<div className={styles.marquee}>
			<div className={styles.container}>
				{items.map((_, index) => (
					<div key={index} className={styles.element}>
						<Image width={78} height={49} alt='10%' src='/ten.svg' />
						<p>СКИДКА НА ПЕРВЫЙ ЗАКАЗ ИЗ КИТАЯ*</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Marquee
