import { PORTFOLIO_PROJECTS } from 'constants/portfolio.constants'
import './viewProjectDetails.css'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import NotFoundComponent from 'pages/404/index'

const ViewProjectDetails = () => {
  const [details, setDetails] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const findProject = PORTFOLIO_PROJECTS.find(project => `/${project.name.toLowerCase().split(' ').join('-')}` === location.pathname)
    setDetails(findProject)
  }, [])

  if (!details) {
    return (<NotFoundComponent />)
  }

  return (
    <>
      <div style={{
        height: '25rem',
        width: '100%',
        overflow: 'hidden'
      }}
      >
        <img
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover'
          }}
          src={details?.image}
        />
      </div>
      <div className='project-details-section'>
        <div className='project-details-card mb-4'>
          <div className='container-fluid'>
            <div className='container p-5'>
              <div className='w-100 text-center'>
                <h1 className='text-uppercase text-primary-red text-uppercase'>{details?.name}</h1>
              </div>
              <div className='row align-items-center'>
                {/* <div className='col-lg-6 text-center'>
                  <img className='w-75 mb-4 mb-lg-0' src={details?.image} alt='about us' />
                </div> */}
                <div className='col-lg-12'>
                  <h5 className='text-uppercase text-primary-blue mb-3'>
                    {details?.category}
                  </h5>
                  <p>
                    {details?.description}
                  </p>
                  <button
                    className='btn btn-visit-animate text-capitalize py-3 px-5'
                    type='button'
                  >
                    Visit us &nbsp;<i className='h-100 fa fa-solid fa-arrow-right' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewProjectDetails
