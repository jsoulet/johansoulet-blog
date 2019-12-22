import React from 'react'
import PostListItem from './component'

const PostListItemContainer = ({ post }) => {
  const { excerpt, frontmatter, fields } = post
  const { date, title, featuredImage, chapo } = frontmatter
  return (
    <PostListItem
      title={title}
      date={date}
      excerpt={chapo || excerpt || ''}
      path={fields.slug}
      image={featuredImage}
    />
  )
}

export default PostListItemContainer
