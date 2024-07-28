import './portfolioSection.css'
import { v4 as uuidV4 } from 'uuid'
import { Portfolio1Image, Portfolio2Image, Portfolio3Image } from 'assets/images/index'
import { HOME_PAGE_SECTION_IDS } from 'constants/index'

const PortfolioSection = () => {
  const portfolio = [
    {
      id: uuidV4(),
      image: Portfolio1Image
    },
    {
      id: uuidV4(),
      image: Portfolio2Image
    },
    {
      id: uuidV4(),
      image: Portfolio3Image
    }
  ]

  return (
    <div className='container-fluid my-5' id={HOME_PAGE_SECTION_IDS.PORTFOLIO}>
      <div className='container'>
        <h1 className='display-4 text-uppercase text-center text-dark'>Visit Our Projects</h1>
        <div className='row gx-5 mt-2'>
          {
            portfolio.map(item => (
              <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12' key={item.id}>
                <div className='mt-4 project-card'>
                  <img className='portfolio-image-cover shine' src={item.image} />
                  <div className='py-3 px-3'>
                    <h5 className='text-dark'>Project Name</h5>
                    <p className='text-green'>App Sense</p>
                    <p className='text-wrap-3 p-0'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, enim assumenda facilis
                      impedit eaque dolorum ab, sint pariatur, distinctio numquam eum iure exercitationem sapiente
                      nam sequi. At deleniti labore id?
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, enim assumenda facilis
                      impedit eaque dolorum ab, sint pariatur, distinctio numquam eum iure exercitationem sapiente
                      nam sequi. At deleniti labore id?
                    </p>
                    <p className='read-more-portfolio'>
                      <span>Read More</span> &nbsp;<i className='h-100 fa fa-solid fa-arrow-right' />
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className='row mt-4'>
          <div className='col-12 text-center'>
            <button
              className='btn btn-view-all-project text-capitalize py-3 px-5'
              type='button'
            >
              View All Projects &nbsp;<i className='h-100 fa fa-solid fa-arrow-right' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioSection
