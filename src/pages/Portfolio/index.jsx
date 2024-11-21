import './portfolio.css'
import AnimatedBreadcrumbsBanner from 'components/molecules/AnimatedBreadcrumbsBanner/index'
import { PORTFOLIO_PROJECTS } from 'constants/portfolio.constants'
import { useHistory } from 'react-router-dom'

const PortfolioPage = () => {
  const history = useHistory()

  const handleReadMore = (item) => {
    console.log('item', item?.name.toLowerCase().split(' ').join('-'))
    history.push(item?.name.toLowerCase().split(' ').join('-'))
  }

  return (
    <>
      <AnimatedBreadcrumbsBanner
        heading='Our Portfolio'
        subHeading='We always give our best and contribute in your vision.'
        toText='Portfolio'
      />
      <div className='container-fluid'>
        <div className='container my-5'>
          <h1 className='display-4 text-uppercase text-center mb-5'>Visit Our Projects</h1>
          <div className='row gx-5'>
            {
              PORTFOLIO_PROJECTS.map(item => (
                <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12' key={item.id}>
                  <div className='mt-4 portfolio-card'>
                    <img
                      className='portfolio-image-cover zoom-in-image'
                      src={item.image}
                      onClick={() => handleReadMore(item)}
                    />
                    <div className='py-3 px-3'>
                      <h5 className='text-dark'>{item.name}</h5>
                      <p className='text-danger'>{item.category}</p>
                      <p className='text-wrap-5 p-0'>
                        {item.description}
                      </p>
                      <div className='d-flex justify-content-between align-items-center'>
                        <div className='read-more-portfolio' onClick={() => handleReadMore(item)}>
                          <span>Read More</span> &nbsp;<i className='h-100 fa fa-solid fa-arrow-right' />
                        </div>
                        <button
                          className='btn btn-primary-red text-capitalize mt-1 py-1 px-3' rel='noreferrer'
                          onClick={() => {}}
                        >
                          <a
                            className='text-light'
                            href={item.websiteLink || item.androidAppLink}
                            target='_blank' rel='noreferrer'
                          >
                            Launch website
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <br />
        </div>
      </div>
    </>
  )
}

export default PortfolioPage
