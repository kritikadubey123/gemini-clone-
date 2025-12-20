import React from 'react'
import './components/sidebar/sidebar.css';
import ContextProvider from './context/context.jsx';
import Sidebar from './components/sidebar/Sidebar'
import Main from './components/Main/Main'

const App = () => {
  return (
  <>
    <Sidebar/>
    <ContextProvider>
      <Main />
    </ContextProvider>
 
  </>
  )
}

export default App