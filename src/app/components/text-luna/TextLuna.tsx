import Image from 'next/image'
import Link from 'next/link'
import styles from './TextLuna.module.scss'

const TextLuna = () => {
	return (
		<div className={styles.container}>
			<div className={styles.dialogContainer1}>
				<Image
					width={420}
					height={129}
					src={'/dialog1.svg'}
					alt='диалог'
					className={styles.dialog}
				/>
				<p>
					<span>Привет!</span>
					<br />
					Меня зовут <span>Луна</span> и я ваш
					<br />
					персональный менеджер!
				</p>
			</div>
			<div className={styles.dialogContainer2}>
				<Image
					width={328}
					height={90}
					src={'/dialog2.svg'}
					alt='диалог'
					className={styles.dialog}
				/>
				<p>
					Напишите мне и я отвечу <br /> в течение <span>10 минут</span>
				</p>
			</div>
			<div className={styles.dialogContainer3}>
				<Image
					width={596}
					height={129}
					src={'/dialog3.svg'}
					alt='диалог'
					className={styles.dialog}
				/>
				<Image
					width={349}
					height={380}
					src={'/lunaHome.svg'}
					alt='Луна'
					className={styles.lunaImage}
				/>
				<Link
					href={'https://t.me/sellerchinaru1'}
					target='blank'
					className={styles.link}
				>
					Написать Луне
				</Link>
			</div>
		</div>
	)
}

export default TextLuna
