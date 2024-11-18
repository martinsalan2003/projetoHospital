import React, { useState } from 'react';
import IconeHeader from './image/logoSemfundo.png'


import './HomeMedico.css';

function HomeMedico() {
    const [pacienteSelecionado, setPacienteSelecionado] = useState(null);
    const [observacaoEditavel, setObservacaoEditavel] = useState("");

    const Pacientes = [
        { foto: 'https://www.nailseatowncouncil.gov.uk/wp-content/uploads/blank-profile-picture-973460_1280.jpg', nome: 'Alisson', idade: 18, RG: '22.281.171-7', observação: 'Asma Brônquica', sexo: 'Masculino', utimaConsulta: '16/08/2024', peso: '85 kg', altura: '1,72', CEP: '18604-520', endereço: 'Rua Três', bairro: 'Parque dos Laranjais', Cidade: 'Suzano', Estado: 'SP' },
        { foto: 'https://www.nailseatowncouncil.gov.uk/wp-content/uploads/blank-profile-picture-973460_1280.jpg', nome: 'João Santos', idade: 25, RG: '19.603.533-8', observação: 'Hipertensão Arterial', sexo: 'Masculino', utimaConsulta: '17/07/2024', peso: '83 kg', altura: '1,83', CEP: '09160-202', endereço: 'Rua Sócrates', bairro: 'Sítio Taquaral', Cidade: 'Santo André', Estado: 'SP' },
        { foto: 'https://www.nailseatowncouncil.gov.uk/wp-content/uploads/blank-profile-picture-973460_1280.jpg', nome: 'Ana Oliveira', idade: 31, RG: '22.486.565-1', observação: 'Diabetes Tipo 2', sexo: 'Feminino', utimaConsulta: '29/06/2024', peso: '76 Kg', altura: '1,75', CEP: '13236-102', endereço: 'Rua Francisco Mariano', bairro: 'Jardim Guanciale', Cidade: 'Campo Limpo Paulista', Estado: 'SP' },
        { foto: 'https://www.nailseatowncouncil.gov.uk/wp-content/uploads/blank-profile-picture-973460_1280.jpg', nome: 'Pedro Pereira', idade: 26, RG: '22.310.938-4', observação: 'Dermatite Atópica', sexo: 'Masculino', utimaConsulta: '03/05/2024', peso: '92 kg', altura: '1,86', CEP: '07703-055', endereço: 'Rua Fortunato Pollon', bairro: 'Nova Caieiras', Cidade: 'Caieiras', Estado: 'SP' },{ foto: 'https://www.nailseatowncouncil.gov.uk/wp-content/uploads/blank-profile-picture-973460_1280.jpg', nome: 'Evillin de santana ', idade: 26, RG: '22.310.938-4', observação: 'Dermatite Atópica', sexo: 'Masculino', utimaConsulta: '03/05/2024', peso: '92 kg', altura: '1,86', CEP: '07703-055', endereço: 'Rua Fortunato Pollon', bairro: 'Nova Caieiras', Cidade: 'Caieiras', Estado: 'SP' },{ foto: 'https://www.nailseatowncouncil.gov.uk/wp-content/uploads/blank-profile-picture-973460_1280.jpg', nome: 'Wagnner de melo', idade: 26, RG: '22.310.938-4', observação: 'Dermatite Atópica', sexo: 'Masculino', utimaConsulta: '03/05/2024', peso: '92 kg', altura: '1,86', CEP: '07703-055', endereço: 'Rua Fortunato Pollon', bairro: 'Nova Caieiras', Cidade: 'Caieiras', Estado: 'SP' },{ foto: 'https://www.nailseatowncouncil.gov.uk/wp-content/uploads/blank-profile-picture-973460_1280.jpg', nome: 'Erick golveia', idade: 26, RG: '22.310.938-4', observação: 'Dermatite Atópica', sexo: 'Masculino', utimaConsulta: '03/05/2024', peso: '92 kg', altura: '1,86', CEP: '07703-055', endereço: 'Rua Fortunato Pollon', bairro: 'Nova Caieiras', Cidade: 'Caieiras', Estado: 'SP' }
    ];

    const handlePacienteSelecionado = (paciente) => {
        setPacienteSelecionado(paciente);
        setObservacaoEditavel(paciente.observação);
    };

    const handleObservationChange = (e) => {
        setObservacaoEditavel(e.target.value);
    };

    const handleSalvarObservacao = () => {
        setPacienteSelecionado({
            ...pacienteSelecionado,
            observação: observacaoEditavel
        });
        alert("Observação salva com sucesso!");
    };

    return (

<>
        <div className="header">
            <img src={IconeHeader} alt="logo hospital" className='IconeHeader' />
            <h1>Hospital São Lucas Mendel</h1>
            <p className='usuario'>Médico</p>
        </div>
        <div className="container">
            <h1 className='tituloMedico'>Pacientes</h1>

            {!pacienteSelecionado && (
                <div className="cards-container">
                    {Pacientes.map((paciente, index) => (
                        <div key={index} className="card" onClick={() => handlePacienteSelecionado(paciente)}>
                            <div className="foto-container">
                                <img src={paciente.foto} alt={paciente.nome} className="foto" />
                            </div>
                            <hr className='linha-medico'/>
                            <h2 className='titulo-medico'>{paciente.nome}</h2>
                            <p className='parag-medico'><strong>Idade:</strong> {paciente.idade}</p>
                            <p className='parag-medico'><strong>Observação:</strong> {paciente.observação}</p>
                            <p className='parag-medico'><strong>Última Consulta:</strong> {paciente.utimaConsulta}</p>
                        </div>
                    ))}
                </div>
            )}

            {pacienteSelecionado && (
                <div className="detalhes-card">
                    <h2>Detalhes do Paciente</h2>
                    <img src={pacienteSelecionado.foto} alt={pacienteSelecionado.nome} className="foto-detalhada" />
                    <hr />
                    <div className="detalhes-info">
                        <div className="detalhes-pessoais">
                            <p className='parag-medico'><strong>Nome:</strong> {pacienteSelecionado.nome}</p>
                            <p className='parag-medico'><strong>Idade:</strong> {pacienteSelecionado.idade}</p>
                            <p className='parag-medico'><strong>RG:</strong> {pacienteSelecionado.RG}</p>
                            <p className='parag-medico'><strong>Sexo:</strong> {pacienteSelecionado.sexo}</p>
                            <p className='parag-medico'><strong>Última Consulta:</strong> {pacienteSelecionado.utimaConsulta}</p>
                            <p className='parag-medico'><strong>Peso:</strong> {pacienteSelecionado.peso}</p>
                        </div>
                        <div className="detalhes-endereco">
                            <p className='parag-medico'><strong>Altura:</strong> {pacienteSelecionado.altura}</p>
                            <p className='parag-medico'><strong>CEP:</strong> {pacienteSelecionado.CEP}</p>
                            <p className='parag-medico'><strong>Endereço:</strong> {pacienteSelecionado.endereço}</p>
                            <p className='parag-medico'><strong>Bairro:</strong> {pacienteSelecionado.bairro}</p>
                            <p className='parag-medico'><strong>Cidade:</strong> {pacienteSelecionado.Cidade}</p>
                            <p className='parag-medico'><strong>Estado:</strong> {pacienteSelecionado.Estado}</p>
                        </div>
                    </div>

                    <div className="observacao-edit">
                        <p><strong>Observação:</strong></p>
                        <input
                            type="text"
                            value={observacaoEditavel}
                            onChange={handleObservationChange}
                            className="observacao-input"
                        />
                        <button onClick={handleSalvarObservacao} id="salvar-button" className='btn-global' >Salvar</button>
                    </div>

                    <button onClick={() => setPacienteSelecionado(null)} id="fechar-button" className='btn-global'>Fechar Detalhes</button>
                </div>
            )}
        </div>

        </> );
}

export default HomeMedico