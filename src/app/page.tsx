import Hero from '@/sections/Hero'
import Integration from '@/sections/Integration'
import Portfolio from '@/sections/Portfolio'
import Performance from '@/sections/Performance'
import Brands from '@/sections/Brands'
import Riskfree from '@/sections/Riskfree'
import Services from '@/sections/Services'
import CaseStudy from '@/sections/CaseStudy'
import TrustedBrands from '@/sections/TrustedBrands'
import Optimization from '@/sections/Optimization'
import Revenue from '@/sections/Revenue'
import CallScheduling from '@/sections/CallScheduling'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Integration />
      <Portfolio />
      <Performance />

      <Brands />
      <Riskfree />

      <section id="services">
        <Services />
      </section>

      <section id="case-studies">
        <CaseStudy />
      </section>

      <section id="clients">
        <TrustedBrands />
      </section>

      <Optimization />

      <section id="process">
        <Revenue />
      </section>

      <section id="contact">
        <CallScheduling />
      </section>
    </>
  )
}

export default HomePage