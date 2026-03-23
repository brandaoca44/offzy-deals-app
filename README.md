# Offzy — plataforma de ofertas

Offzy é uma aplicação web inspirada em agregadores como Pelando e Promobit: descobrir ofertas, filtrar, votar e publicar promoções. Este repositório é um **front-end de demonstração** (sem backend): dados e sessão ficam no navegador.

Foco em **UX clara**, **código legível** e **boas práticas** para portfólio.

---

## Funcionalidades

- Feed de ofertas com busca, categorias e ordenação por saldo de votos (curtir / não curtir)
- Publicação de novas ofertas (com validação de URLs `https` em link e imagem opcional)
- Login e cadastro **mock** (sessão persistida em `localStorage`; não há servidor nem senha real)
- Rota `/perfil` acessível apenas com sessão ativa; link “Ver oferta” exige login na demo
- Persistência de ofertas e sessão via `localStorage`
- Layout em grid com colunas laterais (categorias / espaço publicitário) e CSS com variáveis de tema

---

## Tecnologias

- React 19
- JavaScript (ES modules)
- Vite 8
- React Router 7
- ESLint

---

## Imagens da demo

As fotos das ofertas iniciais em `src/data/ofertas.js` vêm do **Unsplash** (`images.unsplash.com`). Licença e uso: [Unsplash License](https://unsplash.com/license).

---

## Cache e dados locais

O app grava:

| Chave | Conteúdo |
|--------|-----------|
| `offzy_ofertas` | Lista de ofertas (JSON) |
| `offzy_sessao` | `"1"` quando a sessão demo está ativa |

Se você alterar o seed em `src/data/ofertas.js` e não vir mudanças, limpe essas chaves no DevTools (Application → Local Storage) ou teste em **janela anônima**.

---

## Screenshots

### Feed
![Feed](screenshots/feed.png)

### Login
![Login](screenshots/login.png)git

### Cadastro
![Cadastro](screenshots/cadastro.png)


---

## Estrutura do projeto

```
src
 ├── components
 ├── pages
 ├── data
 ├── utils
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

## Como rodar

```bash
git clone https://github.com/brandaoca44/offzy-deals-app.git
cd offzy-deals-app
npm install
npm run dev
```

Validação local (recomendado antes de commit ou PR):

```bash
npm run lint
npm run build
```

---

## Objetivo

Demonstrar organização em React, fluxo de dados (estado no `App`, props para páginas/componentes), rotas, formulários com feedback, cuidados básicos de segurança em URLs (`https` apenas) e persistência local para uma demo estável.

---

## Próximas melhorias

- Autenticação real e API/backend
- Testes automatizados (por exemplo Vitest + Testing Library)
- CI no GitHub Actions (`lint` + `build`)
- Upload ou hospedagem própria de imagens

---

## Autor

Desenvolvido por **Caíque Brandão**.

---
