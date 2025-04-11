import Image from 'next/image'
import styles from './Management.module.scss'

const managementData = [
	{
		name: 'Клим',
		position: 'Генеральный директор компании',
		responsibleFor: 'Развивает компанию',
		photoSrc: '/managementKlim.svg',
	},
	{
		name: 'Хаоян',
		position: 'Генеральный директор компании',
		responsibleFor: 'Носитель китайского языка',
		photoSrc: '/managementKhaoyan.svg',
	},
	{
		name: 'Максим',
		position: 'Директор',
		responsibleFor: 'Контролирует поставки',
		photoSrc: '/managementMaxim.svg',
	},
	{
		name: 'Даниил',
		position: 'Руководитель отдела по работе с маркетплейсами',
		responsibleFor: 'Заботится о ваших продажах',
		photoSrc: '/managementDaniil.svg',
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
