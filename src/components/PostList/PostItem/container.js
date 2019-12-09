import React from 'react'
import PostListItem from './component'

const PostListItemContainer = ({ post }) => {
  const { excerpt, frontmatter } = post
  const { date, title, path } = frontmatter
  return <PostListItem title={title} date={date} excerpt={excerpt} path={path} />
}

export default PostListItemContainer
