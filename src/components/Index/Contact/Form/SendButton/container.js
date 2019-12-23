import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import SendButton from './component'

const SendButtonContainer = ({ isSending = false, isSent = false, hasError = false }) => {
  const { formatMessage } = useIntl()
  if (isSending) {
    return (
      <SendButton
        label={formatMessage({ id: 'index.contact.form.button.label.isSending' })}
        disabled
      />
    )
  }
  if (isSent) {
    return <SendButton label={formatMessage({ id: 'index.contact.form.button.label.isSent' })} />
  }

  return (
    <SendButton
      type="submit"
      label={formatMessage({ id: 'index.contact.form.button.label' })}
      hasError={hasError}
    />
  )
}

export default SendButtonContainer
