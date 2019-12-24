import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import cn from 'classnames'
import { useIntl } from 'gatsby-plugin-intl'

import '../assets/sass/main.scss'
import metaBanner from '../assets/images/meta-banner.jpg'
import Footer from './Footer'
import SideBar from './Sidebar'
import locales from '../../config/i18n/locales'

let timeoutID = null
const Layout = ({ children, fullMenu, isLanding, hideLocaleSwitcher = false }) => {
  const [isPreloaded, setIsPreloaded] = useState(true)
  const intl = useIntl()
  useEffect(() => {
    timeoutID = setTimeout(() => {
      setIsPreloaded(false)
    }, 100)
    return () => {
      if (timeoutID) {
        clearTimeout(timeoutID)
      }
    }
  }, [])
  const { metadata } = locales[intl.locale]
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              siteUrl
              author
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet titleTemplate={metadata.titleTemplate} defaultTitle={metadata.defaultTitle}>
            <html lang={intl.locale} />
            <meta name="description" content={metadata.description} />
            <meta name="keywords" content={metadata.keywords} />
            <meta name="image" content={`${data.site.siteMetadata.siteUrl}${metaBanner}`} />
            <meta property="og:title" content={metadata.defaultTitle}></meta>
            <meta property="og:description" content={metadata.description}></meta>
            <meta name="twitter:card" content="summary_large_image"></meta>
            <meta name="twitter:site" content={data.site.siteMetadata.author} />
            <meta name="twitter:creator" content={data.site.siteMetadata.author} />
            <meta
              property="og:image"
              content={`${data.site.siteMetadata.siteUrl}${metaBanner}`}
            ></meta>
          </Helmet>
          <div className={cn({ 'main-body': true, landing: isLanding, 'is-preload': isPreloaded })}>
            <div id="page-wrapper">
              <SideBar fullMenu={fullMenu} hideLocaleSwitcher={hideLocaleSwitcher} />
              {children}
              <Footer />
            </div>
          </div>
        </>
      )}
    />
  )
}

// class Layout extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       isPreloaded: true,
//     }
//   }

//   componentDidMount() {
//     this.timeoutId = setTimeout(() => {
//       this.setState({ isPreloaded: false })
//     }, 100)
//   }

//   componentWillUnmount() {
//     if (this.timeoutId) {
//       clearTimeout(this.timeoutId)
//     }
//   }

//   render() {
//     const intl = useIntl()
//     const  = this.props
//     const { isPreloaded } = this.state

//     return
//   }
// }

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
