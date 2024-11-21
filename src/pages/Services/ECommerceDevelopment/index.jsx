import { HeaderBannerIconImage } from 'assets/images/index'
import ServicesLayout from 'components/layouts/ServicesLayout/index'
import { TECHNOLOGIES_TABS_WITH_TECH_STACK } from 'constants/technologies.constants'

const ECommerceDevelopmentServicePage = () => {
  const E_COMMERCE_DEVELOPMENT = {
    serviceName: 'E-Commerce Development',
    imageOnBanner: HeaderBannerIconImage,
    headingOnBanner: 'Unlock Your Business’s Full Potential with Tailored E-Commerce Solutions',
    subHeadingOnBanner: `
      E-Commerce solutions designed to enhance user experience, drive conversions, and support seamless growth.
      We offer custom development, secure transactions, and mobile optimization, ensuring your online store is
      scalable and ready for success in today’s digital market.
    `,
    whyChooseUsContent: `
      At Zensync Solutions, We specialize in custom e-commerce development that delivers smooth customer experiences,
      secure transactions, and scalable growth. Whether you're just starting or need to upgrade your current online
      store, our expert developers provide end-to-end solutions that align with your business goals.
      We offer solutions to meet your unique business needs, ensuring your online store stands out.
      Our focus on delivering a seamless user experience means we prioritize intuitive design and easy navigation, helping
      your customers enjoy every interaction with your site. With mobile optimization at the core of our development process,
      your e-commerce platform will be fully responsive, offering a flawless experience on any device. We implement advanced
      security measures to protect your store and customers’ data, ensuring safe transactions. Plus, our websites are
      optimized for fast and reliable performance, capable of handling high traffic without any downtime, keeping your
      business running smoothly.
    `,
    keyFeatures: [
      {
        heading: 'Custom E-Commerce Website Design',
        description: `
          Your store’s appearance matters. Our designers create attractive, user-friendly designs that reflect your brand.
        `
      },
      {
        heading: 'Platform Integration & Migration',
        description: `
          Looking to switch platforms? We make migration easy or integrate third-party solutions like Shopify, WooCommerce,
          or Magento seamlessly.
        `
      },
      {
        heading: 'Shopping Cart & Payment Gateway Solutions',
        description: `
          We build secure, fast checkout systems that integrate with your preferred payment methods,
          ensuring a smooth transaction experience.
        `
      },
      {
        heading: 'Product Management System',
        description: `
          Efficiently manage your inventory, product listings, and pricing from an easy-to-use dashboard.
        `
      },
      {
        heading: 'SEO-Friendly Architecture',
        description: `
          We structure your e-commerce store for maximum visibility, making it easy for search engines to index and rank your site.
        `
      }
    ],
    developmentProcess: [
      {
        heading: 'Consultation & Strategy',
        description: `
          We start by understanding your business goals and market needs to craft the perfect e-commerce solution.
        `
      },
      {
        heading: 'Design & Development',
        description: `
          Our design and development team work together to build a site that’s visually appealing, fast, and secure.
        `
      },
      {
        heading: 'Testing & Launch',
        description: `
          We rigorously test for functionality, performance, and security to ensure your store is flawless before launch.
        `
      },
      {
        heading: 'Ongoing Support & Maintenance',
        description: `
          Our services don’t end after launch. We offer continuous support to keep your store running smoothly.
        `
      }
    ],
    industriesWeServe: [],
    techStake: TECHNOLOGIES_TABS_WITH_TECH_STACK,
    FaqQuestions: [
      {
        question: 'What platforms do you specialize in for e-commerce development?',
        answer: `
          We work with a variety of platforms, including Shopify, WooCommerce, Magento, and custom-built solutions,
          ensuring the best fit for your business needs.
        `
      },
      {
        question: 'How long does it take to develop a custom e-commerce website?',
        answer: `
          The timeline depends on the complexity of your project, but typically, a custom e-commerce site takes between
          4 to 12 weeks from initial consultation to launch.
        `
      },
      {
        question: 'Will my e-commerce site be mobile-friendly?',
        answer: `
          Absolutely! We prioritize mobile optimization in every project, ensuring your site looks great and functions
          seamlessly on all devices.
        `
      },
      {
        question: 'How do you ensure the security of my e-commerce store?',
        answer: `
          We implement advanced security protocols such as SSL encryption, secure payment gateways, and regular updates
          to protect both your store and customer data from cyber threats.
        `
      },
      {
        question: 'Do you offer ongoing support after the website is launched?',
        answer: `
          Yes, we provide ongoing maintenance and support services to keep your e-commerce platform updated, secure,
          and running smoothly post-launch.
        `
      }
    ]
  }

  return (
    <ServicesLayout
      imageOnBanner={E_COMMERCE_DEVELOPMENT.imageOnBanner}
      headingOnBanner={E_COMMERCE_DEVELOPMENT.headingOnBanner}
      subHeadingOnBanner={E_COMMERCE_DEVELOPMENT.subHeadingOnBanner}
      whyChooseUsContent={E_COMMERCE_DEVELOPMENT.whyChooseUsContent}
      serviceName={E_COMMERCE_DEVELOPMENT.serviceName}
      keyFeatures={E_COMMERCE_DEVELOPMENT.keyFeatures}
      developmentProcess={E_COMMERCE_DEVELOPMENT.developmentProcess}
      industriesWeServe={E_COMMERCE_DEVELOPMENT.industriesWeServe}
      techStack={E_COMMERCE_DEVELOPMENT.techStake}
      FaqQuestions={E_COMMERCE_DEVELOPMENT.FaqQuestions}
    />
  )
}

export default ECommerceDevelopmentServicePage
