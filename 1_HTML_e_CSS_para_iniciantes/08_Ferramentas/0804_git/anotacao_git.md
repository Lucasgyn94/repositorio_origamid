# Git

## Git

### Git
* Sistema de controle de versões. Facilita o trabalho em equipe e o controle de mudanças entre arquivos e diretórios.

### Github
* Plataforma online de hospedagem para repositórios Git. Existem outras como GitLab e Bitbucket.

## Git Setup

### Instalar o Git
* https://git-scm.com/

### Github
* Criar conta: https://github.com/

### Configurar Nome
* $ git config --global user.name "Seu Nome"

### Configurar Email
* $ git config --global user.email "email@gmail.com"

## Git Comandos
### $ git init
* Inicia um repositório

### $ git add style.css
* Adiciona o arquivo style.css ao index do git. Com o $ git add -A, adicionamos todos os arquivos.

### $ git status
* Mostra os arquivos que tiveram mudanças.

### $ git commit -m 'Descrição'
* Irá fazer fazer o commit do código adicionado com uma mensagem.

## Criar Repositório no Github

### Novo Repositório
* https://github.com/new

### Adicionar diretório remoto
* $ git remote add origin https://github.com/seuusuario/seurepositorio.git

### Push do primeiro commit
* $ git push -u origin main

### Se for a sua primeira vez
* Uma tela de login irá aparecer, utilize os dados da sua conta Github.

## Mais Git

### .gitignore
* Lista de arquivos que não devem ser manipulados pelo git. node_modules é um bom exemplo.

### Commit sem texto
* Ao usar o $ git commit você entra no modo completo de comentário, com um editor de texto direto na linha de comando. Utilize esc + :wq para sair do mesmo.

## Github Pages
### Criar repositório
* O nome deve ser seuusuario.github.io

### HTML Simples
* O site só funcionará em html/css/js simples, sem linguagem de servidor

### Qualquer projeto
* Qualquer projeto poderá ter uma página para o mesmo. Vá em Settings > GitHub Pages > selecione master branch e salve. E acesso seuusurio.github.io/repositorio/