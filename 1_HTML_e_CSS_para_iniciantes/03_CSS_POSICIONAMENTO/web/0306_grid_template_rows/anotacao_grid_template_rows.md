# Grid Template Rows

## grid-template-rows

### grid-template-rows: 100px auto;
* Define o tamanho das linhas.

### grid-auto-rows:
* Linhas são adicionadas automaticamente com o valor de auto.

### grid-row: 2
* Define a linha do item, funciona da mesma forma que o grid-column.

### Exemplo
- Arquivo .html:
```
<div class="grid">
  <h1 class="titulo">Nimbus Stark</h1>
  <span class="preco">R$ 39</span>
  <img class="foto" src="./img/bicicleta.jpg" alt="Bicicleta Preta" />
  <p class="descricao">
    A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem
    equipada com os melhores acessórios, o que garante maior velocidade.
  </p>
  <a class="comprar" href="/">Comprar</a>
</div>

```
- Arquivo .css:
```
.grid {
  display: grid;
  gap: 20px;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(3, auto) 1fr;
  place-items: start;
}

.titulo {
  grid-column: 1 / -1;
}

.preco {
  grid-column: 2;
  grid-row: 2;
}

.foto {
  grid-row: span 3;
}

/* Estilos Gerais */

body {
  font-family: Arial;
  margin: 40px;
}

h1,
p {
  margin: 0px;
}

h1 {
  font-size: 48px;
  line-height: 1;
}

p {
  font-size: 20px;
}

img {
  max-width: 100%;
  border-radius: 4px;
}

.comprar {
  background: #a8f;
  color: #103;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 4px;
  text-align: center;
  font-size: 20px;
}

.preco {
  background: #ddd;
  padding: 5px 10px;
  border-radius: 4px;
}

```

## Evitando linhas
* Será mais comum manipularmos colunas do que linhas. Podemos evitar a complexidade do posicionamento em linhas com a reestruturação do HTML.

### Exemplo
- Arquivo .html:
```
<div class="grid">
  <h1 class="titulo">Nimbus Stark</h1>
  <img class="foto" src="./img/bicicleta.jpg" alt="Bicicleta Preta" />
  <div class="info">
    <span class="preco">R$ 39</span>
    <p class="descricao">
      A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem
      equipada com os melhores acessórios, o que garante maior velocidade.
    </p>
    <a class="comprar" href="/">Comprar</a>
  </div>
</div>

```
- Arquivo .css:
```
.grid {
  display: grid;
  gap: 20px;
  grid-template-columns: 2fr 1fr;
  place-items: start;
}

.titulo {
  grid-column: 1 / -1;
}

.info {
  display: grid;
  gap: 20px;
  place-items: start;
}

/* Estilos Gerais */

body {
  font-family: Arial;
  margin: 40px;
}

h1,
p {
  margin: 0px;
}

h1 {
  font-size: 48px;
  line-height: 1;
}

p {
  font-size: 20px;
}

img {
  max-width: 100%;
  border-radius: 4px;
}

.comprar {
  background: #a8f;
  color: #103;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 4px;
  text-align: center;
  font-size: 20px;
}

.preco {
  background: #ddd;
  padding: 5px 10px;
  border-radius: 4px;
}

```