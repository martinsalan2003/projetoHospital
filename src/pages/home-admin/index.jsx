import React, { useState, useEffect} from 'react';


import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);


import { Link } from "react-router-dom";
import './HomeAdmin.css';  
import IconeHeader from '../../assets/logoSemfundo.png';  
import IconeUser from './images/UserIMG.png';
import IconeEscala from './images/escalaIMG.png';
import IconeConsu from './images/ConsuIMG.png';
import IconeInformacao from 'https://github.com/martinsalan2003/projetoHospital/blob/main/src/pages/home-admin/images/InforIMG.png'


const HomeAdmin = () => {

  // Definindo  qual conteúdo será exibido
  const [conteudoAtivo, setConteudoAtivo] = useState('inicio');

  // exibir diferentes conteúdos
  const CriarUsuario = () => setConteudoAtivo('usuario');
  const exibirEscala = () => setConteudoAtivo('escala');
  const exibirConsutorio = () => setConteudoAtivo('consutorio');
  const InfoSistema = () => setConteudoAtivo('info');



 // Dados fictícios para o gráfico de barras (Pacientes Atendidos)
 const pacientesAtendidosData = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  datasets: [
    {
      label: 'Pacientes Atendidos',
      data: [150, 200, 180, 220, 250, 270, 300, 320, 350, 380, 400, 450],
      backgroundColor: '#4e73df',
      borderColor: '#4e73df',
      borderWidth: 1,
    }
  ],
};


  useEffect(() => {
    // Se você precisar de mais lógica para carregar os gráficos ou dados, você pode adicionar aqui.
  }, []);


  return (
    <div className="HomeAdmin">
      <div className="header">
        <img src={IconeHeader} alt="logo hospital" className="IconeHeader" />
        <h1>Hospital São Lucas Mendel</h1>
        <p className="usuario">Admin</p>
      </div>

      <div className="containerContent">
        <div className="sideBar">
          <div id="navSideBar">
            <div className="global" onClick={CriarUsuario}>
              <img src={IconeUser} alt="icone" className="icones" />
              <p>Usuarios do sistema</p>
            </div>
            <div className="global" onClick={exibirEscala}>
              <img src={IconeEscala} alt="icone" className="icones" />
              <p>Escala Medica</p>
            </div>
            <div className="global" onClick={exibirConsutorio}>
              <img src={IconeConsu} alt="icone" className="icones" />
              <p>Consutorios</p>
            </div>
            <div  className="global" onClick={InfoSistema}>
              <img id='infoicon' src={IconeInformacao} alt="icones" />
              <p>Info Sistema</p>
            </div>
          </div>
        </div>

        <div className="content">
          {conteudoAtivo === 'inicio' && (
            <div >
              <section className="graficos-section" style={{ backgroundColor: '#f4f6fc', padding: '30px', borderRadius: '8px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ fontSize: '28px', color: '#333', fontWeight: 'bold', textAlign: 'center' }}>Análise de Desempenho</h2>
      <p style={{ fontSize: '16px', color: '#666', textAlign: 'center' }}>Aqui esta o gráfico que ilustra o desempenho em termos de pacientes atendidos.</p>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
        {/* Gráfico de Barras: Pacientes Atendidos */}
        <div style={{ width: '48%', textAlign: 'center' }}>
          <h3 style={{ fontSize: '20px', color: '#333' }}>Pacientes Atendidos</h3>
          <Bar data={pacientesAtendidosData} options={{
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          }} />
        </div>
      </div>
    </section>
            </div>
          )}

          {conteudoAtivo === 'usuario' && (
            <div>
        <section className="usuarios-section">
  <div className="usuarios-container">
    {/* Cards de Balconistas */}
    <div className="usuario-card" id="balconista1">
      <h3>José da Silva</h3>
      <p>Papel: Balconista</p>
      <p>Responsável por atender ao público e organizar a fila.</p>
    </div>

    <div className="usuario-card" id="balconista2">
      <h3>Ana Pereira</h3>
      <p>Papel: Balconista</p>
      <p>Responsável por realizar o cadastro de pacientes e agendamentos.</p>
    </div>

    {/* Cards de Médicos */}
    <div className="usuario-card" id="medico1">
      <h3>Dr. João Silva</h3>
      <p>Papel: Médico</p>
      <p>Especialidade: Clínica Geral</p>
    </div>

    <div className="usuario-card" id="medico2">
      <h3>Dr. Maria Oliveira</h3>
      <p>Papel: Médico</p>
      <p>Especialidade: Pediatria</p>
    </div>

    <div className="usuario-card" id="medico3">
      <h3>Dr. Carlos Pereira</h3>
      <p>Papel: Médico</p>
      <p>Especialidade: Cardiologia</p>
    </div>

    <div className="usuario-card" id="medico4">
      <h3>Dr. Ana Souza</h3>
      <p>Papel: Médico</p>
      <p>Especialidade: Ginecologia</p>
    </div>

    {/* Cards de Pacientes */}
    <div className="usuario-card" id="paciente1">
      <h3>Carlos Alberto</h3>
      <p>Papel: Paciente</p>
      <p>Idade: 45 anos</p>
      <p>Diagnóstico: Hipertensão</p>
    </div>

    <div className="usuario-card" id="paciente2">
      <h3>Fernanda Costa</h3>
      <p>Papel: Paciente</p>
      <p>Idade: 30 anos</p>
      <p>Diagnóstico: Diabetes tipo 2</p>
    </div>

    <Link to='/projetoHospita/erro'>
    <div className="usuario-card novo-usuario-card" >
      <h3>Criar Novo Usuário</h3>
      <p>Clique aqui para criar um novo usuário.</p>
    </div></Link>
  </div>
</section>
            </div>
          )}

          {conteudoAtivo === 'escala' && (
            <div>
              <section className="escala-medica-section">
            <div className="escala-container">
              <div className="escala-card" id="escala1">
                <h3>Dr. João Silva</h3>
                <p>Especialidade: Clínica Geral</p>
                <table>
                  <thead>
                    <tr>
                      <th>Dia</th>
                      <th>Horário</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Segunda-feira</td>
                      <td>08:00 - 14:00</td>
                    </tr>
                    <tr>
                      <td>Quarta-feira</td>
                      <td>08:00 - 14:00</td>
                    </tr>
                    <tr>
                      <td>Sexta-feira</td>
                      <td>08:00 - 14:00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="escala-card" id="escala2">
                <h3>Dr. Maria Oliveira</h3>
                <p>Especialidade: Pediatria</p>
                <table>
                  <thead>
                    <tr>
                      <th>Dia</th>
                      <th>Horário</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Terça-feira</td>
                      <td>09:00 - 15:00</td>
                    </tr>
                    <tr>
                      <td>Quinta-feira</td>
                      <td>09:00 - 15:00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="escala-card" id="escala3">
                <h3>Dr. Carlos Pereira</h3>
                <p>Especialidade: Cardiologia</p>
                <table>
                  <thead>
                    <tr>
                      <th>Dia</th>
                      <th>Horário</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Segunda-feira</td>
                      <td>10:00 - 16:00</td>
                    </tr>
                    <tr>
                      <td>Quarta-feira</td>
                      <td>10:00 - 16:00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="escala-card" id="escala4">
                <h3>Dr. Ana Souza</h3>
                <p>Especialidade: Ginecologia</p>
                <table>
                  <thead>
                    <tr>
                      <th>Dia</th>
                      <th>Horário</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Terça-feira</td>
                      <td>08:00 - 14:00</td>
                    </tr>
                    <tr>
                      <td>Sexta-feira</td>
                      <td>08:00 - 14:00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
            </div>
          )}

          {conteudoAtivo === 'consutorio' && (
            <div>
             <section className="consultorios-section">
  <div className="cards-container">
    {/* Cards de Consultórios Existentes */}
    <div className="cardis" id="consultorio1">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEWx6fSRYH3PeHvUutF3zFa09XZb9cuk5t7guORzJbVAKeFyBuObqJsRoyMS5TlMVGXQc&usqp=CAU" alt="Consultório 1" className="card-img" />
      <h3>Consultório 1</h3>
      <p>Especialidade: Clínica Geral</p>
      <p>Status: Inativo</p>
    </div>
    <div className="cardis" id="consultorio2">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEWx6fSRYH3PeHvUutF3zFa09XZb9cuk5t7guORzJbVAKeFyBuObqJsRoyMS5TlMVGXQc&usqp=CAU" alt="Consultório 2" className="card-img" />
      <h3>Consultório 2</h3>
      <p>Especialidade: Pediatria</p>
      <p>Status: Ativo</p>
    </div>
    <div className="cardis" id="consultorio3">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEWx6fSRYH3PeHvUutF3zFa09XZb9cuk5t7guORzJbVAKeFyBuObqJsRoyMS5TlMVGXQc&usqp=CAU" alt="Consultório 3" className="card-img" />
      <h3>Consultório 3</h3>
      <p>Especialidade: Cardiologia</p>
      <p>Status: Em Uso</p>
    </div>
    <div className="cardis" id="consultorio4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEWx6fSRYH3PeHvUutF3zFa09XZb9cuk5t7guORzJbVAKeFyBuObqJsRoyMS5TlMVGXQc&usqp=CAU" alt="Consultório 4" className="card-img" />
      <h3>Consultório 4</h3>
      <p>Especialidade: Ginecologia</p>
      <p>Status: Em Uso</p>
    </div>

   <Link to='/projetoHospita/erro'>
    <div className="cardis criar-consultorio-card">
      <img src="https://via.placeholder.com/150" alt="Criar Consultório" className="card-img" />
      <h3>Criar Novo Consultório</h3>
      <p>Adicione um novo consultório à lista.</p>
    </div></Link>
  </div>
</section>
            </div>
          )}

          {conteudoAtivo === 'info' && (
            <div>
              <section className="apresentacao-section" id="apresentacao">
            <h2 id="titulo-apresentacao">Apresentação do Projeto</h2>
            <div className="apresentacao-conteudo" id="conteudo-apresentacao">
              <p id="introducao-projeto">
                O projeto **Hospital São Lucas Mendel** é uma solução completa para o gerenciamento de um hospital,
                desenvolvido para automatizar diversos processos hospitalares, desde o atendimento ao paciente até a
                gestão de médicos e recursos. Este projeto foi proposto como parte da disciplina de Engenharia de Software,
                orientado pelo professor Paulo Vilela de Melo.
              </p>

              <h3 id="responsaveis-titulo">Responsáveis pelo Projeto</h3>
              <div className="responsaveis" id="responsaveis">
                <div className="responsavel-card" id="responsavel-alan">
                  <h4>Alan</h4>
                  <p>Desenvolvedor Frontend - Responsável pelo design da interface e implementação da parte visual do sistema.</p>
                </div>
                <div className="responsavel-card" id="responsavel-lucas">
                  <h4>Lucas</h4>
                  <p>Desenvolvedor Frontend - Responsável pelo design da interface e implementação da parte visual do sistema.</p>
                </div>
                <div className="responsavel-card" id="responsavel-angelo">
                  <h4>Angelo</h4>
                  <p>Desenvolvedor Frontend - Responsável pelo design da interface e implementação da parte visual do sistema.</p>
                </div>
              </div>
            </div>
          </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;