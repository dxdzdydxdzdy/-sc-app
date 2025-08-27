import styles from './Buyout1688WhatYouGet.module.scss'

const data = [
	{
		num: 1,
		header: 'Оплата поставщику',
		text: 'Комиссия всего 1% за проведение платежей',
	},
	{
		num: 2,
		header: 'Выкуп 1688',
		text: 'Быстро и безопасно выкупаем товары с платформы',
	},
	{
		num: 3,
		header: 'Проверка и консолидация груза',
		text: 'Гарантируем качество и целостность',
	},
	{
		num: 4,
		header: 'Логистика',
		text: 'Организуем доставку из Китая в Россию',
	},
	{
		num: 5,
		header: 'Таможенное оформление',
		text: 'Берем на себя все формальности',
	},
]

const Buyout1688WhatYouGet = () => {
	return (
		<div className={styles.container}>
			<h2>Что вы получаете с услугой выкупа от SELLERCHINA</h2>
			<p className={styles.subLabel}>Полный спектр услуг для закупок с 1688</p>
			<p className={styles.subLabelText}>
				Мы предлагаем комплексный подход к выкупу товаров с 1688, чтобы вы могли
				сосредоточиться на развитии бизнеса
			</p>
			<div className={styles.grid}>
				{data.map(({ num, header, text }) => (
					<div key={num} className={styles.item}>
						<div className={styles.number}>{num}</div>
						<div className={styles.content}>
							<h3 className={styles.header}>{header}</h3>
							<p className={styles.text}>{text}</p>
						</div>
					</div>
				))}
				<div className={styles.btnContainer}>
					<button className={styles.btn}>Заказать услугу</button>
					<p className={styles.btnSubText}>
						Получите полный цикл услуг для выкупа с 1688!
					</p>
				</div>
			</div>
			<p className={styles.back1688}>1688</p>
		</div>
	)
}

export default Buyout1688WhatYouGet
