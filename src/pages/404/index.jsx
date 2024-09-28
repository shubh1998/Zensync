import './notFound.css'
import { NotFoundImage } from 'assets/images/index'

const NotFoundComponent = () => {
  return (
    <div className='not-found-container container text-center my-5 py-5'>
      <img src={NotFoundImage} alt='404' />
      <h3>Oops! page not found.</h3>
      <p>Sorry, but the page you are looking for doesn't exist.</p>
    </div>
  )
}
export default NotFoundComponent
