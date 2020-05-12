import React, { FC } from 'react'
import tw from 'twin.macro'
import { useIntl, Link } from 'gatsby-plugin-intl'
import Layout from 'components/Layout'
import Hero from 'components/PageHero'
import Article from 'components/Article'

const PageNotFound: FC<{}> = () => {
  const { formatMessage } = useIntl()

  return (
    <Layout>
      <Hero
        title={formatMessage({ id: '404.title' })}
        breadcrumb={[
          { label: formatMessage({ id: 'breadcrumb.home' }), link: '/' },
          { label: formatMessage({ id: 'breadcrumb.blog' }) },
        ]}
      />
      <Article>
        <div css={[tw`text-center`]}>
          <p css={[tw`mb-5`]}>{formatMessage({ id: '404.notFound' })}</p>
          <p>
            <Link to="/">{formatMessage({ id: '404.goBackHome' })}</Link>
          </p>
        </div>
      </Article>
    </Layout>
  )
}

export default PageNotFound
