import React from 'react'
import { Link } from 'gatsby'

const PostListItem = ({ title, date, excerpt, image, path }) => {
  return (
    <Link to={path} className="spotlight">
      <div className="image">
        <img src={image} alt="" />
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
