import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

const TestimonialsCarousel = ({ items }) => {
  const options = {
    autoplay: true,
    smartSpeed: 2000,
    margin: 30,
    dots: true,
    loop: true,
    center: true,
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
          <div className='testimonial-item position-relative text-center rounded p-4'>
            <img className='img-fluid rounded mx-auto my-4' src={item?.clientImage} alt='' />
            <h5 className='text-uppercase'>{item.clientName}</h5>
            <p className='text-capitalize text-dark font-italic'>{item.clientProfession}</p>
            <p className='text-secondary'>{item.clientQuote}</p>
          </div>
        </div>
      ))}
    </OwlCarousel>
  )
}

export default TestimonialsCarousel
