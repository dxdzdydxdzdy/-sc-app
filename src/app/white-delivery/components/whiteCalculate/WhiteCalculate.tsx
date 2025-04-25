import CalculateDelivery from '@/app/components/calculate-delivery/CalculateDelivery'
import Image from 'next/image'
import styles from './WhiteCalculate.module.scss'

const WhiteCalculate = () => {
	return (
		<div className={styles.container}>
			<h2>Маршруты доставки и прозрачный расчет стоимости</h2>
			<p className={styles.subHeader}>
				Узнайте, как доставить груз из Китая выгодно
			</p>
			<div className={styles.content}>
				<Image
					width={1208}
					height={714}
					alt=''
					src={'/white-delivery/WhiteCalculate.svg'}
					className={styles.img}
				/>
				<CalculateDelivery />
			</div>
		</div>
	)
}

export default WhiteCalculate
