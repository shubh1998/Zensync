export const handleScrollToSectionById = ({ sectionId }) => {
  if (sectionId) {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop - 100,
        duration: 3000
      })
    }
  }
}
