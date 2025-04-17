'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styles from './Carousel.module.scss'
const data = [
	{
		name: 'Мария',
		text: 'Все понятно, оперативно, быстро. Хорошая упаковка. Цена конкурентноспособная. Получили все ответы на вопросы. Спасибо за помощь!',
		from: 'Яндекс Карты',
		fromImg: '/carouselY.svg',
	},
	{
		name: 'Familahv',
		text: 'С этой компанией я работаю регулярно. Они всегда выполняют свои обязательства: доставляют товары вовремя, а документы оформляют без задержек. За время сотрудничества у меня не возникало ни одной проблемы.',
		from: 'Отзовик',
		fromImg: '/carouselOtzovik.svg',
	},

	{
		name: 'Сергей',
		text: 'Спасибо, честно - не ожидал 😁 \nБудем сотрудничать🤝',
		from: 'Telegram',
		fromImg: '/carouselTG.svg',
	},
	{
		name: 'Bogoliubova',
		text: 'С ребятами работаю не первый год. Всегда оперативно решают любой вопрос. Быстро отвечают и помогают найти решение любой задаче. Плюс тарифы на доставку очень привлекательные. Есть с чем сравнить, поэтому эту компанию могу рекомендовать на 100%.',
		from: 'Отзовик',
		fromImg: '/carouselOtzovik.svg',
	},
	{
		name: 'Татьяна',
		text: 'Товар забрали все отлично 👍🏻 спасибо вам',
		from: 'Telegram',
		fromImg: '/carouselTG.svg',
	},
	{
		name: 'Ирина',
		text: 'Достаточное время сотрудничаю с этой компанией - всегда точно выполняют свои обязательства! Доставка с Китая быстрая, все документы оформляют без ошибок и в срок. Услуги под ключ, что очень удобно. Приятно сотрудничать, полностью доверяю им )',
		from: 'Яндекс Карты',
		fromImg: '/carouselY.svg',
	},
	{
		name: 'Елизавета',
		text: 'Доставили груз в сроки, также при отгрузке в Китае отправили фото товара, чтобы мы удостоверились в состоянии и качестве товара. Ребята всегда на связи, по любым вопросам. В общем, рекомендую! Спасибо.',
		from: 'Яндекс Карты',
		fromImg: '/carouselY.svg',
	},
	{
		name: 'laxvo',
		text: 'Сделали выкуп большой партии обуви и доставили в Спб из Китая. Все прошло слаженно, менеджеры всегда были на связи. Работаю с данной компанией более года и очень доволен',
		from: 'Отзовик',
		fromImg: '/carouselOtzovik.svg',
	},
	{
		name: 'Дмитрий',
		text: 'Доброе утро!\nВчера все забрал, спасибо!',
		from: 'Telegram',
		fromImg: '/carouselTG.svg',
	},
]

export default function EasyCarousel() {
	const [slidePercent, setSlidePercent] = useState(33.33)

	useEffect(() => {
		const updatePercent = () => {
			const width = window.innerWidth
			if (width < 1320) {
				setSlidePercent(100)
			} else {
				setSlidePercent(33.33)
			}
		}

		updatePercent()
		window.addEventListener('resize', updatePercent)
		return () => window.removeEventListener('resize', updatePercent)
	}, [])
	return (
		<div className='myCarouselWrap'>
			<Carousel
				showThumbs={false}
				infiniteLoop
				autoPlay
				showStatus={false}
				centerMode={true}
				dynamicHeight={false}
				centerSlidePercentage={slidePercent}
				emulateTouch
				showArrows={false}
				className={styles.carouselContainer}
			>
				{data.map((item, index) => (
					<div key={index} className={styles.item}>
						<div className={styles.itemTop}>
							<div className={styles.itemServiceImgContainer}>
								<Image
									src={item.fromImg}
									alt={item.from}
									width={60}
									height={60}
									className={styles.itemServiceImg}
								/>
							</div>
							<div className={styles.info}>
								<p className={styles.itemName}>{item.name}</p>
								<p className={styles.itemServiceName}>{item.from}</p>
							</div>
						</div>

						<div>
							<p className={styles.itemText}>{item.text}</p>
						</div>
					</div>
				))}
			</Carousel>
		</div>
	)
}
