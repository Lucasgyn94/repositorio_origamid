# Semântica e Acessibilidade

## Semântica
* Por qual motivo realmente devemos marcar o HTML com tags semânticas (h1, p) e não apenas com tags genéricas (div, span).

### Acessibilidade
* Leitores de tela (JAWS, NVDA, VoiceOver) utilizam as tags para a navegação e compreensão do conteúdo. Interfaces de voz estão cada vez mais presentes.

### Browsers e Funcionalidades
* Define um estilo padrão para o conteúdo, mesmo sem o CSS. Facilita a organização do conteúdo em browsers que oferecem modo leitura.

### Indexadores e Máquina
* Facilita o trabalho de indexadores como o robô do Google a identificar o conteúdo do seu site. (Especulação).

## Acessibilidade
### Pesquisa
* Desde 2009 a WebAIM vêm fazendo pesquisas com usuários de leitores de tela.

https://webaim.org/projects/screenreadersurvey9/

### Headings (h1, h2, h3)
* A navegação pelos cabeçalhos é um dos principais métodos utilizados para procurar conteúdo na página.

### Landmarks (nav, main)
* Os pontos de referência (landmarks) das páginas são utilizadas por mais de 75% dos usuários para navegar pelo conteúdo.

## Com Semântica
* Conteúdo marcado semanticamente, facilita a navegação por leitores de tela e o uso de funcionalidades extras dos browsers.

### Exemplo
- arquivo.html
```
<h1 class="titulo">Nossas Publicações</h1>
<p class="paragrafo">Conheça nossos livros.</p>
<h2 class="subtitulo">O Senhor dos Anéis</h2>
<p class="paragrafo">
  O Senhor dos Anéis (The Lord of the Rings, no original) é um livro de alta
  fantasia, escrito pelo escritor britânico J. R. R. Tolkien.
</p>
<h2 class="subtitulo">Harry Potter</h2>
<p class="paragrafo">
  Harry Potter é uma série de sete romances de fantasia escrita pela autora
  britânica J. K. Rowling.
</p>

```

- arquivo.css
```
body {
  font-family: Arial, Helvetica, sans-serif;
}

h1,
h2 {
  font-weight: normal;
}

.titulo {
  font-size: 30px;
  margin: 30px 0;
}

.subtitulo {
  font-size: 20px;
  margin: 20px 0;
}

.paragrafo {
  color: #555;
  margin: 16px 0;
}

```

## Sem Semântica
* Possui o mesmo estilo/visual que o exemplo anterior. Porém,diversos problemas surgem ao utilizar apenas tags genéricas.

### Exemplo
- arquivo.html
```
<div class="titulo">Nossas Publicações</div>
<div class="paragrafo">Conheça nossos livros.</div>
<div class="subtitulo">O Senhor dos Anéis</div>
<div class="paragrafo">
  Conheça a história de Frodo Bolseiro e a sua jornada nas terras médias.
</div>
<div class="subtitulo">Harry Potter</div>
<div class="paragrafo">
  Harry Potter é uma série de sete romances de fantasia escrita pela autora
  britânica J. K. Rowling.
</div>

```

- arquivo.css
```
body {
  font-family: Arial, Helvetica, sans-serif;
}

h1,
h2 {
  font-weight: normal;
}

.titulo {
  font-size: 30px;
  margin: 30px 0;
}

.subtitulo {
  font-size: 20px;
  margin: 20px 0;
}

.paragrafo {
  color: #555;
  margin: 16px 0;
}

```
