import React, { useState } from 'react'
import Nav from './Nav'
import { Link } from 'gatsby-plugin-intl'
import LocaleSwitcher from './LocaleSwitcher'

export default function SideBar({ fullMenu, hideLocaleSwitcher }) {
  const [headerOpen, toggleHeader] = useState(false)
  return (
    <header id="header" className={`${fullMenu ? '' : 'alt'}`}>
      <h1>
        <Link to="/">Johan Soulet</Link>
      </h1>
      {!hideLocaleSwitcher ? <LocaleSwitcher /> : null}
      <div className={`${headerOpen ? 'is-menu-visible' : ' '}`}>
        <Nav onMenuToggle={() => toggleHeader(!headerOpen)} />
      </div>
    </header>
  )
}
