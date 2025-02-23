import Coll from "./Collaboratores.module.css"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:3000/caixa"

export const Collaborators = () => {

  // const [caixa, setCaixa] = useState("")
  // const [name, setName] = useState("")
  // const [senha, setSenha] = useState("")

  // useEffect(() => {
  //   async function getData() {
  //     const res = await fetch(url)

  //     const data = await res.json()

  //     setCaixa(data)
  //   }

  //   getData()
  // }, [])

  function submi(e) {

    e.preventDefault([])

    let user = document.querySelector('#userColl').value;
    let password = +document.querySelector('#passColl').value

    if(user === "") return alert('Adiciona seu cpf no campo user')

    if(password === 0  || password === "") {
      return alert("Adicione a sua senha no campo password")
    } else {

      const [caixa, setCaixa] = useState("")
  
      useEffect(() => {
        async function getData() {
          const res = await fetch(url)
    
          const data = await res.json()
    
          setCaixa(data)
          
          caixa.map((caixa) => {
            if (caixa.cpf === user && caixa.senha === password) {
              console.log("passou!")
            } else {
              console.log("senha ou user incorretos")
            }
          })
          
        }
    
        getData()
      }, [caixa])
    
    }


  }

  return (
    <div className='container'>

        <div className={Coll.logo}>
            <img src="/Logo-Pethop-250px.png" alt="" />
        </div>

        <div className={Coll.form}>
            {/* Formulario para os funcionarios */}
            <form action="">
                <input 
                type="text" 
                placeholder='User: '
                id="userColl"
                maxLength="14"/>
                <input 
                type="text" 
                placeholder='Passwold: '
                id="passColl"/>
                <input 
                type="submit" 
                value="Entrar"
                className={Coll.Enter}
                onClick={submi} />
            </form> 
        </div>
    </div>
  )
}
