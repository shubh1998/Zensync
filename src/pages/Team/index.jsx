import './team.css'
import BannerHeading from 'components/molecules/BannerHeading/index'

// const teamItems = [
//   {
//     personImage: Team1Image,
//     personName: 'Shubham Gupta',
//     personDesignation: 'CEO & Founder',
//     twitterLink: 'https://twitter.com',
//     facebookLink: 'https://facebook.com',
//     linkedinLink: 'https://linkedin.com'
//   },
//   {
//     personImage: Team2Image,
//     personName: 'Kate Wilson',
//     personDesignation: 'Designer',
//     twitterLink: 'https://twitter.com',
//     facebookLink: 'https://facebook.com',
//     linkedinLink: 'https://linkedin.com'
//   },
//   {
//     personImage: Team3Image,
//     personName: 'Paul Watson',
//     personDesignation: 'Marketer',
//     twitterLink: 'https://twitter.com',
//     facebookLink: 'https://facebook.com',
//     linkedinLink: 'https://linkedin.com'
//   },
//   {
//     personImage: Team4Image,
//     personName: 'John Doe',
//     personDesignation: 'Developer',
//     twitterLink: 'https://twitter.com',
//     facebookLink: 'https://facebook.com',
//     linkedinLink: 'https://linkedin.com'
//   }
// ]

const TeamPage = () => {
  return (
    <>
      <BannerHeading heading='Meet The Team' toText='Meet The Team' />

      <div className='container-fluid py-5'>
        <div className='container py-5'>
          <h1 className='display-4 text-uppercase text-center mb-5'>Meet Our Team</h1>
          <div className='team-carousel position-relative' style={{ paddingLeft: '30px' }} />
        </div>
      </div>
    </>
  )
}

export default TeamPage
