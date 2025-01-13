# Grid Template Columns

## grid
* Com o display: grid; é possível definirmos colunas e linhas para organizarmos os elementos que estiverem dentro do grid.

### grid-template-columns
* Define o total de colunas e o tamanho de cada uma.

### fr
* fr é uma unidade fracionária que terá como objetivo distribuir o espaço restante, entre os elementos do grid.

### gap
* Cria uma distância entre os elementos do grid, tanto horizontal quanto vertical.

```
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

body {
  font-family: Arial;
}

h2 {
  margin-top: 0px;
}

h1 {
  text-align: center;
}

.comprar {
  display: inline-block;
  padding: 10px 20px;
  background: #a8f;
  color: #103;
  text-decoration: none;
  border-radius: 4px;
}

.item {
  background: #f7f7f7;
  border: 1px solid #e7e7e7;
  padding: 20px;
  border-radius: 4px;
}

```