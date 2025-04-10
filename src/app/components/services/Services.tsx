'use client'

import Link from 'next/link'
import { useState } from 'react'
import BuyoutIcon from './icons/BuyoutIcon'
import CargoIcon from './icons/CargoIcon'
import HoveredBuyoutIcon from './icons/HoveredBuyoutIcon'
import HoveredCargoIcon from './icons/HoveredCargoIcon'
import HoveredSupplierIcon from './icons/HoveredSupplierIcon'
import HoveredWhiteDeliveryIcon from './icons/HoveredWhiteDeliveryIcon'
import SupplierIcon from './icons/SupplierIcon'
import WhiteDeliveryIcon from './icons/WhiteDeliveryIcon'
import styles from './Services.module.scss'

const Services = () => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

	const servicesData = [
		{
			labelTop: 'КАРГО',
			labelBottom: 'ДОСТАВКА',
			subLabel: 'Выгодные тарифы',
			icon: CargoIcon,
			hovered: HoveredCargoIcon,
			link: '/',
		},
		{
			labelTop: 'ВЫКУП',
			labelBottom: 'ТОВАРА',
			subLabel: 'Комиссия от 1%*',
			icon: BuyoutIcon,
			hovered: HoveredBuyoutIcon,
			link: '/',
		},
		{
			labelTop: 'БЕЛАЯ',
			labelBottom: 'ДОСТАВКА',
			subLabel: 'Привезем товар со всеми документами',
			icon: WhiteDeliveryIcon,
			hovered: HoveredWhiteDeliveryIcon,
			link: '/',
		},
		{
			labelTop: 'ПОИСК',
			labelBottom: 'ПОСТАВЩИКА',
			subLabel: 'Подберем поставщика в Китае',
			icon: SupplierIcon,
			hovered: HoveredSupplierIcon,
			link: '/',
		},
	]

	return (
		<div className={styles.container}>
			{servicesData.map(
				(
					{
						labelTop,
						labelBottom,
						subLabel,
						icon: Icon,
						hovered: HoveredIcon,
						link,
					},
					index
				) => (
					<div
						key={index}
						className={styles.card}
						onMouseEnter={() => setHoveredIndex(index)}
						onMouseLeave={() => setHoveredIndex(null)}
					>
						<Link href={link}>
							<h3>
								{labelTop}
								<br />
								{labelBottom}
							</h3>
							<p>{subLabel}</p>
							{hoveredIndex === index ? (
								<HoveredIcon className={styles.icon} />
							) : (
								<Icon className={styles.icon} />
							)}
						</Link>
					</div>
				)
			)}
		</div>
	)
}

export default Services
