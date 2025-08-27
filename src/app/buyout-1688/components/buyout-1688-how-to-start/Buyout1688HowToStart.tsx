import styles from './Buyout1688HowToStart.module.scss'
import {
	IconCamera,
	IconDoc,
	IconDocSend,
	IconDownload,
	IconGlobe,
	IconSign,
} from './icons'

const data = [
	{
		icon: IconGlobe,
		header: 'Зайдите на сайт 1688 или скачайте приложение',
		subTitle: 'Найдите нужные товары',
		download: false,
		send: false,
	},
	{
		icon: IconDownload,
		header: 'Скачайте бланк заказа',
		subTitle: 'Укажите всю информацию о товаре',
		download: true,
		send: false,
	},
	{
		icon: IconSign,
		header: 'Пропишите данные о товаре',
		subTitle: 'Укажите артикулы, количество и требования',
		download: false,
		send: false,
	},
	{
		icon: IconCamera,
		header: 'Поиск товара по фото',
		subTitle: 'Не нашли товар? Мы найдем его за вас!',
		download: false,
		send: false,
	},
	{
		icon: IconDoc,
		header: 'Заполните бланк заказа',
		subTitle: 'Укажите все детали для точного выкупа',
		download: false,
		send: false,
	},
	{
		icon: IconDocSend,
		header: 'Отправьте бланк заказа',
		subTitle: 'Мы проверим его и начнем работу',
		download: false,
		send: true,
	},
]

const Buyout1688HowToStart = () => {
	return (
		<div className={styles.container}>
			<h2>Как начать закупки с 1688 через SELLERCHINA</h2>
			<p className={styles.subLabel}>Простые шаги для старта сотрудничества</p>
			<div className={styles.СЫ}>
				{data.map((item, index) => (
					<div key={index} className={styles.card}>
						<div className={styles.top}>
							<div className={styles.icon}>{item.icon}</div>
							<h3 className={styles.header}>{item.header}</h3>
						</div>
						<p className={styles.subTitle}>{item.subTitle}</p>
						{item.download && (
							<button className={styles.btnDownload}>Скачать бланк</button>
						)}
						{item.send && (
							<button className={styles.btnSend}>Отправить бланк</button>
						)}
					</div>
				))}
			</div>
		</div>
	)
}

export default Buyout1688HowToStart
