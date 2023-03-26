import login from '../../assets/login.jpg'
import Form from '../../components/Form'
import Link from 'next/link'

const registerPage = () => {
  const formElements = [{label: 'Nombre y apellido', type: 'text', name: 'name', placeholder: 'Ingresa tu nombre y apellido'}, {label: 'Email', type: 'email', name: 'email', placeholder: 'Ingresa tu email'},{label: 'Imagen de usuario', type: 'text', name: 'thumbnail', placeholder: 'Pega el link de tu imagen de perfil'}, {label: 'Contraseña', type: 'password', name: 'password', placeholder: 'Ingresa tu contraseña'}]

  return (
    <section className='section w-screen h-screen flex justify-center items-center flex-col'>
      <Link href={'http://localhost:3000'}> <p className='text-2xl absolute top-10 left-2/4 -translate-x-1/2 hover:underline'>Go back to <span className=' font-semibold'>Quizzy</span></p> </Link>
        <div className='flex justify-center items-center bg-slate-50 text-black overflow-hidden rounded-xl'>
          <Form formElements={formElements} textButton='Registrarme' refLink={{text: '¿Ya tienes una cuenta? Inicia sesion', ref: 'http://localhost:3000/login'}}/>
            <img src={login.src} alt="landscape" className=' w-96'/>
        </div>
    </section>
  )
}

export default registerPage