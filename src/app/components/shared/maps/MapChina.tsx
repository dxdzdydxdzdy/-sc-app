'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from './MapChina.module.scss'

const MapChina = () => {
	return (
		<div className={styles.container}>
			<Link
				href={
					"https://www.google.com/maps/place/29%C2%B018'37.9%22N+120%C2%B001'47.7%22E/@29.3101877,120.0305089,15z/data=!4m4!3m3!8m2!3d29.31052!4d120.02992?hl=ru-RU&entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"
				}
				target='_blank'
				rel='noopener noreferrer'
			>
				<Image
					src='/china.png'
					alt='Ссылка на адрес нашего склада в Китае'
					width={380}
					height={125}
					className={styles.map}
				/>
			</Link>
		</div>
	)
}

export default MapChina
