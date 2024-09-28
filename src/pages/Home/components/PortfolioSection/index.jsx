import './portfolioSection.css'
import { v4 as uuidV4 } from 'uuid'
import { useHistory } from 'react-router-dom'
import { BerhadEmsLogoImage, ButterflyAppLogoImage, GongaGongaLogoImage } from 'assets/images/index'
import { HOME_PAGE_SECTION_IDS, ROUTE_PATHS } from 'constants/routes.constants'

const portfolio = [
  {
    id: uuidV4(),
    image: ButterflyAppLogoImage,
    name: 'Butterfly',
    category: 'Web & Mobile Application',
    description: `
      Butterfly is the coolest application that enables you to connect with your friend's outings
      and discover their hangout places all over the world. The butterfly panel controls all the
      activities of the project like location check- ins checkouts of users, as well as reports and
      dashboard management of all companies.
    `
  },
  {
    id: uuidV4(),
    image: GongaGongaLogoImage,
    name: 'Gonga Gonga',
    category: 'Web Application',
    description: `
      Gonga Gonga is an online gaming platform in Kenya that features cash games such as the "Mine Game" and
      "Crash Game." In the Mine Game, players aim to reveal safe spots on a grid without hitting hidden mines,
      with rewards increasing as more safe spots are uncovered. The Crash Game involves a rising multiplier
      where players must decide when to cash out before the multiplier crashes, risking loss if they wait
      too long. Both games offer a blend of strategy and risk, providing thrill and potential cash rewards
      for players. Both games use a provably fair mechanism, ensuring transparency and fairness in gameplay
      by allowing players to verify the randomness and integrity of game outcomes. This mechanism enhances
      trust, making the platform more appealing to users seeking fair play.
    `
  },
  {
    id: uuidV4(),
    image: BerhadEmsLogoImage,
    name: 'Berhad EMS',
    category: 'Web & Mobile Application',
    description: `
      Berhad EMS is a cloud based HR system that manages all HR needs under a single platform.
      It help employers and their employee to manage attendance, leaves, payrolls and other info as well.
      In the app, we add the feature of mark attendance through face recognition and given a facility to
      employers to config attendance and leave features for employees including location restriction and
      documents uploading feature.
    `
  }
]

const PortfolioSection = () => {
  const history = useHistory()

  const handleViewAllNavigation = () => {
    history.push(ROUTE_PATHS.PORTFOLIO)
  }

  return (
    <div className='container-fluid my-5' id={HOME_PAGE_SECTION_IDS.PORTFOLIO}>
      <div className='container'>
        <h1 className='display-4 text-uppercase text-center text-dark'>Visit Our Projects</h1>
        <div className='row gx-5 mt-2'>
          {
            portfolio.map(item => (
              <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12' key={item.id}>
                <div className='mt-4 project-card'>
                  <img className='project-image-cover shine' src={item.image} />
                  <div className='py-3 px-3'>
                    <h5 className='text-dark'>{item.name}</h5>
                    <p className='text-danger'>{item.category}</p>
                    <p className='text-wrap-3 p-0'>
                      {item.description}
                    </p>
                    <p className='read-more-project'>
                      <span>Read More</span> &nbsp;<i className='h-100 fa fa-solid fa-arrow-right' />
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className='row mt-4'>
          <div className='col-12 text-center'>
            <button
              className='btn btn-view-all-project text-capitalize py-3 px-5'
              type='button' onClick={handleViewAllNavigation}
            >
              View All Projects &nbsp;<i className='h-100 fa fa-solid fa-arrow-right' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioSection
