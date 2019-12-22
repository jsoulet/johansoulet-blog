import React from 'react'
import Layout from '../components/Layout'
import LocalizedLink from '../components/LocalizedLink'
import { FormattedMessage } from 'react-intl'

const PageNotFound = ({ pageContext }) => {
  return (
    <Layout fullMenu locale={pageContext.locale}>
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
              <LocalizedLink to="/" className="button">
                <FormattedMessage id="404.goBackHome" />
              </LocalizedLink>
            </p>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default PageNotFound
