import { ROUTE_PATHS } from 'constants/routes.constants'
import './bannerHeading.css'
import { Link } from 'react-router-dom'

const BannerHeading = ({ from = 'Home', toText, heading, fromRoute = ROUTE_PATHS.HOME, subHeading }) => {
  return (
    <>
      <div className='banner-heading-bg'>
        <div className='square-cube' />
        <div className='square-cube' />
        <div className='square-cube' />
        <div className='square-cube' />
        <div className='square-cube' />
        <div className='square-cube' />
        <div className='square-cube' />
        <div className='square-cube' />
        <div className='page-header container-fluid bg-primary-blue d-flex flex-column align-items-center justify-content-center'>
          <h1 className='display-4 text-uppercase mb-3 text-light'>{heading}</h1>
          <div className='d-inline-flex text-white'>
            <h6 className='text-uppercase m-0'>
              <Link className='text-white text-decoration-underline' to={fromRoute}>{from}</Link>
            </h6>
            <h6 className='m-0 px-3 text-white'>/</h6>
            <h6 className='text-uppercase m-0 text-white'>{toText}</h6>
            {/* <h6 className='text-capitalize m-0 text-light'>{subHeading}</h6> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default BannerHeading
