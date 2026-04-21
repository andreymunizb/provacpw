import { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const RefeitorioContext = createContext();

export function RefeitorioProvider({ children }) {
  const [favoritos, setFavoritos] = useLocalStorage('ifms-favoritos', []);

  const alternarFavorito = (refeicao) => {
    const isFavorito = favoritos.some((fav) => fav.id === refeicao.id);
    if (isFavorito) {
      setFavoritos(favoritos.filter((fav) => fav.id !== refeicao.id));
    } else {
      setFavoritos([...favoritos, refeicao]);
    }
  };

  const verificarSeEFavorito = (id) => favoritos.some((fav) => fav.id === id);

  return (
    <RefeitorioContext.Provider value={{ favoritos, alternarFavorito, verificarSeEFavorito }}>
      {children}
    </RefeitorioContext.Provider>
  );
}

export const useRefeitorio = () => useContext(RefeitorioContext);