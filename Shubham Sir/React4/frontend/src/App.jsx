import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Product from './pages/Product'
function App() {


  return (
    <>

   
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/products' element={<Product/>} />
        </Routes>
      </BrowserRouter>
      
   
    </>
  )
}

export default App
