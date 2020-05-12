import React, { FC } from 'react'
import tw from 'twin.macro'
import Img, { FixedObject } from 'gatsby-image'

const Rating: FC<{ image: FixedObject; alt?: string }> = ({ image, alt = '' }) => {
  return <Img css={tw`h-20 w-20 rounded-full object-cover`} fixed={image} alt={alt} />
}

export default Rating
