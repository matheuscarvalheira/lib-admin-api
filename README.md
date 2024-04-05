#   Sistema de gerenciamento de biblioteca

## Objetivo

Desenvolver um sistema de gerenciamento de biblioteca utilizando a última versão do TypeScript. O foco será criar um CRUD (Create, Read, Update, Delete), que se conecta a um banco de dados, podendo ser NoSQL ou SQL.

### Requisitos Funcionais:

- Gerenciamento de livros: o objetivo do seu sistema será disponibilizar uma API que tenha as funcionalidades de um CRUD para que uma aplicação Front-end possa gerenciar estes dados.

- Estrutura proposta para entidade Livro: cada livro pode possuir um título, autor(a), ISBN, ano de publicação e, caso queira se aventurar, pode adicionar uma Entidade Editora, assim um livro pode fazer parte de uma Editora e uma Editora pode ter uma lista de livros

### Requisitos Técnicos

Desenvolvimento do projeto utilizando a versão mais recente do TypeScript para garantir que o seu código esteja atualizado. Integração do sistema a um banco de dados que pode ser um NoSQL ou SQL. Neste cenário, você pode utilizar o Docker ou um banco de dados grátis como o PostgreSQL na plataforma Supabase.


## Tecnologias utilizadas 

- Node.js
- Express.js
- MongoDB
- Typescript

## 🎥 Como rodar o projeto:

```bash
# Clone no repositório com o comando:
$ git clone https://github.com/matheuscarvalheira/lib-admin-api.git

#Entre no diretório:
$ cd lib-server
```

```bash
# Instalar dependências:
$ npm install

# Rodar a aplicação:
$ npm start
```