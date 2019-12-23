import React from 'react'
import { FormattedMessage, Link } from 'gatsby-plugin-intl'

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="nav">
      <ul>
        <li className="special">
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault()
              onMenuToggle()
            }}
            className="menuToggle"
          >
            <span>
              <FormattedMessage id="nav.menu" />
            </span>
          </a>
          <div id="menu">
            <ul>
              <li>
                <Link to="/">
                  <FormattedMessage id="nav.home" />
                </Link>
              </li>
              <li>
                <Link to="/blog">
                  <FormattedMessage id="nav.blog" />
                </Link>
              </li>
            </ul>
            <a
              className="close"
              onClick={e => {
                e.preventDefault()
                onMenuToggle()
              }}
              href="#menu"
            >
              {''}
            </a>
          </div>
        </li>
      </ul>
    </nav>
  )
}
