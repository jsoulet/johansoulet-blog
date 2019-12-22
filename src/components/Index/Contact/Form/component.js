import React from 'react'
import { useIntl } from 'react-intl'

const ContactForm = () => {
  const { formatMessage } = useIntl()
  return (
    <form method="post" action="#" netlify>
      <div className="row gtr-uniform">
        <div className="col-6 col-12-xsmall">
          <input
            type="text"
            name="nom"
            id="nom"
            defaultValue=""
            placeholder={formatMessage({ id: 'index.contact.form.lastname.placeholder' })}
          />
        </div>
        <div className="col-6 col-12-xsmall">
          <input
            type="text"
            name="prénom"
            id="prénom"
            defaultValue=""
            placeholder={formatMessage({ id: 'index.contact.form.firstname.placeholder' })}
          />
        </div>
        <div className="col-12">
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder={formatMessage({ id: 'index.contact.form.email.placeholder' })}
          />
        </div>
        <div className="col-12">
          <textarea
            name="message"
            id="message"
            placeholder={formatMessage({ id: 'index.contact.form.message.placeholder' })}
            rows="6"
          ></textarea>
        </div>
        <div className="col-12">
          <ul className="actions">
            <li>
              <input
                type="submit"
                value={formatMessage({ id: 'index.contact.form.button.label' })}
                className="primary"
              />
            </li>
          </ul>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
