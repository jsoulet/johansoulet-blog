import React from 'react'
import { Link } from 'gatsby'
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
        <li>&copy; Johan Soulet</li>
        <li>
          <Link to="/mentions-legales">Mentions légales</Link>
        </li>
      </ul>
      <span className="copyright">
        Made with{' '}
        <span role="img" aria-label="love">
          ❤️
        </span>{' '}
        in Nantes
      </span>
    </footer>
  )
}
