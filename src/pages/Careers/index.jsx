import BannerHeading from 'components/molecules/BannerHeading/index'
import React from 'react'

const CareersPage = () => {
  return (
    <>
      <BannerHeading heading='Careers' toText='Careers' />

      <div className='container-fluid my-5'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-12'>
              <h1 className='display-4 text-uppercase mb-4'>We are hiring...</h1>
              <h5 className='text-capitalize mb-3'>
                Be a part of our dynamic team, gain real time experience & knowledge by working on trending technologies.
              </h5>
              <p className='mb-4'>Mail your resume now on <a href='mailto:careers@zensyncsolutions.com' target='_blank' className='text-primary' rel='noreferrer'>careers@zensyncsolutions.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CareersPage
