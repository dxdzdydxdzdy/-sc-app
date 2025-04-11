import Image from 'next/image'
import Link from 'next/link'
import styles from './Buyout.module.scss'

const Buyout = () => {
	const buyoutData = [
		{
			label: '1688, Taobao',
			subLabel: 'Выкупаем любые товары с данных площадок',
			link: '/',
		},
		{
			label: 'Фабрики',
			subLabel: 'Не только выкупим, но и организуем ODM, OEM процессы',
			link: '/',
		},
		{
			label: 'Поставщики',
			subLabel: 'Согласуем выкуп и по возможности хорошую скидку у продавца',
			link: '/',
		},
		{
			label: 'Доставка из Китая',
			subLabel: 'Не нуждаетесь в выкупе? Тогда мы просто доставим ваш груз!',
			link: '/',
		},
	]

	return (
		<div className={styles.container}>
			<h3>
				ДЕЛАЕМ ВЫКУП С <span>1688</span> И <span>TAOBAO</span>
				<br />
				НАПРЯМУЮ У <span>ФАБРИК</span> И <span>ПОСТАВЩИКОВ</span>
			</h3>
			<div className={styles.grid}>
				{buyoutData.map(({ label, subLabel, link }, index) => (
					<div
						key={index}
						className={`${styles.card} ${index % 2 === 1 ? styles.offset : ''}`}
					>
						<h4>{label}</h4>
						<p>{subLabel}</p>
						<Link href={link}>
							<span className={styles.link}>Написать</span>
						</Link>
					</div>
				))}
			</div>
			<div className={styles.owner}>
				<div className={styles.ownerImage}>
					<div className={styles.klim}>
						<Image
							width={259}
							height={350}
							alt='Генеральный директор'
							src={'/owner.png'}
						/>
					</div>
					<p className={styles.speech}>
						<span>Наш подход к клиентам индивидуален!</span>
						<br />
						Мы с легкостью находим общий язык и стараемся сделать все возможное,
						<br />
						чтобы вы остались довольны нашим сервисом!
					</p>
				</div>
				<div className={styles.ownerInfo}>
					<p className={styles.ownerName}>Клим</p>
					<p className={styles.ownerPosition}>Генеральный директор компании</p>
				</div>
			</div>
		</div>
	)
}

export default Buyout
