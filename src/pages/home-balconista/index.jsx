import React, { useState } from 'react';
import IconeHeader from '../../assets/logoSemfundo.png';  
import './HomeBalconista.css';

function HomeBalconista() {
  const [showForm, setShowForm] = useState(false);
  const [nome, setNome] = useState('');
  const [rg, setRg] = useState('');
  const [cpf, setCpf] = useState('');
  const [cadastroConcluido, setCadastroConcluido] = useState(false);
  const [pacientes, setPacientes] = useState([
    {
      foto: '',
      nome: 'Alisson',
      idade: 18,
      RG: '22.281.171-7',
      observacao: 'Asma Brônquica',
      sexo: 'Masculino',
      ultimaConsulta: '16/08/2024',
      peso: '85 kg',
      altura: '1,72',
      CEP: '18604-520',
      endereco: 'Rua Três',
      bairro: 'Parque dos Laranjais',
      cidade: 'Suzano',
      estado: 'SP',
    },
    {
      foto: '',
      nome: 'João Santos',
      idade: 25,
      RG: '19.603.533-8',
      observacao: 'Hipertensão Arterial',
      sexo: 'Masculino',
      ultimaConsulta: '17/07/2024',
      peso: '83 kg',
      altura: '1,83',
      CEP: '09160-202',
      endereco: 'Rua Sócrates',
      bairro: 'Sítio Taquaral',
      cidade: 'Santo André',
      estado: 'SP',
    },
    {
      foto: '',
      nome: 'Ana Oliveira',
      idade: 31,
      RG: '22.486.565-1',
      observacao: 'Diabetes Tipo 2',
      sexo: 'Feminino',
      ultimaConsulta: '29/06/2024',
      peso: '76 Kg',
      altura: '1,75',
      CEP: '13236-102',
      endereco: 'Rua Francisco Mariano',
      bairro: 'Jardim Guanciale',
      cidade: 'Campo Limpo Paulista',
      estado: 'SP',
    },
    {
      foto: '',
      nome: 'Pedro Pereira',
      idade: 26,
      RG: '22.310.938-4',
      observacao: 'Dermatite Atópica',
      sexo: 'Masculino',
      ultimaConsulta: '03/05/2024',
      peso: '92 kg',
      altura: '1,86',
      CEP: '07703-055',
      endereco: 'Rua Fortunato Pollon',
      bairro: 'Nova Caieiras',
      cidade: 'Caieiras',
      estado: 'SP',
    }
  ]);

  const [mensagemConsulta, setMensagemConsulta] = useState('');
  const [nomeConsulta, setNomeConsulta] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoPaciente = {
      foto: '',
      nome: nome,
      idade: 0,
      RG: rg,
      observacao: 'Sem observação',
      sexo: 'Não especificado',
      ultimaConsulta: 'Não registrada',
      peso: 'Não especificado',
      altura: 'Não especificada',
      CEP: 'Não especificado',
      endereco: 'Não especificado',
      bairro: 'Não especificado',
      cidade: 'Não especificada',
      estado: 'Não especificado',
    };

    setPacientes([...pacientes, novoPaciente]);

    setNome('');
    setRg('');
    setCpf('');
    setCadastroConcluido(true);
    setShowForm(false);
  };

  const consultarPaciente = () => {
    const pacienteEncontrado = pacientes.find(
      (paciente) => paciente.nome.toLowerCase() === nomeConsulta.toLowerCase()
    );

    if (pacienteEncontrado) {
      setMensagemConsulta('Paciente cadastrado');
    } else {
      setMensagemConsulta('Paciente não cadastrado');
    }
  };

  return (
    <div id="home-container">
      <div className="header">
        <img src={IconeHeader} alt="logo hospital" className="IconeHeader" />
        <h1>Hospital São Lucas Mendel</h1>
        <p className="usuario">Atendente</p>
     </div>
     

      <div id="consultar-paciente-container">
        <h2 id="consultar-heading">Consultar Paciente</h2>
        <input
          type="text"
          id="nome-consulta-input"
          placeholder="Digite o nome do paciente"
          value={nomeConsulta}
          onChange={(e) => setNomeConsulta(e.target.value)}
        />
        <button id="consultar-button" className='btn_global' onClick={consultarPaciente}>Consultar</button>
        <p id="mensagem-consulta">{mensagemConsulta}</p>
      </div>

      {!cadastroConcluido ? (
        <>
          <button id="cadastrar-button" className='btn_global' onClick={() => setShowForm(true)}>Cadastrar Paciente</button>

          {showForm && (
            <form id="form-cadastro" onSubmit={handleSubmit}>
              <div id="campo-nome">
                <label htmlFor="nome-input">
                  Nome:
                  <input
                    type="text"
                    id="nome-input"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </label>
              </div>

              <div id="campo-rg">
                <label htmlFor="rg-input">
                  RG:
                  <input
                    type="text"
                    id="rg-input"
                    value={rg}
                    onChange={(e) => setRg(e.target.value)}
                    required
                  />
                </label>
              </div>

              <div id="campo-cpf">
                <label htmlFor="cpf-input">
                  CPF:
                  <input
                    type="text"
                    id="cpf-input"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    required
                  />
                </label>
              </div>

              <div id="submit-cadastro">
                <button type="submit" id="submit-button" className='btn_global'>Cadastrar</button>
              </div>
            </form>
          )}
        </>
      ) : (
        <div id="cadastro-sucesso">
          <h2 id="cadastro-sucesso-heading">Paciente cadastrado com sucesso!</h2>
          <button id="novo-cadastro-button" className='btn_global' onClick={() => setCadastroConcluido(false)}>Cadastrar novo paciente</button>
        </div>
      )}

      <div id="lista-pacientes-container">
        <h2 id="lista-pacientes-heading">Lista de Pacientes</h2>
        <ul id="pacientes-list">
          {pacientes.map((paciente, index) => (
            <li key={index} id="paciente-item">
              <strong>{paciente.nome}</strong> - RG: {paciente.RG}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomeBalconista;