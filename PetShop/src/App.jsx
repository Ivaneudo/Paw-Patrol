import { useState } from 'react'
import './App.css'

// Importando o botão para entrar no login
import  {Enter}  from './components/Enter'

// Importando o bem vindo
import Welcome from './components/Welcome'

function App() {

  return (
    <>
      <div className='container'>
          <Welcome/>
          <Enter/>
      </div>
    </>
  )
}

export default App
