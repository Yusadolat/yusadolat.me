import React from 'react'
import Layout from './src/components/Layout'

// Wraps every page in a component
export const wrapRootElement = ({ element }) => {
  return <Layout>{element}</Layout>
}

// Logs when the client route changes
export const onRouteUpdate = ({ location, prevLocation }) => {
  console.log('new pathname', location.pathname)
  console.log('old pathname', prevLocation ? prevLocation.pathname : null)
}

// IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
export const onClientEntry = () => {
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
  }
} 