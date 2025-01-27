# Background

## Background
* O background pode receber outros valores além de cores sólidas, como imagens e gradientes. A diferença entre img e o background é que a img faz parte do conteúdo, o background apenas do estilo.

### Exemplo
- arquivo.html
```
<div class="bicicleta">
  <h1>Nossas Bicicletas</h1>
</div>

<div class="pattern"></div>

```

- arquivo.css
```
.bicicleta {
  height: 600px;
  background-color: black;
  background-image: url('./img/bicicleta.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  /* Escreve por cima do definido anteriormente */
  /* background: url("./img/bicicleta.jpg"); */
  display: flex;
}

.bicicleta h1 {
  margin: auto;
  background: white;
  padding: 1rem 2rem;
}

.pattern {
  height: 200px;
  background-image: url('./img/pattern.svg');
  background-size: 100px;
  background-repeat: repeat; /* valor padrão */
}

```

## Gradiente
* A função linear-gradient gera um gradiente linear na propriedade background-image.

### Direção
* 90deg, 45deg, to left, to right

### Cores

* #000 0%, blue 50%, #fff 100%. Cor e local de início.

### Exemplo
- arquivo.html
```
<div class="linear"></div>
<div class="radial"></div>

```

- arquivo.css
```
div {
  height: 200px;
}

.linear {
  background-image: linear-gradient(to right, #009638, #f6d800, #062672);
}

.radial {
  background-image: radial-gradient(circle, #009638, #f6d800, #062672);
}


```