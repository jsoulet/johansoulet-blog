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
        <h3>{title}</h3>
        <em>{date}</em>
        <div>{excerpt}</div>
      </div>
    </Link>
  )
}

export default PostListItem
