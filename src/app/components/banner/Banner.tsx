import Image from 'next/image'
import Link from 'next/link'
import styles from './Banner.module.scss'

const Banner = () => {
	return (
		<div className={styles.container}>
			<Link href={'/'}>
				<p>
					ЗАКАЗЫВАЙТЕ НАПРЯМУЮ ИЗ КИТАЯ <b>СО СКИДКОЙ 10% НА ПЕРВУЮ ПОКУПКУ</b>
				</p>
				<Image
					src={'/percentBanner.svg'}
					width={1240}
					height={1240}
					alt='percent'
					className={styles.percent}
				/>
			</Link>
		</div>
	)
}

export default Banner
