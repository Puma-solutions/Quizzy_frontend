import login from '../../assets/login.jpg'
import Form from '../../components/Form'
import Link from 'next/link'

const loginPage = () => {
  const formElements = [{label: 'Email', type: 'email', name: 'email', placeholder: 'Ingresa tu correo electronico'}, {label: 'Contraseña', type: 'password', name: 'password', placeholder: 'Ingresa tu contraseña'}]

  return (
    <section className='section w-screen h-screen flex justify-center items-center flex-col'>
      <Link href={'http://localhost:3000'}> <p className='text-2xl absolute top-10 left-2/4 -translate-x-1/2 hover:underline'>Go back to <span className=' font-semibold'>Quizzy</span></p> </Link>
        <div className='flex justify-center items-center bg-slate-50 text-black overflow-hidden rounded-xl'>
          <Form formElements={formElements} textButton='Iniciar Sesion' refLink={{text: 'No tienes una cuenta? Registrate', ref: 'http://localhost:3000/register'}}/>
            <img src={login.src} alt="landscape" className=' w-80'/>
        </div>
    </section>
  )
}

export default loginPage