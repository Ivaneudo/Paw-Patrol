import Wel from "./Welcome.module.css"

const Welcome = () => {
  return (
    <div>
        {/* logo do petshop */}
        <div className={Wel.logo}>
            <img src="/Logo-Pethop-250px.png" alt="Nossa logo" />
        </div>
        <div className={Wel.BoasVindas}>
            {/* <!-- Texto de boas vindas ao colaborador --> */}    
            <h1>Tenha um bom dia de trabalho, a nome
                agradece pelos seus serviços</h1>
        </div>  
    </div>
  )
}

export default Welcome