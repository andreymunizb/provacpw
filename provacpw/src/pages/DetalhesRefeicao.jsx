import { useParams, Link } from "react-router-dom";

export default function DetalhesRefeicao() {
  const { id } = useParams();

  return (
    <div>
      <h1>favoritos{id}</h1>
      <Link to="/">
        <button></button>
      </Link>
    </div>
  );
}
