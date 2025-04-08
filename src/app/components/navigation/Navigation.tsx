import styles from './Navigation.module.scss'

const Navigation = () => {
	const navItems = [
		{
			navName: 'Доставка из Китая',
			link: '/',
			child: [
				{ name: 'Карго перевозки', link: '/' },
				{ name: 'Белая доставка', link: '/' },
				{ name: 'Автозапчасти', link: '/' },
				{ name: 'Спецлиния из Китая', link: '/' },
			],
		},
		{
			navName: 'Услуги',
			link: '/',
			child: [
				{ name: 'Выкуп 1688', link: '/' },
				{ name: 'Выкуп из Китая', link: '/' },
				{ name: 'Честный знак', link: '/' },
			],
		},
		{
			navName: 'Для селлеров',
			link: 'https://storetail.ru/',
			child: [
				{ name: 'Фулфилмент', link: '/' },
				{ name: 'Подбор товара', link: '/' },
				{ name: 'Продвижение товара', link: '/' },
			],
		},
		{
			navName: 'Калькулятор',
			link: '/',
			child: [],
		},
		{
			navName: 'Ещё',
			link: '/',
			child: [
				{ name: 'Наши секреты', link: '/' },
				{ name: 'FAQ', link: '/' },
			],
		},
	]

	return (
		<nav className={styles.nav}>
			<ul className={styles.navList}>
				{navItems.map((item, index) => (
					<li key={index} className={styles.navItem}>
						<a href={item.link} className={styles.navLink}>
							{item.navName}
						</a>
						{item.child.length > 0 && (
							<ul className={styles.subMenu}>
								{item.child.map((subItem, subIndex) => (
									<li key={subIndex}>
										<a href={subItem.link} className={styles.subMenuLink}>
											{subItem.name}
										</a>
									</li>
								))}
							</ul>
						)}
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navigation
