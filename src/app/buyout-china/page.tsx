import CargoMarquee from '../cargo-delivery/components/cargoMarquee/CargoMarquee'
import AnyQuestion from '../components/shared/anyQuestion/AnyQuestion'
import Socials from '../components/socials/Socials'
import SpecialRating from '../special-line/components/special-rating/SpecialRating'
import BuyoutChinaHero from './components/buyout-china-hero/BuyoutChinaHero'
import BuyoutChinaHowWeWorks from './components/buyout-china-how-we-works/BuyoutChinaHowWeWorks'
import BuyoutChinaServices from './components/buyout-china-services/BuyoutChinaServices'

const page = () => {
	return (
		<>
			<section>
				<BuyoutChinaHero />
			</section>
			<section>
				<BuyoutChinaHowWeWorks />
			</section>
			<section>
				<BuyoutChinaServices />
			</section>
			<section>
				<CargoMarquee />
			</section>
			{/* <section>
				<BlankSpace />
			</section>
			<section>
				<BuyoutChinaBestGoods />
			</section> */}
			{/* <section>
				<BuyoutChinaBuyout />
			</section> */}
			<section>
				<SpecialRating />
			</section>
			{/* <section>
				<BuyoutChinaTeam />
			</section> */}
			<section>
				<AnyQuestion />
			</section>
			<section>
				<Socials />
			</section>
		</>
	)
}

export default page
