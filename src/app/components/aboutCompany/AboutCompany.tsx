'use client'

import Image from 'next/image'
import { useCountUpOnView } from '../../../hooks/useCountUpOnView'
import styles from './AboutCompany.module.scss'

const AboutCompany = () => {
	const statsRef = useCountUpOnView(3000)

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
					<Image width={610} height={451} alt='' src={'/aboutPhoto.webp'} />
				</div>
			</div>
			<div className={styles.mobileContainer}>
				<h4>
					Логистическая компания
					<br /> полного цикла <span>SELLERCHINA</span>
				</h4>

				<div className={styles.gridMobile}>
					<div className={styles.gridTop}>
						<p className={styles.p1Mobile}>Подбор товара </p>
						<p className={styles.p2Mobile}>Выкуп товара</p>
						<div className={styles.curveMobileRight}>
							<svg
								width='74'
								height='34'
								viewBox='0 0 74 34'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M0.93138 3.06809C0.9224 3.5466 1.31475 3.93026 1.79212 3.89593C10.6734 3.2574 83.5636 -1.39925 63.354 19.3821C53.5948 29.4173 41.1232 31.7927 38.0193 32.2432C37.6047 32.3034 37.2897 32.6518 37.2818 33.0706V33.0706C37.2729 33.5459 37.6653 33.9259 38.1387 33.8828C42.1293 33.5198 58.9065 31.2759 69.881 18.698C90.9586 -5.45909 9.78129 1.52652 1.60385 2.28617C1.19534 2.32412 0.939078 2.65789 0.93138 3.06809V3.06809Z'
									fill='#FEBD6D'
								/>
							</svg>
						</div>
					</div>

					<div className={styles.gridMid}>
						<p className={styles.p3Mobile}>Упаковка товара</p>
						<p className={styles.p4Mobile}>Доставка из Китая</p>
						<div className={styles.curveMobileLeft}>
							<svg
								width='69'
								height='36'
								viewBox='0 0 69 36'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M68.2968 34.5974C68.3733 34.1644 68.0839 33.7609 67.6459 33.7223C59.3334 32.9899 -11.0549 26.2655 11.1881 10.3566C21.9383 2.66769 34.1894 2.40249 37.1641 2.46155C37.5512 2.46923 37.8914 2.19721 37.9587 1.81598V1.81598C38.0346 1.38583 37.7377 0.984769 37.302 0.953642C33.5329 0.684359 17.1622 0.160688 4.87677 9.99712C-18.656 28.8388 59.8391 34.6865 67.5728 35.2134C67.9515 35.2392 68.2309 34.9712 68.2968 34.5974V34.5974Z'
									fill='#FEBD6D'
								/>
							</svg>
						</div>
					</div>
					<div className={styles.gridBot}>
						<p className={styles.p5Mobile}>Доставка на мaркетплейсы</p>
					</div>
				</div>

				<div className={styles.contentMobile}>
					<div className={styles.leftMobile}>
						<p className={styles.textMobile}>
							Мы организуем выкуп товаров у китайских поставщиков, обеспечивая
							выгодные условия и контроль качества. Затем осуществляется{' '}
							<strong>доставка грузов из Китая в РФ</strong> с использованием
							оптимизированных маршрутов.
						</p>
					</div>
					<div className={styles.rightMobile}>
						<Image width={143} height={132} alt='' src={'/aboutPhoto.webp'} />
					</div>
				</div>
				<p className={styles.mobileText}>
					При необходимости Sellerchina предоставляет услуги упаковки товара,
					подготавливая его к дальнейшей транспортировке или продаже. Если
					нужно, компания также доставляет продукцию напрямую на маркетплейсы,
					упрощая процесс для продавцов и обеспечивая полный цикл логистики от
					закупки до реализации.
				</p>
			</div>
			<div className={styles.stats} ref={statsRef}>
				<div className={styles.statsItem}>
					<p className={styles.moreThan}>Более</p>
					<p data-target='3' data-suffix='' className={styles.digit}>
						0
					</p>
					<p className={styles.description}>
						лет работы
						<br /> с Китаем
					</p>
				</div>
				<div className={styles.statsItem}>
					<p data-target='200' data-suffix='+' className={styles.digit}>
						0+
					</p>
					<p className={styles.description}>
						тонн <br />
						доставляем <br />
						ежемесячно
					</p>
				</div>
				<div className={styles.statsItem}>
					<p data-target='150' data-suffix='+' className={styles.digit}>
						0+
					</p>
					<p className={styles.description}>
						клиентов
						<br />
						остались <br />
						довольны
					</p>
				</div>
				<div className={styles.statsItem}>
					<p data-target='95' data-suffix='%' className={styles.digit}>
						0%
					</p>
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
