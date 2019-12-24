import React from 'react'
import locales from '../../../config/i18n/locales'
import { useIntl, changeLocale } from 'gatsby-plugin-intl'

const LocaleSwitcher = () => {
  const intl = useIntl()
  const onClickHandler = lang => e => {
    e.preventDefault()
    changeLocale(lang)
  }
  return (
    <span className="localeSwitcher">
      {Object.keys(locales).map(lang => {
        if (intl.locale === lang) {
          return null
        }
        return (
          <a href={`/${lang}`} onClick={onClickHandler(lang)} key={lang}>
            {locales[lang].name}
          </a>
        )
      })}
    </span>
  )
}

export default LocaleSwitcher
