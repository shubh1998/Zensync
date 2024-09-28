import './howWeWork.css'
import BannerHeading from 'components/molecules/BannerHeading/index'
import {
  LaunchingImage, PlanningImage, SupportImage, Testing1Image,
  UserInteractionImage, WebDesignImage, WebDevelopmentImage
} from 'assets/images/index'

const howWeWorkProcessKeyPoints = [
  {
    step: 'Step 1',
    title: 'Client Interaction and Understanding the Vision',
    description: `After receiving your interest in our organization, we plan our first interaction.
    Our team member will have a detailed conversation with you to understand your aspirations and requirements.
    The journey begins with a deep dive into your vision. We take the time to understand your business objectives,
    target audience, and unique challenges. This phase involves thorough consultations to ensure a
    comprehensive grasp of your goals.`,
    titleBgClassName: 'bg-success',
    image: UserInteractionImage
  },
  {
    step: 'Step 2',
    title: 'Strategic Planning',
    description: `After receiving your interest in, With a clear understanding of your vision,
    we move to strategic planning. Our team of experts collaborates to outline a roadmap that aligns
    with your objectives. This phase involves detailed project timelines, resource allocation, and
    a breakdown of deliverables. This phase involves detailed planning and strategies
    that describe how resources are delivered to the project and to achieve the milestone and MVPs
    before it meets to deadline`,
    titleBgClassName: 'bg-primary',
    image: PlanningImage
  },
  {
    step: 'Step 3',
    title: 'Designing for Impact:',
    description: `Creativity takes center stage as we begin the design phase. Whether it's an app,
    website, game, or a Minimum Viable Product (MVP), our designers craft visually stunning and functional prototypes.
    We prioritize user experience, ensuring that every design element serves a purpose.
    We will provide you with the design of your tentative home page and an inner page.
    This design can be modified if you feel so. After finalizing the home page and the design elements,
    we start implementing the design on all the related pages.`,
    titleBgClassName: 'bg-success',
    image: WebDesignImage
  },
  {
    step: 'Step 4',
    title: 'Development Excellence',
    description: `With designs approved, our development team takes the reins. They bring the vision
    to life with meticulous coding, testing, and iteration. The process is transparent, and clients
    are provided with regular updates to track progress. During development, We follow agile methodologies
    that help team and client to be in sync with all over the progress of the product including all features.
    According to the products or projects, We also suggest tech stack to the client before starting development
    that helps our team and client to be associated with us in long run because tech stake is very important
    part when it comes to scalability and performance.`,
    titleBgClassName: 'bg-primary',
    image: WebDevelopmentImage
  },
  {
    step: 'Step 5',
    title: 'User-Centric Testing',
    description: `User-centric testing is a crucial phase in the development process, focusing on
    evaluating a product or system from the perspective of its end-users. The primary goal is to
    ensure that the final product meets the needs, expectations, and preferences of the target audience.
    Before launch, our solutions undergo rigorous testing. From functionality checks to user experience testing,
    we ensure that the final product not only meets but exceeds expectations. Client feedback is invaluable
    during this phase.`,
    titleBgClassName: 'bg-success',
    image: Testing1Image
  },
  {
    step: 'Step 6',
    title: 'Final Release, Launch and Optimization',
    description: `After creating the final version, we share the output with you. Your team can take
    a final review of all the content, pictures and other information. Final changes can be done at
    this stage before making the website live on the web.
    In the Launching phase, The much-anticipated launch marks the beginning of a new digital chapter
    for your business. But our commitment doesn't end there.
    We monitor performance post-launch, identifying opportunities for optimization and enhancement.
    `,
    titleBgClassName: 'bg-primary',
    image: LaunchingImage
  },
  {
    step: 'Step 7',
    title: 'Product Support',
    description: `We offer product support after the completion of the project.
    It never ends, website needs updation and proper maintenance which we provide
    in our after sales services.
    Our commitment to excellence extends beyond project completion. We gather insights,
    analyze performance data, and provide ongoing support. As the digital landscape evolves,
    we ensure your solutions evolve with it.
    Our support team always ready to assist you and make your product so nice.
    `,
    titleBgClassName: 'bg-success',
    image: SupportImage
  }
]

const HowWeWorkPage = () => {
  return (
    <div>
      <BannerHeading heading='How We Work' toText='How We Work' />
      <div className='container py-5'>
        <div className='py-3 mb-4 text-center'>
          <h3 className='title'>Taking your business idea to web and mobile</h3>
          <p>
            At ZenSync Solutions, our approach to work is rooted in a blend of precision, innovation,
            and seamless collaboration. We believe that the journey to digital excellence is as important
            as the destination, and our methodology reflects this philosophy.
          </p>
        </div>
        {
          howWeWorkProcessKeyPoints.map((item, index) => (
            <div className='row how-we-work-item m-4' key={item.step}>
              <div
                className={`col-lg-4 ${item.titleBgClassName}`}
                {...(index !== 0 ? { 'data-aos': 'fade-right' } : {})}
              >
                <div className='p-4 h-100 w-100 d-flex justify-content-center align-items-center'>
                  <img src={item.image} className='w-50' alt='planning' />
                </div>
              </div>
              <div
                className='col-lg-8'
                {...(index !== 0 ? { 'data-aos': 'fade-left' } : {})}
              >
                <div className='py-5 px-3'>
                  <h5 className='text-center text-primary-blue'>{item.title}</h5><br />
                  <p className='text-justify'>{item.description}</p>
                </div>
              </div>
            </div>
          ))
        }
        <div>
          <p className='mb-2'>
            Throughout our process, we uphold the highest ethical standards.
            Transparency is key, and we believe in fostering a relationship built on trust,
            integrity, and shared success.
          </p>
          <p>
            Embark on a transformative journey with ZenSync Solutions. From ideation to execution,
            our process is designed to deliver digital solutions that not only meet but exceed expectations.
            Partner with us, and let's shape the future of your digital presence together.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HowWeWorkPage
