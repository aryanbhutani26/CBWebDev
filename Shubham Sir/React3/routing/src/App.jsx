import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Navbar from './components/Navbar'
function App() {


  return (
    <>

   
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<h1>Contact</h1>} />
          <Route path='/products' element={<h1>Products</h1>} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
