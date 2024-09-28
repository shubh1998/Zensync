import ErrorBoundary from 'components/layouts/ErrorBoundary/index'
import Loader from 'components/molecules/Loader/index'
import { Suspense } from 'react'
import Routes from 'routes/index'

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </Suspense>
  )
}

export default App
