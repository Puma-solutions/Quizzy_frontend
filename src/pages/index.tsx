import { Button } from 'antd'
import React from 'react'

const Home = () => {
  return (
    <section className='homePage'>
        <h1>Quizzy</h1>
        <h3>La mejor forma de estudiar</h3>
        <article>
            <ul>
                <li>Accesible</li>
                <li>Comodo</li>
                <li>Facil</li>
            </ul>
            <Button>Empezar ya</Button>
        </article>
    </section>
  )
}

export default Home