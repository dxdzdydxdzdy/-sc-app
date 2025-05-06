import Image from 'next/image'
import Link from 'next/link'
import styles from './SpecialGoods.module.scss'
const SpecialGoods = () => {
	const data = [
		{
			label: 'Электроника и гаджеты',
			items: ['Смартфоны', 'Планшеты', 'Наушники', 'Зарядные устройства'],
		},
		{
			label: 'Одежда и обувь',
			items: ['Футболки', 'Кроссовки', 'Аксессуары', 'Сезонные коллекции'],
		},
		{
			label: 'Товары для дома',
			items: ['Посуда', 'Текстиль', 'Декор', 'Мелкая бытовая техника'],
		},
		{
			label: 'Косметика и уход',
			items: ['Крема', 'Маски', 'Парфюмерия', 'Инструменты для макияжа'],
		},
		{
			label: 'Детские товары',
			items: ['Игрушки', 'Одежда', 'Коляски', 'Аксессуары'],
		},
		{
			label: 'Мелкая бытовая техника',
			items: ['Тостеры', 'Блендеры', 'Электрочайники', 'Утюги'],
		},
		{
			label: 'Автозапчасти',
			items: ['Фильтры', 'Тормозные колодки', 'Ремни', 'Аккумуляторы'],
		},
	]

	return (
		<div className={styles.container}>
			<h2>Какие товары можно доставлять спецлиниями?</h2>
			<p className={styles.subLabel}>
				Перевозим всё — от мелкой электроники до крупногабаритных грузов
			</p>
			<p className={styles.topText}>
				Спецлинии от SELLERCHINA подходят для широкого спектра товаров. Узнайте,
				какие ниши мы обслуживаем, и убедитесь, что ваш бизнес идеально
				вписывается в нашу логистику!
			</p>
			<div className={styles.accordion}>
				{data.map((category, index) => (
					<div key={index} className={styles.accordionItem}>
						<input
							type='checkbox'
							id={`accordion-${index}`}
							className={styles.accordionInput}
						/>
						<label
							htmlFor={`accordion-${index}`}
							className={styles.accordionHeader}
						>
							{category.label}
							<Image
								src={'/special-line/SpecialGoodsIcon.webp'}
								alt='+'
								width={30}
								height={30}
								className={styles.accordionIcon}
							/>
						</label>
						<div className={styles.accordionContent}>
							<ul className={styles.accordionList}>
								{category.items.map((item, itemIndex) => (
									<li key={itemIndex}>{item}</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
			<div className={styles.bottomContent}>
				{/* <Image
					src={'/special-line/SpecialGoodsSearch.webp'}
					alt='поиск'
					width={161}
					height={145}
					className={styles.bottomContentImg}
				/> */}
				<p className={styles.bottomContentText}>
					Найдите свою нишу и начните доставку с SELLERCHINA уже сегодня!
				</p>
				<Link href={'/'}>
					<button className={styles.bottomContentLink}>Узнать больше</button>
				</Link>
			</div>
		</div>
	)
}

export default SpecialGoods
