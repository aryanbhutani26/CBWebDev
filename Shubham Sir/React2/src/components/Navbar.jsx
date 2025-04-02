import React from 'react'
import { useState } from 'react'
const Navbar = ({user , time}) => {
    
    const [name, setname] = useState("Navbar")
  return (
    <div className='bg-black text-white w-screen h-16 flex items-center justify-between px-4 m-0 '>
      
      <nav>Logo</nav>
      <nav>Hello {user.name} {time} </nav>
      <div className='flex space-x-8'>

      <nav className=' hover:text-gray-400'>About</nav>
      <nav className=' hover:text-gray-400'>Contact</nav>
      <nav className=' hover:text-gray-400'>Get Started</nav>

      <nav className=' hover:text-gray-400' onClick={()=>setname("Aryan")}>login {name}</nav>
      </div>
    </div>
  )
}

export default Navbar
