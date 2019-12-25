import React from 'react'
import { FormattedMessage, Link } from 'gatsby-plugin-intl'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import Helmet from 'react-helmet'

const TermsPage = () => (
  <Layout fullMenu>
    <Helmet>
      <meta name="robots" content="noindex" />
    </Helmet>
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
            <Link to="/" className="button primary">
              <FormattedMessage id="terms.goBackHome.label" />
            </Link>
          </p>
        </div>
      </section>
    </article>
  </Layout>
)

export default TermsPage
