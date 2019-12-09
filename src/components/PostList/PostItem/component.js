import React from 'react'
import { Link } from 'gatsby'

const PostListItem = ({ title, date, excerpt, path }) => {
  return (
    <Link to={path}>
      <section className="spotlight">
        <div className="image">
          <img src={''} alt="" />
        </div>
        <div className="content">
          <h2>{title}</h2>
          <p>{excerpt}</p>
          <p>{date}</p>
        </div>
      </section>
    </Link>
  )
}

export default PostListItem
