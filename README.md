
# Ghibli Movie Catalog (Front-end)

Código fonte de app front-end para catálogo de filmes do Studio Ghibli.


## Stack utilizada

**React, Vite, React-Router, styled-components e Vercel**


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/phmcastro702/ghibli-movie-catalog-front.git
```

Entre no diretório do projeto

```bash
  cd ghibli-movie-catalog-front
```

Instale as dependências

```bash
  npm install
```

Inicie o app

```bash
  npm run dev
```

**!! Configurar URL de backend no arquivo app_config.json para URL local do backend !!**

Ex:
```json
{
    "api_url": "http://localhost:5173"
}
```


## Ou acesse o projeto 'vivo' (foi feito o deploy)

Realizei o deploy com a Vercel e o projeto está 'vivo' na URL: 

https://ghibli-movies-catalog-mu.vercel.app/

Consumindo do backend nesta URL:

https://api-helper-ghibli-movies.herokuapp.com/



Lembrando que pode demorar um pouco o acesso por conta do tempo que o Heroku leva para iniciar o 
processo Node que pode ter adormecido.
