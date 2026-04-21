# Sistema de Gerenciamento do Refeitório - IFMS

**Aluno:** Andrey Muniz Benites  
**Disciplina:** Construção de Páginas Web IV  
**Docente:** Milena Alegre  

## Sobre o Projeto
Este sistema foi desenvolvido como projeto final para a disciplina de CPW. O objetivo é gerenciar e exibir o cardápio semanal do refeitório do campus, permitindo que os alunos visualizem as refeições por dia da semana e organizem seus pratos favoritos através de uma interface moderna.

## Tecnologias Utilizadas
* React (Vite): Biblioteca principal para criação da Single Page Application (SPA).
* Sass (SCSS): Utilizado para estilos dinâmicos, aplicando variáveis, aninhamento e o conceito de
* React Router Dom: Gerenciamento de rotas para navegação entre a Home e a página de Favoritos.
* Context API: Centralização do estado global para compartilhamento de dados entre componentes (Aula 07).
* Hooks (useState, useEffect, useContext): `useState`: Controle de modais e listas de dados.
* `useEffect`: Consumo de dados do `db.json` e sincronização com LocalStorage.
* LocalStorage & Custom Hooks: Implementação de persistência de dados para que os favoritos permaneçam salvos após o recarregamento da página (F5).

## Funcionalidades

* Cardápio Semanal: Listagem de dias da semana com filtragem de dados.
* Modal de Refeições: Exibição detalhada de pratos (Manhã, Almoço e Noite) ao clicar em um dia.
* Favoritos Persistentes: Sistema para favoritar refeições individuais ou o dia completo, salvando as informações no navegador.

## Instruções de Execução

1.  **Baixe ou Clone o repositório:**
    ```bash
    git clone "https://github.com/andreymunizb/provacpw"
    ```
2.  **obs**
    recomendo que quando entre no projeto rode duas vezes o comando cd provacpw.


3.  **Instale as dependências:**
    Abra o terminal na pasta do projeto e execute:
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  **Acesse o projeto:**
    Abra o navegador no endereço indicado no terminal (geralmente `http://localhost:5173`).
