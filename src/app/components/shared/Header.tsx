import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../navigation/Navigation'
import ButtonPopup from '../ui/ButtonPopup/ButtonPopup'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<Link href='/'>
						<Image src='logo.svg' alt='logo' width={90} height={80} />
					</Link>
				</div>
				<div className=''>
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

				<div className='pt-12'>
					<ButtonPopup>Сделать заказ</ButtonPopup>
				</div>
			</div>
		</header>
	)
}

export default Header
