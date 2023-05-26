import React from 'react'

const login = () => {
  return (
    <div className='bg-blue-900 w-screen h-screen overflow-hidden flex justify-center items-center'>
        <div className='bg-white px-20 flex flex-col gap-5 py-10 rounded-xl'>
            <h1 className='text-lg'>Login | Portal do aluno</h1>
            <div className='flex flex-col'>
                <label htmlFor="" className='text-blue-900'>CPF</label>
                <input type="text" className='border-2 border-black rounded-lg px-2 py-1 outline-none' placeholder='000.000.000-00' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="" className='text-blue-900'>Senha</label>
                <input type="text" className='border-2 border-black rounded-lg px-2 py-1 outline-none' placeholder='*******' />
            </div>
            <div className='flex flex-col text-center gap-5 mt-10'>
                <button className='bg-yellow-500 py-2 rounded-lg hover:text-white'>Entrar</button>
                <span>Esqueceu a senha? Redefinir senha</span>
            </div>
        </div>
    </div>
  )
}

export default login