import AnyQuestion from '../components/shared/anyQuestion/AnyQuestion'
import Socials from '../components/socials/Socials'
import SpecialGoods from './components/special-goods/SpecialGoods'
import SpecialHero from './components/special-hero/SpecialHero'
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
			{/* <section>
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
			</section> */}
			<section>
				<AnyQuestion />
			</section>
			{/* <section>
				<SpecialRating />
			</section> */}
			<section>
				<Socials />
			</section>
		</>
	)
}

export default page
