import { ROUTE_PATHS } from 'constants/routes.constants'
import { lazy } from 'react'
const HomePage = lazy(() => import('pages/Home/index'))
const PortfolioPage = lazy(() => import('pages/Portfolio/index'))
const WhoWeArePage = lazy(() => import('pages/WhoWeAre/index'))
const CareersPage = lazy(() => import('pages/Careers/index'))
const ContactUsPage = lazy(() => import('pages/ContactUs/index'))
const HowWeWorkPage = lazy(() => import('pages/HowWeWork/index'))
const ComingSoonPage = lazy(() => import('pages/ComingSoon/index'))
const WebDevelopmentServicePage = lazy(() => import('pages/Services/WebDevelopment/index'))
const MobileAppDevelopmentServicePage = lazy(() => import('pages/Services/MobileAppDevelopment/index'))
const UiUxDevelopmentServicePage = lazy(() => import('pages/Services/UiUxDevelopment/index'))
const MvpDevelopmentServicePage = lazy(() => import('pages/Services/MvpDevelopment/index'))
const CustomSoftwareDevelopmentServicePage = lazy(() => import('pages/Services/CustomSoftwareDevelopment/index'))
const HireDedicatedDevelopersServicePage = lazy(() => import('pages/Services/HireDedicatedDevelopers/index'))
const ECommerceDevelopmentServicePage = lazy(() => import('pages/Services/ECommerceDevelopment/index'))

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
    component: WebDevelopmentServicePage,
    showHeader: true,
    showFooter: true
  },
  {
    path: ROUTE_PATHS.SERVICES.MOBILE_APP_DEVELOPMENT,
    component: MobileAppDevelopmentServicePage,
    showHeader: true,
    showFooter: true
  },
  {
    path: ROUTE_PATHS.SERVICES.UI_UX_DEVELOPMENT,
    component: UiUxDevelopmentServicePage,
    showHeader: true,
    showFooter: true
  },
  {
    path: ROUTE_PATHS.SERVICES.MVP_DEVELOPMENT,
    component: MvpDevelopmentServicePage,
    showHeader: true,
    showFooter: true
  },
  {
    path: ROUTE_PATHS.SERVICES.CUSTOM_SOFTWARE_DEVELOPMENT,
    component: CustomSoftwareDevelopmentServicePage,
    showHeader: true,
    showFooter: true
  },
  {
    path: ROUTE_PATHS.SERVICES.HIRE_DEDICATED_DEVELOPERS,
    component: HireDedicatedDevelopersServicePage,
    showHeader: true,
    showFooter: true
  },
  {
    path: ROUTE_PATHS.SERVICES.E_COMMERCE_DEVELOPMENT,
    component: ECommerceDevelopmentServicePage,
    showHeader: true,
    showFooter: true
  },
  {
    path: ROUTE_PATHS.IGAMING.CUSTOM_GAME_DEVELOPMENT,
    component: ComingSoonPage,
    showHeader: true,
    showFooter: true
  },
  {
    path: ROUTE_PATHS.IGAMING.CASINO_GAME_DEVELOPMENT,
    component: ComingSoonPage,
    showHeader: true,
    showFooter: true
  },
  {
    path: ROUTE_PATHS.IGAMING.CASINO_PLATFORM_DEVELOPMENT,
    component: ComingSoonPage,
    showHeader: true,
    showFooter: true
  },
  {
    path: ROUTE_PATHS.IGAMING.SPORTSBOOK_PLATFORM_DEVELOPMENT,
    component: ComingSoonPage,
    showHeader: true,
    showFooter: true
  }
]

export default routesList
