import React, { useState } from 'react'
import Nav from './Nav'
import LocalizedLink from './LocalizedLink'
import LocaleSwitcher from './LocaleSwitcher'

export default function SideBar({ fullMenu }) {
  const [headerOpen, toggleHeader] = useState(false)
  return (
    <header id="header" className={`${fullMenu ? '' : 'alt'}`}>
      <h1>
        <LocalizedLink to="/">Johan Soulet</LocalizedLink>
      </h1>
      <span>{/* <LocaleSwitcher /> */}</span>
      <div className={`${headerOpen ? 'is-menu-visible' : ' '}`}>
        <Nav onMenuToggle={() => toggleHeader(!headerOpen)} />
      </div>
    </header>
  )
}
