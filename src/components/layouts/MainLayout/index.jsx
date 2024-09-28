import React from 'react'
import NavBar from '../NavBar/index'
import Footer from '../Footer/index'
import BackToTop from 'components/molecules/BackToTop/index'
import ScrollToTop from 'HOC/ScrollToTop/index'

const MainLayout = ({ showHeader, showFooter, Component }) => {
  return (
    <ScrollToTop>
      {showHeader ? <NavBar /> : <></>}
      <div style={showHeader && { marginTop: '5rem' }}>
        <Component />
        <BackToTop />
        {showFooter ? <Footer /> : <></>}
      </div>
    </ScrollToTop>
  )
}

export default MainLayout
