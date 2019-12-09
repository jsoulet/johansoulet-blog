import React from 'react'

import Layout from '../components/Layout'

import Scroll from '../components/Scroll'

import pic1 from '../assets/images/pic01.jpg'
import pic2 from '../assets/images/pic02.jpg'
import pic3 from '../assets/images/pic03.jpg'

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h1>Johan Soulet</h1>
        <p>Développeur JavaScript sénior à Nantes</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
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
          <h2>
            Artisan du code, je vous accompagne dans la réalisation de projets numériques uniques
          </h2>
          <p>
            Issu d'une formation d'ingénieur, j'ai forgé mon expérience de développeur au sein de
            startups, groupes internationaux et agences de l'écosystème Nantais. En misant sur la qualité,
            je veille à créer des sites web et applications robustes, réduisant ainsi le time-to-market et 
            les couts de maintenance.
            <br/>
            Grâce aux méthodes agiles, les projets dans lequel je m'investi sont centrés autour de l'utilisateur
            et se concentrent sur la 
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

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Magna primis lobortis
            <br />
            sed ullamcorper
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend
            fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Tortor dolore feugiat
            <br />
            elementum magna
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend
            fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Augue eleifend aliquet
            <br />
            sed condimentum
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend
            fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Mes compétences</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet eleifend
            <br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.
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
              spécification technique et fonctionnelles ou la formation des utilisateurs
            </p>
          </li>
          <li className="icon solid fa-paper-plane">
            <h3>Référencement SEO</h3>
            <p>A quoi bon être présent si vous n'êtes pas visible ?</p>
          </li>
          <li className="icon solid fa-graduation-cap">
            <h3>Formation JavaScript</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet
              leo Aenean ligula consequat consequat.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Arcue ut vel commodo</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
)

export default IndexPage
