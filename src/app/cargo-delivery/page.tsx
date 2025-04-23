import Rating from '../components/rating/Rating'
import AnyQuestion from '../components/shared/anyQuestion/AnyQuestion'
import Socials from '../components/socials/Socials'
import Banner from './components/banner/Banner'
import CargoAdvantages from './components/cargoAdvantages/CargoAdvantages'
import CargoCalculate from './components/cargoCalculate/CargoCalculate'
import CargoMarquee from './components/cargoMarquee/CargoMarquee'
import CargoSuppliers from './components/cargoSuppliers/CargoSuppliers'
import CargoWhyUs from './components/cargoWhyUs/CargoWhyUs'
import FullCycle from './components/fullCycle/FullCycle'

const page = () => {
	return (
		<>
			<section aria-label='Карго доставка из Китая в Россию'>
				<Banner />
			</section>
			<section aria-label='Скидка на первый заказ'>
				<CargoMarquee />
			</section>
			<section aria-label='Полный цикл от Китая до продаж'>
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
			</section>
		</>
	)
}

export default page
