import React from 'react'

import {useNavigate} from 'react-router-dom';

export const Enter = () => {

  const navigate = useNavigate();

  const Entrar = () => {
    navigate("Login")
  }

  return (
    <div>
        <button id="Enter" onClick={Entrar} >Entrar</button>
    </div>
  ) 
}
