'use client'
import Image from 'next/image'
import { useState } from 'react'
import styles from './AnyQuestion.module.scss'
const formatPhone = (value: string) => {
	const digits = value.replace(/\D/g, '')

	let formatted = ''

	if (digits.length > 0) {
		formatted += '(' + digits.substring(0, 3)
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

const AnyQuestion = () => {
	const [value, setValue] = useState('')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const raw = e.target.value
		setValue(formatPhone(raw))
	}
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<h5>У ВАС ЕСТЬ ВОПРОС?</h5>
				<p>
					Мы готовы помочь вам с любыми задачами по доставке <br />
					из Китая в Россию!
					<br />
					Свяжитесь с нами для консультации или уточнения деталей
				</p>
			</div>
			<div className={styles.right}>
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
					<button>Отправить</button>
				</form>
			</div>
		</div>
	)
}

export default AnyQuestion
