import Image from 'next/image'
import styles from './WhiteDocuments.module.scss'

const WhiteDocuments = () => {
	const data = [
		{
			img: '/white-delivery/WhiteDocumentsIcon1.svg',
			label: 'Инвойсы',
			w: 96,
			h: 120,
		},
		{
			img: '/white-delivery/WhiteDocumentsIcon2.svg',
			label: 'Таможенные декларации',
			w: 91,
			h: 113,
		},
		{
			img: '/white-delivery/WhiteDocumentsIcon3.svg',
			label: 'Сертификаты',
			w: 133,
			h: 133,
		},
		{
			img: '/white-delivery/WhiteDocumentsIcon4.svg',
			label: 'Упаковочные листы',
			w: 115,
			h: 115,
		},
	]

	return (
		<div className={styles.container}>
			<h2>
				Документы для белой доставки <br />
				из Китая
			</h2>
			<p className={styles.label}>Полный пакет документов без хлопот</p>
			<p className={styles.subLabel}>
				Мы берем на себя подготовку всех документов для белой доставки
			</p>
			<div className={styles.grid}>
				{data.map((item, index) => (
					<div key={index} className={styles.card}>
						<div className={styles.imageWrapper}>
							<Image
								src={item.img}
								alt={item.label}
								width={item.w}
								height={item.h}
							/>
						</div>
						<p className={styles.cardLabel}>{item.label}</p>
					</div>
				))}
			</div>

			<div className={styles.bottom}>
				<Image
					width={191}
					height={265}
					alt='Менеджер SellerChina'
					src={'/white-delivery/WhiteDocumentManager.webp'}
					className={styles.manager}
				/>
				<div className={styles.right}>
					<p className={styles.speech}>
						<span>“</span>Вы получаете полный комплект для легального ввоза и
						продаж в России<span>”</span>
					</p>
					<div className={styles.rightBottom}>
						<p className={styles.right1}>
							Работайте без рисков с <strong>SELLERCHINA</strong>!
						</p>
						<form method='post' className={styles.form}>
							<div>
								<input
									type='tel'
									name='phone'
									placeholder='Номер телефона'
									required
									className={styles.input}
								/>
								<Image
									width={28}
									height={28}
									src={'/phone.svg'}
									alt='tel'
									className={styles.phone}
								/>
							</div>
							<button type='submit'>Отправить</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WhiteDocuments
