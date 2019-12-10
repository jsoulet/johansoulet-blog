import React from 'react'
import Img from 'gatsby-image'

const Header = ({ title, subtitle, banner = '../images/banner.jpg' }) => {
  return (
    <header
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${banner}")`,
      }}
    >
      <Img fluid={banner.childImageSharp.fluid}></Img>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  )
}

export default Header
