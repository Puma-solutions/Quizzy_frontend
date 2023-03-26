import Link from 'next/link'
import '../styles/home.css'

const Home = () => {
  const a = ''
  return (
    <main className='home w-screen h-screen flex justify-center items-start flex-col p-32 gap-4'>
      <h1 className=' font-bold text-9xl overflow-hidden'>Quizzy</h1>
      <h3 className='font-normal text-3xl w-2/4'>Estudia de la forma mas rapida y eficiente</h3>
      <p className=' font-light text-slate-500'>Comodo | Eficiente | Adaptable</p>
      <Link href={a? `/home` : '/login'}> <button className=' bg-yellow-500 text-black p-3 rounded-xl'>Empeza ya!</button> </Link>
    </main>
  )
}

export default Home