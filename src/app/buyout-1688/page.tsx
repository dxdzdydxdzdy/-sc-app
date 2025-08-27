import Buyout1688Hero from './components/buyout-1688-hero/Buyout1688Hero'
import Buyout1688HowToStart from './components/buyout-1688-how-to-start/Buyout1688HowToStart'
import Buyout1688WhatYouGet from './components/buyout-1688-what-you-get/Buyout1688WhatYouGet'
import Buyout1688WhyUs from './components/buyout-1688-why-us/Buyout1688WhyUs'

const page = () => {
	return (
		<>
			<section>
				<Buyout1688Hero />
			</section>
			<section>
				<Buyout1688WhyUs />
			</section>
			<section>
				<Buyout1688WhatYouGet />
			</section>
			<section>
				<Buyout1688HowToStart />
			</section>
		</>
	)
}

export default page
