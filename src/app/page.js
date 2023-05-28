import Image from 'next/image'
import {TbTargetArrow} from 'react-icons/tb'
import {FaRegEye} from 'react-icons/fa'
import {AiOutlineHeart} from 'react-icons/ai'

export default function Home() {
  return (
    <main className='bg-gray-600 overflow-hidden'>
      <header className='w-screen bg-[#CACACA] flex flex-row items-center justify-around px-48 py-5'>
        <a className='hover:text-white' href="#sobre">Sobre</a>
        <a className='hover:text-white' href="#modulos">Serviço</a>
        <img className='h-20' src='/p.png'></img>
        <a className='hover:text-white' href="#contato">Contato</a>
        <a className='hover:text-white' href="#founders">Fundadores</a>
      </header>
      <section className='p-10 flex flex-col gap-10 items-center'>
        <div className='bg-slate-900 p-10 rounded-lg gap-2 flex flex-row mt-10 w-10/12'>
          <div className='flex flex-col gap-10'>
            <h1 className='text-white text-5xl'>Portal do aluno personalizado</h1>
            <span className='text-white text-lg'>Um portal totalmene personalizado de alunos, para sua instituição de ensino. Oferecendo diversas soluções práticas para você</span>
          </div>
          <img src="/portal.png" alt="" className='w-6/12 aspect-[16/9] rounded-md' />
        </div>
        <div className='bg-none p-16 w-10/12' id='modulos'>
          <h1 className='text-3xl text-white text-center'>Módulos</h1>
          <div className='flex flex-row flex-wrap gap-10 justify-around mt-24'>
            <div className='flex flex-col bg-slate-800 w-[350px] items-center rounded-lg'>
              <img className='rounded-t-lg' src='/chamada.jpg'></img>
              <div className='p-10 flex flex-col items-center gap-10'>
                <h2 className='text-white'>Sistema de presença</h2>
                <span className='text-white'>Um sistema completo para controle de presença, com controle de faltas de todos os alunos</span>
              </div>
            </div>
            <div className='flex flex-col bg-slate-800 w-[350px] items-center rounded-lg'>
              <img className='rounded-t-lg' src='/notas.jpg'></img>
              <div className='p-10 flex flex-col items-center gap-10'>
                <h2 className='text-white'>Laçamento de Notas</h2>
                <span className='text-white'>Lançamento de notas, com possibilidade de revisões das notas e calculo automático de acordo com os pesos informados</span>
              </div>
            </div>
            <div className='flex flex-col bg-slate-800 w-[350px] items-center rounded-lg'>
              <img className='rounded-t-lg' src='/trabalho.webp'></img>
              <div className='p-10 flex flex-col items-center gap-10'>
                <h2 className='text-white'>Criação de trabalhos</h2>
                <span className='text-white'>Um serviço completo de criação e correção de trabalhos, com a correção automática a nota é lançada automaticamente no sistema</span>
              </div>
            </div>
          </div>
        </div>
        <div className='text-white p-16 bg-slate-800 rounded-lg mt-48 w-10/12' id='sobre'>
          <h1 className='text-5xl'>Sobre nós</h1>
          <span className='text-lg'>
            Fundada em 2023 por Filipe, Marcos e Eduardo, 3 alunos de uma faculdade que encontraram uma solução a um problema no mercado, oferecendo uma solução customizada aos clientes
          </span>
          <div className='flex flex-row flex-wrap py-10 px-10 justify-around'>
            <div className='flex flex-col text-center items-center w-[250px] border-2 border-white rounded-md p-10'>
              <TbTargetArrow size={64} />
              <h2 className='text-2xl'>Missão</h2>
              <span className='mt-10'>Inovar a gestão acadêmica através do sistema de portal, facilitando a comunicação e promovendo uma experiência educacional de excelência.</span>
            </div>
            <div className='flex flex-col text-center items-center w-[250px] border-2 border-white rounded-md p-10'>
              <FaRegEye size={64} />
              <h2 className='text-2xl'>Visão</h2>
              <span className='mt-10'>Liderar como provedor de soluções digitais educacionais, impulsionando a transformação do ambiente acadêmico e promovendo o sucesso dos estudantes.</span>
            </div>
            <div className='flex flex-col text-center items-center w-[250px] border-2 border-white rounded-md p-10'>
              <AiOutlineHeart size={64} />
              <h2 className='text-2xl'>Valores</h2>
              <span className='mt-10'>Temos tranparencia de nosso projeto, valorizamos a criatividade de nossos colaboradores e um ambiente saudavél e respeitoso.</span>
            </div>
          </div>
        </div>
        <div className='bg-[#CACACA] p-10 rounded-lg mt-48 mx-64 w-10/12' id='founders'>
          <h1 className='text-slate-700 text-4xl py-2 text-center'>Fundadores</h1>
          <div className='flex flex-row flex-wrap justify-around py-16'>
            <div className='w-[200px] h-[300px] bg-slate-700 text-white flex flex-col items-center py-10 rounded-xl'>
              <img className='rounded-full w-28' src="/crisp.jpg" alt="" />
              <h1 className='mt-10'>Filipe Crisp</h1>
              <span>CEO</span>
            </div>
            <div className='bg-black border-black w-[1px]'></div>
            <div className='w-[200px] h-[300px] bg-slate-700 text-white flex flex-col items-center py-10 rounded-xl'>
              <img className='rounded-full w-28' src="https://media.licdn.com/dms/image/D4D03AQEp61YQGpArBA/profile-displayphoto-shrink_800_800/0/1681395566186?e=1690416000&v=beta&t=TE50gjktdoJaqdTEWBkSlIJV0rlfamxyle6LFj3FFcU" alt="" />
              <h1 className='mt-10'>Marcos Cardoso</h1>
              <span>CTO</span>
            </div>
            <div className='bg-black border-black w-[1px]'></div>
            <div className='w-[200px] h-[300px] bg-slate-700 text-white flex flex-col items-center py-10 rounded-xl'>
              <img className='rounded-full w-28' src="/duzao.jpg" alt="" />
              <h1 className='mt-10'>Eduardo Gomes</h1>
              <span>CGO</span>
            </div>
          </div>
        </div>
        <div className='p-10 bg-slate-900 rounded-2xl mt-48 w-10/12' id='contato'>
          <h1 className='text-yellow-500 py-10 text-3xl px-12'>Entre em contato</h1>
          <div className='flex flex-col text-white px-20 py-2'>
            <label>Nome</label>
            <input type="text" placeholder='Nome' className='px-4 py-2 text-black rounded-lg'/>
          </div>
          <div className='flex flex-col text-white px-20 py-2'>
            <label>E-Mail</label>
            <input type="email" placeholder='email@email.com' className='px-4 py-2 text-black rounded-lg'/>
          </div>
          <div className='flex flex-col text-white px-20 py-2'>
            <label>Telefone</label>
            <input type="text" placeholder='(00) 0 0000-0000' className='px-4 py-2 text-black rounded-lg'/>
          </div>
          <div className='flex flex-col text-white px-20 p-2'>
            <label>Mensagem</label>
            <textarea cols="30" rows="10" placeholder='Insira sua mensagem aqui..' className='px-4 py-2 text-black rounded-lg'></textarea>
          </div>
          <div className='flex justify-end px-20'>
            <button className='bg-yellow-500 px-5 py-2 rounded-lg mt-4'>Enviar Mensagem</button>
          </div>
        </div>
      </section>
      <footer className='bg-[#CACACA] py-5 px-12 mt-48'>
        <span className='text-sm'>Todos os direitos reservados a 3DEV</span>
      </footer>
    </main>
  )
}
