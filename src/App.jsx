import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Form from './Component/Form.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='reactForm'>
       <Form/>  
      </div>
      
    </>
  )
}

export default App
