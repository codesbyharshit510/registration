import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import State3 from './components/State3.jsx';
import State4 from './components/State4.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div>
        <State3/>
        <State4/>
         
      </div>
      <p className="read-the-docs">
        Learning React is fun !!
      </p>
    </>
  )
}

export default App
