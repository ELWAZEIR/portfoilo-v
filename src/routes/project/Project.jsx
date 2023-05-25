import React from 'react'
import Nav from '../../components/nav/Nav'
import Footer from '../../components/footer/Footer'
import Hero2 from '../../components/heroImg2/Hero2'
import CardPrice from '../../components/cardPrice/CardPrice'
import Work from '../../components/work/work'

export default function Project() {
  return (
    <div>
      <Nav />
      <Hero2 heading="PROJECTS" text="Some of my most recent works" />
      <Work />
      <CardPrice />
      <Footer />
    </div>
  )
}
