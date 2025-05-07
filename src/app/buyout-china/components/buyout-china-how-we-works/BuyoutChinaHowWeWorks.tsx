import Image from 'next/image'
import styles from './BuyoutChinaHowWeWorks.module.scss'

const BuyoutChinaHowWeWorks = () => {
	return (
		<div className={styles.container}>
			<h2>как мы работаем</h2>
			<p className={styles.subLabel}>
				от подбора товара до продаж на маркетплейсах
			</p>
			<div className={styles.content}>
				<div className={styles.itemOdd}>
					<div className={styles.mainItem}>
						<div className={styles.number}>1</div>
						<div className={styles.text}>
							Подберем товар и найдем поставщика
						</div>
					</div>
					<p className={styles.subItem}>
						Находим лучшие предложения от поставщиков на Alibaba, 1688, Taobao и
						фабриках
					</p>
				</div>
				<div className={styles.itemEven}>
					<div className={styles.mainItem}>
						<div className={styles.number}>2</div>
						<p className={styles.text}>Выкупим товар у поставщика</p>
					</div>
					<p className={styles.subItem}>
						Закупаем товар по выгодным ценам с учетом ваших требований
					</p>
				</div>
				<div className={styles.itemOdd}>
					<div className={styles.mainItem}>
						<div className={styles.number}>3</div>
						<p className={styles.text}>Доставим из Китая в РФ</p>
					</div>
					<p className={styles.subItem}>
						Организуем быструю и надежную доставку из Китая в Россию
					</p>
				</div>
				<div className={styles.itemEven}>
					<div className={styles.mainItem}>
						<div className={styles.number}>4</div>
						<p className={styles.text}>Упакуем и отправим на маркетплейсы</p>
					</div>
					<p className={styles.subItem}>
						Упаковываем товары и отправляем их на склады маркетплейсов
					</p>
				</div>
				<div className={styles.itemOdd}>
					<div className={styles.mainItem}>
						<div className={styles.number}>5</div>
						<p className={styles.text}>Дадим старт продажам</p>
					</div>
					<p className={styles.subItem}>{'  '}</p>
				</div>
				<Image
					width={1060}
					height={40}
					alt=''
					src={'/buyout-china/buyoutChinaPath.svg'}
					className={styles.img}
				/>
			</div>
			<div className={styles.bot}>
				<Image
					width={67}
					height={67}
					alt='like'
					src={'/buyout-china/buyoutChinaLike.webp'}
					className={styles.img2}
				/>
				<p className={styles.botParagraph}>
					Доверьте нам весь процесс выкупа и доставки – экономьте время и
					деньги!
				</p>
				<button className={styles.btn}>Бесплатный расчет</button>
			</div>
		</div>
	)
}

export default BuyoutChinaHowWeWorks
