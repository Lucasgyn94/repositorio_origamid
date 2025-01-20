# CSS e Seletores
## Seletores
### h1, p
* A vírgula permite selecionarmos múltiplos elementos para a aplicação de um mesmo estilo.

### p a
* Seleciona o a que tiver um p como elemento pai (não precisa ser filho direto).

### Exemplo
- arquivo.html
```
<h1>Bicicletas</h1>
<p>As melhores <a href="/">bicicletas.</a></p>
<a href="/">Veja Todas</a>

```
- arquivo.css
```
/* Seleciona h1 e p */
h1,
p {
  color: blue;
}

/* Seleciona a dentro de p */
p a {
  color: green;
}

```
## id
* Atributo HTML que adiciona um identificador único na tag. Esse identificar pode ser utilizado no CSS para selecionarmos o elemento: #nomeid

### Exemplo
- arquivo.html
```
<h1 id="logo">Bikcraft</h1>

```
- arquivo.css
```
#logo {
  color: gold;
}

```

## class
* Atributo HTML que adiciona um identificador reutilizável na tag. Esse identificar pode ser utilizado no CSS para selecionarmos o(s) elemento(s): .classe

### Exemplo
- arquivo.html
```
<h1>Cursos</h1>
<h2 class="codigo">HTML para Iniciantes</h2>
<h2 class="codigo">CSS para Iniciantes</h2>
<h2 class="codigo underline">JavaScript para Iniciantes</h2>
<h2 class="design">UX Design</h2>
<h2 class="design">UI Design</h2>

```
- arquivo.css
```
.codigo {
  color: blue;
}

.design {
  color: red;
}

.underline {
  text-decoration: underline;
}


```
