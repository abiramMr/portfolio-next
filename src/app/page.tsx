import React from 'react'
import HomeBanner from '@/widgets/HomeBanner'
import HomeAbout from '@/widgets/HomeAbout'
import RenderModel from '@/components/RenderModel'

const Home = () => {
  return (
    <>
    <RenderModel/>
    <HomeBanner/>
    <HomeAbout/>
    </>
  )
}

export default Home