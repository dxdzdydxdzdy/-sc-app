'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Button from '../ui/Button/Button'
import styles from './Popup.module.scss'

const formatPhone = (value: string) => {
	// Убираем всё кроме цифр
	const digits = value.replace(/\D/g, '')

	let formatted = ''

	// Форматируем оставшиеся цифры
	if (digits.length > 0) {
		formatted += ' (' + digits.substring(0, 3)
	}
	if (digits.length >= 4) {
		formatted += ') ' + digits.substring(3, 6)
	}
	if (digits.length >= 7) {
		formatted += '-' + digits.substring(6, 8)
	}
	if (digits.length >= 9) {
		formatted += '-' + digits.substring(8, 10)
	}

	return formatted
}

const Popup = () => {
	const [value, setValue] = useState('')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const raw = e.target.value
		setValue(formatPhone(raw))
	}

	return (
		<div className={styles.popup}>
			<h2 className={styles.h2}>ОСТАВИТЬ ЗАЯВКУ</h2>
			<p className={styles.p}>МЫ СВЯЖЕМСЯ С ВАМИ В БЛИЖАЙШЕЕ ВРЕМЯ</p>
			<form
				className={styles.form}
				id='contact-form'
				method='POST'
				action='/api/send-email'
			>
				<input
					className={styles.input}
					type='text'
					id='name'
					name='name'
					placeholder='Имя'
					required
				/>
				<input
					className={styles.input}
					type='email'
					id='email'
					name='email'
					placeholder='Email'
					required
				/>

				<div className='w-full block relative'>
					<input
						className={styles.inputNum}
						value={value}
						onChange={handleChange}
						type='tel'
						id='tel'
						name='tel'
						placeholder='(999) 999 99-99'
						required
					/>
					<div className={styles.number}>
						<Image src='/rus.svg' width={18} height={15} alt='rus' />
						<p>+7</p>
					</div>
				</div>

				<Button>Отправить</Button>
			</form>
			<p className={styles.text1}>
				А еще у нас есть{' '}
				<Link
					href='https://t.me/sellerchina_official'
					target='blank'
					className={styles.tglink}
				>
					telegram-канал{' '}
					<Image
						alt='tg'
						src='/tg.svg'
						width={18}
						height={18}
						className='ml-[4px] pb-1'
					/>
				</Link>
			</p>
			<p className={styles.text2}>
				<Link
					href='https://t.me/sellerchina_official'
					target='blank'
					className={styles.tglink}
				>
					Подпишись,
				</Link>{' '}
				вдруг там что-то важное
			</p>
		</div>
	)
}

export default Popup
