import Image from 'next/image'
import styles from './WhiteDeliveryType.module.scss'

const WhiteDeliveryType = () => {
	const data = [
		{
			label: 'Авиа ',
			subLabel: 'для срочных грузов',
			img: '/white-delivery/WhiteDeliveryType1.webp',
			w: 280,
			h: 124,
		},
		{
			label: 'Ж/Д',
			subLabel: 'для крупных партий',
			img: '/white-delivery/WhiteDeliveryType2.webp',
			w: 280,
			h: 176,
		},
		{
			label: 'Авто',
			subLabel: 'для гибкости',
			img: '/white-delivery/WhiteDeliveryType31.webp',
			w: 296,
			h: 270,
		},
		{
			label: 'Морские',
			subLabel: 'для экономии',
			img: '/white-delivery/WhiteDeliveryType4.webp',
			w: 139,
			h: 165,
		},
	]

	return (
		<div className={styles.container}>
			<h2>Выбирайте удобный вам способ доставки из Китая</h2>
			<div className={styles.manager}>
				<div className={styles.managerImage}>
					<Image
						width={202}
						height={286}
						alt='Менеджер Никита'
						src={'/white-delivery/WhiteDeliveryManager.webp'}
					/>
				</div>
				<div className={styles.rightBlock}>
					<p className={styles.speech1}>
						<span>“</span>Авиа, ж/д, авто или море
						<br />— подберем оптимальный вариант
						<span>”</span>
					</p>
					<p className={styles.speech2}>
						Каждый способ соответствует требованиям таможни РФ и оптимизирован
						под ваш бизнес
					</p>
					<p className={styles.speech3}>
						Подберите способ доставки с нашим <b>менеджером Никитой!</b>
					</p>
				</div>
			</div>
			<div className={styles.grid}>
				{data.map((item, index) => (
					<div key={index} className={styles.card}>
						<div className={styles.imageWrapper}>
							<Image
								src={item.img}
								alt={item.label}
								width={item.w}
								height={item.h}
								className={styles.image}
							/>
						</div>
						<div className={styles.textWrapper}>
							<h3 className={styles.label}>{item.label}</h3>
							<p className={styles.subLabel}>{item.subLabel}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default WhiteDeliveryType
