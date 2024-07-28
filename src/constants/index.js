import { v4 as uuidV4 } from 'uuid'

/* ==========================================================================
    All the navigation route Paths
  ========================================================================== */
export const ROUTE_PATHS = Object.freeze({
  HOME: '/',
  ABOUT_US: {
    WHO_WE_ARE: '/who-we-are',
    CAREERS: '/careers',
    TEAM: '/meet-the-team'
  },
  SERVICES: {
    WEB_DEVELOPMENT: '/services/web-development',
    MOBILE_APP_DEVELOPMENT: '/services/mobile-app-development',
    UI_UX_DEVELOPMENT: '/services/ui-ux-development',
    MVP_DEVELOPMENT: '/services/mvp-development',
    PRODUCT_DEVELOPMENT: '/services/product-development',
    DEDICATED_DEVELOPERS: '/services/dedicated-developers',
    E_COMMERCE_DEVELOPMENT: '/services/e-commerce-development'
  },
  PORTFOLIO: '/portfolio',
  HOW_WE_WORK: '/how-we-work',
  SOLUTIONS: {
    FOOD_ORDER_APP: '/solutions/food-order-application',
    EMPLOYEE_MANAGEMENT_APP: '/solutions/employee-management-application',
    TAXI_BOOKING_APP: '/solutions/taxi-booking-application',
    CUSTOM_GAMES: '/solutions/igaming-custom-betting-games-development',
    FANTASY_APP: '/solutions/fantasy-app-development',
    E_LEARNING_APP: '/solutions/e-learning-application',
    LOTTERY_APP: '/solutions/lottery-application-development'
  },
  CONTACT_US: '/contact-us',
  TESTIMONIALS: '/testimonials',
  PRICES: '/prices'
})

export const NAVIGATION_OPTIONS = [
  {
    id: uuidV4(),
    route: ROUTE_PATHS.ABOUT_US.WHO_WE_ARE,
    name: 'About Us',
    subMenus: [
      {
        id: uuidV4(),
        route: ROUTE_PATHS.ABOUT_US.WHO_WE_ARE,
        name: 'Who We Are'
      },
      {
        id: uuidV4(),
        route: ROUTE_PATHS.ABOUT_US.CAREERS,
        name: 'Careers'
      },
      {
        id: uuidV4(),
        route: ROUTE_PATHS.ABOUT_US.TEAM,
        name: 'Meet The Team'
      }
    ]
  },
  {
    id: uuidV4(),
    route: ROUTE_PATHS.SERVICES.WEB_DEVELOPMENT,
    name: 'Services',
    subMenus: [
      {
        id: uuidV4(),
        route: ROUTE_PATHS.SERVICES.WEB_DEVELOPMENT,
        name: 'Web Development'
      },
      {
        id: uuidV4(),
        route: ROUTE_PATHS.SERVICES.MOBILE_APP_DEVELOPMENT,
        name: 'Mobile App Development'
      },
      {
        id: uuidV4(),
        route: ROUTE_PATHS.SERVICES.UI_UX_DEVELOPMENT,
        name: 'UI/UX Development'
      },
      {
        id: uuidV4(),
        route: ROUTE_PATHS.SERVICES.MVP_DEVELOPMENT,
        name: 'MVP Development'
      },
      {
        id: uuidV4(),
        route: ROUTE_PATHS.SERVICES.PRODUCT_DEVELOPMENT,
        name: 'Product Development'
      },
      {
        id: uuidV4(),
        route: ROUTE_PATHS.SERVICES.DEDICATED_DEVELOPERS,
        name: 'Dedicated Developers'
      },
      {
        id: uuidV4(),
        route: ROUTE_PATHS.SERVICES.E_COMMERCE_DEVELOPMENT,
        name: 'E-commerce Development'
      }
    ]
  },
  {
    id: uuidV4(),
    route: ROUTE_PATHS.PORTFOLIO,
    name: 'Portfolio',
    subMenus: []
  },
  {
    id: uuidV4(),
    route: ROUTE_PATHS.HOW_WE_WORK,
    name: 'How We Work',
    subMenus: []
  },
  {
    id: uuidV4(),
    route: ROUTE_PATHS.SOLUTIONS.CUSTOM_GAMES,
    name: 'Solutions',
    subMenus: [
      {
        id: uuidV4(),
        route: ROUTE_PATHS.SOLUTIONS.FOOD_ORDER_APP,
        name: 'Food Order Application'
      },
      {
        id: uuidV4(),
        route: ROUTE_PATHS.SOLUTIONS.EMPLOYEE_MANAGEMENT_APP,
        name: 'Employee Management System'
      },
      {
        id: uuidV4(),
        route: ROUTE_PATHS.SOLUTIONS.FANTASY_APP,
        name: 'Fantasy App Development'
      },
      {
        id: uuidV4(),
        route: ROUTE_PATHS.SOLUTIONS.LOTTERY_APP,
        name: 'Lottery App Development'
      },
      {
        id: uuidV4(),
        route: ROUTE_PATHS.SOLUTIONS.TAXI_BOOKING_APP,
        name: 'Taxi Booking App Development'
      },
      {
        id: uuidV4(),
        route: ROUTE_PATHS.SOLUTIONS.E_LEARNING_APP,
        name: 'E-Learning App Development'
      },
      {
        id: uuidV4(),
        route: ROUTE_PATHS.SOLUTIONS.CUSTOM_GAMES,
        name: 'IGaming Custom Game Development'
      }
    ]
  },
  {
    id: uuidV4(),
    route: ROUTE_PATHS.CONTACT_US,
    name: 'Contact Us',
    subMenus: []
  }
]

/* ==========================================================================
    HOME PAGE SECTION IDS
  ========================================================================== */
export const HOME_PAGE_SECTION_IDS = {
  ABOUT: 'about-section',
  CONTACT: 'contact-us-section',
  PORTFOLIO: 'portfolio-section',
  SERVICES: 'services-section',
  TECHNOLOGIES: 'technologies-section',
  ROADMAP: 'roadmap-section'
}

/* ==========================================================================
    HOME PAGE SCROLL ANIMATION SECTION IDS FOR NAVIGATION
  ========================================================================== */
export const NAVIGATION_SCROLL_OPTIONS = [
  {
    id: uuidV4(),
    sectionId: HOME_PAGE_SECTION_IDS.ABOUT,
    name: 'About Us'
  },
  {
    id: uuidV4(),
    sectionId: HOME_PAGE_SECTION_IDS.SERVICES,
    name: 'Services'
  },
  {
    id: uuidV4(),
    sectionId: HOME_PAGE_SECTION_IDS.PORTFOLIO,
    name: 'Portfolio'
  },
  {
    id: uuidV4(),
    sectionId: HOME_PAGE_SECTION_IDS.ROADMAP,
    name: 'How We Work'
  },
  {
    id: uuidV4(),
    sectionId: HOME_PAGE_SECTION_IDS.TECHNOLOGIES,
    name: 'Technologies'
  },
  {
    id: uuidV4(),
    sectionId: HOME_PAGE_SECTION_IDS.CONTACT,
    name: 'Contact Us'
  }
]
