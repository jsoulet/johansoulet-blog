import React from 'react'
import LocalizedLink from '../components/LocalizedLink'
import { FormattedMessage } from 'react-intl'
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
          <LocalizedLink to="/mentions-legales">
            <FormattedMessage id="footer.terms.link" />
          </LocalizedLink>
        </li>
      </ul>
      <span className="copyright">
        <FormattedMessage id="footer.madeWithLove" />
      </span>
    </footer>
  )
}
