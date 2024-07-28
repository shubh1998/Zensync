import HeroSection from 'pages/Home/components/HeroSection/index'
import AboutUsSection from 'pages/Home/components/AboutUsSection/index'
import ServicesSection from 'pages/Home/components/ServicesSection/index'
import PortfolioSection from 'pages/Home/components/PortfolioSection/index'
import RoadMapSection from 'pages/Home/components/RoadMapSection/index'
import TechnologiesSection from 'pages/Home/components/TechnologiesSection/index'
// import TestimonialsSection from 'pages/Home/components/TestimonialsSection/index'
import ContactUsSection from 'pages/Home/components/ContactUsSection/index'

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <PortfolioSection />
      <RoadMapSection />
      <TechnologiesSection />
      {/* <TestimonialsSection /> */}
      <ContactUsSection />
    </>
  )
}

export default Home
