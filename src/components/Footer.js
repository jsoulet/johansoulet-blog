import React from 'react'
import { FormattedMessage, Link } from 'gatsby-plugin-intl'
import config from '../../config'

export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social
          return (
            <li key={url}>
              <a href={url} className={`icon ${style} ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          )
        })}
      </ul>
      <ul className="copyright">
        <li>
          &copy; <FormattedMessage id="footer.copyright" />
        </li>
        <li>
          <Link to="/mentions-legales">
            <FormattedMessage id="footer.terms.link" />
          </Link>
        </li>
      </ul>
      <span className="copyright">
        <FormattedMessage id="footer.madeWithLove" />
      </span>
    </footer>
  )
}
