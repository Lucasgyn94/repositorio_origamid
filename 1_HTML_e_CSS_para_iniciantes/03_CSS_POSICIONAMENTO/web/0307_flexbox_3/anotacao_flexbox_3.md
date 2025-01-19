# Flexbox

## Flexbox

### display: flex;
* Os filhos passam a ter um tamanho flexível e ficam um ao lado do outro.

### flex-wrap: wrap;
* Caso não caiba todos os elementos em uma mesma linha, quebre para a próxima.

### gap
* Define uma distância entre os elementos.

### Exemplo:
- __.html__
```
<div class="flex">
  <h2>O Senhor dos Anéis</h2>
  <h2>Interestelar</h2>
  <h2>O Hobbit</h2>
  <h2>Titanic</h2>
</div>

```

- __css__
```
.flex {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

h2 {
  background: #e7e7e7;
  border: 1px solid #d7d7d7;
  padding: 20px;
  margin: 0px;
}

```

## Align e Justify
* O Align e Justify funcionam da mesma forma que no CSS Grid Layout. Lembre-se que essas propriedades só funcionam se existir espaço entre os elementos.

### Exemplo
- __arquivo.html__
```
<div class="flex">
  <h2>O Senhor dos Anéis</h2>
  <h2>Interestelar</h2>
  <h2>O Hobbit</h2>
  <h2>Titanic</h2>
</div>

```

- __arquivo.css__
```
.flex {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  height: 100vh;
  place-content: center;
}

h2 {
  background: #e7e7e7;
  border: 1px solid #d7d7d7;
  padding: 20px;
  margin: 0px;
}

body {
  margin: 0px;
}

```

## flex

### flex-grow: 1;
* Se esse elemento deve crescer para ocupar o espaço vazio. O 0 impede o crescimento, valores maiores que 0 funcionam como a unidade fr do css grid.

### flex-basis: 200px;
* Valor inicial antes de distribuir o espaço em branco.

### flex-shrink: 0;
* Caso exista um valor de base, o flex-shrink irá determinar se esse valor pode ser reduzido ou não. 0 significa que ele não pode ser reduzido.

### flex: 1;
* Atalho para flex-grow: 1; flex-shrink: 1; e flex-basis: 0;

### Exemplo
- __arquivo.html__
```
<div class="flex">
  <h2>O Senhor dos Anéis</h2>
  <h2>Interestelar</h2>
  <h2>O Hobbit</h2>
  <h2>Titanic</h2>
</div>

```
- __arquivo.css__
```
.flex {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

h2 {
  background: #e7e7e7;
  border: 1px solid #d7d7d7;
  padding: 10px;
  margin: 0px;
  flex: 1;
}

```

## flex vs grid
* Use ambos no seu layout, eles resolvem problemas diferentes. O grid te dá controle em todos os eixos e o flexbox apenas no total de itens por linha.

### Exemplo
- __arquivo.html__
```
<div class="flex">
  <h2>O Senhor dos Anéis</h2>
  <h2>Interestelar</h2>
  <h2>O Hobbit</h2>
  <h2>Titanic</h2>
</div>

<div class="grid">
  <h2>O Senhor dos Anéis</h2>
  <h2>Interestelar</h2>
  <h2>O Hobbit</h2>
  <h2>Titanic</h2>
</div>

```

- __arquivo.css__
```
.flex {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.grid {
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, auto));
  gap: 20px;
}

h2 {
  background: #e7e7e7;
  border: 1px solid #d7d7d7;
  padding: 10px;
  margin: 0px;
}

```