import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { IntlProvider } from 'react-intl'
import { StaticQuery, graphql } from 'gatsby'
import cn from 'classnames'

import '../assets/sass/main.scss'
import Footer from './Footer'
import SideBar from './Sidebar'

import locales from '../../config/i18n/locales'

const defaultLocale = Object.keys(locales).filter(lang => locales[lang].default)[0]
let messages = {}
Object.keys(locales).forEach(async lang => {
  const langMessages = await import(`../../config/i18n/messages/${lang}.json`)
  messages = {
    ...messages,
    [lang]: langMessages,
  }
})

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPreloaded: true,
    }
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  render() {
    const { children, fullMenu, isLanding, locale = defaultLocale } = this.props
    const { isPreloaded } = this.state
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <IntlProvider locale={locale} messages={messages[locale]}>
            <Helmet defaultTitle={data.site.siteMetadata.title}>
              <html lang="en" />
              <title>{data.site.siteMetadata.title}</title>
              <meta name="description" content={data.site.siteMetadata.description} />
              <meta name="keywords" content={data.site.siteMetadata.keywords} />
            </Helmet>
            <div
              className={cn({ 'main-body': true, landing: isLanding, 'is-preload': isPreloaded })}
            >
              <div id="page-wrapper">
                <SideBar fullMenu={fullMenu} />
                {children}
                <Footer />
              </div>
            </div>
          </IntlProvider>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
