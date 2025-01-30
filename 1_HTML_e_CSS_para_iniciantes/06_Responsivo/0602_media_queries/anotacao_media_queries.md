# Media Queries

## @media
* A @media gera um bloco de código que só será ativado caso a condição entre parênteses seja verdadeira.

### @media (max-width: 500px)
* Abaixo de 500px

### @media (min-width: 600px)
* Acima de 600px

### @media (min-width: 800px) and (max-width: 900px)
* Entre 800px e 900px.

### Exemplo
arquivo.html
```
<div>
  <h1>Nossas Bicicletas</h1>
  <img src="./img/bicicleta.jpg" alt="Bicicleta" />
  <p>
    A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem
    equipada com os melhores acessórios, o que garante maior velocidade.
  </p>
</div>

```

arquivo.css
```
img {
  max-width: 100%;
  display: block;
}

div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

div h1 {
  grid-column: 1 / -1;
}

/* abaixo de 600px */
@media (max-width: 600px) {
  div {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

/* acima de 1000px */
@media (min-width: 1000px) {
  html {
    font-size: 150%;
  }
}

/* entre 800px e 900px */
@media (min-width: 800px) and (max-width: 900px) {
  h1 {
    background: lightgreen;
  }
}

```

## Outras Condições
* Existem outras condições, como por exemplo se uma propriedade é suportada ou não pelo browser, ou se o CSS está sendo aplicado para tela ou impressão.

https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
