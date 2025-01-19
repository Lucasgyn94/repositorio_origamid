# Position

## Position
* A propriedade position possui valores que remove o elemento do fluxo padrão do documento. O padrão é o valor static.

### position: fixed;
* Fixa o elemento na tela.

### top, right, left, bottom
* Define o posicionamento dos elementos que não estão no fluxo padrão.

### Exemplo
- __arquivo.html__
```
<h1>Primeiro Conteúdo</h1>
<h1>Segundo Conteúdo</h1>
<h1>Terceiro Conteúdo</h1>
<div class="fixo">
  <p>Neste site usamos cookies.</p>
</div>

```

- __arquivo.css__
```
.fixo {
  position: fixed;
  bottom: 40px;
  left: 40px;
}

h1 {
  border: 2px solid #ccc;
  padding: 20px 20px 500px 20px;
}

p {
  background: #e7e7e7;
  border: 1px solid #d7d7d7;
  padding: 20px;
  margin: 0px;
  font-size: 20px;
}

```

## relative

### position: relative;
* Mantém o elemento no fluxo padrão, mas permite modificarmos os valores de top, right, bottom e left do mesmo. O espaço ocupado pelo elemento continuará a ser ocupado, mesmo que o elemento seja movimentado.

### Exemplo
- __arquivo.html__
```
<div>
  <span class="relativo">Saiba Mais</span>
  <h1>Primeiro Conteúdo</h1>
</div>
<div>
  <span class="relativo">Saiba Mais</span>
  <h1>Segundo Conteúdo</h1>
</div>

```

- __arquivo.css__
```
.relativo {
  position: relative;
  top: -20px;
}

div {
  border: 2px solid #ccc;
  padding: 20px;
  margin-top: 40px;
}

span {
  background: #e7e7e7;
  border: 1px solid #d7d7d7;
  padding: 10px;
}

```

## absolute

### position: absolute;
* É posicionado conforme o elemento pai (se este estiver com um posicionamento diferente de static) e remove o elemento do fluxo padrão.

### Exemplo
- __arquivo.html__
```
<div>
  <span class="absoluto">Saiba Mais</span>
  <h1>Primeiro Conteúdo</h1>
</div>
<div>
  <span class="absoluto">Saiba Mais</span>
  <h1>Segundo Conteúdo</h1>
</div>

```

- __arquivo.css__
```
.absoluto {
  position: absolute;
  top: -20px;
}

div {
  border: 2px solid #ccc;
  padding: 20px;
  margin-top: 40px;
  position: relative;
}

span {
  background: #e7e7e7;
  border: 1px solid #d7d7d7;
  padding: 10px;
}

```

## z-index
* Define a posição no eixo z (profundidade) dos elementos que foram posicionados fora do fluxo (relative, fixed, absolute).

- __arquivo.html__
```
<h1>Elemento 1</h1>
<h1 class="index1">Elemento 2</h1>
<h1>Elemento 3</h1>
<h1 class="index2">Elemento 4</h1>
<h1>Elemento 5</h1>

```

- __arquivo.css__
```
h1 {
  margin: 0px;
  padding: 10px;
  background: lightblue;
}

.index1 {
  position: relative;
  background: greenyellow;
  top: 40px;
  z-index: 1;
}

.index2 {
  position: relative;
  background: lightcoral;
  top: -40px;
  z-index: -1;
}

```



/*

### Exemplo
- __arquivo.html__
```

```

- __arquivo.css__
```

```
*/

