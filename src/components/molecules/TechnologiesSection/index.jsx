import './technologySection.css'
import { useState } from 'react'

const TechnologiesSection = ({ techStackTabsArrayData, headingClasses }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)

  const handleTabChange = (index) => {
    setSelectedTabIndex(index)
  }

  return (
    <div className='container'>
      <h2 className={`text-center py-4 text-uppercase text-dark ${headingClasses}`}>Technologies We Use</h2>
      <ul className='nav nav-pills mb-3 d-flex justify-content-center' id='pills-tab' role='tablist'>
        <li className='nav-item' role='presentation'>
          {
                techStackTabsArrayData.map((item, index) => (
                  <button
                    className={`tab-link mx-1 ${item.id === techStackTabsArrayData[selectedTabIndex].id ? 'tab-link-active' : ''}`} type='button' role='tab' aria-selected='true'
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
          className={`tab-pane animate__animated animate__fadeIn ${selectedTabIndex >= 0 ? 'show active' : ''}`} id={techStackTabsArrayData[selectedTabIndex].id}
          role='tabpanel' aria-labelledby={techStackTabsArrayData[selectedTabIndex].id}
        >
          <div className='tech-grid-container'>
            {
                techStackTabsArrayData[selectedTabIndex].technologies.map((item, index) => (
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
  )
}

export default TechnologiesSection
