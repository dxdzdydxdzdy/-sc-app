import Image from 'next/image'
import SpecialCalculateDelivery from '../special-calculator/SpecialCalculateDelivery'
import styles from './SpecialCalculate.module.scss'

const SpecialCalculate = () => {
	return (
		<div className={styles.container}>
			<h2>Рассчитайте стоимость доставки за минуту</h2>
			<p className={styles.subLabel}>
				Прозрачные тарифы и никаких скрытых платежей
			</p>
			<div className={styles.paragraphContainer1}>
				<Image
					src={'/special-line/SpecialCalculateIcon1.svg'}
					alt=''
					width={39}
					height={41}
					className={styles.img1}
				/>
				<p>
					Хотите узнать, сколько будет стоить доставка вашего груза из Китая в
					Россию?
				</p>
			</div>
			<div className={styles.paragraphContainer2}>
				<Image
					src={'/special-line/SpecialCalculateIcon2.webp'}
					alt=''
					width={65}
					height={65}
					className={styles.img2}
				/>
				<p>
					Просто укажите <b>вес</b>, <b>объем</b> и <b>тип товара</b>, и мы
					предложим оптимальный тариф. Наши менеджеры готовы проконсультировать
					вас и подобрать лучший маршрут
				</p>
			</div>
			<div className={styles.bottomContent}>
				<SpecialCalculateDelivery />
				<div className={styles.right}>
					<p className={styles.speech}>
						<span className={styles.quotes}>“</span>Не откладывайте —
						рассчитайте стоимость прямо сейчас и начните экономить на логистике
						с SELLERCHINA!<span className={styles.quotes}>”</span>
					</p>
					<div className={styles.botTextContainer}>
						<p className={styles.botText}>
							Введите данные в калькулятор и получите персональное{' '}
							<span>предложение</span>
						</p>
						<Image
							src={'/special-line/SpecialCalculateManager.webp'}
							alt='Менеджер SellerChina'
							width={241}
							height={392}
							className={styles.botManager}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SpecialCalculate
