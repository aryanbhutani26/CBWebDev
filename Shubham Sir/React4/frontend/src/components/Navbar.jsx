import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      
      <nav className="bg-green-500 m=0 p-3 flex justify-between items-center text-white ">
        <ul className="flex gap-15">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
        <h1 className="text-3xl font-bold mr-15 text-shadow">Navbar</h1>
      </nav>
    </div>
  )
}

export default Navbar
