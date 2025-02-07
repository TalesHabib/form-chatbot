# Chatbot Form

Um aplicativo web moderno construído com React, TypeScript e Docker.

## Tecnologias

- React
- TypeScript
- Styled Components
- React Hook Form
- Vite
- Docker
- Docker Compose

## Pré-requisitos

- Node.js 20+
- Docker
- Docker Compose

## Iniciando o Desenvolvimento Local

1. Instale as dependências:

   ```bash
   npm install ou yarn
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev ou yarn dev
   ```

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis de ambiente:

- `VITE_GEOAPIFY_KEY`: Chave de API para o Geoapify.

Chave criada a partir do site: https://www.geoapify.com/

## Executando com Docker Compose

1. Construa e inicie os serviços definidos no [docker-compose.yml](http://_vscodecontentref_/1):

   ```bash
   docker-compose up --build
   ```

2. Acesse a aplicação em [http://localhost:8080](http://localhost:8080).

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila o projeto para produção.
- `npm run lint`: Executa o linter para verificar problemas no código.
- `npm run preview`: Pré-visualiza a aplicação compilada.
