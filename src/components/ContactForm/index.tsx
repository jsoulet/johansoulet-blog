import React, { FC } from 'react'
import tw from 'twin.macro'
import Container from 'components/Container'
import { H3, P } from 'components/Text'
import Form from './Form'
import { useIntl } from 'gatsby-plugin-intl'

const ContactForm: FC<{}> = () => {
  const { formatMessage } = useIntl()
  return (
    <Container>
      <div css={tw`flex flex-col md:flex-row pb-16 -mx-4`} id="contact">
        <div css={tw`w-full md:w-1/3 px-4 mb-4`}>
          <H3>{formatMessage({ id: 'index.contact.title' })}</H3>
          <P>
            {formatMessage({ id: 'index.contact.desc' })}
            <br css={tw`mb-2 px-4`} />
            {formatMessage({ id: 'index.contact.desc.remote' })}
          </P>
        </div>
        <div css={tw`w-full md:w-2/3`}>
          <Form />
        </div>
      </div>
    </Container>
  )
}

export default ContactForm
