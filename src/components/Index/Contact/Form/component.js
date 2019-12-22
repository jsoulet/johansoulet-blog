import React, { useCallback, useState } from 'react'
import { useIntl } from 'react-intl'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ContactForm = () => {
  const { formatMessage } = useIntl()
  const [formStatus, setFormStatus] = useState({
    isSending: false,
    hasError: false,
    isSent: false,
  })

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  })

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
      }).then(() => {
        setFormStatus({
          ...formStatus,
          isSent: true,
          isSending: false,
          hasError: false,
        }).catch(() => {
          setFormStatus({
            ...formStatus,
            isSent: false,
            isSending: false,
            hasError: true,
          })
        })
      })
    },
    [formData, formStatus]
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
            defaultValue=""
            placeholder={formatMessage({ id: 'index.contact.form.lastname.placeholder' })}
            onChange={handleOnChange}
          />
        </div>
        <div className="col-6 col-12-xsmall">
          <input
            type="text"
            name="firstname"
            id="firstname"
            defaultValue=""
            placeholder={formatMessage({ id: 'index.contact.form.firstname.placeholder' })}
            onChange={handleOnChange}
          />
        </div>
        <div className="col-12">
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder={formatMessage({ id: 'index.contact.form.email.placeholder' })}
            onChange={handleOnChange}
          />
        </div>
        <div className="col-12">
          <textarea
            name="message"
            id="message"
            placeholder={formatMessage({ id: 'index.contact.form.message.placeholder' })}
            rows="6"
            onChange={handleOnChange}
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
