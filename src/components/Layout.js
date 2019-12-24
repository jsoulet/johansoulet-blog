import React, { Component, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import cn from 'classnames'
import { useIntl } from 'gatsby-plugin-intl'

import '../assets/sass/main.scss'
import Footer from './Footer'
import SideBar from './Sidebar'

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

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
              keywords
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet defaultTitle={data.site.siteMetadata.title}>
            <html lang={intl.locale} />
            <title>{data.site.siteMetadata.title}</title>
            <meta name="description" content={data.site.siteMetadata.description} />
            <meta name="keywords" content={data.site.siteMetadata.keywords} />
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
