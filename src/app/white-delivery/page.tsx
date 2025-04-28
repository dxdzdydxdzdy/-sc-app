import FullCycle from '../cargo-delivery/components/fullCycle/FullCycle'
import Socials from '../components/socials/Socials'
import WhiteCalculate from './components/whiteCalculate/WhiteCalculate'
import WhiteDeliveryType from './components/whiteDeliveryType/WhiteDeliveryType'
import WhiteHero from './components/whiteHero/WhiteHero'
import WhiteHowItWorks from './components/whiteHowItWorks/WhiteHowItWorks'
import WhiteWhyUs from './components/whiteWhyUs/WhiteWhyUs'

const page = () => {
	return (
		<>
			<section>
				<WhiteHero />
			</section>
			<section>
				<FullCycle />
			</section>
			<section>
				<WhiteWhyUs />
			</section>
			<section>
				<WhiteDeliveryType />
			</section>
			<section>
				<WhiteCalculate />
			</section>
			<section>
				<WhiteHowItWorks />
			</section>
			{/* <section>
				<WhiteDocuments />
			</section>
			<section>
				<WhiteOtherServices />
			</section>
			<section>
				<WhiteOffer />
			</section> */}
			<section>
				<Socials />
			</section>
		</>
	)
}

export default page
