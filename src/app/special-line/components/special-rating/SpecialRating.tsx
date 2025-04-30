'use client'
import { useEffect, useState } from 'react'
import styles from './SpecialRating.module.scss'

const SpecialRating = () => {
	const data = [
		{
			name: 'Мария',
			status: 'оптовик',
			text: '“Все понятно, оперативно, быстро. Хорошая упаковка. Цена конкурентноспособная. Получили все ответы на вопросы. Спасибо за помощь!”',
		},
		{
			name: 'Familahv',
			status: 'владелец интернет-магазина',
			text: '“С этой компанией я работаю регулярно. Они всегда выполняют свои обязательства: доставляют товары вовремя, а документы оформляют без задержек. За время сотрудничества у меня не возникало ни одной проблемы.”',
		},
		{
			name: 'Сергей',
			status: 'Селлер на маркетплейсах',
			text: '“Спасибо, честно - не ожидал 😁 \nБудем сотрудничать🤝”',
		},
		{
			name: 'Bogoliubova',
			status: 'оптовик',
			text: '“С ребятами работаю не первый год. Всегда оперативно решают любой вопрос. Быстро отвечают и помогают найти решение любой задаче. Плюс тарифы на доставку очень привлекательные. Есть с чем сравнить, поэтому эту компанию могу рекомендовать на 100%.”',
		},
		{
			name: 'Татьяна',
			status: 'Селлер OZON',
			text: '“Товар забрали все отлично 👍🏻 спасибо вам”',
		},
		{
			name: 'Ирина',
			status: 'Селлер на маркетплейсах',
			text: '“Достаточное время сотрудничаю с этой компанией - всегда точно выполняют свои обязательства! Доставка с Китая быстрая, все документы оформляют без ошибок и в срок. Услуги под ключ, что очень удобно. Приятно сотрудничать, полностью доверяю им )”',
		},
		{
			name: 'Елизавета',
			status: 'владелец интернет-магазина',
			text: '“Доставили груз в сроки, также при отгрузке в Китае отправили фото товара, чтобы мы удостоверились в состоянии и качестве товара. Ребята всегда на связи, по любым вопросам. В общем, рекомендую! Спасибо.”',
		},
		{
			name: 'laxvo',
			status: 'оптовик',
			text: '“Сделали выкуп большой партии обуви и доставили в Спб из Китая. Все прошло слаженно, менеджеры всегда были на связи. Работаю с данной компанией более года и очень доволен”',
		},
		{
			name: 'Дмитрий',
			status: 'Селлер OZON',
			text: '“Доброе утро!\nВчера все забрал, спасибо!”',
		},
		{
			name: 'Анна',
			status: 'владелец интернет-магазина',
			text: '“С SELLERCHINA доставка стала в 2 раза быстрее, а клиенты довольны!”',
		},
		{
			name: 'Игорь',
			status: 'оптовик',
			text: '“Надежная компания, всегда всё вовремя и без сюрпризов.”',
		},
		{
			name: 'Мария',
			status: 'стартапер',
			text: '“Доступные цены и отличная поддержка — идеально для новичков.”',
		},
	]

	const [currentSlide, setCurrentSlide] = useState(0)
	const slides = []

	for (let i = 0; i < data.length; i += 4) {
		slides.push(data.slice(i, i + 4))
	}

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide(prev => (prev + 1) % slides.length)
		}, 5000)
		return () => clearInterval(interval)
	}, [slides.length])

	return (
		<div className={styles.container}>
			<h2>Что говорят наши клиенты о спецлиниях</h2>
			<p className={styles.subLabel}>
				Надежная доставка оптимизирует ваш бизнес. <br /> Отзывы наших клиентов:
			</p>
			<div className={styles.slider}>
				<div
					className={styles.slides}
					style={{ transform: `translateX(-${currentSlide * 100}%)` }}
				>
					{slides.map((slide, index) => (
						<div key={index} className={styles.slide}>
							{slide.map((review, i) => (
								<div key={i} className={styles.reviewCard}>
									<h3>{review.name}</h3>
									<p className={styles.status}>{review.status}</p>
									<p className={styles.text}>{review.text}</p>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
			<div className={styles.dots}>
				{slides.map((_, index) => (
					<button
						key={index}
						className={`${styles.dot} ${
							currentSlide === index ? styles.activeDot : ''
						}`}
						onClick={() => setCurrentSlide(index)}
					/>
				))}
			</div>
		</div>
	)
}

export default SpecialRating
