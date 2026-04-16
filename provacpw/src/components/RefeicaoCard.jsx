import { Link } from 'react-router-dom';

export default function RefeicaoCard({ item }) {
  return (
    <div className="refeicao-card">
      <h3>{item.periodo}</h3>
      
      <p><strong>Principal:</strong> {item.prato}</p>
      
      <Link to={`/refeicao/${item.id}`}>
        favoritar
      </Link>
    </div>
  );
}