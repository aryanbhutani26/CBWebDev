import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  // const name= "Aryan"
  const user ={
    name : "Aryan",
    age : 20,
    college : "GTB4CEC",
    sex:'Male'
  }
  return (
    <>
    <div className='bg-gray-900 h-screen'>
      <Navbar user={user}  time={(new Date()).getMinutes()}/>
      <h1 className='text-white flex flex-col justify-center items-center m-10'>This is App.jsx</h1>
    </div>
    </>
  )
}

export default App
