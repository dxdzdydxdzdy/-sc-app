import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import PopupMobile from '../popupMobile/PopupMobile'
import styles from './NavigationMobile.module.scss'

type Props = {
	onClose: () => void
}

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

const NavigationMobile = ({ onClose }: Props) => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null)

	const [isOpen, setIsOpen] = useState(false)

	const [menuVisible, setMenuVisible] = useState(false)

	useEffect(() => {
		setMenuVisible(true)
	}, [])

	const toggleItem = (index: number) => {
		setActiveIndex(prev => (prev === index ? null : index))
	}
	const handleClose = () => {
		setMenuVisible(false)
		setTimeout(() => {
			onClose()
		}, 400)
	}
	return (
		<div
			className={`${styles.container} ${menuVisible ? styles.menuOpen : ''}`}
		>
			<div className={styles.menu}>
				<div className={styles.header}>
					<Image
						src={'/logoMobileMenu.svg'}
						width={138}
						height={36}
						alt='logo'
					/>
					<button onClick={handleClose}>
						<Image src={'/closeMenu.svg'} width={24} height={24} alt='close' />
					</button>
				</div>
				<div className={styles.content}>
					<ul className={styles.list}>
						{navItems.map((item, index) => {
							const hasChildren = item.child.length > 0
							const isActive = index === activeIndex

							return (
								<li key={index} className={styles.menuItem}>
									<div
										className={styles.menuHeader}
										onClick={() => hasChildren && toggleItem(index)}
									>
										{hasChildren ? (
											<span>{item.navName}</span>
										) : (
											<Link href={item.link}>{item.navName}</Link>
										)}
										{hasChildren && (
											<Image
												src='/accordeonArrow.svg'
												width={20}
												height={20}
												alt='Переключить'
												className={`${styles.arrowIcon} ${
													isActive ? styles.arrowActive : ''
												}`}
											/>
										)}
									</div>
									{hasChildren && (
										<ul
											className={`${styles.subMenu} ${
												isActive ? styles.subMenuActive : ''
											}`}
										>
											<span className={styles.verticalLine} aria-hidden></span>
											{item.child.map((child, i) => (
												<li key={i}>
													<Link href={child.link}>{child.name}</Link>
												</li>
											))}
										</ul>
									)}
								</li>
							)
						})}
					</ul>
					<div className={styles.footer}>
						<button onClick={() => setIsOpen(true)} className={styles.button}>
							Сделать заказ
						</button>
						{isOpen && <PopupMobile onClose={() => setIsOpen(false)} />}
						<div className={styles.info}>
							<ul>
								<li>
									<Image src='/phone.svg' alt='phone' width={15} height={15} />
									<p>8 (800) 222-90-69</p>
								</li>
								<li>
									<Image src='/mail.svg' alt='mail' width={15} height={15} />
									<p>support@sellerchina.ru</p>
								</li>
								<li>
									<Image src='/map.svg' alt='map' width={15} height={15} />
									<p>Санкт-Петербург, Новолитовская 15д</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NavigationMobile
