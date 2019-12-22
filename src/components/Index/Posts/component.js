import React from 'react'
import { FormattedMessage } from 'react-intl'
import PostList from '../../PostList'
import { Link } from 'gatsby'

const Posts = ({ posts }) => {
  return (
    <section id="two" className="wrapper special style2">
      <div className="inner">
        <header className="major">
          <h2>
            <FormattedMessage id="index.posts.title" />
          </h2>
        </header>
      </div>
      <PostList posts={posts}></PostList>
      <footer className="major">
        <Link to="/blog" className="button">
          <FormattedMessage id="index.posts.seeAllButtonLabel" />
        </Link>
      </footer>
    </section>
  )
}

export default Posts
