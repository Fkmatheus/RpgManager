# RPG Manager D&D

Sistema web Full Stack para gerenciamento e automação de campanhas de **Dungeons & Dragons (D&D 5ª Edição)**.

O projeto foi desenvolvido com o objetivo de auxiliar Mestres e jogadores na geração de tesouros, consulta de itens mágicos, gemas, objetos de arte, tabelas aleatórias e outros conteúdos presentes no *Dungeon Master's Guide (DMG)*.

## 📖 Sobre o Projeto

O RPG Manager D&D é uma plataforma que automatiza diversas mecânicas utilizadas durante sessões de RPG de mesa, reduzindo o tempo gasto com consultas manuais e geração de recompensas.

A aplicação reproduz tabelas oficiais de D&D utilizando sistemas de rolagem de dados e probabilidades equivalentes às regras do jogo.

## 🚀 Funcionalidades

### 🎲 Gerador de Tesouros

* Geração automática de tesouros de covil.
* Separação por faixas de nível:

  * Níveis 1-4
  * Níveis 5-10
  * Níveis 11-16
  * Níveis 17-20
* Rolagem automática de d100.
* Geração de:

  * Moedas
  * Gemas
  * Objetos de arte
  * Itens mágicos

### 💎 Catálogo de Gemas

* Consulta completa de gemas.
* Imagens individuais.
* Descrições detalhadas.
* Sistema de tabelas e rolagem aleatória.

### ✨ Catálogo de Itens Mágicos

* Consulta de itens mágicos organizados por raridade.
* Informações detalhadas.
* Busca rápida.
* Integração com tabelas oficiais do DMG.

### 🏺 Objetos de Arte

* Listagem de objetos de arte.
* Valores correspondentes.
* Integração com geração automática de tesouros.

### 📚 Consulta de Conteúdo

* Navegação intuitiva.
* Sistema de tabelas dinâmicas.
* Modais de visualização detalhada.
* Interface otimizada para consulta rápida durante sessões.

## 🏗️ Arquitetura

### Backend

Estrutura baseada em arquitetura em camadas:

* Controllers
* Models
* Routes

Responsável por:

* Regras de negócio
* Geração procedural de tesouros
* Rolagem de tabelas
* Comunicação com banco de dados
* Exposição de APIs REST

### Frontend

Construído utilizando componentes reutilizáveis e organização modular:

* Components
* Pages
* Services
* Helpers
* Types

Responsável por:

* Interface do usuário
* Consumo das APIs
* Exibição de tabelas
* Sistema de busca
* Navegação entre conteúdos

## 🛠️ Tecnologias Utilizadas

### Frontend

* React
* TypeScript
* Chakra UI
* React Router DOM
* Axios
* React Icons

### Backend

* Node.js
* Express
* Sequelize
* MySQL

### Ferramentas

* Git
* GitHub
* VS Code

## 🔗 Comunicação Frontend ↔ Backend

A comunicação é realizada através de APIs REST utilizando Axios.

Exemplo de fluxo:

1. Usuário solicita geração de tesouro.
2. Frontend realiza requisição para a API.
3. Backend executa as regras de geração.
4. Banco de dados é consultado.
5. Resultado é retornado ao frontend.
6. Interface renderiza os dados dinamicamente.

## 🎯 Objetivos do Projeto

* Automatizar processos do Dungeon Master.
* Facilitar consultas durante sessões.
* Centralizar conteúdos do jogo.
* Demonstrar habilidades em desenvolvimento Full Stack.
* Aplicar conceitos de arquitetura de software e APIs REST.

## 📸 Funcionalidades em Desenvolvimento

* Sistema de listagem de magias.
* Sistema de listagem de itens personalizado.

## 👨‍💻 Autor

Matheus Santos

* GitHub: https://github.com/Fkmatheus
* LinkedIn: https://www.linkedin.com/in/matheus-santos-aa31a823a/

Projeto desenvolvido para estudo, portfólio e uso em campanhas de Dungeons & Dragons.
