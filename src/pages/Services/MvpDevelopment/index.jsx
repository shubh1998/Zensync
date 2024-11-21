import { CucumberJsImage, HeaderBannerIconImage } from 'assets/images/index'
import ServicesLayout from 'components/layouts/ServicesLayout/index'
import { TECHNOLOGIES_TABS_WITH_TECH_STACK } from 'constants/technologies.constants'

const MvpDevelopmentServicePage = () => {
  const MVP_DEVELOPMENT_SERVICE_DATA = {
    serviceName: 'MVP Development',
    imageOnBanner: HeaderBannerIconImage,
    headingOnBanner: 'Build Your MVP with Expert Development Services, Turn Your Vision into a Minimum Viable Product in Record Time',
    subHeadingOnBanner: `
      Get your product to market faster with our tailored MVP development services. Validate your idea,
      attract investors, and reduce costs with a functional MVP built by experienced developers.
    `,
    whyChooseUsContent: `
      At Zensync Solutions, our experienced developers bring years of expertise in building scalable MVPs, ensuring your product is
      designed to grow and adapt to your market needs. We offer custom solutions tailored specifically to your business, focusing
      on core functionalities that align with your vision and goals. With our agile development approach, we develop your MVP in
      sprints, providing quick iterations and continuous improvements throughout the process. Additionally, we offer comprehensive
      post-launch support, assisting with feedback collection and scaling features to ensure long-term success for your product.
      Choose us to bring your MVP to life with a proven, flexible, and customer-centric approach.
    `,
    whyItMatters: [
      {
        heading: 'Faster Time to Market',
        description: `
          Launch quickly and start gaining feedback.
        `
      },
      {
        heading: 'Cost-Efficiency',
        description: `
          Focus on core functionalities first, saving time and budget.
        `
      },
      {
        heading: 'User Validation',
        description: `
          Gather real-world user feedback and iterate efficiently.
        `
      },
      {
        heading: 'Investor Interest',
        description: `
          Show investors a working prototype to secure funding.
        `
      }
    ],
    developmentProcess: [
      {
        heading: 'Discovery & Planning',
        description: `
          We start by understanding your business goals, target audience, and market needs. Our team will help define the
          core features that your MVP requires.
        `
      },
      {
        heading: 'Prototyping & Wireframing',
        description: `
          Visualizing the product through wireframes to design a user-friendly interface.
        `
      },
      {
        heading: 'Development',
        description: `
          Our skilled developers build a robust MVP, integrating all key functionalities.
        `
      },
      {
        heading: 'Testing & Validation',
        description: `
          We rigorously test your MVP to ensure performance, scalability, and security.
        `
      },
      {
        heading: 'Launch & Feedback',
        description: `
          Once your MVP is live, we help gather feedback and optimize for future growth.
        `
      }
    ],
    industriesWeServe: [
      {
        industryName: 'IGaming',
        industryLogo: CucumberJsImage
      },
      {
        industryName: 'E-commerce',
        industryLogo: CucumberJsImage
      },
      {
        industryName: 'Healthcare',
        industryLogo: CucumberJsImage
      },
      {
        industryName: 'Finance',
        industryLogo: CucumberJsImage
      },
      {
        industryName: 'Education',
        industryLogo: CucumberJsImage
      },
      {
        industryName: 'Retail',
        industryLogo: CucumberJsImage
      }
    ],
    techStake: TECHNOLOGIES_TABS_WITH_TECH_STACK,
    FaqQuestions: [
      {
        question: 'What is MVP development?',
        answer: `
        MVP (Minimum Viable Product) development is the process of building a basic version of a product with only essential features.
        It allows startups and businesses to test their concept in the market, gather feedback, and make improvements before investing
        in a full-scale product.
        `
      },
      {
        question: 'Why should I build an MVP first?',
        answer: `
          Building an MVP helps you validate your idea, reduce risks, save on development costs, and gather real user feedback.
          It also allows you to attract potential investors by showcasing a working prototype and demonstrating market viability.
        `
      },
      {
        question: 'How long does it take to develop an MVP?',
        answer: `
          The timeline for MVP development depends on the complexity of the product and the scope of features required.
          Typically, an MVP can take anywhere from 4 to 12 weeks to complete, depending on the project’s size and the resources available.
        `
      },
      {
        question: 'How much does MVP development cost?',
        answer: `
          The cost of MVP development varies based on factors like project scope, features, and technology stack. We offer flexible
          pricing models based on your business needs and budget, ensuring cost-efficiency without compromising quality
        `
      },
      {
        question: 'Which industries can benefit from MVP development?',
        answer: `
          MVP development is useful for a wide range of industries, including fintech, healthcare, e-commerce, SaaS platforms,
          education, travel, and more. Any business looking to launch a new product or service can benefit from building an MVP
          to test and refine their concept.
        `
      },
      {
        question: 'Can I add more features after the MVP launch?',
        answer: `
          Yes! One of the main advantages of developing an MVP is that it allows for flexibility. Once the MVP is launched and
          feedback is collected, you can add more features and scale your product based on user feedback and market demand.
        `
      },
      {
        question: 'Do you offer ongoing support after MVP development?',
        answer: `
          Yes, we offer ongoing support and maintenance after the MVP launch. From feature updates to bug fixes and scaling,
          our team is here to ensure your product continues to perform optimally and evolves with your business needs.
        `
      },
      {
        question: 'What technologies do you use for MVP development?',
        answer: `
          Te use a wide range of modern technologies, including front-end and back-end frameworks like React, Angular,
          Node.js, Ruby on Rails, and more. The choice of technology depends on your product's specific requirements and
          the best tools to achieve your goals.
        `
      }
    ]
  }

  return (
    <ServicesLayout
      imageOnBanner={MVP_DEVELOPMENT_SERVICE_DATA.imageOnBanner}
      headingOnBanner={MVP_DEVELOPMENT_SERVICE_DATA.headingOnBanner}
      subHeadingOnBanner={MVP_DEVELOPMENT_SERVICE_DATA.subHeadingOnBanner}
      whyChooseUsContent={MVP_DEVELOPMENT_SERVICE_DATA.whyChooseUsContent}
      serviceName={MVP_DEVELOPMENT_SERVICE_DATA.serviceName}
      whyItMatters={MVP_DEVELOPMENT_SERVICE_DATA.whyItMatters}
      developmentProcess={MVP_DEVELOPMENT_SERVICE_DATA.developmentProcess}
      industriesWeServe={MVP_DEVELOPMENT_SERVICE_DATA.industriesWeServe}
      techStack={MVP_DEVELOPMENT_SERVICE_DATA.techStake}
      FaqQuestions={MVP_DEVELOPMENT_SERVICE_DATA.FaqQuestions}
    />
  )
}

export default MvpDevelopmentServicePage
