import './servicesSection.css'
import { v4 as uuidV4 } from 'uuid'
import {
  AppDevelopmentImage, HireRemoteDevelopersImage, MvpImage,
  SoftwareDevelopmentImage, WebDesignImage
} from 'assets/images/index'
import { HOME_PAGE_SECTION_IDS } from 'constants/routes.constants'

const ServicesSection = () => {
  const services = [
    {
      id: uuidV4(),
      icon: null,
      // icon: <i className='fa fa-3x fa-laptop-code text-primary mb-4' />,
      image: WebDesignImage,
      nameOne: 'Web',
      nameTwo: 'Design',
      serviceName: 'Web Design',
      content: `
        Elevate your digital presence with Zensync Solution’s exceptional web designing.
        We create engaging, user-centric websites that leave a lasting impression.
      `
    },
    {
      id: uuidV4(),
      // icon: <i className='fa fa-3x fa-code text-primary mb-4' />,
      icon: <i className='fa fa-3x fa-laptop-code text-primary-red mb-4' />,
      image: null,
      nameOne: 'Web',
      nameTwo: 'Development',
      serviceName: 'Web Development',
      content: `
        Elevate your digital presence with Zensync Solution’s exceptional web designing.
        We create engaging, user-centric websites that leave a lasting impression.
      `
    },
    {
      id: uuidV4(),
      icon: null,
      image: AppDevelopmentImage,
      nameOne: 'Mobile App',
      nameTwo: 'Development',
      serviceName: 'Mobile App Development',
      content: `
        Zensync Solutions Crafting intuitive mobile experiences, excelling in innovative app development
        for seamless functionality. Transforming ideas into reality.
      `
    },
    {
      id: uuidV4(),
      icon: null,
      image: SoftwareDevelopmentImage,
      nameOne: 'Software',
      nameTwo: 'Development',
      serviceName: 'Software Development',
      content: `
        Fueling innovation via agile software development. Crafting solutions for progress and
        efficiency. Transforming possibilities into reality.
      `
    },
    {
      id: uuidV4(),
      icon: null,
      image: MvpImage,
      nameOne: 'MVP',
      nameTwo: 'Development',
      serviceName: 'MVP Development',
      content: `
        Turn your vision into reality with
        Zensync Solution’s MVP solutions.
        Get your MVP ready in just 25 days.
        Launch, iterate, succeed.
      `
    },
    {
      id: uuidV4(),
      icon: null,
      image: HireRemoteDevelopersImage,
      nameOne: 'Staff',
      nameTwo: 'Augmentation',
      serviceName: 'Staff Augmentation',
      content: `
        Hire skilled developers as per your requirements and on the basis of skills you want from Zensync Solutions
        for staff augmentation. Save up to 40% on costs and time while boosting your development firepower.
      `
    }
  ]

  return (
    <div className='container-fluid my-5' id={HOME_PAGE_SECTION_IDS.SERVICES}>
      <div className='container'>
        <div className='mb-5 text-center'>
          <h1 className='display-4 text-uppercase text-dark'>Our Creative Services</h1>
          <p>
            We have experience in offering a variety of services that ensure you get your websites up
            and running quickly and easily. Get started today with a free quote to see how we can help you.
          </p>
        </div>
        <div className='row'>
          {
            services.slice(0, 3).map(service => (
              <div className='col-lg-4 mb-2' key={service.id}>
                <div className='service-card'>
                  <div className='service-item rounded p-3 mb-4 text-center overflow-hidden'>
                    {
                    service.image
                      ? <img className='service-icon-image' src={service.image} />
                      : service.icon
                  }
                    <h4 className='text-uppercase mb-4'>
                      {service.serviceName}
                    </h4>
                    <p className='m-0 service-card-content'>
                      {service.content}
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className='row mt-3'>
          {
            services.slice(3, 6).map(service => (
              <div className='col-lg-4 mb-2' key={service.id}>
                <div className='service-card'>
                  <div className='service-item rounded p-3 mb-4 text-center overflow-hidden'>
                    {
                    service.image
                      ? <img className='service-icon-image' src={service.image} />
                      : service.icon
                  }
                    <h4 className='text-uppercase mb-4'>
                      {service.serviceName}
                    </h4>
                    <p className='m-0 service-card-content'>
                      {service.content}
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ServicesSection
