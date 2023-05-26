import Image from 'next/image'
import Link from 'next/link'

const fam = () => {
  return (
    <div>
      <header className='bg-blue-900 flex flex-row items-center justify-center'>
        <img src='/logo_fam.png' className='w-[250px]'></img>
        <div className='absolute right-10'>
          <Link href="/fam/login" className='text-yellow-400' >Login</Link>
        </div>
      </header>
      <section>
        <div>
          <img src='/banner.webp' />
          <h1>Matricule-se</h1>
        </div>
      </section>
    </div>
  )
}

export default fam