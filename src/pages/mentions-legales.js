import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h1>Mentions légales</h1>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <Breadcrumb links={[{ label: 'Accueil', to: '/' }, { label: 'Mentions légales' }]} />
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
              Retour à l'accueil
            </Link>
          </p>
        </div>
      </section>
    </article>
  </Layout>
)

export default IndexPage
