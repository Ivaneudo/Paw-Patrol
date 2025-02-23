import Coll from "./Collaboratores.module.css"

export const Collaborators = () => {
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
                placeholder='User: '/>
                <input 
                type="text" 
                placeholder='Passwold: '/>
                <input 
                type="submit" 
                value="Entrar"
                className={Coll.Enter} />
            </form> 
        </div>
    </div>
  )
}
