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
    CUSTOM_SOFTWARE_DEVELOPMENT: '/services/custom-software-development',
    HIRE_DEDICATED_DEVELOPERS: '/services/hire-dedicated-developers',
    E_COMMERCE_DEVELOPMENT: '/services/e-commerce-development'
  },
  PORTFOLIO: '/portfolio',
  HOW_WE_WORK: '/how-we-work',
  IGAMING: {
    CUSTOM_GAME_DEVELOPMENT: '/igaming/custom-game-development',
    CASINO_PLATFORM_DEVELOPMENT: '/igaming/casino-platform-development',
    CASINO_GAME_DEVELOPMENT: '/igaming/casino-game-development',
    SPORTSBOOK_PLATFORM_DEVELOPMENT: '/igaming/fantasy-app-development'
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
        route: ROUTE_PATHS.SERVICES.CUSTOM_SOFTWARE_DEVELOPMENT,
        name: 'Custom Software Development'
      },
      {
        id: uuidV4(),
        route: ROUTE_PATHS.SERVICES.HIRE_DEDICATED_DEVELOPERS,
        name: 'Hire Dedicated Developers'
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
    route: ROUTE_PATHS.IGAMING.CUSTOM_GAME_DEVELOPMENT,
    name: 'IGaming',
    subMenus: [
      {
        id: uuidV4(),
        route: ROUTE_PATHS.IGAMING.CASINO_PLATFORM_DEVELOPMENT,
        name: 'Casino Platform Development'
      },
      {
        id: uuidV4(),
        route: ROUTE_PATHS.IGAMING.SPORTSBOOK_PLATFORM_DEVELOPMENT,
        name: 'SportsBook Platform Development'
      },
      {
        id: uuidV4(),
        route: ROUTE_PATHS.IGAMING.CASINO_GAME_DEVELOPMENT,
        name: 'Casino Game Development'
      },
      {
        id: uuidV4(),
        route: ROUTE_PATHS.IGAMING.CUSTOM_GAME_DEVELOPMENT,
        name: 'Custom Game Development'
      }
    ]
  },
  {
    id: uuidV4(),
    route: ROUTE_PATHS.HOW_WE_WORK,
    name: 'How We Work',
    subMenus: []
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
