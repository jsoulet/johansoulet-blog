import React from 'react'
import { FormattedMessage, Link } from 'gatsby-plugin-intl'

const Breadcrumb = ({ links, isBottom = false, withDivider = true }) => {
  return (
    <>
      {withDivider && isBottom && <hr />}
      <div className="breadcrumb">
        {links.map((link, index, array) => {
          if (index + 1 >= array.length) {
            return (
              <span key={index}>
                {link.isNotTranslated ? link.label : <FormattedMessage id={link.label} />}
              </span>
            )
          }
          return (
            <span key={index}>
              <Link to={link.to}>
                {link.isNotTranslated ? link.label : <FormattedMessage id={link.label} />}
              </Link>
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
