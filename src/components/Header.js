import React from 'react'
import BackgroundImage from 'gatsby-background-image'

const Header = ({ title, subtitle, banner = '../images/banner.jpg' }) => {
  return (
    <BackgroundImage
      className="header"
      fluid={[
        'linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.5))',
        banner.childImageSharp.fluid,
      ]}
      backgroundColor={`#040e18`}
    >
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </BackgroundImage>
  )
}

export default Header
