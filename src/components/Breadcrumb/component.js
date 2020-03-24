import React from 'react'
import { FormattedMessage, Link } from 'gatsby-plugin-intl'

const Breadcrumb = ({ links }) => {
  return (
    <>
      <div className="breadcrumb">
        {links.map((link, index) => {
          if (!link.to) {
            return (
              <span key={index}>
                {link.doNotTranslate ? link.label : <FormattedMessage id={link.label} />}
              </span>
            )
          }
          return (
            <span key={index}>
              <Link to={link.to}>
                {link.doNotTranslate ? link.label : <FormattedMessage id={link.label} />}
              </Link>
              {' / '}
            </span>
          )
        })}
      </div>
    </>
  )
}

export default Breadcrumb
