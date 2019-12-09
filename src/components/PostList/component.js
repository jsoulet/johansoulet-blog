import React from 'react'
import PostItem from './PostItem'
const PostList = ({ posts }) => {
  return (
    <>
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </>
  )
}

export default PostList
