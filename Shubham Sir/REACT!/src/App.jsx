import React, { useState } from 'react'

function App() {
  const [name, setname] = useState("Aryan")
  return (
    <> 
    <div className='bg-gray-700 text-white h-screen flex flex-col items-center justify-center'>
      <h1>{name}</h1>
      <button onClick={()=>setname("Shubham")} className='bg-white rounded-2xl p-2 text-black'>Click KR </button>

      <h1>{(name=='Aryan')?"Hello Aryan":"Hello Shubham"}</h1>
      <h1 className='text-3xl'> ABCD</h1>
      <h2 className='text-2xl'>EFGH</h2>
      <h3 className=''>IJKL</h3>

    </div>
    </>
  )
}

export default App
