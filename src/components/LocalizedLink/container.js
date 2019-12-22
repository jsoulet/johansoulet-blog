import React from 'react'
import { Link } from 'gatsby'
import { useIntl } from 'react-intl'

const LocalizedLink = ({ to, children, forcedLocale, ...props }) => {
  const { locale, defaultLocale } = useIntl()
  const localizedTo = locale === defaultLocale ? to : `/${locale}${to}`
  return (
    <Link to={localizedTo} {...props}>
      {children}
    </Link>
  )
}

export default LocalizedLink
