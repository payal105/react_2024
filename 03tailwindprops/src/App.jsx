import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name:'Payal',
    age: 24,
    address:{
      city:'Ghatsila',
      state:'Jharkhand',
      country:'India'
    }
  }
  let newArr = [1,2,3,4,5,6,7,8,9]
  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card username='payal' myArr={newArr} />    
      <Card  username='Hitesh' post='Staff Engg.'/>    
      <Card/>    
    </>
  )
}

export default App
