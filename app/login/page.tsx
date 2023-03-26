import login from '../../assets/login.jpg'

const loginPage = () => {
  return (
    <section className='section w-screen h-screen flex justify-center items-center'>
        <div className='flex justify-center items-center bg-slate-50 text-black overflow-hidden rounded-xl'>
            <img src={login.src} alt="landscape" className=' w-80'/>
        </div>
    </section>
  )
}

export default loginPage