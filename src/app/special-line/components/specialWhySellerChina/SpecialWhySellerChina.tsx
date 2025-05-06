import Image from 'next/image'
import Link from 'next/link'
import styles from './SpecialWhySellerChina.module.scss'

const SpecialWhySellerChina = () => {
	const data = [
		{
			icon: '/special-line/specialIcon1.webp',
			label: 'Скорость доставки',
			subLabel: 'От 7 до 20 дней — ваши клиенты не будут ждать',
		},
		{
			icon: '/special-line/specialIcon2.webp',
			label: 'Экономия',
			subLabel: 'Тарифы на спецлинии до 30% ниже, чем у конкурентов',
		},
		{
			icon: '/special-line/specialIcon3.webp',
			label: 'Надежность',
			subLabel: 'Полное отслеживание груза и страхование на всех этапах',
		},
		{
			icon: '/special-line/specialIcon4.webp',
			label: 'Упрощенная таможня',
			subLabel: 'Мы берем на себя оформление документов',
		},
		{
			icon: '/special-line/specialIcon5.webp',
			label: 'Гибкость',
			subLabel: 'Подходит для любых товаров — от электроники до одежды',
		},
	]

	return (
		<div className={styles.container}>
			<h2>Почему выбирают спецлинии от SELLERCHINA?</h2>
			<p className={styles.subLabel}>
				Ваши товары в России быстро и без лишних затрат
			</p>
			<div className={styles.grid}>
				{data.map((item, index) => (
					<div key={index} className={styles.card}>
						<div className={styles.cardIcon}>
							<Image src={item.icon} alt={item.label} width={65} height={65} />
						</div>
						<h3 className={styles.cardTitle}>{item.label}</h3>
						{item.subLabel && (
							<p className={styles.cardSubLabel}>{item.subLabel}</p>
						)}
					</div>
				))}
				<Link href={'/'}>
					<div className={styles.consultation}>Консультация по спецлиниям</div>
				</Link>
			</div>
			<div className={styles.bottomContent}>
				<p className={styles.speech}>
					<span className={styles.quotes}>“</span>С SELLERCHINA вы получаете не
					просто доставку, а полноценное логистическое решение для вашего
					бизнеса<span className={styles.quotes}>”</span>
				</p>
				<div className={styles.textWrapper}>
					<p className={styles.text}>
						<span className={styles.textWord}>Закажите</span> доставку
						спецлиниями и убедитесь в наших преимуществах!
					</p>
				</div>
				<div className={styles.imgWrapper}>
					<Image
						src={'/special-line/specialKhaoyan.png'}
						alt='Директор в Китае Хаоян'
						width={213}
						height={299}
					/>
				</div>
			</div>
		</div>
	)
}

export default SpecialWhySellerChina
