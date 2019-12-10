import React from 'react'
import { Link } from 'gatsby'

const Breadcrumb = ({ links, isBottom = false, withDivider = true }) => {
  return (
    <>
      {withDivider && isBottom && <hr />}
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
      {withDivider && !isBottom && <hr />}
    </>
  )
}

export default Breadcrumb
