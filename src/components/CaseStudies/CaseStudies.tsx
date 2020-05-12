import React, { FC, ReactElement } from 'react'
import Section from 'components/Section'
import Row from 'components/Row'
import CSCard from './CSCard'
import { ICaseStudyCard } from './types'

const CaseStudies: FC<{
  caseStudies: ICaseStudyCard[]
  title?: string
  head?: ReactElement | string
}> = ({ caseStudies, head, title }) => {
  return (
    <Section title={title} head={head}>
      <Row stretch>
        {caseStudies.map(study => {
          return (
            <CSCard
              key={study.id}
              id={study.id}
              title={study.title}
              category={study.category}
              image={study.image}
              slug={study.slug}
            />
          )
        })}
      </Row>
    </Section>
  )
}

export default CaseStudies
