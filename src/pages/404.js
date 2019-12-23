import React from 'react'
import Layout from '../components/Layout'
import { FormattedMessage, Link } from 'gatsby-plugin-intl'

const PageNotFound = () => {
  return (
    <Layout fullMenu>
      <article id="main">
        <header>
          <h2>
            <FormattedMessage id="404.title" />
          </h2>
          <p>
            <FormattedMessage id="404.notFound" />
          </p>
        </header>
        <div className="wrapper">
          <div className="inner">
            <p className="align-center">
              <Link to="/" className="button">
                <FormattedMessage id="404.goBackHome" />
              </Link>
            </p>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default PageNotFound
