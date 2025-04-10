'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ButtonPopupForHomeCalculator from '../ui/ButtonPopupForHomeCalculator/ButtonPopupForHomeCalculator'
import styles from './CalculateDelivery.module.scss'

const deliveryTypes = [
	{
		key: 'standard',
		defaultImg: '/deliveryStandard.svg',
		selectedImg: '/deliveryStandardSelected.svg',
		label: 'Авто',
		subLabel: 'Стандарт',
	},
	{
		key: 'fast',
		defaultImg: '/deliveryFast.svg',
		selectedImg: '/deliveryFastSelected.svg',
		label: 'Авто',
		subLabel: 'Быстрая',
	},
	{
		key: 'railway',
		defaultImg: '/deliveryJD.svg',
		selectedImg: '/deliveryJDSelected.svg',
		label: 'ЖД',
		subLabel: '',
	},
]

const CalculateDelivery = () => {
	const [selectedType, setSelectedType] = useState<string>('standard')

	const [weight, setWeight] = useState<number | ''>('')
	const [volume, setVolume] = useState<number | ''>('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log('Тип доставки:', selectedType, 'Вес:', weight, 'Объём:', volume)
	}

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<Image
					width={42}
					height={49}
					alt='Калькулятор'
					src={'/calculator.svg'}
				/>
				<h3>
					Расчет стоимости доставки
					<br /> <span>из Китая</span>
				</h3>
			</div>
			<form onSubmit={handleSubmit}>
				<div className={styles.deliveryType}>
					<p className={styles.deliveryTypeHeader}>Вид перевозки</p>
					<div className={styles.types}>
						{deliveryTypes.map(type => (
							<div
								key={type.key}
								className={`${styles.typesItem} ${
									selectedType === type.key ? styles.active : ''
								}`}
								onClick={() => setSelectedType(type.key)}
							>
								<Image
									width={41}
									height={41}
									src={
										selectedType === type.key
											? type.selectedImg
											: type.defaultImg
									}
									alt={type.label}
								/>
								<p>
									{type.key !== 'railway' ? (
										<>
											<span className={styles.label}>{type.label}</span>
											<br />
											<span className={styles.subLabel}>{type.subLabel}</span>
										</>
									) : (
										<span className={styles.railwayLabel}>{type.label}</span>
									)}
								</p>
							</div>
						))}
					</div>
				</div>
				<div className={styles.measurements}>
					<div>
						<label htmlFor='weight'>Вес (кг)</label>
						<input
							type='number'
							id='weight'
							name='weight'
							value={weight}
							onChange={e =>
								setWeight(e.target.value === '' ? '' : +e.target.value)
							}
							min='0'
							step='any'
						/>
					</div>

					<div>
						<label htmlFor='volume'>Объём (м³)</label>
						<input
							type='number'
							id='volume'
							name='volume'
							value={volume}
							onChange={e =>
								setVolume(e.target.value === '' ? '' : +e.target.value)
							}
							min='0'
							step='any'
						/>
					</div>
				</div>
				<div className={styles.total}>
					<h4>Маршрут</h4>
					<div className={styles.route}>
						<div className={styles.content}>
							<Image
								width={54}
								height={40}
								alt='Китай'
								src={'/routeFlagChina.svg'}
							/>
							<p>Китай</p>
							<Image
								width={22}
								height={40}
								alt='arrow'
								src={'/routeArrow.svg'}
							/>
							<Image
								width={54}
								height={40}
								alt='Россия'
								src={'/routeFlagRussia.svg'}
							/>
							<p>Россия</p>
						</div>
						<div className={styles.submit}>
							<ButtonPopupForHomeCalculator>
								Рассчитать доставку
							</ButtonPopupForHomeCalculator>
							<Link
								href={'https://t.me/sellerchinaru1'}
								target='blank'
								className={styles.link}
							>
								<h5>Получить точный расчет</h5>
							</Link>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default CalculateDelivery
