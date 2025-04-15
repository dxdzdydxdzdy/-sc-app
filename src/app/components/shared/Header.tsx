'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Navigation from '../navigation/Navigation'
import ButtonPopup from '../ui/ButtonPopup/ButtonPopup'
import styles from './Header.module.scss'
import NavigationMobile from './navigationMobile/NavigationMobile'

const Header = () => {
	const [isMenuOpen, setMenuOpen] = useState(false)

	const handleCloseMenu = () => {
		setMenuOpen(false)
	}

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<Link href='/' className={styles.logoLink}>
						<Image
							src='/logo.svg'
							alt='logo'
							width={90}
							height={80}
							className={styles.logoDesktop}
						/>
						<Image
							src='/logo-mobile.svg'
							alt='mobile-logo'
							width={138}
							height={36}
							className={styles.logoMobile}
						/>
					</Link>
				</div>
				<div className={styles.mid}>
					<div className={styles.info}>
						<div className={styles.contacts}>
							<ul>
								<li>
									<Image src='/phone.svg' alt='phone' width={10} height={10} />
									<p>8 (800) 222-90-69</p>
								</li>
								<li>
									<Image src='/mail.svg' alt='mail' width={10} height={5} />
									<p>support@sellerchina.ru</p>
								</li>
								<li>
									<Image src='/map.svg' alt='map' width={10} height={10} />
									<p>Санкт-Петербург, Новолитовская 15д</p>
								</li>
							</ul>
							<div className={styles.socials}>
								<Link href='/'>
									<Image src='vk.svg' alt='vk' width={22} height={13} />
								</Link>
								<Link href='/'>
									<Image src='tg.svg' alt='tg' width={14} height={13} />
								</Link>
								<Link href='/'>
									<Image src='wu.svg' alt='whatsapp' width={17} height={17} />
								</Link>
							</div>

							<Link href='/' className={styles.partner}>
								<Image src='partner.svg' alt='partner' width={11} height={11} />
								<p>Будь партнером</p>
							</Link>
						</div>
					</div>
					<Navigation />
				</div>

				<div className={`${styles.buttonContainer} pt-12`}>
					<ButtonPopup>Сделать заказ</ButtonPopup>
				</div>

				{/* ----------------------MOBILE------------------------------------------ */}

				<div className={styles.headerRight}>
					<div className={styles.mobileSocials}>
						<Link href='/' className={styles.mobileSocialsItems}>
							<Image src='vk.svg' alt='vk' width={22} height={13} />
						</Link>
						<Link href='/'>
							<Image src='tg.svg' alt='tg' width={14} height={13} />
						</Link>
						<Link href='/'>
							<Image src='wu.svg' alt='whatsapp' width={17} height={17} />
						</Link>
					</div>
					<button
						className={styles.burgerButton}
						onClick={() => setMenuOpen(true)}
					>
						<Image src='burger.svg' alt='menu' width={29} height={18} />
					</button>
				</div>
			</div>
			{isMenuOpen && <NavigationMobile onClose={handleCloseMenu} />}
		</header>
	)
}

export default Header
