import Image from 'next/image'
import styles from './SpecialHowItWorks.module.scss'

const SpecialHowItWorks = () => {
	return (
		<div className={styles.container}>
			<h2>Как работает доставка спецлиниями?</h2>
			<p className={styles.subLabel}>
				Прозрачный процесс от заказа до получения
			</p>
			<div className={styles.content}>
				<Image
					width={157}
					height={516}
					alt='Доставка'
					src={'/special-line/SpecialHowItWorks.svg'}
					className={styles.img}
				/>
				<ul className={styles.list}>
					<li>
						<h4>Заявка</h4>
						<p>
							Оформите заявку через
							<br /> сайт или свяжитесь с менеджером
						</p>
					</li>
					<li>
						<h4>Сбор груза</h4>
						<p>
							Мы заберем ваш товар
							<br /> у поставщика в Китае
						</p>
					</li>
					<li>
						<h4>Таможенное оформление</h4>
						<p>Полное сопровождение на таможне</p>
					</li>
					<li>
						<h4>Транспортировка</h4>
						<p>
							Быстрая доставка спецлиниями <br />в Россию
						</p>
					</li>
					<li>
						<h4>Получение</h4>
						<p>Ваш груз у вас в срок и в сохранности</p>
					</li>
				</ul>
				<div className={styles.info}>
					<p>
						С SELLERCHINA вы всегда знаете, где ваш груз и когда он прибудет
					</p>
					<p>Оформите заявку и начните доставку уже сегодня!</p>
					<button>Оформить заявку</button>
				</div>
			</div>
		</div>
	)
}

export default SpecialHowItWorks
