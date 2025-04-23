import FullCycle from '../cargo-delivery/components/fullCycle/FullCycle'
import WhiteHero from './components/whiteHero/WhiteHero'
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
		</>
	)
}

export default page
