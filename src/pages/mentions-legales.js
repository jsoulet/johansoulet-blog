import React from 'react'
import { FormattedMessage } from 'react-intl'
import LocalizedLink from '../components/LocalizedLink'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'

const TermsPage = ({ pageContext }) => (
  <Layout fullMenu locale={pageContext.locale}>
    <article id="main">
      <header>
        <h1>
          <FormattedMessage id="terms.title" />
        </h1>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <Breadcrumb
            links={[{ label: 'breadcrumb.home', to: '/' }, { label: 'breadcrumb.terms' }]}
            withDivider={false}
          />
          <p>
            Design original par{' '}
            <a target="_blank" rel="noopener noreferrer" href="http://html5up.net/">
              HTML5 UP
            </a>
          </p>
          <p>
            Thème réalisé par{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/anubhavsrivastava/gatsby-starter-spectral"
            >
              Anubhav Srivastava
            </a>
          </p>
          <p className="align-center">
            <LocalizedLink to="/" className="button primary">
              <FormattedMessage id="terms.goBackHome.label" />
            </LocalizedLink>
          </p>
        </div>
      </section>
    </article>
  </Layout>
)

export default TermsPage
