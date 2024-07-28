import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

const TeamCarousel = ({ items }) => {
  const options = {
    autoplay: true,
    smartSpeed: 1000,
    margin: 30,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i className="fa fa-angle-left" aria-hidden="true"></i>',
      '<i className="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  }

  return (
    <OwlCarousel className='owl-theme' {...options}>
      {items.map((item, index) => (
        <div key={index} className='item'>
          <div className='team-item rounded overflow-hidden'>
            <div className='position-relative'>
              <img className='img-fluid w-100' src={item?.personImage} alt='' />
              <div className='team-overlay'>
                <div className='d-flex align-items-center justify-content-start'>
                  <a className='btn btn-lg btn-primary btn-lg-square mx-1' href={item?.twitterLink}><i className='fab fa-twitter' /></a>
                  <a className='btn btn-lg btn-primary btn-lg-square mx-1' href={item?.facebookLink}><i className='fab fa-facebook-f' /></a>
                  <a className='btn btn-lg btn-primary btn-lg-square mx-1' href={item?.linkedinLink}><i className='fab fa-linkedin-in' /></a>
                </div>
              </div>
            </div>
            <div className='bg-light text-center p-4'>
              <h4 className='text-uppercase'>{item?.personName}</h4>
              <p className='m-0'>{item?.personDesignation}</p>
            </div>
          </div>
        </div>
      ))}
    </OwlCarousel>
  )
}

export default TeamCarousel
