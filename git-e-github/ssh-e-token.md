# CHAVE SSH
- Forma de se conectar através de duas chaves encriptadas (pública e privada).
- Linka a máquina local e o GitHub.

    ## GERANDO CHAVES SSH
    - ssh-keygen -t ed25519 -c email@exemplo.com.
    - eval $(ssh-agent -s)
    - ssh-add id_ed25519
    - Processo realizado no GIT Bash.