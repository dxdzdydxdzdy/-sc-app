import Image from 'next/image'
import styles from './BuyoutChinaTeam.module.scss'

const managementData = [
	{
		name: 'Дарья',
		position: 'Руководитель отдела по работе с клиентами',
		photoSrc: '/buyout-china/buyoutChinaTeam1.webp',
		country: 'rus',
	},
	{
		name: 'Никита',
		position: 'Руководитель отдела продаж',
		country: 'rus',
		photoSrc: '/buyout-china/buyoutChinaTeam2.webp',
	},
	{
		name: 'Юлия',
		position: 'Менеджер по работе с клиентами',
		country: 'rus',
		photoSrc: '/buyout-china/buyoutChinaTeam3.webp',
	},
	{
		name: 'Юлия',
		position: 'Менеджер по работе с клиентами',
		country: 'rus',
		photoSrc: '/buyout-china/buyoutChinaTeam4.webp',
	},
	{
		name: 'Луна',
		position: 'Менеджер по работе с клиентами',
		country: 'chi',
		photoSrc: '/buyout-china/buyoutChinaTeam5.webp',
	},
	{
		name: 'Ира',
		position: 'Менеджер по работе с клиентами',
		country: 'chi',
		photoSrc: '/buyout-china/buyoutChinaTeam6.webp',
	},
]

const BuyoutChinaTeam = () => {
	return (
		<div className={styles.container}>
			<h2>Команда SELLERCHINA – ваш успех в наших руках</h2>
			<p className={styles.subLabel}>
				Профессионалы, которые знают все о выкупе и доставке из Китая
			</p>
			<p className={styles.subLabel2}>
				Наша команда состоит из <b>экспертов</b> в области логистики, закупок и
				работы с маркетплейсами. Мы знаем, как найти лучшие товары, организовать
				доставку и вывести ваш бизнес на новый уровень. С SELLERCHINA вы
				получаете надежного партнера, готового поддержать вас на каждом этапе
			</p>
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
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default BuyoutChinaTeam
