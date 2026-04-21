import { useState, useEffect } from "react";
import RefeicaoCard from "../components/RefeicaoCard";

export default function Home() {
  const [refeicoes, setRefeicoes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  const [diaSelecionado, setDiaSelecionado] = useState(null);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao carregar dados");
        return res.json();
      })
      .then((data) => {
        setRefeicoes(data.refeicoes);
        setCarregando(false);
      })
      .catch((err) => {
        setErro(err.message);
        setCarregando(false);
      });
  }, []);

  if (carregando) return <h2>Carregando cardápio...</h2>;
  if (erro) return <h2>Ops! algo deu errado: {erro}</h2>;
  if (refeicoes.length === 0)
    return <h2>Não há refeições para esta semana.</h2>;

  const diasDaSemana = [...new Set(refeicoes.map((item) => item.dia))];

  const refeicoesDoDia = refeicoes.filter(
    (item) => item.dia === diaSelecionado,
  );

  return (
    <main>
      <h1>Cardápio da Semana - IFMS</h1>

      <section className="dias-grid">
        {diasDaSemana.map((dia) => (
          <button
            key={dia}
            className="btn-dia"
            onClick={() => setDiaSelecionado(dia)}
          >
            {dia}
          </button>
        ))}
      </section>

      {diaSelecionado && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Refeições de {diaSelecionado}</h2>
              <button
                className="btn-fechar"
                onClick={() => setDiaSelecionado(null)}
              >
                X
              </button>
            </div>

            <div className="modal-body">
              {refeicoesDoDia.map((item) => (
                <RefeicaoCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
