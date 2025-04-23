import Banner from './components/banner/Banner'
import CargoMarquee from './components/cargoMarquee/CargoMarquee'

const page = () => {
	return (
		<>
			<section aria-label='Карго доставка из Китая в Россию'>
				<Banner />
			</section>
			<section aria-label='Скидка на первый заказ'>
				<CargoMarquee />
			</section>
			{/* <section aria-label='Полный цикл от Китая до продаж'>
				<FullCycle />
			</section>
			<section>
				<CargoCalculate />
			</section>
			<section>
				<CargoSuppliers />
			</section>
			<section aria-label='Почему мы'>
				<CargoWhyUs />
			</section>
			<section>
				<CargoAdvantages />
			</section>
			<section>
				<AnyQuestion />
			</section>
			<section>
				<Rating />
			</section>
			<section>
				<Socials />
			</section> */}
		</>
	)
}

export default page
