// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Us">
    <p>Basic Caulking specializes in residential, commercial and industrial projects. We are dedicated to quality, details and lasting results.</p>
      <p>With over 20 years of experience we offer top-quality products and services.</p>
  </Layout>
  )
}

export const Head = () => <Seo title="About Us" />
// Step 3: Export your component
export default AboutPage