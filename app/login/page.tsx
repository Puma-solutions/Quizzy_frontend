import login from '../../assets/login.jpg'

const loginPage = () => {
  return (
    <section className='section w-screen h-screen flex justify-center items-center'>
        <div className='flex justify-center items-center bg-slate-50 text-black overflow-hidden rounded-xl'>
            <form action="" className='flex flex-col items-start p-24 text-black w-128 gap-2'>
                <label htmlFor="" className='text-black'>Nombre de Usuario</label>
                <input type="text" required className=' p-2 bg-slate-200 rounded-md w-full border-0 outline-none'/>
                <label htmlFor="" className='text-black'>Contraseña</label>
                <input type="password" required className=' p-2 bg-slate-200 rounded-md w-full border-0 outline-none'/>
                <button className='bg-yellow-500 text-black p-3 rounded-xl mt-3'>Iniciar sesion</button>
            </form>
            <img src={login.src} alt="landscape" className=' w-80'/>
        </div>
    </section>
  )
}

export default loginPage