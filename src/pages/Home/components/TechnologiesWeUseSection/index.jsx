import { HOME_PAGE_SECTION_IDS } from 'constants/routes.constants'
import { TECHNOLOGIES_TABS_WITH_TECH_STACK } from 'constants/technologies.constants'
import TechnologiesSection from 'components/molecules/TechnologiesSection/index'

const TechnologiesWeUseSection = () => {
  return (
    <section className='container-fluid my-5' id={HOME_PAGE_SECTION_IDS.TECHNOLOGIES}>
      <TechnologiesSection techStackTabsArrayData={TECHNOLOGIES_TABS_WITH_TECH_STACK} headingClasses='display-4' />
    </section>
  )
}

export default TechnologiesWeUseSection
