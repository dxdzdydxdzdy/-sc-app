'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from './MapSPB.module.scss'

const MapSPB = () => {
	return (
		<div className={styles.container}>
			<Link
				href={
					'https://www.google.com/maps/place/%D0%9D%D0%BE%D0%B2%D0%BE%D0%BB%D0%B8%D1%82%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D1%83%D0%BB.,+15%D0%94,+%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3,+%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F,+194100/@59.9807097,30.3551863,16.46z/data=!4m6!3m5!1s0x469633c2e303f375:0xde4907183ff60db7!8m2!3d59.980638!4d30.3570319!16s%2Fg%2F11cs84rld_?hl=ru-RU&entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D'
				}
				target='_blank'
				rel='noopener noreferrer'
			>
				<Image
					src='/spb.png'
					alt='Ссылка на наш адрес'
					width={380}
					height={125}
					className={styles.map}
				/>
			</Link>
		</div>
	)
}

export default MapSPB
