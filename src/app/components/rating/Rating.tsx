import Image from 'next/image'
import EasyCarousel from '../ratingCarousel/Carousel'
import styles from './Rating.module.scss'

const Rating = () => {
	return (
		<div className={styles.container}>
			<h2>РЕЙТИНГ И ОТЗЫВЫ</h2>
			<div className={styles.rating}>
				<div className={styles.ratingItem}>
					<div className={styles.header}>
						<Image
							width={38}
							height={49}
							alt=''
							src={'/ratingY.webp'}
							className={styles.yandex}
						/>
						<p className={styles.label}>Яндекс Карты</p>
					</div>
					<div className={styles.content}>
						<span>4,8</span>
						<div className={styles.stars}>
							<Image width={165} height={37} alt='' src={'/ratingStars.svg'} />
							<p>более 30 довольных клиентов</p>
						</div>
					</div>
				</div>
				<div className={styles.ratingItem}>
					<div className={styles.header}>
						<Image
							width={43}
							height={43}
							alt=''
							src={'/rating2gis.webp'}
							className={styles.gis}
						/>
						<p className={styles.label}>2ГИС</p>
					</div>
					<div className={styles.content}>
						<span className={styles.span}>5,0</span>
						<div className={styles.stars}>
							<Image
								width={165}
								height={37}
								alt=''
								src={'/ratingStars.svg'}
								className={styles.starsImage}
							/>
							<p>более 30 довольных клиентов</p>
						</div>
					</div>
				</div>
				<div className={styles.ratingItemOtzovik}>
					<div className={styles.headerOtzovik}>
						<Image
							width={38}
							height={49}
							alt=''
							src={'/ratingOtzovik.webp'}
							className={styles.otzovik}
						/>
						<p className={styles.label}>Отзовик</p>
					</div>
					<div className={styles.content}>
						<span className={styles.span}>4,7</span>
					</div>
				</div>
			</div>
			<EasyCarousel />
		</div>
	)
}

export default Rating
