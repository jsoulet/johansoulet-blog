import React, { FC } from 'react'
import tw from 'twin.macro'
import Container from 'components/Container'

import './article.css'

const Article: FC<{}> = ({ children }) => {
  return (
    <Container>
      <article css={[tw`max-w-screen-lg mx-auto mt-12 mb-32 overflow-hidden`]} className="article">
        {children}
      </article>
    </Container>
  )
}

export default Article
