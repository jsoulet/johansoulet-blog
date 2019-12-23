import React from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'
import Scroll from '../../Scroll'

const Banner = ({ posts }) => {
  return (
    <section id="banner">
      <div className="inner">
        <h1>
          <FormattedMessage id="index.name" />
        </h1>
        <p>
          <FormattedMessage id="index.baseline" />
        </p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="cta">
              <a href="/#cta" className="button primary">
                <FormattedMessage id="index.contactMeButton.label" />
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          <FormattedMessage id="index.moreAboutMe" />
        </a>
      </Scroll>
    </section>
  )
}

export default Banner
