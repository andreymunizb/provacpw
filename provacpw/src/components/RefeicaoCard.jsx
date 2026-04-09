import { Link } from "react-router-dom";

export default function RefeicaoCard({ item }) {
  return (
    <div>
      <h3>{item.dia}</h3>
      <p>
        <strong>Principal:</strong> {item.prato}
      </p>

      <Link to={`/refeicao/${item.id}`}>
        <button>Ver cardápio completo</button>
      </Link>
    </div>
  );
}
