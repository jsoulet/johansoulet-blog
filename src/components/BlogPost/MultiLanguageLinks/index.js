import React from 'react'
import { Link } from 'gatsby'
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl'
import styled from '@emotion/styled'

const Container = styled.span({ fontStyle: 'italic' })

const MultiLanguageLinks = ({ links }) => {
  useIntl()
  if (!(links && links.length)) {
    return null
  }
  return (
    <Container>
      <FormattedMessage id="blog.multiLanguageLinks.label" />
      {links
        .map(({ locale, slug }) => {
          return (
            <Link to={`/${locale}/${slug}`} key={locale}>
              <FormattedMessage id={`blog.multiLanguageLinks.${locale}`} />
            </Link>
          )
        })
        .reduce((accu, element) => {
          if (accu.length > 0) {
            accu.push(', ')
          }
          accu.push(element)
          return accu
        }, [])}
    </Container>
  )
}

export default MultiLanguageLinks
