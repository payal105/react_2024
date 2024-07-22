import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  // function changeColor(color) {
  //   setColor(color)
  // }
  return (
    <div className='w-full h-screen duration-200 ' style={{
      backgroundColor:color
    }}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor('red')} className='outline-none px-4 py-1 rounded-full  shadow-lg text-white bg-red-600'>Red</button>
          <button onClick={() => setColor('green')}  className='outline-none px-4 py-1 rounded-full  shadow-lg text-white bg-green-600'>Green</button>
          <button onClick={() => setColor('blue')}  className='outline-none px-4 py-1 rounded-full  shadow-lg text-white bg-blue-600'>Blue</button>
        </div>
      </div>
      {/* <h1 className='bg-green-500 text-3xl'>A bg changer app with vite</h1> */}
    </div>
  )
} 

export default App
