import { ROUTE_PATHS } from 'constants/routes.constants'
import { lazy } from 'react'
const HomePage = lazy(() => import('pages/Home/index'))
const PortfolioPage = lazy(() => import('pages/Portfolio/index'))
const WhoWeArePage = lazy(() => import('pages/WhoWeAre/index'))
const CareersPage = lazy(() => import('pages/Careers/index'))
// const TeamPage = lazy(() => import('pages/Team/index'))
const ContactUsPage = lazy(() => import('pages/ContactUs/index'))
const HowWeWorkPage = lazy(() => import('pages/HowWeWork/index'))
const ComingSoonPage = lazy(() => import('pages/ComingSoon/index'))

const routesList = [
  {
    path: ROUTE_PATHS.HOME,
    component: HomePage,
    showHeader: true,
    showFooter: true
  },
  {
    path: ROUTE_PATHS.PORTFOLIO,
    component: PortfolioPage,
    showHeader: true,
    showFooter: true
  },
  {
    path: ROUTE_PATHS.ABOUT_US.WHO_WE_ARE,
    component: WhoWeArePage,
    showHeader: true,
    showFooter: true
  },
  {
    path: ROUTE_PATHS.ABOUT_US.CAREERS,
    component: CareersPage,
    showHeader: true,
    showFooter: true
  },
  // {
  //   path: ROUTE_PATHS.ABOUT_US.TEAM,
  //   component: TeamPage,
  //   showHeader: true,
  //   showFooter: true
  // },
  {
    path: ROUTE_PATHS.CONTACT_US,
    component: ContactUsPage,
    showHeader: true,
    showFooter: true
  },
  {
    path: ROUTE_PATHS.HOW_WE_WORK,
    component: HowWeWorkPage,
    showHeader: true,
    showFooter: true
  },
  {
    path: ROUTE_PATHS.SERVICES.WEB_DEVELOPMENT,
    component: ComingSoonPage,
    showHeader: true,
    showFooter: true
  },
  {
    path: ROUTE_PATHS.SERVICES.UI_UX_DEVELOPMENT,
    component: ComingSoonPage,
    showHeader: true,
    showFooter: true
  },
  {
    path: ROUTE_PATHS.SERVICES.CUSTOM_SOFTWARE_DEVELOPMENT,
    component: ComingSoonPage,
    showHeader: true,
    showFooter: true
  },
  {
    path: ROUTE_PATHS.SERVICES.MVP_DEVELOPMENT,
    component: ComingSoonPage,
    showHeader: true,
    showFooter: true
  },
  {
    path: ROUTE_PATHS.SERVICES.MOBILE_APP_DEVELOPMENT,
    component: ComingSoonPage,
    showHeader: true,
    showFooter: true
  },
  {
    path: ROUTE_PATHS.SERVICES.E_COMMERCE_DEVELOPMENT,
    component: ComingSoonPage,
    showHeader: true,
    showFooter: true
  },
  {
    path: ROUTE_PATHS.SERVICES.HIRE_DEDICATED_DEVELOPERS,
    component: ComingSoonPage,
    showHeader: true,
    showFooter: true
  },
  {
    path: ROUTE_PATHS.SOLUTIONS.TAXI_BOOKING_APP,
    component: ComingSoonPage,
    showHeader: true,
    showFooter: true
  },
  {
    path: ROUTE_PATHS.SOLUTIONS.IGAMING_CUSTOM_GAME_DEVELOPMENT,
    component: ComingSoonPage,
    showHeader: true,
    showFooter: true
  },
  {
    path: ROUTE_PATHS.SOLUTIONS.EMPLOYEE_MANAGEMENT_APP,
    component: ComingSoonPage,
    showHeader: true,
    showFooter: true
  },
  {
    path: ROUTE_PATHS.SOLUTIONS.E_LEARNING_APP,
    component: ComingSoonPage,
    showHeader: true,
    showFooter: true
  },
  {
    path: ROUTE_PATHS.SOLUTIONS.FANTASY_APP,
    component: ComingSoonPage,
    showHeader: true,
    showFooter: true
  },
  {
    path: ROUTE_PATHS.SOLUTIONS.FOOD_ORDER_APP,
    component: ComingSoonPage,
    showHeader: true,
    showFooter: true
  },
  {
    path: ROUTE_PATHS.SOLUTIONS.LOTTERY_APP,
    component: ComingSoonPage,
    showHeader: true,
    showFooter: true
  }
]

export default routesList
