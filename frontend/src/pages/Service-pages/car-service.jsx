import React from 'react'
import Header from '../../components/navbar'
import Hero2 from '../../components/hero/index2'
import Warranty from '../../components/warranty'
import MajorService from '../../components/hero/index3'
import BasicService from '../../components/hero/basicService'
import StandardService from '../../components/hero/standardService'
import Footer from '../../components/footer/Footers'

const Service = () => {
  return (
    <>
    <Header/>
    <div className='container font-mono w-full bg-green-700 p-4 text-3xl text-white flex justify-center font-semibold'>
    Select a car service package aligned with your specific requirements
    </div>
    <MajorService/>
    <StandardService/>
    <BasicService/>
    <Hero2/>
    <Warranty/>
    <Footer/>
    </>
  )
}

export default Service