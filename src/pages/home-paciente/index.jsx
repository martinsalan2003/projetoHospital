import React, { useState } from 'react';
import IconeHeader from "../../assets/logoSemfundo.png";
import './HomePaciente.css';


function HomePaciente() {
    const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);

    const handleMenuClick = (opcao) => {
        setOpcaoSelecionada(opcao);
    };

    const renderConteudo = () => {
        switch (opcaoSelecionada) {
            case 'agendaConsulta':
                return (
                    <div className="card-acao">
                        <h3>Agendar Consulta</h3>
                        <form>
                            <label>
                                Especialidade:
                                <select>
                                    <option value="Cardiologia">Cardiologia</option>
                                    <option value="Dermatologia">Dermatologia</option>
                                    <option value="Endocrinologia">Endocrinologia</option>
                                </select>
                            </label>
                            <label>
                                Data:
                                <input type="date" />
                            </label>
                            <label>
                                Hora:
                                <input type="time" />
                            </label>
                            <button type="submit">Confirmar Agendamento</button>
                        </form>
                    </div>
                );
            case 'cancelarConsulta':
                return (
                    <div className="card-acao">
                        <h3>Cancelar Consulta</h3>
                        <p>Selecione a consulta que deseja cancelar:</p>
                        <ul>
                            <li>Cardiologia - 17/07/2024</li>
                            <li>Endocrinologia - 29/06/2024</li>
                        </ul>
                        <button>Cancelar Consulta</button>
                    </div>
                );
            case 'acompanhaConsulta':
                return (
                    <div className="card-acao">
                        <h3>Acompanhar Consulta</h3>
                        <p>Você não possui consultas agendadas no momento.</p>
                    </div>
                );
            default:
                return <p>Selecione uma ação no menu.</p>;
        }
    };

    return (
<>
        <div className="header">
            <img src={IconeHeader} alt="logo hospital" className='IconeHeader' />
            <h1>Hospital São Lucas Mendel</h1>
            <p className='usuario'>Paciente</p>
        </div>

        <div id='Paciente-Home'>
        
        <div id="home-paciente" className="paciente-container">

            <div className="menu-e-conteudo">
                <div className="menu-container">
                    <h3>Menu</h3>
                    <hr className="menu-divider" />
                    <button onClick={() => handleMenuClick('agendaConsulta')}>Agendar Consulta</button>
                    <button onClick={() => handleMenuClick('cancelarConsulta')}>Cancelar Consulta</button>
                    <button onClick={() => handleMenuClick('acompanhaConsulta')}>Acompanhar Consulta</button>
                </div>

                <div className="conteudo-container">
                    {renderConteudo()}
                </div>
            </div>
        </div>
        </div>
</>
    );
}

export default HomePaciente;1