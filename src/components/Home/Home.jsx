import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Shortcuts from './Shortcuts'
import transition from '../../helpers/transition'
import { useTranslation } from 'react-i18next'

const Home = () => {

  const [tt, i18n] = useTranslation("global");

  useEffect(() => {
    document.title = 'Carpi Coder | ' + tt("pages.home");
  }, [i18n.language]);

  return (
    <>
        <Hero />
        <Shortcuts />
    </>
  )
}

export default transition(Home);