import React from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'

const SendButton = ({ disabled, label, hasError }) => {
  return (
    <>
      <input type="submit" value={label} className="primary" disabled={disabled} />
      {hasError && <span>Oops, something wrong happend</span>}
    </>
  )
}

export default SendButton
