import React, { FC, useMemo } from 'react'
import Heart from 'assets/icons/Heart'
import HeartSolid from 'assets/icons/HeartSolid'
import tw from 'twin.macro'

const MAX = 5
const MIN = 0
const Rating: FC<{ value: number }> = ({ value }) => {
  let boundedValue = value
  if (value > MAX) {
    boundedValue = MAX
  }
  if (value < MIN) {
    boundedValue = MIN
  }
  const filledHearts = useMemo<FC[]>(() => new Array(boundedValue).fill(''), [boundedValue])
  const emptyHearts = useMemo<FC[]>(() => new Array(MAX - boundedValue).fill(''), [boundedValue])
  return (
    <div css={tw`flex text-red-700`}>
      {filledHearts.map((e, index) => (
        <HeartSolid key={index} css={tw`h-6`} />
      ))}
      {emptyHearts.map((e, index) => (
        <Heart key={index} css={tw`h-6`} />
      ))}
    </div>
  )
}

export default Rating
