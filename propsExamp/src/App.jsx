import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PropsExap from './components/PropsExap.jsx'

function App() {


  return (
    <>
    <h1>Props Example in React</h1>
      <PropsExap message="Hello from App component" count={80} />
    </>
  )
}

export default App
