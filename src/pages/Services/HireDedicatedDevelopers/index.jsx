import { CucumberJsImage, HeaderBannerIconImage } from 'assets/images/index'
import ServicesLayout from 'components/layouts/ServicesLayout/index'
import { TECHNOLOGIES_TABS_WITH_TECH_STACK } from 'constants/technologies.constants'

const HireDedicatedDevelopersServicePage = () => {
  const HIRE_DEDICATED_DEVELOPERS_SERVICE_DATA = {
    serviceName: 'Hire Dedicated Development',
    imageOnBanner: HeaderBannerIconImage,
    headingOnBanner: 'Hire Dedicated Developers for Your Project Success',
    subHeadingOnBanner: `
      Scale Your Development Team with Our Expert Outsource Developers.
    `,
    whyChooseUsContent: `
      At Zensync Solutions, we specialize in providing top-tier developers to seamlessly integrate into your team,
      helping you achieve your business goals with ease. Whether you're looking to augment your current staff, scale
      your development efforts, or outsource a complete project, we offer tailored solutions to meet your exact needs.
      Our developers have expertise across a variety of tech stacks, ensuring you hire the right talent for your
      specific project requirements. With access to a global talent pool, we bring together skilled developers from
      around the world, offering a diverse range of experience and knowledge. Additionally, our services are designed
      to be cost-efficient, allowing you to reduce infrastructure and in-house staffing costs through flexible outsourcing
      options. Let us help you take your development to the next level with dedicated developers that fit seamlessly
      into your team.
    `,
    keyFeatures: [
      {
        heading: '"OUR SERVICES: Tailored IT Solutions to Fit Your Business Needs" Hire Dedicated Developers',
        description: `
          Bring in skilled professionals who work exclusively on your project. From web development to mobile app
          development, our developers are committed to your success.
        `
      },
      {
        heading: 'Outsource Developers',
        description: `
          Reduce operational costs by outsourcing development work to a trusted partner. We handle everything from
          project management to quality assurance, delivering results on time and within budget.
        `
      },
      {
        heading: 'Staff Augmentation',
        description: `
          Need to scale fast? With our staff augmentation service, you can quickly add qualified developers to your
          team to meet deadlines and handle additional workload.
        `
      }
    ],
    developmentProcess: [
      {
        heading: '"How It Works: Simple and Transparent Process" Tell Us Your Requirements',
        description: `
          Share your project details and the specific skills you need
        `
      },
      {
        heading: 'Get Matched with Top Talent',
        description: `
          We connect you with vetted developers that fit your requirements.
        `
      },
      {
        heading: 'Kickstart Your Project',
        description: `
          Your dedicated developer or team begins working immediately, delivering high-quality code.
        `
      },
      {
        heading: 'Ongoing Support',
        description: `
          We provide continuous support, ensuring your project remains on track.
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
    techStake: TECHNOLOGIES_TABS_WITH_TECH_STACK,
    FaqQuestions: [
      {
        question: 'What are the benefits of hiring dedicated developers?',
        answer: `
          Hiring dedicated developers allows you to have a skilled team working exclusively on your project, ensuring focused attention
          and faster delivery. You can scale your team as needed, reduce overhead costs, and access global talent, all while maintaining
          full control over the project’s progress.
        `
      },
      {
        question: 'How does the staff augmentation process work?',
        answer: `
          The staff augmentation process is simple: share your project requirements with us, and we’ll match you with qualified developers
          who have the skills you need. These developers seamlessly integrate into your team, working alongside your in-house staff to
          meet project goals without the need for long-term employment contracts.
        `
      },
      {
        question: 'What technologies do your developers specialize in?',
        answer: `
          Our developers are proficient in a wide range of technologies, including React, Angular, Python, Node.js, Flutter, iOS, Android,
          and more. Whether you need frontend, backend, or mobile app development, we match you with developers who have expertise in the
          specific tech stack required for your project.
        `
      },
      {
        question: 'Can I hire developers on a short-term basis?',
        answer: `
          Yes, you can hire developers for both short-term and long-term projects. Whether you need a developer for a few weeks or several
          months, our flexible hiring models allow you to scale your team based on your project's specific timelines and needs.
        `
      },
      {
        question: 'What is the cost of outsourcing developers?',
        answer: `
          The cost of outsourcing developers depends on the complexity of your project, the experience level of the developers, and the
          duration of the engagement. We offer competitive pricing models that are more cost-effective than traditional in-house hiring,
          helping you save on overhead, infrastructure, and recruitment costs.
        `
      }
    ]
  }

  return (
    <ServicesLayout
      imageOnBanner={HIRE_DEDICATED_DEVELOPERS_SERVICE_DATA.imageOnBanner}
      headingOnBanner={HIRE_DEDICATED_DEVELOPERS_SERVICE_DATA.headingOnBanner}
      subHeadingOnBanner={HIRE_DEDICATED_DEVELOPERS_SERVICE_DATA.subHeadingOnBanner}
      whyChooseUsContent={HIRE_DEDICATED_DEVELOPERS_SERVICE_DATA.whyChooseUsContent}
      serviceName={HIRE_DEDICATED_DEVELOPERS_SERVICE_DATA.serviceName}
      keyFeatures={HIRE_DEDICATED_DEVELOPERS_SERVICE_DATA.keyFeatures}
      developmentProcess={HIRE_DEDICATED_DEVELOPERS_SERVICE_DATA.developmentProcess}
      industriesWeServe={HIRE_DEDICATED_DEVELOPERS_SERVICE_DATA.industriesWeServe}
      techStack={HIRE_DEDICATED_DEVELOPERS_SERVICE_DATA.techStake}
      FaqQuestions={HIRE_DEDICATED_DEVELOPERS_SERVICE_DATA.FaqQuestions}
    />
  )
}

export default HireDedicatedDevelopersServicePage
