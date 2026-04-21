import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import DetalhesRefeicao from "./pages/DetalhesRefeicao";
import Favoritos from "./pages/Favoritos";
import { RefeitorioProvider } from "./context/RefeitorioContext";
import "./style.scss";

export default function App() {
  return (
    <RefeitorioProvider>
      <BrowserRouter>
        <header>
          <nav className="main-nav">
            <Link to="/">Cardápio da Semana</Link>
            <Link to="/favoritos">Meus Favoritos</Link>
          </nav>
        </header>

        <main className="conteudo-principal">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/refeicao/:id" element={<DetalhesRefeicao />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </main>
      </BrowserRouter>
    </RefeitorioProvider>
  );
}
