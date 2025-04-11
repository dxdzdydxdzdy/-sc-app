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
						<Image width={38} height={49} alt='' src={'/ratingY.svg'} />
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
						<Image width={43} height={43} alt='' src={'/rating2gis.svg'} />
						<p className={styles.label}>2ГИС</p>
					</div>
					<div className={styles.content}>
						<span>5,0</span>
						<div className={styles.stars}>
							<Image width={165} height={37} alt='' src={'/ratingStars.svg'} />
							<p>более 30 довольных клиентов</p>
						</div>
					</div>
				</div>
				<div className={styles.ratingItemOtzovik}>
					<div className={styles.headerOtzovik}>
						<Image width={38} height={49} alt='' src={'/ratingOtzovik.svg'} />
						<p className={styles.label}>Отзовик</p>
					</div>
					<div className={styles.content}>
						<span>4,7</span>
					</div>
				</div>
			</div>
			<EasyCarousel />
		</div>
	)
}

export default Rating
