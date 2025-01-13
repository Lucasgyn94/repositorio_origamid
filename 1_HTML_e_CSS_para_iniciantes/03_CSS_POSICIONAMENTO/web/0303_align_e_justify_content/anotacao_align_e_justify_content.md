# Align e Justify Content

## Guia CSS Grid Layout
### Guia Origamid:
https://www.origamid.com/projetos/grid/

https://www.origamid.com/projetos/css-grid-layout-guia-completo/

### Outros guias:

https://grid.malven.co/
https://css-tricks.com/snippets/css/complete-guide-grid/

## align e justify content
### align-content:
* Alinha/Distribui o conteúdo na vertical

### justify-content:
* Alinha/Distribui o conteúdo na horizontal

### place-content:
* Atalho para align e justify

### Valores:
start | center | end | stretch | space-between | space-around | space-evenly


```
.grid {
  display: grid;
  grid-template-columns: 200px 200px;
  gap: 20px;
  justify-content: space-around;
}

.item {
  background: #f7f7f7;
  border: 1px solid #e7e7e7;
  padding: 20px;
  border-radius: 4px;
  display: grid;
}

body {
  font-family: Arial;
}

h1 {
  text-align: center;
}

h2 {
  margin-top: 0px;
}

.comprar {
  background: #a8f;
  color: #103;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 4px;
}

```