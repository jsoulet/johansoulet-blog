import React from 'react'
import locales from '../../../config/i18n/locales'
import { useIntl } from 'react-intl'
import LocalizedLink from '../LocalizedLink'
import { Link } from 'gatsby'

const LocaleSwitcher = () => {
  const intl = useIntl()
  return (
    <span className="localeSwitcher">
      {Object.keys(locales).map(lang => {
        if (intl.locale === lang) {
          return null
        }
        return (
          <Link to={locales[lang].path} key={lang}>
            {locales[lang].name}
          </Link>
        )
      })}
    </span>
  )
}

export default LocaleSwitcher
