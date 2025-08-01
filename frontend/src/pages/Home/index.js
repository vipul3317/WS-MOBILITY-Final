import React from 'react'
import Header from '../../components/navbar'
import Hero from '../../components/hero'
import Hero2 from '../../components/hero/index2'
import FAQ from '../../components/accordion/FAQ'
import Brand from '../../components/brands'
import Warranty from '../../components/warranty'
import MajorService from '../../components/hero/index3'
import Footer from '../../components/footer/Footers'
import ScrollToTopButton from '../../utils/ScrollToTopButton'

export const Home = () => {
  return (
    <>
      <Header/>
      <ScrollToTopButton/>
      <Hero/>
      <Hero2/>
      <MajorService/>
      <Brand/>
      <Warranty/>
      <FAQ/>
      <Footer/>
    </>
  )
}
