import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Shortcuts from './Shortcuts'
import transition from '../../helpers/transition'

const Home = () => {

  useEffect(() => {
    document.title = 'Carpi Coder | Inicio';
  }, []);

  return (
    <>
        <Hero />
        <Shortcuts />
    </>
  )
}

export default transition(Home);