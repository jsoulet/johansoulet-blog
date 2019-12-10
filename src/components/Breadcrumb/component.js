import React from 'react'
import { Link } from 'gatsby'

const Breadcrumb = ({ links }) => {
  return (
    <div className="breadcrumb">
      {links.map((link, index, array) => {
        if (index + 1 >= array.length) {
          return <span key={index}>{link.label}</span>
        }
        return (
          <span key={index}>
            <Link to={link.to}>{link.label}</Link>
            {' / '}
          </span>
        )
      })}
    </div>
  )
}

export default Breadcrumb
