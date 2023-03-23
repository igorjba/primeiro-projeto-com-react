import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="container" style={{ border: '1px solid red' }}>
      <header>
        <h2>Igor.dev</h2>
        <ul className='menu'>
          <li>Artigos</li>
          <li>Contato</li>
        </ul>
      </header>
      <footer>
        <ul className='menu'>
          <li>Artigos</li>
          <li>Contato</li>
        </ul>
      </footer>
    </div>
  )
}

export default App
