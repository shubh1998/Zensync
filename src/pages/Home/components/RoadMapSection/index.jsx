import { BrandLogoImage } from 'assets/images/index'
import { HOME_PAGE_SECTION_IDS } from 'constants/routes.constants'

const RoadMapSection = () => {
  return (
    <section className='bg-black h-100 my-5' id={HOME_PAGE_SECTION_IDS.ROADMAP}>
      <div className='container py-5'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <div className='px-2'>
              <h2 className='text-white'>
                Roadmap To Your <span className='text-primary'>Mobile & Web Development</span> Success
              </h2>
              <p className='text-white'>
                Zensync Solutions offers top-quality results to clients at every stage of the web and app development
                process, when starting fresh. We strive to make constant improvements at every stage to provide you
                with a smooth mobile & web development service in multiple region that is error-free.
              </p>
            </div>
          </div>
          <div className='col-lg-6'>
            <img src={BrandLogoImage} className='w-100 img-fluid bg-light p-2' alt='Zensync' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadMapSection
