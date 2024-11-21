import { CucumberJsImage, HeaderBannerIconImage } from 'assets/images/index'
import ServicesLayout from 'components/layouts/ServicesLayout/index'
import { TECHNOLOGIES_TABS_WITH_TECH_STACK } from 'constants/technologies.constants'

const MobileAppDevelopmentServicePage = () => {
  const MOBILE_APP_DEVELOPMENT_SERVICE_DATA = {
    serviceName: 'Mobile App Development',
    imageOnBanner: HeaderBannerIconImage,
    headingOnBanner: 'Build Future-Ready Mobile Apps That Stand Out',
    subHeadingOnBanner: `
      Custom mobile app development for iOS and Android platforms designed to empower your business with innovative digital solutions.
    `,
    whyChooseUsContent: `
      At Zensync Solutions, we specialize in creating high-performance mobile apps tailored to your unique business needs.
      Whether you need a sleek e-commerce platform, a customer engagement app, or a complex enterprise solution, we have the
      expertise to build apps that drive results.
    `,
    keyFeatures: [
      {
        heading: 'Push Notifications',
        description: `
          Engage with your users in real-time through personalized notifications.
        `
      },
      {
        heading: 'In-App Purchases',
        description: `
          Seamlessly integrate payments and transactions within your app.
        `
      },
      {
        heading: 'Location-Based Services',
        description: `
          Enhance user experience with geolocation and real-time data.
        `
      },
      {
        heading: 'Cloud Integration',
        description: `
          Synchronize app data with cloud services for easy access and security.
        `
      },
      {
        heading: 'Third-Party API Integrations',
        description: `
          Connect your app with other platforms or services like social media or CRM tools.
        `
      }
    ],
    developmentProcess: [
      {
        heading: 'Discovery & Strategy',
        description: `
          We start by understanding your business needs, target audience, and app goals.
        `
      },
      {
        heading: 'UI/UX Design',
        description: `
          Our expert designers create prototypes and wireframes to map out the user experience.
        `
      },
      {
        heading: 'App Development',
        description: `
          Our development team brings the app to life with clean, efficient code.
        `
      },
      {
        heading: 'Testing & Quality Assurance',
        description: `
          Rigorous testing ensures that your app runs smoothly and without bugs.
        `
      },
      {
        heading: 'Launch & Support',
        description: `
          We help you launch your app on the App Store and Google Play, and provide ongoing support to ensure continuous performance.
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
        question: 'How long does it take to develop a mobile app?',
        answer: 'Typically, app development can take anywhere from 3 to 6 months, depending on the complexity of the app and the features required.'
      },
      {
        question: 'Can you develop apps for both iOS and Android?',
        answer: 'Yes, we offer native app development for iOS and Android as well as cross-platform solutions.'
      },
      {
        question: 'How do you ensure the security of my app?',
        answer: 'We implement best practices in app security, including data encryption, secure APIs, and regular security testing.'
      },
      {
        question: 'What does the post-launch support include?',
        answer: 'We provide ongoing maintenance, bug fixes, updates, and new feature development to keep your app performing optimally.'
      }
    ]
  }

  return (
    <ServicesLayout
      imageOnBanner={MOBILE_APP_DEVELOPMENT_SERVICE_DATA.imageOnBanner}
      headingOnBanner={MOBILE_APP_DEVELOPMENT_SERVICE_DATA.headingOnBanner}
      subHeadingOnBanner={MOBILE_APP_DEVELOPMENT_SERVICE_DATA.subHeadingOnBanner}
      whyChooseUsContent={MOBILE_APP_DEVELOPMENT_SERVICE_DATA.whyChooseUsContent}
      serviceName={MOBILE_APP_DEVELOPMENT_SERVICE_DATA.serviceName}
      keyFeatures={MOBILE_APP_DEVELOPMENT_SERVICE_DATA.keyFeatures}
      developmentProcess={MOBILE_APP_DEVELOPMENT_SERVICE_DATA.developmentProcess}
      industriesWeServe={MOBILE_APP_DEVELOPMENT_SERVICE_DATA.industriesWeServe}
      techStack={MOBILE_APP_DEVELOPMENT_SERVICE_DATA.techStake}
      FaqQuestions={MOBILE_APP_DEVELOPMENT_SERVICE_DATA.FaqQuestions}
    />
  )
}

export default MobileAppDevelopmentServicePage
