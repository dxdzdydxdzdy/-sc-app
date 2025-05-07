import AnyQuestion from '../components/shared/anyQuestion/AnyQuestion'
import Socials from '../components/socials/Socials'
import SpecialRating from '../special-line/components/special-rating/SpecialRating'
import BuyoutChinaHero from './components/buyout-china-hero/BuyoutChinaHero'
import BuyoutChinaHowWeWorks from './components/buyout-china-how-we-works/BuyoutChinaHowWeWorks'

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
				<SpecialRating />
			</section>
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
