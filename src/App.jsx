import NavBar from 'components/layouts/NavBar/index'
import Home from './pages/Home/index'
import BackToTop from 'components/molecules/BackToTop/index'
import Footer from 'components/layouts/Footer/index'

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
