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
          <h2>Artisan du code, je crée des projets qui rendent le monde meilleur</h2>
          <p>
            <br />
            Développeur nantais, j’ai participé au développement de startups dynamiques et rejoint
            des projets soutenus par des groupes internationaux. J’aime contribuer à des projets qui
            mettent l’humain au centre de l’innovation et qui ont impact positif sur leur
            environnement.
            <br />
            <br />
            Une fois la journée terminée, j’aime cuisiner, dénicher le gif parfait, partir à
            l’aventure…
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon solid fa-seedling major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper special style2">
      <div className="inner">
        <header className="major">
          <h2>Mes dernières publications</h2>
        </header>
      </div>
      <PostList posts={data.allMdx.nodes}></PostList>
      <footer className="major">
        <Link to="/blog" className="button">
          Tous mes articles
        </Link>
      </footer>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Mes prestations</h2>
          <p>
            Votre projet est unique, il nécessite donc une écoute attentive avant de s'y lancer tête
            baissée
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
            <h3>Formation JavaScript</h3>
            <p>Apprennez à concevoir des sites internet et applications web dynamiques</p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Discutons autour d'un café</h2>
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
