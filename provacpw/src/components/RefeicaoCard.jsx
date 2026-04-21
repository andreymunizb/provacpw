import { Link } from "react-router-dom";
import { useRefeitorio } from "../context/RefeitorioContext"; 
export default function RefeicaoCard({ item }) {
  const { alternarFavorito, verificarSeEFavorito } = useRefeitorio();
  const eFavorito = verificarSeEFavorito(item.id);

  return (
    <div className="card-refeicao">
      <div className="card-info">
        <h3>{item.periodo}</h3>
        <p>
          <strong>Principal:</strong> {item.prato}
        </p>
      </div>

      <div className="card-acoes">
        <button
          className={`btn-fav ${eFavorito ? "active" : ""}`}
          onClick={() => alternarFavorito(item)}
        >
          {eFavorito ? "Remover Favorito" : "Favoritar"}
        </button>
      </div>
    </div>
  );
}
