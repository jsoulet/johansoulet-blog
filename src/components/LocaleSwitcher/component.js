import React from 'react'
import locales from '../../../config/i18n/locales'
import { Link } from 'gatsby'

const LocaleSwitcher = () => {
  return (
    <>
      {Object.values(locales).map(locale => {
        return <Link to={locale.path}>{locale.name}</Link>
      })}
    </>
  )
}

export default LocaleSwitcher
