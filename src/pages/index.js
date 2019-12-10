import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import Scroll from '../components/Scroll'

import pic1 from '../assets/images/pic01.jpg'
import pic2 from '../assets/images/pic02.jpg'
import pic3 from '../assets/images/pic03.jpg'

export const pageQuery = graphql`
  {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 3) {
      nodes {
        id
        excerpt(pruneLength: 100)
        frontmatter {
          date(formatString: "DD MMMM YYYY")
          title
          path
          featuredImage
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
          <h2>Artisan du code, je crée des projets web et mobile qui rendent le monde meilleur</h2>
          <p>
            <br />
            Grâce aux méthodes agiles, les projets dans lequel je m'investi sont centrés autour de
            l'utilisateur.
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
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
      <div className="major">
        <Link to="/blog" className="button">
          Tous mes articles
        </Link>
      </div>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Mes prestations</h2>
          <p>
            Issu d'une formation ingénieur, j'ai forgé mon expérience de développeur au sein de
            startups et groupes internationaux de l'écosystème Nantais. En misant sur la qualité, je
            veille à créer des sites web et applications robustes, qui permettent de réduire le
            time-to-market et les couts de maintenance.
          </p>
        </header>
        <ul className="features">
          <li className="icon solid fa-code">
            <h3>Développement de sites web</h3>
            <p>
              Durant toute la conception, le moteur principal reste l'expérience utilisateur en se
              concentrant sus les fonctionalités ayant le plus de valeur ajoutée.
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
          <h2>Contactez moi</h2>
          <p>
            Pour une demande de devis de développement web, mobile ou bien d’autres informations,
            vous pouvez entrer en contact via le formulaire ci-contre.
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
                    <input type="submit" value="Send Message" className="primary" />
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
