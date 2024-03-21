import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './components/ListaVagas'

import './global.css'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </>
  )
}

export default App
