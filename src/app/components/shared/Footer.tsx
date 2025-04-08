import Link from 'next/link'
import styles from './Footer.module.scss'
import MapChina from './maps/MapChina'
import MapSPB from './maps/MapSPB'

const Footer = () => {
	const menuLinks = [
		{
			name: 'Доставка из Китая',
			link: '/',
		},
		{
			name: 'Наши услуги',
			link: '/',
		},
		{
			name: 'Работа с маркетплейсами',
			link: '/',
		},
		{
			name: 'Выкуп с 1688',
			link: '/',
		},
	]
	const helpLinks = [
		{
			name: 'Как с вами связаться',
			link: '/',
		},
		{
			name: 'Секреты Sellerchina',
			link: '/',
		},
		{
			name: 'FAQ (вопрос - ответ)',
			link: '/',
		},
	]

	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h2 className={styles.header}>Наши реквизиты</h2>
					<div className={styles.requisites}>
						<p>ООО АЗИЯТРАНСЛОГИСТИК</p>
						<p>ИНН 7802949766</p>
						<p>ОГРН 1247800012316</p>
						<p>КПП 780201001</p>
					</div>
				</div>
				<div className={styles.content}>
					<h2 className={styles.header}>Офис в Спб</h2>
					<MapSPB />
					<div className={styles.address}>
						<p>Офис в Санкт-Петербурге</p>
						<p>БЦ Аквилон, Новолитовская 15Д.</p>
						<p>8 (800) 222-90-69</p>
					</div>
				</div>
				<div className={styles.content}>
					<h2 className={styles.header}>Меню</h2>
					<div className={styles.menu}>
						<ul>
							{menuLinks.map((item, index) => (
								<li key={index}>
									<Link href={item.link} className={styles.linkItem}>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className={styles.content}>
					<h2 className={styles.header}>Помощь</h2>
					<div className={styles.menu}>
						<ul>
							{helpLinks.map((item, index) => (
								<li key={index}>
									<Link href={item.link} className={styles.linkItem}>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className={styles.content}>
					<h2 className={styles.header}>Склад в Китае</h2>
					<MapChina />
					<div className={styles.address}>
						<p>Наш склад в Китае:</p>
						<p>义乌市经发二区2幢2单元</p>
						<p>183-9590-2097</p>
					</div>
				</div>
				<div className={styles.content}>
					<h2 className={styles.header}>Узнать больше</h2>
					<div className={styles.more}>
						<form action='/submit' method='POST'>
							<input
								className={styles.input}
								type='email'
								id='email'
								name='email'
								required
								placeholder='E-mail'
							/>
							<button className={styles.button} type='submit'>
								Отправить заявку
							</button>
						</form>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
