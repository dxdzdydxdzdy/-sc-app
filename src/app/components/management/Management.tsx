import Image from 'next/image'
import styles from './Management.module.scss'

const managementData = [
	{
		name: 'Клим',
		position: 'Генеральный директор компании в России',
		responsibleFor: 'Развивает компанию',
		photoSrc: '/managementKlim.webp',
		country: 'rus',
	},
	{
		name: 'Хаоян',
		position: 'Генеральный директор компании в Китае',
		responsibleFor: 'Носитель китайского языка',
		photoSrc: '/managementKhaoyan.svg',
		country: 'chi',
	},
	{
		name: 'Максим',
		position: 'Исполнительный директор в России',
		responsibleFor: 'Контролирует поставки',
		photoSrc: '/managementMaxim.svg',
		country: 'rus',
	},
	{
		name: 'Кэйтси',
		position: 'Исполнительный директор в Китае',
		responsibleFor: 'Контролирует склады в Китае',
		photoSrc: '/managementKeitsy.svg',
		country: 'chi',
	},
]

const Management = () => {
	return (
		<div className={styles.container}>
			<h2>РУКОВОДСТВО SELLERCHINA</h2>
			<div className={styles.grid}>
				{managementData.map((person, index) => (
					<div key={index} className={styles.card}>
						<Image
							src={person.photoSrc}
							alt={person.name}
							width={280}
							height={276}
							className={styles.photo}
						/>
						<Image
							src={person.country === 'rus' ? '/flag-rus.svg' : '/flag-chi.svg'}
							alt={`Флаг ${person.country}`}
							width={39}
							height={25}
							className={styles.flag}
						/>
						<div className={styles.info}>
							<h3>{person.name}</h3>
							<p className={styles.position}>{person.position}</p>
							<p className={styles.responsibleFor}>{person.responsibleFor}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Management
