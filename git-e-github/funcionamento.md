# OPENSSL
- GIT utiliza sha1 para criptografia de arquivos, checagem de alterações.

    ## SHA1
    - Protocolo de criptografia de 40 caracteres.

# OBJETOS INTERNOS
- Blobs:
    - Um objeto que armazena metadados.

- Trees:
    - Armazenam blobs e os nomes associados ao arquivo, apontando para tipos diferentes de dados.
    - Possuem sha1 próprio, ligado ao conteúdo apontado.

- Commits:
    - Junta toda a informação, dando sentido.
    - Aponta para trees, blobs, parentes (outros commits), autor e timestamp.
    - Possui uma mensagem explicativa dos dados presentes.
    - O sha1 do commit é o hash de toda essa informação.

# CONCLUSÃO
- Sistema distribuído seguro.
- Estrutura confiável em larga escala.
