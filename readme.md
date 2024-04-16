- Vantagens
- Quais problemas GraphQL resolve?
  - Overfetching
    - DB: Usuario, enderecos
  - Underfatching
    - DB: user (precisa pegar endereco por exemplo)

```gql
query {
  users {
    id
    name
    github
    addressess {
      id
      name
      state
    }
  }
}
```

- Desvantagens
  - Complexidade
