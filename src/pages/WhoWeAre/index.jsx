import './whoweare.css'
import { Link } from 'react-router-dom'
import { AboutImage } from 'assets/images/index'
import { ROUTE_PATHS } from 'constants/routes.constants'
import BannerHeading from 'components/molecules/BannerHeading/index'

const WhoWeArePage = () => {
  return (
    <>
      <BannerHeading heading='About' toText='About' />
      <div className='container-fluid my-3'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <img className='img-fluid img-container' src={AboutImage} alt='' />
            </div>
            <div className='col-lg-6'>
              <h3 className='text-uppercase mb-4'>About Us</h3>
              <h5 className='text-uppercase text-primary-red mb-3'>
                Welcome to ZenSync Solutions - Your Gateway to Innovative Digital Excellence!
              </h5>
              <p>
                At ZenSync Solutions, we bring your digital aspirations to life through cutting-edge services
                in App, Web, and Game Development. Our dedicated team is committed to crafting immersive experiences
                that resonate with your audience, ensuring your brand stands out in the digital landscape.
              </p>
              <p>
                Since the beginning of the digital ecosystem, Zensync Solution has been at the top of brand strategy,
                digital innovation, and operational excellence as a seasoned builder of mobile & web solutions.
                By building target customers, potential numbers, and unified quality of work, Zensync Solutions has
                become one of the top mobile & web development company and the right destination to achieve positive
                outcomes.
              </p>
              <button className='btn btn-primary-blue text-uppercase py-3 px-5'>
                <Link className='text-light' to={ROUTE_PATHS.CONTACT_US}>Contact us</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr className='container my-4' />

      <div className='container-fluid my-3'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-12'>
              <h3 className='text-uppercase mb-4'><i className='fa fa-solid fa-eye me-3' />Our Vision</h3>
              <p>
                <i className='fa fa-quote-left text-primary me-3' />
                To be the catalyst of digital evolution, empowering businesses with
                innovative solutions that seamlessly blend technology, simplicity, and
                harmony, shaping a future where every interaction is an experience.
                <i className='fa fa-quote-right text-primary ms-3' />
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className='container my-4' />

      <div className='container-fluid my-3'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-12'>
              <h3 className='text-uppercase mb-4'>
                <i className='fa fa-solid fa-bullseye me-3' />
                Our Mission
              </h3>
              <p className='mb-4'>
                At ZenSync Solutions, our mission is to deliver unparalleled digital solutions that
                transcend expectations. We commit to:
              </p>
              <ol>
                <li className='mt-3'>
                  <b>Innovation : </b>
                  Continually pushing the boundaries of technology to provide
                  cutting-edge solutions that position our clients at the forefront of their industries.
                </li>
                <li className='mt-3'>
                  <b>Simplicity : </b>
                  Crafting elegant and user-friendly solutions that simplify complexity,
                  ensuring accessibility and ease of use for all.
                </li>
                <li className='mt-3'>
                  <b>Harmony : </b>
                  Fostering a harmonious synergy between creativity, precision, and functionality
                  in every product we create, amplifying the impact of our clients in the digital landscape.
                </li>
                <li className='mt-3'>
                  <b>Client Success : </b>
                  Placing our clients success at the core of our endeavors, we strive to understand their
                  unique needs, challenges, and aspirations to deliver tailored solutions that drive
                  measurable results.
                </li>
                <li className='mt-3'>
                  <b>Continuous Growth : </b>
                  Cultivating a culture of continuous learning and growth, both for our team and our clients,
                  ensuring sustained success in an ever-evolving digital world
                </li>
                <li className='mt-3'>
                  <b>Ethical Practices : </b>
                  Conducting business with the highest standards of integrity, transparency, and ethical
                  practices, building enduring relationships based on trust
                </li>
              </ol>
              <p className='mb-4'>
                With these guiding principles, we aspire to be the partner of choice for businesses seeking
                transformative and sustainable digital solutions. Our commitment is not just to meet
                expectations but to exceed them, creating a legacy of innovation and excellence.
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className='container-fluid my-3'>
        <section className='bg-light-gray h-100'>
          <div className='container py-5'>
            <div className='row py-5 steps-container'>
              <div className='col-lg-12' data-aos='fade-left'>
                <div className='px-2'>
                  <div className='text-center'>
                    <h6 className='text-gray'>
                      Complex Project & Don't Know How To Start!
                    </h6>
                    <h2>We have all the answers</h2>
                  </div>
                  <div className='row justify-content-between mt-5'>
                    <div className='col-lg-4 mb-4'>
                      <div className='all-answers-item mx-4'>
                        <h2 className='text-primary-blue'>Step: 1</h2>
                        <p>Convert Ideas to Designs</p>
                      </div>
                    </div>
                    <div className='col-lg-4 mb-4'>
                      <div className='all-answers-item mx-4'>
                        <h2 className='text-primary-blue'>Step: 2</h2>
                        <p>Convert Designs to Applications and Enhance User Experience</p>
                      </div>
                    </div>
                    <div className='col-lg-4 mb-4'>
                      <div className='all-answers-item mx-4'>
                        <h2 className='text-primary-blue'>Step: 3</h2>
                        <p>Unprecedented Return of Investments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className='container-fluid my-3'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-12'>
              <h3 className='text-uppercase mb-4'>You Choose &nbsp;
                <span className='text-primary-red'>Zensync</span> &nbsp;
                <span className='text-primary-red'>Solutions</span> For
              </h3>
              <h5 className='mb-4'>
                We are Driven by values and powered by exceptionally skilled team.
                Our client-oriented process ensures end-to-end delivery of high quality results.
              </h5>
              <p className='mb-4'>
                Our solid delivery process makes us the disrupters in the market. We transform your business
                with new age technology to fasten your growth and shape your future. We master the art of
                leveraging the technology to boost the ROI of our clients. The belief of our clients inspire
                us to become the top leading IT firm.
                We like the freedom to express and innovate but we like the collaboration with communication.
                We are not afraid to initiate and innovate, in fact we face truth with Humility
              </p>
              <div className='row'>
                <div className='col-lg-6'>
                  <p className='text-black'>
                    <i className='fa fa-check text-primary me-3' />
                    Exponential Productivity
                  </p>
                  <p className='text-black'>
                    <i className='fa fa-check text-primary me-3' />
                    Agile Technology Adoption
                  </p>
                  <p className='text-black'>
                    <i className='fa fa-check text-primary me-3' />
                    Transparency and Communication
                  </p>
                </div>
                <div className='col-lg-6'>
                  <p className='text-black'>
                    <i className='fa fa-check text-primary me-3' />
                    User-Centric Approach
                  </p>
                  <p className='text-black'>
                    <i className='fa fa-check text-primary me-3' />
                    Continuous Improvement
                  </p>
                  <p className='text-black'>
                    <i className='fa fa-check text-primary me-3' />
                    Ethical Business Practices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid my-3'>
        <div className='container pb-3'>
          <div className='row'>
            <div className='col-lg-4 mb-2'>
              <div className='d-flex align-items-center bg-light rounded mb-4 p-5 h-150'>
                <i className='fa fa-3x fa-map-marker-alt text-primary me-3' />
                <div className='d-flex flex-column'>
                  <h5 className='text-uppercase'>Our Office</h5>
                  <p className='m-0'>123 Street, New York, USA</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 mb-2'>
              <div className='d-flex align-items-center bg-light rounded mb-4 p-5 h-150'>
                <i className='fa fa-3x fa-envelope-open text-primary me-3' />
                <div className='d-flex flex-column'>
                  <h5 className='text-uppercase'>Email Us</h5>
                  <p className='m-0'>info@example.com</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 mb-2'>
              <div className='d-flex align-items-center bg-light rounded mb-4 p-5 h-150'>
                <i className='fas fa-3x fa-phone-alt text-primary me-3' />
                <div className='d-flex flex-column'>
                  <h5 className='text-uppercase'>Call Us</h5>
                  <p className='m-0'>+91 9399192353</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhoWeArePage
