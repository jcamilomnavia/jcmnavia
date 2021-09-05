import React from 'react'
import { AnimateSharedLayout } from 'framer-motion'
import Matrix from '../../../ui/magnets'

const Hero = () => {
  return (
    <section id="particles" className="main-hero position-relative">
      <AnimateSharedLayout>
        <Matrix />
        <section className="main-hero__container mx-0">
          <article className="text-center main-hero__row">
            <h1 className="main-hero__subtitle">Stop searching</h1>
            <h1 className="main-hero__title">It's me, Navia</h1>
            <h2 className="main-hero__subtitle">
              The Full Stack Developer you've been looking for
            </h2>
          </article>
        </section>
      </AnimateSharedLayout>
    </section>
  )
}

export default Hero
