import { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const RefeitorioContext = createContext();

export function RefeitorioProvider({ children }) {
  const [favoritos, setFavoritos] = useLocalStorage('meus-favoritos', []);

  const favoritar = (refeicao) => {
    const jaExiste = favoritos.find((item) => item.id === refeicao.id);
    
    if (jaExiste) {
      setFavoritos(favoritos.filter((item) => item.id !== refeicao.id));
    } else {
      setFavoritos([...favoritos, refeicao]);
    }
  };

  const isFavorito = (id) => {
    return favoritos.some((item) => item.id === id);
  };

  return (
    <RefeitorioContext.Provider value={{ favoritos, favoritar, isFavorito }}>
      {children}
    </RefeitorioContext.Provider>
  );
}

export function useRefeitorio() {
  return useContext(RefeitorioContext);
}