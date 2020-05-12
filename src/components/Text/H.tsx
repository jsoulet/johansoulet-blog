import React, { FC } from 'react'
import tw from 'twin.macro'

export const H3: FC<{ customCss?: any[] }> = ({ children, customCss = [] }) => {
  return <h3 css={[tw`uppercase font-bold text-xl mb-2`, ...customCss]}>{children}</h3>
}

export const H2: FC<{ customCss?: any[] }> = ({ children, customCss = [] }) => {
  return <h2 css={[tw`font-bold uppercase text-4xl mb-5`, ...customCss]}>{children}</h2>
}
