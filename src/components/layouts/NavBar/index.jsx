import { handleScrollToSectionById } from 'helpers/app.helpers'
import './navbar.css'
import { NAVIGATION_SCROLL_OPTIONS, ROUTE_PATHS } from 'constants/index'
import { useState } from 'react'

const NavBar = () => {
  const [activeLinkId, setActiveLinkId] = useState(null)

  const handleScrollAndActiveLink = (sectionId) => {
    setActiveLinkId(sectionId)
    handleScrollToSectionById({ sectionId })
  }

  const handleBackToTopClick = () => {
    setActiveLinkId(null)
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
      duration: 3000
    })
  }

  return (
    <>
      <nav className='navbar fixed-top navbar-expand-lg navbar-light'>
        <div className='container-fluid plr'>
          <a to={ROUTE_PATHS.HOME} className='navbar-brand' onClick={handleBackToTopClick}>
            <img src='/assets/images/brand-logo.svg' alt='brand-logo' />
            {/* NavBar */}
          </a>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarTogglerDemo02' aria-controls='navbarTogglerDemo02' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              {
                NAVIGATION_SCROLL_OPTIONS.map((item, index) => {
                  return (
                    <li className='nav-item' key={item.id}>
                      <a
                        onClick={() => handleScrollAndActiveLink(item.sectionId)}
                        className={`nav-link ${activeLinkId === item.sectionId ? 'active' : ''}`}
                      >
                        {item.name}
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
