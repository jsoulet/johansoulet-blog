import React from 'react'
import PostListItem from './component'

const PostListItemContainer = ({ post }) => {
  const { excerpt, frontmatter } = post
  const { date, title, path, featuredImage, chapo } = frontmatter
  return (
    <PostListItem
      title={title}
      date={date}
      excerpt={chapo || excerpt || ''}
      path={path}
      image={featuredImage}
    />
  )
}

export default PostListItemContainer
