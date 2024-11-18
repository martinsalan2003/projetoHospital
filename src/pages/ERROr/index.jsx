import PaginaDeErro from './PaginaDeErro.webp'
import './Erro.css'

function Error(){
    return (
      <div id='telaErro'>
      <img src={PaginaDeErro} alt="imagem de erro" className='fotoDeErro' />
      </div>
    )
}

export default Error