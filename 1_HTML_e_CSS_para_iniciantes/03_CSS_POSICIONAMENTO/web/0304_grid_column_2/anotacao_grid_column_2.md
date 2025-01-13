# Grid Column

## Grid Column
### grid-column
* Posiciona o item na coluna desejada.

### 1 / 3
* Da linha 1 até a linha 3.

### 1 / -1
* Da linha 1 até a última linha.

### span 2
* Expandir por 2 colunas.

- Exemplo:
index.html:
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
index.css:
```
.grid {
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
}

/* Começa na linha 1 até a 3 (2 colunas)*/
.foto {
  grid-column: 1 / 3;
}

/* Começa na linha 1 até a -1 (última linha) */
.descricao {
  grid-column: 1 / -1;
}

/* Posiciona na segunda coluna */
.comprar {
  grid-column: 2;
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