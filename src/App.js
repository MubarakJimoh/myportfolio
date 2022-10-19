import Home from './components/Home'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Experience from './components/Experiences'
export default function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>

      <Banner/>  
    </div>
      
    
  )
}
