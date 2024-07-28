import './technologySection.css'
import { useState } from 'react'
import { HOME_PAGE_SECTION_IDS } from 'constants/index'
import { TECHNOLOGIES_TABS_WITH_TECH_STACK } from './constants'

const TechnologiesSection = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)

  const handleTabChange = (index) => {
    setSelectedTabIndex(index)
  }

  return (
    <section className='container-fluid my-5' id={HOME_PAGE_SECTION_IDS.TECHNOLOGIES}>
      <div className='container'>
        <h2 className='display-4 text-center py-4 text-uppercase text-dark'>Technologies We Use</h2>
        <ul className='nav nav-pills mb-3 d-flex justify-content-center' id='pills-tab' role='tablist'>
          <li className='nav-item' role='presentation'>
            {
                TECHNOLOGIES_TABS_WITH_TECH_STACK.map((item, index) => (
                  <button
                    className={`tab-link ${item.id === TECHNOLOGIES_TABS_WITH_TECH_STACK[selectedTabIndex].id ? 'tab-link-active' : ''}`} type='button' role='tab' aria-selected='true'
                    id={item.id} data-toggle='pill' data-target={`#${item.id}`} aria-controls={item.id} key={item.label}
                    onClick={() => handleTabChange(index)}
                  >
                    {item.label}
                  </button>
                ))
              }
          </li>
        </ul>
        <div className='tab-content' id='v-pills-tabContent'>
          <div
            className={`tab-pane animate__animated animate__fadeIn ${selectedTabIndex === 0 ? 'show active' : ''}`} id={TECHNOLOGIES_TABS_WITH_TECH_STACK[0].id}
            role='tabpanel' aria-labelledby={TECHNOLOGIES_TABS_WITH_TECH_STACK[0].id}
          >
            <div className='tech-grid-container'>
              {
                TECHNOLOGIES_TABS_WITH_TECH_STACK[0].technologies.map((item, index) => (
                  <div key={index} className='tech-grid-item'>
                    <img className='tech-image-fit' src={item.image} alt={item.name} />
                    <p className='tech-name text-wrap'>{item.name}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <div
            className={`tab-pane animate__animated animate__fadeIn ${selectedTabIndex === 1 ? 'show active' : ''}`} id={TECHNOLOGIES_TABS_WITH_TECH_STACK[1].id}
            role='tabpanel' aria-labelledby={TECHNOLOGIES_TABS_WITH_TECH_STACK[1].id}
          >
            <div className='tech-grid-container'>
              {
                TECHNOLOGIES_TABS_WITH_TECH_STACK[1].technologies.map((item, index) => (
                  <div key={index} className='tech-grid-item'>
                    <img className='tech-image-fit' src={item.image} alt={item.name} />
                    <p className='tech-name text-wrap'>{item.name}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <div
            className={`tab-pane animate__animated animate__fadeIn ${selectedTabIndex === 2 ? 'show active' : ''}`} id={TECHNOLOGIES_TABS_WITH_TECH_STACK[2].id}
            role='tabpanel' aria-labelledby={TECHNOLOGIES_TABS_WITH_TECH_STACK[2].id}
          >
            <div className='tech-grid-container'>
              {
                TECHNOLOGIES_TABS_WITH_TECH_STACK[2].technologies.map((item, index) => (
                  <div key={index} className='tech-grid-item'>
                    <img className='tech-image-fit' src={item.image} alt={item.name} />
                    <p className='tech-name text-wrap'>{item.name}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <div
            className={`tab-pane animate__animated animate__fadeIn ${selectedTabIndex === 3 ? 'show active' : ''}`} id={TECHNOLOGIES_TABS_WITH_TECH_STACK[3].id}
            role='tabpanel' aria-labelledby={TECHNOLOGIES_TABS_WITH_TECH_STACK[3].id}
          >
            <div className='tech-grid-container'>
              {
                TECHNOLOGIES_TABS_WITH_TECH_STACK[3].technologies.map((item, index) => (
                  <div key={index} className='tech-grid-item'>
                    <img className='tech-image-fit' src={item.image} alt={item.name} />
                    <p className='tech-name text-wrap'>{item.name}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <div
            className={`tab-pane animate__animated animate__fadeIn ${selectedTabIndex === 4 ? 'show active' : ''}`} id={TECHNOLOGIES_TABS_WITH_TECH_STACK[4].id}
            role='tabpanel' aria-labelledby={TECHNOLOGIES_TABS_WITH_TECH_STACK[4].id}
          >
            <div className='tech-grid-container'>
              {
                TECHNOLOGIES_TABS_WITH_TECH_STACK[4].technologies.map((item, index) => (
                  <div key={index} className='tech-grid-item'>
                    <img className='tech-image-fit' src={item.image} alt={item.name} />
                    <p className='tech-name text-wrap'>{item.name}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnologiesSection
