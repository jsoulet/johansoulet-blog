import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const PostListItem = ({ title, date, excerpt, image, path }) => {
  return (
    <Link to={path} className="spotlight">
      <div className="image">
        <Img fluid={image.childImageSharp.fluid} alt="" />
      </div>
      <div className="content">
        <header>
          <h3>{title}</h3>
          <p>
            <em>{date}</em>
          </p>
        </header>
        <p>{excerpt}</p>
      </div>
    </Link>
  )
}

export default PostListItem
