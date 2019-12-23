import React, { useCallback, useState } from 'react'
import { useIntl } from 'gatsby-plugin-intl'

import SendButtom from './SendButton'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const DEFAULT_FORM_VALUES = {
  firstname: '',
  lastname: '',
  email: '',
  message: '',
}

const ContactForm = () => {
  const { formatMessage } = useIntl()
  const [formStatus, setFormStatus] = useState({
    isSending: false,
    hasError: false,
    isSent: false,
  })

  const [formData, setFormData] = useState(DEFAULT_FORM_VALUES)

  const handleOnSubmit = useCallback(
    event => {
      event.preventDefault()
      setFormStatus({
        ...formStatus,
        isSending: true,
      })

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', name: 'contact', ...formData }),
      })
        .then(() => {
          setFormStatus({
            isSent: true,
            isSending: false,
            hasError: false,
          })
          setFormData(DEFAULT_FORM_VALUES)
        })
        .catch(() => {
          setFormStatus({
            ...formStatus,
            isSent: false,
            isSending: false,
            hasError: true,
          })
        })
    },
    [formData, formStatus, setFormStatus]
  )

  const handleOnChange = useCallback(
    event => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      })
    },
    [formData, setFormData]
  )
  return (
    <form
      action="#"
      method="POST"
      data-netlify="true"
      onSubmit={handleOnSubmit}
      name="contact-form"
    >
      <input type="hidden" name="form-name" value="contact-form" />
      <div className="row gtr-uniform">
        <div className="col-6 col-12-xsmall">
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={formData.lastname}
            placeholder={formatMessage({ id: 'index.contact.form.lastname.placeholder' })}
            onChange={handleOnChange}
          />
        </div>
        <div className="col-6 col-12-xsmall">
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={formData.firstname}
            placeholder={formatMessage({ id: 'index.contact.form.firstname.placeholder' })}
            onChange={handleOnChange}
          />
        </div>
        <div className="col-12">
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            required
            placeholder={formatMessage({ id: 'index.contact.form.email.placeholder' })}
            onChange={handleOnChange}
          />
        </div>
        <div className="col-12">
          <textarea
            name="message"
            id="message"
            value={formData.message}
            placeholder={formatMessage({ id: 'index.contact.form.message.placeholder' })}
            rows="6"
            onChange={handleOnChange}
            required
          ></textarea>
        </div>
        <div className="col-12">
          <ul className="actions">
            <li>
              <SendButtom
                isSent={formStatus.isSent}
                isSending={formStatus.isSending}
                hasError={formStatus.hasError}
              ></SendButtom>
            </li>
          </ul>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
