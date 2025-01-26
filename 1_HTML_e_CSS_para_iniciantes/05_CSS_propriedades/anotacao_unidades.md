# Unidades

## rem
* Unidade relativa ao tamanho da fonte do elemento raiz html. Na maioria dos browsers com configuração padrão 1rem = 16px.

### Exemplo
- arquivo.html
```
<div>
  <p class="px">Esse é um parágrafo com no HTML</p>
  <a class="px" href="/">Clique Aqui</a>
</div>

<div>
  <p class="rem">Esse é um parágrafo com no HTML</p>
  <a class="rem" href="/">Clique Aqui</a>
</div>

```

- arquivo.css
```
.px {
  font-size: 24px;
  padding: 16px 32px;
}

.rem {
  font-size: 1.5rem;
  padding: 1rem 2rem;
}

html {
  font-size: 150%;
}

body {
  font-family: Arial;
  margin: 40px;
}

p {
  background: lightblue;
}

a {
  text-decoration: none;
  background: darkblue;
  color: white;
  display: inline-block;
}

```

## em
* em é uma unidade relativa ao tamanho da fonte do elemento pai.

### Exemplo
- arquivo.html
```
<div>
  <p class="px">Aqui em px</p>
</div>

<div>
  <p class="em">Aqui em em</p>
</div>

<div>
  <p class="rem">Aqui em rem</p>
</div>

```

- arquivo.css
```
div {
  font-size: 150%;
}

.px {
  font-size: 32px;
}

.em {
  font-size: 2em;
}

.rem {
  font-size: 2rem;
}


```
## vh e vw
* vh representa o tamanho da altura da tela visível (viewport height) e vw da largura (viewport width). 100vw = 100% da tela.

### Observação
* Antes do vh só existia a porcentagem. A porcentagem é problemática para definir o height, pois: height: 100%; significa 100% da altura do pai. A altura do pai sempre é definida pelo tamanho do conteúdo, então basicamente 100% de height não muda em nada.

* 100vh será 100% da altura da tela, independente da quantidade de conteúdo.


### Exemplo
- arquivo.html
```
<div>
  <p>Centro</p>
</div>

```

- arquivo.css
```
body {
  font-family: Arial;
  font-size: 150%;
  margin: 0px;
}

div {
  background: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 50vw;
}


```

## calc
* calc() é uma função de css que retorna um valor com base no cálculo efetuado entre os (). Podemos combinar unidades.

### calc(100vw / 3)
* Representa 1/3 da tela.

### calc(100% - 20px)
* Remove 20px de 100%.




### Exemplo
- arquivo.html
```
<nav>
  <h2>Fixo</h2>
</nav>
<article>
  <p>Itens separados</p>
  <p>Itens separados</p>
  <p>Itens separados</p>
  <p>Itens separados</p>
  <p>Itens separados</p>
  <p>Itens separados</p>
  <p>Itens separados</p>
</article>

```

- arquivo.css
```
body {
  margin: 0px;
}

nav {
  height: 100vh;
  background: lightblue;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 60px;
}

article {
  padding: 20px;
  width: calc(100vw - 75px);
  box-sizing: border-box;
  margin-left: 60px;
  background: lightcoral;
}

p {
  margin-bottom: 400px;
}

```

## Outras Unidades
* Existem outras unidades, confira no link abaixo:

https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units 











### Exemplo
- arquivo.html
```

```

- arquivo.css
```

```