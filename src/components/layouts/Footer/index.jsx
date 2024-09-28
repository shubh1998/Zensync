import { ROUTE_PATHS } from 'constants/routes.constants'
import './footer.css'
import { v4 as uuidV4 } from 'uuid'

const Footer = () => {
  const followUsLinks = [
    {
      id: uuidV4(),
      link: 'http://twitter.com',
      faIcon: 'fa-twitter'
    },
    {
      id: uuidV4(),
      link: 'http://facebook.com',
      faIcon: 'fa-facebook-f'
    },
    {
      id: uuidV4(),
      link: 'http://linkedin.com',
      faIcon: 'fa-linkedin-in'
    },
    {
      id: uuidV4(),
      link: 'http://instagram.com',
      faIcon: 'fa-instagram'
    }
  ]

  const navLinks = [
    {
      id: uuidV4(),
      route: ROUTE_PATHS.HOME,
      name: 'Home'
    },
    {
      id: uuidV4(),
      route: ROUTE_PATHS.ABOUT_US.WHO_WE_ARE,
      name: 'About Us'
    },
    {
      id: uuidV4(),
      route: ROUTE_PATHS.SERVICES.WEB_DEVELOPMENT,
      name: 'Our Services'
    },
    {
      id: uuidV4(),
      route: ROUTE_PATHS.PORTFOLIO,
      name: 'Our Projects'
    },
    {
      id: uuidV4(),
      route: ROUTE_PATHS.ABOUT_US.TEAM,
      name: 'Meet The Team'
    },
    {
      id: uuidV4(),
      route: ROUTE_PATHS.CONTACT_US,
      name: 'Contact Us'
    }
  ]

  const servicesLink = [
    {
      id: uuidV4(),
      route: ROUTE_PATHS.HOME,
      name: 'Web Development'
    },
    {
      id: uuidV4(),
      route: ROUTE_PATHS.HOME,
      name: 'Mobile App Development'
    },
    {
      id: uuidV4(),
      route: ROUTE_PATHS.HOME,
      name: 'UI/UX Development'
    },
    {
      id: uuidV4(),
      route: ROUTE_PATHS.HOME,
      name: 'MVP Development'
    },
    {
      id: uuidV4(),
      route: ROUTE_PATHS.HOME,
      name: 'Product Development'
    },
    {
      id: uuidV4(),
      route: ROUTE_PATHS.HOME,
      name: 'Dedicated Developers'
    },
    {
      id: uuidV4(),
      route: ROUTE_PATHS.HOME,
      name: 'E-commerce Developers'
    }
  ]

  const technologiesLink = [
    {
      id: uuidV4(),
      route: ROUTE_PATHS.HOME,
      name: 'Node.JS / Express JS'
    },
    {
      id: uuidV4(),
      route: ROUTE_PATHS.HOME,
      name: 'React.JS'
    },
    {
      id: uuidV4(),
      route: ROUTE_PATHS.HOME,
      name: 'Angular 8+'
    },
    {
      id: uuidV4(),
      route: ROUTE_PATHS.HOME,
      name: 'React Native'
    },
    {
      id: uuidV4(),
      route: ROUTE_PATHS.HOME,
      name: 'MERN Stack'
    },
    {
      id: uuidV4(),
      route: ROUTE_PATHS.HOME,
      name: 'Python'
    },
    {
      id: uuidV4(),
      route: ROUTE_PATHS.HOME,
      name: 'PHP'
    }
  ]

  return (
    <div>
      <section className='ph-getconnect-sec'>
        <div className='container'>
          <div>
            <h2 className='ph-getconnect-content text-center'>Kickstart Your Journey With Us Today!</h2>
          </div>
          {/* <div className='ph-getconnect-btn'>
            <a data-bs-toggle='modal' href='#ph-have-a-project' className='ph-btn remove-errors ph-btn-white'>Contact Now <i className='fa-solid fa-arrow-right ms-2' /></a>
          </div> */}
        </div>
      </section>
      <div className='container-fluid bg-black text-white-50 py-5 px-sm-3 px-md-5'>
        <div className='row pt-5'>
          <div className='col-lg-3 col-md-6 mb-5'>
            <a to={ROUTE_PATHS.HOME}>
              <h1 className='m-0 mt-n2 text-white display-6 footer-company-name'>ZENSYNC SOLUTIONS</h1>
            </a>
            <p>Your Vision, Our Synced Solution. We are responsible to give a shape to your great vision.</p>
            <h6 className='text-uppercase text-white py-2'>Follow Us</h6>
            <div className='d-flex justify-content-start'>
              {
                followUsLinks.map((item, index) => (
                  <a
                    key={item.id} target='_blank'
                    className={`btn btn-lg btn-primary btn-lg-square ${index && 'ms-2'}`} href={item.link} rel='noreferrer'
                  >
                    <i className={`fab ${item.faIcon}`} />
                  </a>
                ))
              }
            </div>
          </div>
          <div className='col-lg-3 col-md-6 mb-5'>
            <h4 className='text-uppercase text-white mb-4'>Get In Touch</h4>
            <p>Empower your vision with seamless IT solutions – Get in touch, and let's turn possibilities into realities!</p>
            <p><i className='fa fa-map-marker-alt text-white' /><span className='ms-2'>Bhawarkua square, Indore, MP, India, 452001</span></p>
            <p><i className='fa fa-phone-alt text-white' /><span className='ms-2'>+91 939 919 2353</span></p>
            <p><i className='fa fa-envelope text-white' /><span className='ms-2'>sales@zensync.com</span></p>
          </div>
          <div className='col-lg-2 col-md-6 mb-5'>
            <h4 className='text-uppercase text-white mb-4'>Quick Links</h4>
            <div className='d-flex flex-column justify-content-start'>
              {
                navLinks.map(item => (
                  <a key={item.id} className='text-white-50 mb-2 footer-link' to={item.route}>
                    <i className='fa fa-angle-right text-white mr-2 footer-list-icon' />
                    <span className='ms-2'>{item.name}</span>
                  </a>
                ))
              }
            </div>
          </div>
          <div className='col-lg-2 col-md-6 mb-5'>
            <h4 className='text-uppercase text-white mb-4'>Services</h4>
            <div className='d-flex flex-column justify-content-start'>
              {
                servicesLink.map(item => (
                  <a key={item.id} className='text-white-50 mb-2 footer-link' to={item.route}>
                    <i className='fa fa-angle-right text-white mr-2 footer-list-icon' />
                    <span className='ms-2'>{item.name}</span>
                  </a>
                ))
              }
            </div>
          </div>
          <div className='col-lg-2 col-md-6 mb-5'>
            <h4 className='text-uppercase text-white mb-4'>Technologies</h4>
            <div className='d-flex flex-column justify-content-start'>
              {
                technologiesLink.map(item => (
                  <a key={item.id} className='text-white-50 mb-2 footer-link' to={item.route}>
                    <i className='fa fa-angle-right text-white mr-2 footer-list-icon' />
                    <span className='ms-2'>{item.name}</span>
                  </a>
                ))
              }
            </div>
          </div>
          {/* <div className='col-lg-3 col-md-6 mb-5'>
            <h4 className='text-uppercase text-white mb-4'>Newsletter</h4>
            <p className='mb-4'>Subscribe us to get the latest updates about our Newsletters</p>
            <div className='w-100 mb-3'>
              <div className='input-group'>
                <input
                  type='text' className='form-control border-light' style={{ padding: '25px' }}
                  placeholder='Your Email'
                />
                <div className='input-group-append'>
                  <button className='btn btn-primary text-uppercase px-3'>Submit</button>
                </div>
              </div>
            </div>
            <i>Stay connected with us.</i>
          </div> */}
        </div>
      </div>
      <div className='container-fluid py-4 px-sm-3 px-md-5' style={{ background: '#111111' }}>
        <p className='mb-2 text-center text-white-50'>Copyright &copy; <a to={ROUTE_PATHS.HOME}>Zensync Solutions</a>. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
