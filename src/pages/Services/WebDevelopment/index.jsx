import { CucumberJsImage, HeaderBannerIconImage } from 'assets/images/index'
import ServicesLayout from 'components/layouts/ServicesLayout/index'
import { TECHNOLOGIES_TABS_WITH_TECH_STACK } from 'constants/technologies.constants'

const WebDevelopmentServicePage = () => {
  const WEB_DEVELOPMENT_SERVICE_DATA = {
    serviceName: 'Web Development',
    imageOnBanner: HeaderBannerIconImage,
    headingOnBanner: 'Building Fast, Secure, and Scalable Websites for Your Business Growth',
    subHeadingOnBanner: 'Custom Web Development Services Tailored to Your Needs',
    whyChooseUsContent: `
      We provide custom web development solutions that align with your business goals.
      Whether you're a startup, an established company, or looking to expand your digital
      presence, our team of expert developers can create responsive, SEO-optimized websites
      that convert visitors into customers.
    `,
    keyFeatures: [
      {
        heading: 'Custom Design & Development',
        description: `
          We offer bespoke web design and development tailored to your brand identity.
        `
      },
      {
        heading: 'Responsive & Mobile-Friendly',
        description: `
          Your website will be fully optimized for mobile devices and tablets, ensuring a seamless experience across all platforms.
        `
      },
      {
        heading: 'Fast & Secure',
        description: `
          We prioritize website speed, performance, and security to ensure your site runs smoothly and stays protected from threats.
        `
      },
      {
        heading: 'Scalable Solutions',
        description: `
          Our development services allow your site to grow with your business, adapting to increasing traffic and functionality needs.
        `
      },
      {
        heading: 'SEO Optimized',
        description: `
          All our websites come with SEO best practices in place to ensure maximum visibility on search engines.
        `
      }
    ],
    developmentProcess: [
      {
        heading: 'Initial Consultation',
        description: `
          We start by understanding your vision, business goals, and technical requirements.
        `
      },
      {
        heading: 'Design & Prototyping',
        description: `
          We create interactive prototypes and mockups that reflect your brand’s identity and provide a user-friendly experience.
        `
      },
      {
        heading: 'Development & Testing',
        description: `
          Our team builds a fully functional, secure, and scalable website, using the latest technologies like HTML5, CSS3,
          JavaScript, React, and more. We rigorously test every feature to ensure top performance.
        `
      },
      {
        heading: 'Launch & Support',
        description: `
          Once launched, we offer continued support to keep your website updated and performing at its best.
        `
      },
      {
        heading: 'SEO Optimized',
        description: `
          All our websites come with SEO best practices in place to ensure maximum visibility on search engines.
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
    techStake: TECHNOLOGIES_TABS_WITH_TECH_STACK.filter(item => item.id !== 'mobile-app-development'),
    FaqQuestions: [
      {
        question: 'How long does it take to build a custom website? ',
        answer: 'Typically, a custom website takes 4-12 weeks depending on complexity and features required.'
      },
      {
        question: 'Do you offer ongoing support after the website is live?',
        answer: 'Yes, we offer maintenance packages to ensure your site runs smoothly.'
      },
      {
        question: 'Will my website be mobile-friendly?',
        answer: 'Absolutely! All our websites are mobile-responsive and optimized for all devices.'
      }
    ]
  }

  return (
    <ServicesLayout
      imageOnBanner={WEB_DEVELOPMENT_SERVICE_DATA.imageOnBanner}
      headingOnBanner={WEB_DEVELOPMENT_SERVICE_DATA.headingOnBanner}
      subHeadingOnBanner={WEB_DEVELOPMENT_SERVICE_DATA.subHeadingOnBanner}
      whyChooseUsContent={WEB_DEVELOPMENT_SERVICE_DATA.whyChooseUsContent}
      serviceName={WEB_DEVELOPMENT_SERVICE_DATA.serviceName}
      keyFeatures={WEB_DEVELOPMENT_SERVICE_DATA.keyFeatures}
      developmentProcess={WEB_DEVELOPMENT_SERVICE_DATA.developmentProcess}
      industriesWeServe={WEB_DEVELOPMENT_SERVICE_DATA.industriesWeServe}
      techStack={WEB_DEVELOPMENT_SERVICE_DATA.techStake}
      FaqQuestions={WEB_DEVELOPMENT_SERVICE_DATA.FaqQuestions}
    />
  )
}

export default WebDevelopmentServicePage
