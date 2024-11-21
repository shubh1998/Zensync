import ContactForm from 'components/molecules/ContactForm/index'
import AnimatedBreadcrumbsBanner from 'components/molecules/AnimatedBreadcrumbsBanner/index'

const ContactUsPage = () => {
  return (
    <>
      <AnimatedBreadcrumbsBanner heading='Contact Us' toText='Contact' />

      <div className='container-fluid py-5 px-0'>
        {/* <h1 className='display-4 text-uppercase text-center mt-5 mb-5'>Contact Us</h1> */}
        <div className='container'>
          <p className='mb-5'>
            Embark on a transformative journey with ZenSync Solutions. Harness the power of technology,
            creativity, and innovation. Join us on this exciting journey as we bring your ideas to life.
            We are committed to delivering exceptional services, creativity, and strategy to achieve digital excellence.
            Contact us today and let's shape the future together!
          </p>
        </div>
        <div className='row mx-0'>
          <div className='col-12 px-0' style={{ height: '500px' }}>
            <div className='position-relative h-100'>
              <iframe
                className='position-relative w-100 h-100'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd'
                frameBorder='0' style={{ border: '0' }} allowfullscreen='' aria-hidden='false'
                tabIndex='0'
              />
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </>
  )
}

export default ContactUsPage
