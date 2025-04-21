import styles from './CargoMarquee.module.scss'

const CargoMarquee = () => {
	const items = Array.from({ length: 12 })

	return (
		<div className={styles.marquee}>
			<div className={styles.container}>
				{items.map((_, index) => (
					<div key={index} className={styles.element}>
						<span>10%</span>
						<p>СКИДКА НА ПЕРВЫЙ ЗАКАЗ ИЗ КИТАЯ*</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default CargoMarquee
