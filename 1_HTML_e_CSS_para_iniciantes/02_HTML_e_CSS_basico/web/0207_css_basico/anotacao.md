# CSS Básico

## Link

### link
* Cria uma relação entre um documento HTML e um arquivo de estilo CSS.

### rel
* Define o tipo de arquivo (stylesheet para CSS). É possível linkar outros também como favicons.

### href
* Define o caminho do arquivo.
```
<link rel="stylesheet" href="/style.css" />
```

## CSS Anatomia
### Seletor
* Seleciona o elemento(s) que deve ser estilizado.

### Bloco CSS
* Engloba as propriedades {} que serão aplicadas ao seletor.

### Propriedade
* Define o que será alterador.

### Valor
* Define o valor do novo estilo.

## Cascading
* Os estilos são aplicados em "cascata", um acima do outro. A ordem e especificidade do seletor importam no CSS.

### Exemplo
- arquivo.html
```
<a href="/">Link Cursos</a>

```
- arquivo.css
```
a {
  color: black;
  font-size: 32px;
}

a {
  color: tomato;
}

```