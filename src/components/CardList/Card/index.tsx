import React, { FC } from 'react'
import tw from 'twin.macro'
import { H3 } from 'components/Text'
import { css } from '@emotion/core'
import Img, { FixedObject } from 'gatsby-image'

const Service: FC<{ title: string; content: string; image?: FixedObject }> = ({
  title,
  content,
  image,
}) => {
  return (
    <div css={[tw`w-full md:w-1/2 px-4 mb-8`]}>
      <div
        css={[
          tw`rounded-lg bg-white hover:shadow-xl px-6 py-8 transition duration-300 h-full shadow-sm`,
          css({
            '&:hover img': {
              filter: 'grayscale(0)',
            },
          }),
        ]}
      >
        {image && (
          <Img
            css={[
              css({
                maxHeight: 150,
                marginInlineEnd: 'auto',
                filter: 'grayscale(1)',
              }),
              tw`transition-all duration-300 mx-auto md:m-0`,
            ]}
            fixed={image}
            alt=""
          />
        )}
        <H3 customCss={[tw`text-center md:text-left my-5`]}>{title}</H3>
        <p css={[tw`text-gray-600`]}>{content}</p>
      </div>
    </div>
  )
}

export default Service
