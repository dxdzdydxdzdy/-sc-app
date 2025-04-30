import Image from 'next/image'
import styles from './SpecialHero.module.scss'

const SpecialHero = () => {
	return (
		<div className={styles.container}>
			<h1>
				Доставка из Китая в Россию <strong>спецлиниями</strong>
			</h1>
			<ul>
				<li>
					Стоимость - <b>от 0.8$ за кг</b>
				</li>
				<li>
					Минимальный вес груза - <b>20 кг</b>
				</li>
				<li>
					Сроки доставки - <b>от 12 до 45 дней</b>
				</li>
				<li>
					Способ доставки - <b>ж/д + автотраспорт</b>
				</li>
			</ul>
			<p className={styles.textAfterUl}>
				Перевозите товары из Китая в Россию с минимальными затратами и
				максимальной скоростью!
			</p>
			<div className={styles.btnContainer}>
				<button className={styles.btn1}>Бесплатный расчет</button>
				<button className={styles.btn2}>
					Какие товары возятся спецлиниями?
				</button>
			</div>
			<p className={styles.text}>
				Спецлинии от SELLERCHINA — это оптимальное решение для доставки грузов
				из Китая в Россию. Мы предлагаем надежные маршруты, прозрачные тарифы и
				сроки доставки от 7 до 20 дней. Наши спецлинии подходят для бизнеса
				любого масштаба: от небольших интернет-магазинов до крупных поставщиков.
				Забудьте о сложностях с таможней и логистикой — мы берем все на себя!
			</p>
			<div className={styles.imgWrapper}>
				<Image
					width={780}
					height={308}
					alt='Спецлинии'
					src={'/special-line/specialHero.png'}
					className={styles.img}
				/>
			</div>
		</div>
	)
}

export default SpecialHero
