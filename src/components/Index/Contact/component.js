import React from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'
import Form from './Form'

const Contact = () => {
  return (
    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>
            <FormattedMessage id="index.contact.title" />
          </h2>
          <p>
            <FormattedMessage id="index.contact.desc" />
          </p>
        </header>
        <div className="actions">
          <Form />
        </div>
      </div>
    </section>
  )
}

export default Contact
