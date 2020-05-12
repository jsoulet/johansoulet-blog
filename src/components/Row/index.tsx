import React, { FC } from 'react'
import tw from 'twin.macro'

const Row: FC<{ customCss?: never[]; stretch?: boolean }> = ({
  children,
  customCss = [],
  stretch = false,
  ...props
}) => {
  return (
    <div
      css={[
        tw`flex flex-wrap -mx-4`,
        // css({
        //   margin: '0 -1.25rem',
        // }),
        stretch && tw`items-stretch`,
        ...customCss,
      ]}
      {...props}
    >
      {children}
    </div>
  )
}

export default Row
