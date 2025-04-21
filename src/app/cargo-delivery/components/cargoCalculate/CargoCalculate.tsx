import CalculateDelivery from '@/app/components/calculate-delivery/CalculateDelivery'
import Image from 'next/image'
import CalculateNow from '../calculateNow/CalculateNow'
import styles from './CargoCalculate.module.scss'

const CargoCalculate = () => {
	const data = [
		{
			label: 'Быстрое авто',
			days: '10-15',
			icon: 'cargoDeliveryIcon1.svg',
			text: 'Для срочных грузов',
		},
		{
			label: 'Стандартное авто',
			days: '18-25',
			icon: 'cargoDeliveryIcon2.svg',
			text: 'Оптимальная доставка',
		},
		{
			label: 'Спецлиния',
			days: '20-25',
			icon: 'cargoDeliveryIcon3.svg',
			text: 'Выгодные тарифы от 100кг - 1 тип товара',
		},
		{
			label: 'Авиадоставка',
			days: '5-7',
			icon: 'cargoDeliveryIcon4.svg',
			text: 'Для образцов и дорогих малогабаритных грузов',
		},
		{
			label: 'Экспресс доставка',
			days: '8-15',
			icon: 'cargoDeliveryIcon5.svg',
			text: 'От 1 до 5 кг',
		},
	]

	return (
		<div className={styles.container}>
			<h2>Рассчитайте Стоимость Карго Доставки из Китая</h2>
			<p className={styles.headerText}>
				<strong>Выберите подходящий вид карго доставки для вашего груза</strong>
				<br />С Sellerchina вы можете выбрать оптимальный вид карго доставки из
				Китая: от экономичной до экспресс.
				<br /> Наш калькулятор карго доставки поможет узнать стоимость за
				минуту!
			</p>

			<div className={styles.grid}>
				{data.map((item, index) => (
					<div key={index} className={styles.card}>
						<h3>{item.label}</h3>
						<p className={styles.days}>{item.days}</p>
						<div className={styles.iconWrapper}>
							<Image
								src={`/cargo-delivery/${item.icon}`}
								alt={item.label}
								width={113}
								height={61}
								className={styles.icon}
							/>
						</div>
						<p className={styles.text}>{item.text}</p>
						<button className={styles.gridButton}>Рассчитать доставку</button>
					</div>
				))}
				<div className={styles.gridFullWidth}>
					<div>
						<h3 className={styles.calculateDeliveryHeader}>
							Калькулятор карго доставки
						</h3>
						<CalculateDelivery />
					</div>
					<CalculateNow />
				</div>
			</div>
		</div>
	)
}

export default CargoCalculate
