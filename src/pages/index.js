import React from 'react'

import Layout from 'components/layout'
import SEO from 'components/seo'

import Hero from 'components/home/hero'
import About from 'components/home/about'
import Skills from 'components/home/skills'
import Education from 'components/home/education'

const IndexPage = () => (
  <Layout>
    <SEO data={{ seo: { seo_title: 'Home' } }} />
    <Hero />
    <About />
    <Skills />
    <Education />
  </Layout>
)

export default IndexPage
