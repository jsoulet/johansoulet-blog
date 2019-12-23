import React from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'

const SendButton = ({ disabled, label, hasError }) => {
  return (
    <>
      <input type="submit" value={label} className="primary" disabled={disabled} />
      {hasError && (
        <p>
          <FormattedMessage id="index.contact.form.errorMessage.label" />
        </p>
      )}
    </>
  )
}

export default SendButton
