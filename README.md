<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-rotas">Rotas</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autor">Autor</a>
</p>

## 💻 Sobre o projeto

📃 ToDo List - É uma API para organizar os seus afazeres do dia a dia.

---

## ⚙️ Funcionalidades

- [x] Cadastrar um novo todo:
  - [x] título do todo
  - [x] descrição do todo

- [x] Marcar ou desmarcar um todo como finalizado
- [x] Excluir um todo

---

## 🌐 Rotas
1. **todos**
 - 1. **get /todos** → Lista os todos.
 - 2. **post /todos** → Criar um novo todo.
 - 3. **patch /todos/:id** → Marcar ou desmarcar um todo como finalizado. 
 - 4. **delete /todos** → Deleta um todo.


## 🚀 Como executar o projeto
### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)
```bash

# Clone este repositório
$ git clone https://github.com/cmarciao/todo-backend

# Acesse a pasta do projeto no seu terminal/cmd
$ cd todo-backend

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# A aplicação será aberta na porta:3333 - acesse http://localhost:3333

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### [](https://github.com/tgmarinho/Ecoleta#server-nodejs--typescript)**Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[ts-node-dev](https://github.com/wclr/ts-node-dev)**
-   **[dotENV](https://github.com/motdotla/dotenv)**
-   **[Mongoose](https://mongoosejs.com/)**
-   **[ExpressJS Async Errors](https://github.com/davidbanham/express-async-errors)**

> Veja o arquivo  [package.json](https://github.com/tgmarinho/README-ecoleta/blob/master/server/package.json)

#### [](https://github.com/tgmarinho/Ecoleta#utilit%C3%A1rios)**Utilitários**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**
-   Teste de API:  **[Insomnia](https://insomnia.rest/)**

---

## 🦸 Autor

<img src="https://avatars.githubusercontent.com/u/79059115?v=4" width="100px;" alt=""/>
<br />
<sub><b>Cássio Marcião</b></sub>
<br />

[![Linkedin Badge](https://img.shields.io/badge/-Cássio-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/cássio-marcião-743049209/)](https://www.linkedin.com/in/cássio-marcião-743049209/) 
[![Gmail Badge](https://img.shields.io/badge/-marciaocassio@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:marciaocassio@gmail.com)](mailto:marciaocassio@gmail.com)
