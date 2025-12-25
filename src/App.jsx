import React from 'react'
import './components/sidebar/sidebar.css';
import ContextProvider from './context/context.jsx';
import Sidebar from './components/sidebar/Sidebar'
import Main from './components/Main/Main'
import gemini from './config/gemini.js'

const App = () => {
  return (
  <>
    <Sidebar/>
      <Main />
  </>
  )
}

export default App