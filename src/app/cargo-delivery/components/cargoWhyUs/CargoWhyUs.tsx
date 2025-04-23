import Image from 'next/image'
import styles from './CargoWhyUs.module.scss'

const CargoWhyUs = () => {
	return (
		<div className={styles.container}>
			<h2>
				Почему SellerChina — Ваш партнер <br />в Карго доставке
			</h2>
			<div className={styles.banner}>
				<div className={styles.text}>
					<h3>SellerChina - ключ к вашему успеху</h3>
					<p>
						Мы организуем <strong>выкуп товаров</strong> у китайских
						поставщиков, обеспечивая выгодные условия и контроль качества. Затем
						осуществляется <strong>доставка грузов из Китая</strong> в РФ с
						использованием оптимизированных маршрутов.
					</p>
				</div>
				<Image
					width={531}
					height={322}
					alt='Груз'
					src={'/cargo-delivery/cargoWhyUsImage1.webp'}
					className={styles.image}
				/>
			</div>
		</div>
	)
}

export default CargoWhyUs
