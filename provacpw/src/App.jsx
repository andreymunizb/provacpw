import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import DetalhesRefeicao from './pages/DetalhesRefeicao';
import Favoritos from './pages/Favoritos';

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">Cardápio da Semana</Link>
          <Link to="/favoritos">Meus Favoritos</Link>
        </nav>
      </header>

      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/refeicao/:id" element={<DetalhesRefeicao />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;