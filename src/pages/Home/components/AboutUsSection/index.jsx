import { HOME_PAGE_SECTION_IDS } from 'constants/index'
import './aboutUsSection.css'
import { AboutImage } from 'assets/images/index'

const AboutUsSection = () => {
  return (
    <div className='about-section' id={HOME_PAGE_SECTION_IDS.ABOUT}>
      <div className='about-card mb-4'>
        <div className='container-fluid'>
          <div className='container p-5'>
            <div className='w-100 text-center'>
              <h3 className='text-dark font-weight-bold text-uppercase'>About Us</h3>
            </div>
            <div className='row align-items-center'>
              <div className='col-lg-6 text-center'>
                <img className='w-75 mb-4 mb-lg-0' src={AboutImage} alt='about us' />
              </div>
              <div className='col-lg-6'>
                <h1 className='text-uppercase text-primary-red mb-4'>Best Web & Mobile App Development Company</h1>
                <h5 className='text-uppercase text-primary-blue mb-3'>
                  Welcome to ZenSync Solutions - Your Gateway to Innovative Digital Excellence!
                </h5>
                <p>
                  At ZenSync Solutions, we bring your digital aspirations to life through cutting-edge services
                  in App, Web, and Game Development. Our dedicated team is committed to crafting immersive experiences
                  that resonate with your audience, ensuring your brand stands out in the digital landscape.
                </p>
                <p>
                  Since the beginning of the digital ecosystem, Zensync Solution has been at the top of brand strategy,
                  digital innovation, and operational excellence as a seasoned builder of mobile & web solutions.
                  By building target customers, potential numbers, and unified quality of work, Zensync Solutions has
                  become one of the top mobile & web development company and the right destination to achieve positive
                  outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsSection
