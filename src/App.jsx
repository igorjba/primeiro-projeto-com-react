import profileImage from './assets/profile.jpg'
import './App.css'

function App() {

  return (
    <div className="container">
      <header>
        <h2>Igor.dev</h2>
        <ul className='menu'>
          <li>Artigos</li>
          <li>Contato</li>
        </ul>
      </header>

      <section>
        <div className='left'>
          <img src={profileImage} alt="profile image" />
          <strong>Igor Bahia</strong>
          <span>
            <br />
            Eu sou Igor Bahia, desenvolvedor full stack. Estou aprendendo reactjs.

            Sou apaixonado por tecnologia.
          </span>
        </div>
        <div className='right'>
          <strong>23 de Março de 2023</strong>
          <h2>Introdução ao React</h2>
          <span>Nesse post nós iremos falar sobre como o React, é importante para o desenvolvedor frontend moderno.</span>
          <a href="#">Ler mais</a>
        </div>
      </section>

      <footer>
        <ul className='menu'>
          <li>Artigos</li>
          <li>Contato</li>
        </ul>
      </footer>
    </div>
  )
}

export default App
