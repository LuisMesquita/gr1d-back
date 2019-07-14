# Gr1d Hackathon - Unie

Aplicação node que cria objetivos financeiros para as pessoas, e envia informações ao corretor através do e-mail.

A aplicação está disponível em https://gr1dhack.herokuapp.com, e para rodar localmente basta,

`npm install` 

e depois 

`npm start`

### Rotas

* POST/goal (userId, peridicity, goal) => Cria um objetivo financeiro para o cliente com o id = userId, e envia (api do printlaser) o objetivo + informações do cliente + possíveis planos de previdencia (api da mongeral)
* POST/user (user) cria um usuário
* PATCH/user (user) atualiza usuário

PS: A api de email da printlaser está comentada, pois não foi nos disponibilizada uma key de ativação.

### Tecnlogias

A aplicação foi desenvolvida utilizando `express` e `mongodb`.