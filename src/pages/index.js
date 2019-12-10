import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import Scroll from '../components/Scroll'

export const pageQuery = graphql`
  {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 3) {
      nodes {
        id
        excerpt(pruneLength: 100)
        frontmatter {
          date(fromNow: true, locale: "FR")
          title
          path
          featuredImage {
            childImageSharp {
              fluid(maxHeight: 500, maxWidth: 883, fit: COVER, quality: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          chapo
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout isLanding>
    <section id="banner">
      <div className="inner">
        <h1>Johan Soulet</h1>
        <p>Développeur JavaScript sénior à Nantes</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="cta">
              <a href="/#cta" className="button primary">
                Contactez moi
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          En savoir plus
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <p>MA RAISON D'ÊTRE</p>
          <h2>Artisan du code, je donne vie à des projets qui rendent le monde meilleur</h2>
          <p>
            Nous avons atteint les limites du monde occidental tel que nous le connaissons depuis
            toujours. Il est donc nécessaire de questionner nos pratiques au quotidien. <br />
            <br />
            En tant qu'acteur de la tech, je souhaite m'engager sur des projets qui ont un impact
            positif sur leur environnement et placent l'humain comme point central de l'innovation.{' '}
            <br />
            Grâce à un apprentissage constant et une remise en question de chaque jour, je cherche à
            devenir une personne meilleure, mais aussi à partager mes connaissances pour en faire
            profiter la communauté qui m'entoure.{' '}
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon solid fa-seedling major style1">
              <span className="label">Ecologie</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-heart major style2">
              <span className="label">Humanisation</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Expertise technique</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper special style2">
      <div className="inner">
        <header className="major">
          <h2>Dernières publications</h2>
        </header>
      </div>
      <PostList posts={data.allMdx.nodes}></PostList>
      <footer className="major">
        <Link to="/blog" className="button">
          Tous les articles
        </Link>
      </footer>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Mes prestations</h2>
          <p>
            Votre projet est unique, il nécessite donc une écoute attentive avant de s'y lancer tête
            baissée.
          </p>
        </header>
        <ul className="features">
          <li className="icon solid fa-code">
            <h3>Développement de sites web</h3>
            <p>
              Un code de qualité permet de réduire le time-to-market et les couts de maintenance
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Gestion de projets agile</h3>
            <p>
              De l'analyse du besoin, au conseil stratégique, en passant par la rédaction de
              spécifications techniques.
            </p>
          </li>
          <li className="icon solid fa-paper-plane">
            <h3>Référencement SEO</h3>
            <p>
              Rendez vous visible grâce à l'optimisation de votre site web pour les moteurs de
              recherche
            </p>
          </li>
          <li className="icon solid fa-graduation-cap">
            <h3>Formation JavaScript et ReactJS</h3>
            <p>Apprennez à concevoir des sites internet et applications web dynamiques</p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Prenons un café</h2>
          <p>
            Si vous êtes à Nantes, je serai ravi de discuter de votre projet autour d'un café voire
            d'une bière suivant le moment de la journée.
          </p>
        </header>
        <div className="actions">
          <form method="post" action="#">
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <input type="text" name="nom" id="nom" defaultValue="" placeholder="Nom" />
              </div>
              <div className="col-6 col-12-xsmall">
                <input type="text" name="prénom" id="prénom" defaultValue="" placeholder="Prénom" />
              </div>
              <div className="col-12">
                <input type="email" name="email" id="email" required placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Ecrivez votre message"
                  rows="6"
                ></textarea>
              </div>
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input type="submit" value="Envoyer" className="primary" />
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
