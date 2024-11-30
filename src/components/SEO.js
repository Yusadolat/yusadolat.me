import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = ({ title, description, url, isPost }) => {
  const siteTitle = title ? `${title} | Yusuf Adeyemo` : 'Yusuf Adeyemo'
  const metaDescription = description || 'Senior DevOps Engineer / Site Reliability Engineer'
  const metaUrl = url || 'https://yusadolat.me'

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={siteTitle}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: siteTitle,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: isPost ? 'article' : 'website',
        },
        {
          property: 'og:url',
          content: metaUrl,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: '@yusadolat',
        },
        {
          name: 'twitter:title',
          content: siteTitle,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ]}
    />
  )
}

export default SEO
