import React from 'react'
import Banner from './Banner'
import HomeCatogory from './HomeCatogory'
import CategoryShowCase from './CategoryShowCase'
import Register from './Register'
import LocationSpread from './LocationSpread'
import AboutUs from './AboutUs'
import AppSection from './AppSection'
import Sponser from './Sponser'

const Home = () => {
  return (
    <>
    <Banner/>
    <HomeCatogory/>
    <CategoryShowCase/>
    {/* <Register/> */}
    {/* <LocationSpread/> */}
    <AboutUs/>
    <AppSection/>
    <Sponser/>
    </>
  )
}

export default Home