import AnyQuestion from '../components/shared/anyQuestion/AnyQuestion'
import Socials from '../components/socials/Socials'
import SpecialCalculate from './components/special-calculate/SpecialCalculate'
import SpecialCycle from './components/special-cycle/SpecialCycle'
import SpecialFullCycle from './components/special-full-cycle/SpecialFullCycle'
import SpecialGoods from './components/special-goods/SpecialGoods'
import SpecialHero from './components/special-hero/SpecialHero'
import SpecialHowItWorks from './components/special-how-it-works/SpecialHowItWorks'
import SpecialRating from './components/special-rating/SpecialRating'
import SpecialWhySellerChina from './components/specialWhySellerChina/SpecialWhySellerChina'

const page = () => {
	return (
		<>
			<section>
				<SpecialHero />
			</section>
			<section>
				<SpecialWhySellerChina />
			</section>
			<section>
				<SpecialGoods />
			</section>
			<section>
				<SpecialCalculate />
			</section>
			<section>
				<SpecialCycle />
			</section>
			<section>
				<SpecialFullCycle />
			</section>
			<section>
				<SpecialHowItWorks />
			</section>
			<section>
				<AnyQuestion />
			</section>
			<section>
				<SpecialRating />
			</section>
			<section>
				<Socials />
			</section>
		</>
	)
}

export default page
