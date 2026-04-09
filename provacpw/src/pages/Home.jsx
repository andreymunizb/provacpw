import { useState, useEffect } from "react";
import RefeicaoCard from "../components/RefeicaoCard";

export default function Home() {
  const [refeicoes, setRefeicoes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/refeicoes")
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao carregar dados");
        return res.json();
      })
      .then((data) => {
        setRefeicoes(data);
        setCarregando(false);
      })
      .catch((err) => {
        setErro(err.message);
        setCarregando(false);
      });
  }, []);

  if (carregando) return <h2>Carregando cardápio</h2>;
  if (erro) return <h2>Ops! algo deu errado: {erro}</h2>;
  if (refeicoes.length === 0)
    return <h2>Não há refeições para esta semana.</h2>;

  return (
    <main>
      <h1>Cardápio da Semana - IFMS</h1>
      <section>
        {refeicoes.map((item) => (
          <RefeicaoCard key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
}
