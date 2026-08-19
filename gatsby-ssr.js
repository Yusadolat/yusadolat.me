import React from 'react'
import Layout from './src/components/Layout'

// Must mirror gatsby-browser.js so the server-rendered markup matches the
// client's first render.
export const wrapPageElement = ({ element, props }) => {
  return <Layout location={props.location}>{element}</Layout>
}
