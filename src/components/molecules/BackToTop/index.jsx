import React, { useState, useEffect } from 'react'

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleVisibleScrollToTopButton = () => {
      setShowButton(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleVisibleScrollToTopButton)

    return () => {
      window.removeEventListener('scroll', handleVisibleScrollToTopButton)
    }
  }, [])

  const handleBackToTopClick = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
      duration: 3000
    })
  }

  return (
    showButton
      ? (
        <button
          onClick={handleBackToTopClick}
          className='animate__animated animate__fadeIn btn btn-lg btn-primary btn-lg-square back-to-top'
        >
          <i className='fa fa-angle-up' />
        </button>
        )
      : <></>
  )
}

export default BackToTop
