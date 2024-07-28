import { HOME_PAGE_SECTION_IDS } from 'constants/index'
import './heroSection.css'
import { handleScrollToSectionById } from 'helpers/app.helpers'
import { HeaderBannerIconImage } from 'assets/images/index'

const HeroSection = () => {
  return (
    <div className='hero'>
      <div className='cube' />
      <div className='cube' />
      <div className='cube' />
      <div className='cube' />
      <div className='cube' />
      <div className='cube' />
      <div className='cube' />
      <div className='cube' />
      <div className='container py-5 px-0'>
        <div className='row mx-0 align-items-center'>
          <div className='col-lg-6 text-lg-left'>
            <div>
              <h1 className='text-capitalize mb-3 text-light font'>
                Best Mobile & Web Development Company. Hire Remote Engineers from Zensync
              </h1>
              <p className='text-light mb-4'>
                We are a team of Developers, Designers, Innovators.<br />
                And We Provide Secure IT Solutions for a More Secure Environment.
              </p>
              <button
                className='btn btn-primary-red text-uppercase mt-1 py-3 px-5' rel='noreferrer'
                onClick={() => handleScrollToSectionById({ sectionId: HOME_PAGE_SECTION_IDS.CONTACT })}
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className='col-lg-6 px-0 text-right'>
            <img className='img-fluid mt-5 mt-lg-0 floating' src={HeaderBannerIconImage} alt='Hero Image' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
