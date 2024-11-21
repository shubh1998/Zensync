import { CucumberJsImage, HeaderBannerIconImage } from 'assets/images/index'
import ServicesLayout from 'components/layouts/ServicesLayout/index'
import { TECHNOLOGIES_TABS_WITH_TECH_STACK } from 'constants/technologies.constants'

const UiUxDevelopmentServicePage = () => {
  const UI_UX_DEVELOPMENT_SERVICE_DATA = {
    serviceName: 'UI/UX Development',
    imageOnBanner: HeaderBannerIconImage,
    headingOnBanner: 'Transforming Ideas into Intuitive Digital Experiences with Expert UI/UX Development Services',
    subHeadingOnBanner: `
      Better User Interaction & Experience not only engage users or customers but also provide much better accessibility
      to your services and platform, helping you acquire customers and build trust, brand and customer relationships.
    `,
    whyChooseUsContent: `
      At Zensync Solutions, we don’t just build interfaces – we craft seamless digital experiences. Our UI/UX development
      services focus on blending creativity with functionality, ensuring that your users enjoy an intuitive, engaging, and
      efficient journey through your platform. From concept to design, our team brings your vision to life.
      Choosing the right partner for UI/UX development can make or break your digital product's success. We follow four principles
      while developing a seamless UI/UX that are - User-Centric Approach, Experienced Team, Data-Driven Design, and Agile Process.
      It helps us and clients to get a better product design that will land us, users and client on same page.
    `,
    keyFeatures: [
      {
        heading: 'User Research & Personas',
        description: `
          We delve into user data to understand pain points and design solutions that truly resonate with your audience.
        `
      },
      {
        heading: 'Wireframes & Prototyping',
        description: `
          Bring your ideas to life with functional prototypes that simulate the user journey.
        `
      },
      {
        heading: 'UI Design',
        description: `
          Pixel-perfect designs with a focus on aesthetics, accessibility, and responsive performance across all devices.
        `
      },
      {
        heading: 'UX Audits & Testing',
        description: `
          Ensure your platform is optimized for the best user experience, with thorough testing and analysis to eliminate friction.
        `
      }
    ],
    developmentProcess: [
      {
        heading: 'Discovery & Strategy',
        description: `
          Understanding your brand, users, and project goals.
        `
      },
      {
        heading: 'Wireframing',
        description: `
          Initial design concepts and layout structures.
        `
      },
      {
        heading: 'Design & Prototype',
        description: `
          High-fidelity designs and interactive prototypes.
        `
      },
      {
        heading: 'Testing & Feedback',
        description: `
          User testing, feedback integration, and adjustments.
        `
      },
      {
        heading: 'Launch & Optimization',
        description: `
          Final product launch with post-launch analysis for continued optimization.
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
    techStake: TECHNOLOGIES_TABS_WITH_TECH_STACK.filter(item => item.id !== 'frontend-app-development'),
    FaqQuestions: [
      {
        question: 'What is the difference between UI and UX?',
        answer: `
          User Interface (UI) refers to the visual elements of a product, while User Experience (UX) focuses on
          how users interact with and experience those elements. Both are critical to creating effective digital
          solutions.
        `
      },
      {
        question: 'How long does a UI/UX project take?',
        answer: `
          The timeline depends on the project’s complexity, but typically, a full UI/UX process takes 4-8 weeks.
          We follow an agile approach, allowing us to deliver quality work efficiently.
        `
      },
      {
        question: 'Can you redesign an existing platform?',
        answer: `
          Yes! We can audit your current platform, identify areas for improvement, and implement a redesign that
          aligns with your goals and improves user satisfaction.
        `
      }
    ]
  }

  return (
    <ServicesLayout
      imageOnBanner={UI_UX_DEVELOPMENT_SERVICE_DATA.imageOnBanner}
      headingOnBanner={UI_UX_DEVELOPMENT_SERVICE_DATA.headingOnBanner}
      subHeadingOnBanner={UI_UX_DEVELOPMENT_SERVICE_DATA.subHeadingOnBanner}
      whyChooseUsContent={UI_UX_DEVELOPMENT_SERVICE_DATA.whyChooseUsContent}
      serviceName={UI_UX_DEVELOPMENT_SERVICE_DATA.serviceName}
      keyFeatures={UI_UX_DEVELOPMENT_SERVICE_DATA.keyFeatures}
      developmentProcess={UI_UX_DEVELOPMENT_SERVICE_DATA.developmentProcess}
      industriesWeServe={UI_UX_DEVELOPMENT_SERVICE_DATA.industriesWeServe}
      techStack={UI_UX_DEVELOPMENT_SERVICE_DATA.techStake}
      FaqQuestions={UI_UX_DEVELOPMENT_SERVICE_DATA.FaqQuestions}
    />
  )
}

export default UiUxDevelopmentServicePage
