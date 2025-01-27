# Pseudo Classes

## Estado
* Permite definirmos o estilo de diferentes estados do elemento html.

### :hover
* Mouse por cima.

### :focus
* Elemento em foco, usando o teclado (tab).

### :active
* Quando clicamos no elemento.

### :visited
* Para links que já foram visitados.

### Exemplo
- arquivo.html
```
<a href="/">Clique Aqui</a>

```

- arquivo.css
```
a {
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-family: Arial;
  text-decoration: none;
  background: #caf;
  color: #217;
}

a:hover {
  background: #adf;
  color: #147;
}

a:focus {
  background: #cfa;
  color: #371;
}

a:active {
  background: #ffa;
  color: #761;
}

/* a:visited {
  background: #fda;
  color: #731;
} */

```

## Seletores
### :first-child
* Seleciona o primeiro elemento.

### :last-child
* Seleciona o último elemento.

### :nth-child(4)
* 4 (quarto elemento), even (pares), odd (ímpares), 3n (de 3 em 3).

### Exemplo
- arquivo.html
```
<ol class="lista-1">
  <li>Primeiro elemento</li>
  <li>Segundo elemento</li>
  <li>Terceiro elemento</li>
  <li>Quarto elemento</li>
  <li>Quinto elemento</li>
</ol>

<ol class="lista-2">
  <li>Primeiro elemento</li>
  <li>Segundo elemento</li>
  <li>Terceiro elemento</li>
  <li>Quarto elemento</li>
  <li>Quinto elemento</li>
  <li>Sexto elemento</li>
  <li>Sétimo elemento</li>
  <li>Oitavo elemento</li>
</ol>


```

- arquivo.css
```
/* primeiro elemento */
.lista-1 li:first-child {
  background: #caf;
}

/* último elemento */
.lista-1 li:last-child {
  background: #cfa;
}

/* terceiro elemento */
.lista-1 li:nth-child(3) {
  background: #fda;
}

/* elementos ímpares */
.lista-2 li:nth-child(odd) {
  background: #cfa;
}

/* elementos pares */
.lista-2 li:nth-child(even) {
  background: #adf;
}

/* de 4 em 4 */
.lista-2 li:nth-child(4n) {
  background: #caf;
}


```

## :not
* O :not nega a seleção de um elemento específico.

Lista com outras pseudo-classes: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

### Exemplo
- arquivo.html
```
<ol>
  <li>Primeiro elemento</li>
  <li>Segundo elemento</li>
  <li>Terceiro elemento</li>
  <li>Quarto elemento</li>
  <li>Quinto elemento</li>
</ol>

<section>
  <h2>Produtos</h2>
  <h2>Empresas</h2>
  <h2 class="contato">Contato</h2>
</section>

```

- arquivo.css
```
/* todos menos first-child e last-child */
ol li:not(:first-child, :last-child) {
  background: #adf;
}

/* todos h2's dentro de section, menos o que tiver a classe .contato */
section h2:not(.contato) {
  text-decoration: underline;
}

```

