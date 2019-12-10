import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Erreur 404</h2>
        <p>La page que vous demandez n'existe pas</p>
      </header>
      <div className="wrapper">
        <div className="inner">
          <p className="align-center">
            <Link to="/" className="button">
              Retour à l'accueil
            </Link>
          </p>
        </div>
      </div>
    </article>
  </Layout>
)

export default IndexPage
