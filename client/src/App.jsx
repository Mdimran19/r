
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navber from './components/Navber'
import About from './components/About'
import AboutPage from './pages/AboutPage'
import SkillPage from './components/SkillPage'
import Skills from './pages/Skills'
import ProjectPage from './pages/ProjectPage'
import Project from './components/Project'
import Contact from './components/Contact'
import ContactPage from './pages/ContactPage'
import Footer from './components/Footer'


function App() {
 

  return (
    <>
    <Navber/>
    
      <Routes>
        <Route path='/'  element={<Home/>}  />
        <Route path='/about'  element={<AboutPage/>}  />
        <Route path='/skills'  element={<Skills/>}  />
        <Route path='/projects'  element={<ProjectPage/>}  />
        <Route path='/contacts'  element={<ContactPage/>}  />
      </Routes>
      <About/>
      <SkillPage/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
