import { CucumberJsImage, HeaderBannerIconImage } from 'assets/images/index'
import ServicesLayout from 'components/layouts/ServicesLayout/index'
import { TECHNOLOGIES_TABS_WITH_TECH_STACK } from 'constants/technologies.constants'

const CustomSoftwareDevelopmentServicePage = () => {
  const CUSTOM_SOFTWARE_DEVELOPMENT_SERVICE_DATA = {
    serviceName: 'Custom Software Development',
    imageOnBanner: HeaderBannerIconImage,
    headingOnBanner: 'Transform Your Business with Custom Software Development',
    subHeadingOnBanner: `
      Tailored software solutions designed to meet your unique business needs. Build scalable, secure,
      and efficient applications that accelerate growth.
    `,
    whyChooseUsContent: `
      At Zensync Solutions, we are committed to delivering excellence through Deep Industry Expertise.
      We understand the specific challenges your industry faces and tailor solutions to fit. We prioritize
      your needs and involve you in every step of the development process. And we always recommend you
      the best solution with premium features at minimal cost. We specialize in building bespoke software that
      addresses your business's specific challenges and goals. Our custom solutions help you in Streamline Operations,
      improve Customer Experience, Security and in building a foundation for future growth and scalability.
      Our expertise and experience will cover all your needs that ensures to deliver the product.
    `,
    keyFeatures: [],
    developmentProcess: [
      {
        heading: 'Consultation & Planning',
        description: `
          We begin by understanding your business, requirements, and long-term vision.
        `
      },
      {
        heading: 'Custom Design & Architecture',
        description: `
          Our UI/UX experts design user-friendly interfaces, and our architects plan the system's structure for reliability and scalability.
        `
      },
      {
        heading: 'Development & Integration',
        description: `
          Our developers bring your project to life, ensuring smooth integration with your existing systems.
        `
      },
      {
        heading: 'Quality Assurance',
        description: `
          Every line of code is rigorously tested to ensure it’s bug-free, secure, and meets your performance standards.
        `
      },
      {
        heading: 'Launch & Support',
        description: `
          We don’t just deliver your software—we support you post-launch with maintenance, updates, and scaling.
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
        question: 'How long does it take to develop custom software?',
        answer: 'The development timeline depends on the project scope and complexity. On average, it can take between 4-12 months for most custom solutions.'
      },
      {
        question: 'Can you integrate new software with our existing systems?',
        answer: 'Absolutely! Our team ensures smooth integration with your existing platforms, whether they are cloud-based or on-premises.'
      },
      {
        question: 'Do you offer ongoing maintenance and support?',
        answer: 'Yes, we provide ongoing maintenance, updates, and support after launch to ensure your software stays up-to-date.'
      }
    ]
  }

  return (
    <ServicesLayout
      imageOnBanner={CUSTOM_SOFTWARE_DEVELOPMENT_SERVICE_DATA.imageOnBanner}
      headingOnBanner={CUSTOM_SOFTWARE_DEVELOPMENT_SERVICE_DATA.headingOnBanner}
      subHeadingOnBanner={CUSTOM_SOFTWARE_DEVELOPMENT_SERVICE_DATA.subHeadingOnBanner}
      whyChooseUsContent={CUSTOM_SOFTWARE_DEVELOPMENT_SERVICE_DATA.whyChooseUsContent}
      serviceName={CUSTOM_SOFTWARE_DEVELOPMENT_SERVICE_DATA.serviceName}
      keyFeatures={CUSTOM_SOFTWARE_DEVELOPMENT_SERVICE_DATA.keyFeatures}
      developmentProcess={CUSTOM_SOFTWARE_DEVELOPMENT_SERVICE_DATA.developmentProcess}
      industriesWeServe={CUSTOM_SOFTWARE_DEVELOPMENT_SERVICE_DATA.industriesWeServe}
      techStack={CUSTOM_SOFTWARE_DEVELOPMENT_SERVICE_DATA.techStake}
      FaqQuestions={CUSTOM_SOFTWARE_DEVELOPMENT_SERVICE_DATA.FaqQuestions}
    />
  )
}

export default CustomSoftwareDevelopmentServicePage
