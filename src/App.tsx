import { BrowserRouter } from 'react-router-dom'

import { Container, GlobalCss } from './styles'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Rotas } from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Container>
        <Header />
        <Rotas />
        <Footer />
      </Container>
    </BrowserRouter>
  )
}

export default App
