import { useRefeitorio } from "../context/RefeitorioContext";
import RefeicaoCard from "../components/RefeicaoCard";

export default function Favoritos() {
  const { favoritos } = useRefeitorio();

  return (
    <div className="home-container">
      <h1>Meus Favoritos</h1>

      {favoritos.length === 0 ? (
        <p className="mensagem-vazia">
          Você ainda não salvou nenhuma refeição.
        </p>
      ) : (
        <div className="lista-favoritos">
          {favoritos.map((item) => (
            <RefeicaoCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
