# Background e Cores

## Background

### background ou background-color
* Muda a cor de fundo do elemento.

### Exemplo
- arquivo.html
```
<h1>Front End</h1>
<h2><a href="/">Origamid</a></h2>

```
- arquivo.css
```
h1 {
  background: black;
  color: white;
}

a {
  background-color: seagreen;
  color: white;
}

```
## hexadecimal

### hexadecimal
* A cor é representada através de um código de 6 caracteres que vão de 0 até F.

### #84e = #8844ee

### Aula de Cores
* https://www.origamid.com/curso/ui-design-para-iniciantes/0307-cores

### Exemplo
- arquivo.html
```
<h1>Front End</h1>
<h2><a href="/">Origamid</a></h2>


```
- arquivo.css
```
h1 {
  background-color: #8844ee;
  color: #000000;
}

a {
  background-color: #84e;
  color: #fff;
}


```

## rgba
### rgba(0, 0, 0, 1);
* O rgba é uma função que recebe os valores de r (red), g (green), b (blue) e a (alpha). O rgb vai de 0 até 255 e o alpha vai de 0 até 1.

### Exemplo
- arquivo.html
```
<h2 class="a1">HTML</h2>
<h2 class="a2">CSS</h2>
<h2 class="a3">JavaScript</h2>
<h2 class="design">Design</h2>

```
- arquivo.css
```
.a1 {
  color: rgba(0, 0, 0, 0.8);
}
.a2 {
  color: rgba(0, 0, 0, 0.6);
}
.a3 {
  color: rgba(0, 0, 0, 0.4);
}
.design {
  color: rgba(255, 0, 0, 1);
}

```

## plugin
### color-highlight
* https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight

```
"color-highlight.markerType": "dot-before",
"editor.colorDecorators": false
```