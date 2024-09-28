import ContactForm from 'components/molecules/ContactForm/index'
import { HOME_PAGE_SECTION_IDS } from 'constants/routes.constants'

const ContactUsSection = () => {
  return (
    <div id={HOME_PAGE_SECTION_IDS.CONTACT} className='container-fluid my-5'>
      <div className='w-100 text-center'>
        <h3>Need Assistance</h3>
      </div>
      <div className='row mt-4'>
        <div className='col-12 px-0' style={{ height: '500px' }}>
          <div className='position-relative h-100'>
            <iframe
              className='position-relative w-100 h-100'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14723.827398238464!2d75.86763380000001!3d22.6926502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fce4feb4f907%3A0x198142107e30222a!2sBhawarkuan%20Square%2C%20Davv%20Takshila%20Parisar%2C%20Indore%2C%20Madhya%20Pradesh%20452001!5e0!3m2!1sen!2sin!4v1703437079367!5m2!1sen!2sin'
              frameBorder='0' style={{ border: 0 }} allowFullScreen='' aria-hidden='false'
              tabIndex='0'
            />
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  )
}

export default ContactUsSection
