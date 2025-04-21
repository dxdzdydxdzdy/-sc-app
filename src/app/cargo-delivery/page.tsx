import Advantages from '../components/advantages/Advantages'
import Rating from '../components/rating/Rating'
import Socials from '../components/socials/Socials'
import Banner from './components/banner/Banner'
import CargoCalculate from './components/cargoCalculate/CargoCalculate'
import CargoMarquee from './components/cargoMarquee/CargoMarquee'
import FullCycle from './components/fullCycle/FullCycle'

const page = () => {
	return (
		<>
			<section>
				<Banner />
			</section>
			<section>
				<CargoMarquee />
			</section>
			<section>
				<FullCycle />
			</section>
			<section>
				<CargoCalculate />
			</section>
			<section>
				<Advantages />
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
