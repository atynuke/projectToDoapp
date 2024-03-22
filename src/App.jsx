import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='reactForm'>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>


      </div>
      <h1>React Form</h1>
      <div className="card">
      
      </div>
      
    </>
  )
}

export default App
