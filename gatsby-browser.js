import React from 'react'
import Layout from './src/components/Layout'

// wrapPageElement, not wrapRootElement: only this one receives the page's
// `location`. Under wrapRootElement the Layout got `location === undefined`, so
// actualPage() always returned '' and the Navbar marked Home as the active link
// on every page of the site.
export const wrapPageElement = ({ element, props }) => {
  return <Layout location={props.location}>{element}</Layout>
}

// IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
export const onClientEntry = () => {
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
  }
}
