import React, { FC } from 'react'
import tw from 'twin.macro'

export const P: FC<{ customCss?: any[] }> = ({ children, customCss = [] }) => {
  return <p css={[tw`text-gray-600`, ...customCss]}>{children}</p>
}

export default P
