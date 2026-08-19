import React from 'react'

import Helmet from './Helmet'

const SITE_URL = 'https://yusadolat.me'
const AUTHOR = 'Yusuf Adeyemo'
const JOB_TITLE = 'Senior DevOps Engineer / Site Reliability Engineer'
const DEFAULT_DESCRIPTION =
  'Senior DevOps Engineer and Site Reliability Engineer. Cloud infrastructure, automation and reliability.'
const OG_IMAGE = `${SITE_URL}/og-image.png`

/** Profiles asserted as the same entity, so search engines can link them up. */
const SAME_AS = [
  'https://github.com/yusadolat',
  'https://twitter.com/yusadolat',
  'https://www.linkedin.com/in/yusadolat',
  'https://www.instagram.com/yusadolat'
]

interface SeoProps {
  title?: string
  description?: string
  url?: string
  /** Switches og:type to "article" and emits BlogPosting structured data. */
  isPost?: boolean
  /** ISO date, used for article:published_time and datePublished. */
  datePublished?: string
  /** Absolute or site-relative image for the share card. */
  image?: string
  /** Accepted by some callers; the title already carries the site name. */
  postfix?: string
}

const SEO = ({
  title,
  description,
  url,
  isPost,
  datePublished,
  image
}: SeoProps) => {
  const siteTitle = title ? `${title} | ${AUTHOR}` : AUTHOR
  const metaDescription = description || DEFAULT_DESCRIPTION
  const metaUrl = url || SITE_URL
  const metaImage = image
    ? image.startsWith('http')
      ? image
      : `${SITE_URL}${image}`
    : OG_IMAGE

  // Person on ordinary pages; BlogPosting (with Person as author) on posts.
  // Both are what search engines and AI answer engines read to attribute work.
  const structuredData = isPost
    ? {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title || AUTHOR,
        description: metaDescription,
        image: metaImage,
        url: metaUrl,
        mainEntityOfPage: { '@type': 'WebPage', '@id': metaUrl },
        ...(datePublished ? { datePublished } : {}),
        author: {
          '@type': 'Person',
          name: AUTHOR,
          url: SITE_URL,
          jobTitle: JOB_TITLE,
          sameAs: SAME_AS
        },
        publisher: {
          '@type': 'Person',
          name: AUTHOR,
          url: SITE_URL
        }
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: AUTHOR,
        url: SITE_URL,
        image: metaImage,
        jobTitle: JOB_TITLE,
        description: DEFAULT_DESCRIPTION,
        knowsAbout: [
          'DevOps',
          'Site Reliability Engineering',
          'Amazon Web Services',
          'Kubernetes',
          'Terraform',
          'CI/CD',
          'Observability'
        ],
        sameAs: SAME_AS
      }

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={siteTitle}
      link={[{ rel: 'canonical', href: metaUrl }]}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:site_name',
          content: AUTHOR,
        },
        {
          property: 'og:locale',
          content: 'en_US',
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
          property: 'og:image',
          content: metaImage,
        },
        {
          property: 'og:image:width',
          content: '1200',
        },
        {
          property: 'og:image:height',
          content: '630',
        },
        {
          property: 'og:image:alt',
          content: `${AUTHOR} — ${JOB_TITLE}`,
        },
        ...(isPost && datePublished
          ? [{ property: 'article:published_time', content: datePublished }]
          : []),
        {
          name: 'twitter:card',
          content: 'summary_large_image',
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
        {
          name: 'twitter:image',
          content: metaImage,
        },
        {
          name: 'twitter:image:alt',
          content: `${AUTHOR} — ${JOB_TITLE}`,
        },
      ]}
    >
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  )
}

export default SEO
