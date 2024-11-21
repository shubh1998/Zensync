import './servicesLayout.css'
import TechnologiesSection from 'components/molecules/TechnologiesSection/index'

const ServicesLayout = ({
  imageOnBanner, headingOnBanner, subHeadingOnBanner, whyChooseUsContent,
  serviceName, keyFeatures, developmentProcess, industriesWeServe,
  techStack, FaqQuestions, whyItMatters
}) => {
  return (
    <>
      <section className='service-banner-bg container-fluid d-flex flex-column align-items-center justify-space-between'>
        <div className='container px-0'>
          <div className='row mx-0 align-items-center'>
            <div className='col-lg-6 text-lg-left'>
              <div>
                <h1 className='text-capitalize mb-3 text-light'>
                  {headingOnBanner}
                </h1>
                <p className='fs-5 text-primary-red mb-4'>
                  {subHeadingOnBanner}
                </p>
              </div>
            </div>
            <div className='col-lg-6 px-0 text-right'>
              <img className='img-fluid mt-5 mt-lg-0 floating' src={imageOnBanner} alt='Hero Image' />
            </div>
          </div>
        </div>
      </section>

      <section className='container my-5 py-2'>
        <div className='why-choose-us-card align-items-center text-center p-4'>
          <h2 className='text-uppercase mb-3 text-primary-blue'>Why Choose Us ?</h2>
          <p className='fst-italic'>
            {whyChooseUsContent}
          </p>
        </div>
      </section>

      {
        whyItMatters?.length
          ? (
            <section className='container-fluid my-5 py-2'>
              <div className='container why-it-matters-card p-4'>
                <div className='row align-items-center'>
                  <div className='col-lg-12'>
                    <h3 className='text-uppercase mb-4 text-center'>
                      <i className='fa fa-solid fa-star me-3' />
                      Why {serviceName} Matters?
                      <i className='fa fa-solid fa-star ms-3' />
                    </h3>
                    <hr />
                    <h5>Launch Smarter, Faster, and More Cost-Effectively with an MVP</h5>
                    <p>
                      When you’re building a new product, time and budget are crucial factors. That’s why starting with a Minimum
                      Viable Product (MVP) is the smart way to test your concept, minimize risks, and build a strong foundation for
                      future growth.
                    </p>
                    <ol>
                      {
                        whyItMatters?.map(item => (
                          <li className='align-items-center fs-5 text-black' key={item.heading}>
                            <h5>{item.heading}</h5>
                            <p className='fs-6 text-body-gray'>{item.description}</p>
                          </li>
                        ))
                      }
                    </ol>
                  </div>
                </div>
              </div>
            </section>
            )
          : (
            <></>
            )
      }

      {
        keyFeatures?.length
          ? (
            <section className='container-fluid my-5 py-2'>
              <div className='container'>
                <div className='row align-items-center'>
                  <div className='col-lg-12'>
                    <h3 className='text-uppercase mb-4'><i className='fa fa-solid fa-key me-3' />Our Key {serviceName} Features :</h3>
                    <p>Built with Features that Boost Your Business</p>
                    <ol>
                      {
                  keyFeatures.map(item => (
                    <li className='align-items-center fs-5 text-black' key={item.heading}>
                      <h5>{item.heading}</h5>
                      <p className='fs-6 text-body-gray'>{item.description}</p>
                    </li>
                  ))
                }
                    </ol>
                  </div>
                </div>
              </div>
            </section>
            )
          : (
            <></>
            )
      }

      {
        developmentProcess?.length
          ? (
            <section className='container-fluid my-5 py-2'>
              <div className='container'>
                <div className='row align-items-center'>
                  <div className='col-lg-12'>
                    <h3 className='text-uppercase mb-4'><i className='fa fa-solid fa-tasks me-3' />Our {serviceName} Process Involves :</h3>
                    <p>A Streamlined Process from Idea to Launch</p>
                    <ol>
                      {
                      developmentProcess.map(item => (
                        <li className='align-items-center fs-5 text-black' key={item.heading}>
                          <h5>{item.heading}</h5>
                          <p className='fs-6 text-body-gray'>{item.description}</p>
                        </li>
                      ))
                    }
                    </ol>
                  </div>
                </div>
              </div>
            </section>
            )
          : (
            <></>
            )
      }

      {
        industriesWeServe?.length
          ? (
            <section className='container-fluid bg-light my-5 py-2'>
              <div className='container'>
                <div className='row py-5'>
                  <h2 className='text-primary-red text-center mb-4 text-uppercase'>
                    Industries We Serve
                  </h2>
                  {
              industriesWeServe.map((item) => (
                <div className='col-2 mt-2' key={item.industryName}>
                  <div className='industries-we-serve-card'>
                    <img src={item.industryLogo} alt={`${item.industryName}-logo`} />
                    <h6>{item.industryName}</h6>
                  </div>
                </div>
              ))
            }
                </div>
              </div>
            </section>
            )
          : (
            <></>
            )
      }

      {
        techStack?.length
          ? (
            <section className='container-fluid my-5 py-2'>
              <TechnologiesSection
                techStackTabsArrayData={techStack}
              />
            </section>
            )
          : (
            <></>
            )
      }

      {
        FaqQuestions?.length
          ? (
            <section className='my-5 py-2'>
              <div className='container-fluid bg-primary-blue py-5'>
                <div className='container'>
                  <h2 className='text-light text-center mb-4 text-uppercase'>
                    Frequently Asked Questions
                  </h2>
                  <div className='accordion accordion-flush' id='accordionFlushFaQ'>
                    {
                      FaqQuestions.map((item, index) => {
                        const isOpen = index === 0 // Open the first accordion by default
                        return (
                          <div className='accordion-item' id={`accordion-${index}`} key={item.question}>
                            <h2 className='accordion-header' id={`heading-${index}`}>
                              <button
                                className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target={`#collapseOne-${index}`}
                                aria-expanded={isOpen}
                                aria-controls={`collapseOne-${index}`}
                              >
                                {item.question}
                              </button>
                            </h2>
                            <div
                              id={`collapseOne-${index}`}
                              className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
                              aria-labelledby={`heading-${index}`}
                              data-bs-parent='#accordionFlushFaQ' // Link to parent accordion
                            >
                              <div className='accordion-body'>
                                {item.answer}
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </section>
            )
          : (
            <></>
            )
      }

    </>

  )
}

export default ServicesLayout
