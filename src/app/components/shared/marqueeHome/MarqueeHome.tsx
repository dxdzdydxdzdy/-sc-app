import Image from 'next/image'
import styles from './MarqueeHome.module.scss'

const MarqueeHome = () => {
	const items = [
		'Персональный менеджер',
		'Прозрачный расчет',
		'Надежные поставщики',
		'Склады в России и Китае',
	]

	const repeatedItems = [
		...items,
		...items,
		...items,
		...items,
		...items,
		...items,
	]

	return (
		<div className={styles.marquee}>
			<div className={styles.container}>
				{repeatedItems.map((text, index) => (
					<div key={index} className={styles.element}>
						<span>{text}</span>

						{index !== repeatedItems.length - 1 && (
							<Image
								width={10}
								height={10}
								alt=''
								src='/marqueeDot.svg'
								className={styles.dot}
							/>
						)}
					</div>
				))}
			</div>
		</div>
	)
}

export default MarqueeHome
