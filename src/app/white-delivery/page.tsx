import FullCycle from '../cargo-delivery/components/fullCycle/FullCycle'
import WhiteCalculate from './components/whiteCalculate/WhiteCalculate'
import WhiteDeliveryType from './components/whiteDeliveryType/WhiteDeliveryType'
import WhiteDocuments from './components/whiteDocuments/WhiteDocuments'
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
			<section>
				<WhiteDocuments />
			</section>
		</>
	)
}

export default page
