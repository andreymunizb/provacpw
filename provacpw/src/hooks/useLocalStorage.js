import { useState, useEffect } from "react";

export function useLocalStorage(chave, valorInicial) {
  const [valor, setValor] = useState(() => {
    try {
      const itemSalvo = localStorage.getItem(chave);
      return itemSalvo ? JSON.parse(itemSalvo) : valorInicial;
    } catch (erro) {
      console.error(erro);
      return valorInicial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(chave, JSON.stringify(valor));
    } catch (erro) {
      console.error(erro);
    }
  }, [chave, valor]);

  return [valor, setValor];
}
