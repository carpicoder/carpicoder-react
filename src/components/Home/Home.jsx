import React from 'react'
import Hero from './Hero/Hero'
import Shortcuts from './Shortcuts'
import transition from '../../helpers/transition'

const Home = () => {
  return (
    <>
        <Hero />
        <Shortcuts />
    </>
  )
}

export default transition(Home);