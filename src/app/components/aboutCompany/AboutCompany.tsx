import Image from 'next/image'
import styles from './AboutCompany.module.scss'

const AboutCompany = () => {
	return (
		<div className={styles.container}>
			<span className={styles.containerLabel}>SELLERCHINA</span>
			<h2>О КОМПАНИИ</h2>

			<div className={styles.content}>
				<div className={styles.left}>
					<h4>
						Логистическая компания
						<br /> полного цикла <span>SELLERCHINA</span>
					</h4>
					<div className={styles.gridContainer}>
						<div className={styles.grid}>
							<p className={styles.p1}>Подбор товара </p>
							<p className={styles.p2}>Выкуп товара</p>
							<p className={styles.p3}>Доставка из Китая</p>
							<p className={styles.p4}>Доставка на маркетплейсы</p>
							<p className={`${styles.p5}`}>Упаковка товара</p>
						</div>
						<div className={styles.curve}>
							<svg
								width='151'
								height='63'
								viewBox='0 0 151 63'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M0 56.6456C0 55.7612 0.683966 55.0597 1.56535 55.132C18.7727 56.5434 171.268 68.0396 130 28.5C110.031 9.36762 84.0635 4.57798 77.869 3.67803C77.0926 3.56522 76.5 2.9032 76.5 2.11862C76.5 1.23991 77.2174 0.546816 78.0921 0.630579C85.9418 1.38228 121.046 6.01184 143.5 30C186.362 75.7915 17.3339 59.7484 1.22403 58.1257C0.457744 58.0485 0 57.4157 0 56.6456Z'
									fill='#FEBD6D'
								/>
							</svg>
						</div>
					</div>
					<p className={styles.text}>
						Мы организуем выкуп товаров у китайских поставщиков, обеспечивая
						выгодные условия и контроль качества. Затем осуществляется доставка
						грузов из Китая в РФ с использованием оптимизированных маршрутов.При
						необходимости Sellerchina предоставляет услуги упаковки товара,
						подготавливая его к дальнейшей транспортировке или продаже. Если
						нужно, компания также доставляет продукцию напрямую на маркетплейсы,
						упрощая процесс для продавцов и обеспечивая полный цикл логистики от
						закупки до реализации.
					</p>
				</div>
				<div className={styles.right}>
					<Image width={489} height={451} alt='' src={'/aboutPhoto.svg'} />
				</div>
			</div>
			<div className={styles.stats}>
				<div className={styles.statsItem}>
					<p className={styles.moreThan}>Более</p>
					<p className={styles.digit}>3</p>
					<p className={styles.description}>
						лет работы
						<br /> с Китаем
					</p>
				</div>
				<div className={styles.statsItem}>
					<p className={styles.digit}>200+</p>
					<p className={styles.description}>
						тонн <br />
						доставляем <br />
						ежемесячно
					</p>
				</div>
				<div className={styles.statsItem}>
					<p className={styles.digit}>150+</p>
					<p className={styles.description}>
						клиентов
						<br />
						остались <br />
						довольны
					</p>
				</div>
				<div className={styles.statsItem}>
					<p className={styles.digit}>95%</p>
					<p className={styles.description}>
						доставок <br />в срок
					</p>
				</div>
				<div className={styles.statsItem}></div>
			</div>
		</div>
	)
}

export default AboutCompany
