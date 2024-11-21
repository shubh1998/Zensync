import './navbar.css'
import { useHistory, useLocation, NavLink, Link } from 'react-router-dom'
import { NAVIGATION_OPTIONS, ROUTE_PATHS } from 'constants/routes.constants'

const NavBar = () => {
  const history = useHistory()
  const location = useLocation()

  const handleBackToTopClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({
        behavior: 'smooth',
        top: 0,
        duration: 3000
      })
    } else {
      history.push(ROUTE_PATHS.HOME)
    }
  }

  return (
    <>
      <nav className='navbar fixed-top navbar-expand-lg navbar-light'>
        <div className='container-fluid plr'>
          <Link to={ROUTE_PATHS.HOME} className='navbar-brand' onClick={handleBackToTopClick}>
            <img src='/assets/images/brand-logo.svg' alt='brand-logo' />
            {/* NavBar */}
          </Link>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarTogglerDemo02' aria-controls='navbarTogglerDemo02' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              {
                NAVIGATION_OPTIONS.map(item => {
                  if (item.subMenus.length) {
                    return (
                      <li className='nav-item dropdown' key={item.id}>
                        <div
                          className='nav-link dropdown-toggle'
                          data-bs-toggle='dropdown' aria-expanded='false'
                          style={{ cursor: 'pointer' }}
                        >
                          {item.name}
                          <span className='ms-2'>
                            <i className='fa fa-angle-down' aria-hidden='true' />
                          </span>
                        </div>
                        <div className='dropdown-menu'>
                          {
                            item.subMenus.map(subItem => (
                              <NavLink
                                exact
                                key={subItem.id}
                                className='dropdown-item'
                                to={subItem.route}
                                activeClassName='active'
                              >
                                {subItem.name}
                              </NavLink>
                            ))
                          }
                        </div>
                      </li>
                    )
                  } else {
                    return (
                      <li className='nav-item' key={item.id}>
                        <NavLink
                          to={item.route} className='nav-link'
                          activeClassName='active' exact
                        >
                          {item.name}
                        </NavLink>
                      </li>
                    )
                  }
                })
              }
            </ul>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <button class='book-free-consultation-btn'>
                  Book Free Consultation
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
