import Image from 'next/image'
import Link from 'next/link'
import styles from './Banner.module.scss'

const Banner = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imageWrapper}>
				<Image
					src='/cargo-delivery/banner1x.webp'
					alt='Баннер'
					width={2008}
					height={567}
				/>
			</div>

			<div className={styles.bannerContainer}>
				<h1>
					КАРГО ДОСТАВКА <br />
					ИЗ КИТАЯ В РОССИЮ
				</h1>
				<span>9-25 ДНЕЙ</span>
				<p>
					Организуем быструю и безопасную доставку грузов из Китая для вашего
					бизнеса
				</p>
				<div className={styles.buttons}>
					<button className={styles.buttonLeft}>Рассчитать стоимость</button>
					<button>
						<Link target='_blank' href='/'>
							Виды карго доставки
						</Link>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Banner
