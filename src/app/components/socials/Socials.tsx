import Image from 'next/image'
import Link from 'next/link'
import styles from './Socials.module.scss'

const Socials = () => {
	return (
		<div className={styles.container}>
			<h2>МЫ В СОЦИАЛЬНЫХ СЕТЯХ</h2>
			<div className={styles.grid}>
				<Link href={'/'} passHref target='blank' className={styles.link}>
					<div className={styles.cardTG}>
						<h5>TELEGRAM</h5>
						<div className={styles.footer}>
							<p>Телеграм-канал</p>
							<Image
								width={33}
								height={33}
								alt=''
								src={'/socialsArrow.svg'}
								className={styles.arrow}
							/>
						</div>
					</div>
				</Link>
				<Link href={'/'} passHref target='blank' className={styles.link}>
					<div className={styles.cardTG}>
						<h5>TELEGRAM</h5>
						<div className={styles.footer}>
							<p>Менеджер</p>
							<Image
								width={33}
								height={33}
								alt=''
								src={'/socialsArrow.svg'}
								className={styles.arrow}
							/>
						</div>
					</div>
				</Link>
				<Link href={'/'} passHref target='blank' className={styles.link}>
					<div className={styles.cardVK}>
						<h5>VK</h5>
						<div className={styles.footer}>
							<p>Группа</p>
							<Image
								width={33}
								height={33}
								alt=''
								src={'/socialsArrow.svg'}
								className={styles.arrow}
							/>
						</div>
					</div>
				</Link>
				<div className={styles.info}>
					<h5 className={styles.text}>Подписывайтесь!</h5>
					<p>
						Чтобы быть в курсе всех новостей. Получайте полезные советы по
						логистике из Китая и не пропускайте выгодные предложения.{' '}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Socials
