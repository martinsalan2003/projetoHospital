import { useRef,  } from "react";
import "../Login/Login.css";
import Imagen from "../../assets/logoSemfundo.png";
import { Link, useNavigate } from "react-router-dom";


function Login() {

let navigate = useNavigate();
  

  const InputCPF = useRef()
  const InputSenha = useRef()

     // função de validação
     function loginUser() {

     
      // usuario e senha administrador
      const adminCPF = 75384944056;
      const adminsenha = 'root@0101';
    
      // usuario e senha balconista
      const balconistaCPF = 63564176098;
      const balconistasenha = 'mendel123'
      
      // usuario meidco
      const medicoCPF = 46093948048;
      const medicosenha = 'mendel321';
      
      // usuario paciente
      const pacienteCPF = 15613442061;
      const pacientesenha = '123456';
      
    

      if(InputCPF.current.value == adminCPF && InputSenha.current.value == adminsenha  ){
        
      navigate('./admin')

      }else if (InputCPF.current.value == balconistaCPF && InputSenha.current.value == balconistasenha) {
      
      navigate('/atendente')

      }else if (InputCPF.current.value == medicoCPF && InputSenha.current.value == medicosenha){
       
        navigate('/medico')

      }else if (InputCPF.current.value == pacienteCPF && InputSenha.current.value == pacientesenha){
        
      navigate('/paciente')
          
      }else {
        alert("Este cadastro não foi encontrado, verifique os dados e tente novamente")
      }
      

    }

  const Entrar = () => {
    loginUser();
  }

   
  
  return (
    <div className="container">
      <div className="containerLogin">
        <div className="logo">
          <img src={Imagen} />
        </div>
        <hr id="hr-login"/>
        <div className="inputs">
          <form>
            <input type="number" name="" id="" placeholder="Digite Seu CPF" ref={InputCPF}/>
            <input type="password" placeholder="Digite sua senha" ref={InputSenha}/>

            <button id="btn-login" type="button" onClick={Entrar}>Entrar</button>
            <div className="links">
              <Link to="/S-o-Lucas-Mendel/erro">Cadastrar Para Paciente</Link>             
             <Link to="/S-o-Lucas-Mendel/erro">Esqueceu a Senha?</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
