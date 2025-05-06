import Image from 'next/image'
import styles from './SpecialCycle.module.scss'

const SpecialCycle = () => {
	return (
		<div className={styles.container}>
			<h2>Кому подойдут спецлинии от SELLERCHINA?</h2>
			<div className={styles.header}>
				<Image
					width={95}
					height={95}
					alt='like'
					src={'/special-line/like.webp'}
					className={styles.img}
				/>
				<p className={styles.subLabel}>Решение для бизнеса любого масштаба</p>
			</div>
			<p className={styles.subLabelSecond}>
				<strong>Спецлинии</strong> созданы для тех, кто хочет оптимизировать
				логистику и сократить расходы:
			</p>
			<ul className={styles.list}>
				<li>
					<b>Интернет-магазины:</b> Быстрая доставка товаров для маркетплейсов
					(Ozon, Wildberries).
				</li>
				<li>
					<b>Оптовики:</b> Экономия на крупных партиях товаров.
				</li>
				<li>
					<b>Производители:</b> Перевозка сырья и комплектующих.
				</li>
				<li>
					<b>Стартапы:</b> Доступные тарифы для начинающих предпринимателей.
				</li>
			</ul>
			<p className={styles.subLabelThird}>
				Независимо от вашего опыта и объемов, мы найдем идеальное решение для
				вашего бизнеса.
			</p>
		</div>
	)
}

export default SpecialCycle
