import React, { FC } from 'react'
import Footer from 'components/Footer'
import Seo from 'components/Seo'
import Navbar, { Ii18nLink } from 'components/Navbar'

const Layout: FC<{ i18nLinks?: Array<Ii18nLink>; hideToogleLocale?: boolean }> = ({
  children,
  i18nLinks,
  hideToogleLocale,
}) => {
  return (
    <>
      <Seo />
      <div>
        <Navbar i18nLinks={i18nLinks} hideToogleLocale={hideToogleLocale} />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
