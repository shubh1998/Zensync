import './testimonialsSection.css'
import TestimonialsCarousel from 'components/molecules/TestimonialsCarousel/index'
import {
  Testimonial1Image, Testimonial2Image, Testimonial3Image,
  Testimonial4Image
} from 'assets/images/index'

const testimonialsItems = [
  {
    clientImage: Testimonial1Image,
    clientName: 'Client Name',
    clientProfession: 'Profession',
    clientQuote: 'Tempor lorem dolor sea et ipsum, lorem justo kasd dolore vero eos. Lorem duo ipsum sea amet et clita dolor'
  },
  {
    clientImage: Testimonial2Image,
    clientName: 'Client Name',
    clientProfession: 'Profession',
    clientQuote: 'Tempor lorem dolor sea et ipsum, lorem justo kasd dolore vero eos. Lorem duo ipsum sea amet et clita dolor'
  },
  {
    clientImage: Testimonial3Image,
    clientName: 'Client Name',
    clientProfession: 'Profession',
    clientQuote: 'Tempor lorem dolor sea et ipsum, lorem justo kasd dolore vero eos. Lorem duo ipsum sea amet et clita dolor'
  },
  {
    clientImage: Testimonial4Image,
    clientName: 'Client Name',
    clientProfession: 'Profession',
    clientQuote: 'Tempor lorem dolor sea et ipsum, lorem justo kasd dolore vero eos. Lorem duo ipsum sea amet et clita dolor'
  }
]
const TestimonialsSection = () => {
  return (
    <div className='container-fluid my-5'>
      <div className='container py-5'>
        <h1 className='display-4 text-uppercase text-center text-dark'>Our Client's Say</h1>
        <div className='testimonial-carousel'>
          <TestimonialsCarousel items={testimonialsItems} />
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection
