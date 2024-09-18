# Prayers API

API do Prayers Project feita em TypeScript

## Bônus - Rodando a aplicação localmente

1. Ao rodar o comando abaixo, irá criar um banco de dados MySQL, configurado pelas variáveis de ambiente dentro do próprio docker-compose.yml

```sh
docker-compose up -d --build
```

2. Para reiniciar/iniciar o banco de dados

```sh
npm run db:reset
```

### Funcionamento

Qualquer pessoa pode acessar os pedidos de oração

Qualquer pessoa pode cadastrar um pedido de oração

É necessário login com user e senha para as ações abaixo

Somente uma pessoa com um usuário cadastrado pode excluir um pedido de oração

Somente uma pessoa com role de Pastor ou Official pode criar um novo usuário