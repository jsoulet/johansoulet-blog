import React, { FC } from 'react'
import Rating from './Raiting'
import Avatar from './Avatar'
import { H3, P } from 'components/Text'
import tw from 'twin.macro'
import { ITestimonial } from '../types'

const TestimonialSlide: FC<ITestimonial> = ({ content, author, rating, avatar }) => {
  return (
    <div css={tw`h-full w-full flex justify-center items-center mb-10`}>
      <div
        css={tw`md:w-3/4 lg:w-1/2 mx-auto bg-white rounded-lg border-solid border border-gray-400 py-10 px-8 `}
      >
        <P customCss={[tw`italic mb-5`]}>{content}</P>
        <div css={tw`flex justify-between items-center`}>
          <div>
            <H3>{author}</H3>
            <Rating value={rating} />
          </div>
          {avatar && <Avatar image={avatar} alt={author} />}
        </div>
      </div>
    </div>
  )
}

export default TestimonialSlide
