import './css/main.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes, useLocation } from "react-router-dom";
import Home from './components/Home/Home';
import Courses from "./components/Courses/Courses";
import ReviewsCH from "./components/ReviewsCH/ReviewsCH";
import CHCourse from "./components/ReviewsCH/CHCourse";
import Donations from "./components/Donations/Donations";
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const App = () => {

  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [location]);

  return (
    <div className="App">
      <Header location={location} />

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/cursos" element={<Courses />} />
            <Route path="/repasos-coderhouse" element={<ReviewsCH />} />
            <Route path="/repasos-coderhouse/:course" element={<CHCourse />} />
            <Route path="/donaciones" element={<Donations />} />
          </Routes>
        </AnimatePresence>

      <Footer />
    </div>
  );

}

export default App
