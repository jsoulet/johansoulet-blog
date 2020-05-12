import React, { FC } from 'react'
import Card from './Card'
import Section, { backgroundColors as SectionBackgrounds } from 'components/Section'
import Row from 'components/Row'
import { ICard } from './types'

const CardList: FC<{
  cards: ICard[]
  title: string
  head: string
}> = ({ cards = [], title, head }) => {
  return (
    <Section backgroundColor={SectionBackgrounds.gray} title={title} head={head}>
      <Row stretch>
        {cards.map(({ title, content, image }, index) => {
          return <Card key={index} title={title} content={content} image={image} />
        })}
      </Row>
    </Section>
  )
}

export default CardList
