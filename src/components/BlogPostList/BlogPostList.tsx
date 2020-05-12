import React, { FC, ReactElement } from 'react'
import Section from 'components/Section'
import BlogPostItem from './BlogPostItem'
import Row from 'components/Row'

import { IBlogPostItem } from './types'

const BlogPostList: FC<{
  posts: IBlogPostItem[]
  title?: string
  head?: ReactElement | string
  bottom?: ReactElement | string
}> = ({ posts, title, head, bottom }) => {
  return (
    <Section title={title} head={head} bottom={bottom}>
      <Row>
        {posts.map(post => {
          return (
            <BlogPostItem
              key={post.id}
              id={post.id}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              image={post.image}
              slug={post.slug}
            />
          )
        })}
      </Row>
    </Section>
  )
}

export default BlogPostList
