# Display

## Fluxo do Layout
* O fluxo do layout no HTML ocorre conforme o modo de escrita definido. Por padrão, de cima para baixo da esquerda para a direita.

### span
* Tag genérica que não possui nenhum estilo pré-definido/semântica. É equivalente a uma div, mas sem o display block.
* exemplo:
- arquivo.html
```
Texto direto no Body
<a href="/">Texto no link</a>
<span>Texto no Span</span>
<div>Texto na Div</div>
Texto direto no Body 2
<a href="/">Texto no link 2</a>
<span>Texto no Span 2</span>

```
* Ao modificar o modo de escrita, o fluxo também é modificado.
- arquivo.html
```
Texto direto no Body
<a href="/">Texto no link</a>
<span>Texto no Span</span>
<div>Texto na Div</div>
Texto direto no Body 2
<a href="/">Texto no link 2</a>
<span>Texto no Span 2</span>

```
- arquivo.css
```
body {
  writing-mode: vertical-lr;
}

```

## Display inline e block
* Define como a caixa (box model) irá se comportar.

### inline
* Respeita o fluxo da escrita sem iniciar uma nova linha, não é possível definir valores de width, height, margin (top/bottom) e etc. É o estilo padrão.

### block
* Inicia uma nova linha e não permite que outros elementos sejam posicionados em sua linha. Aceita todas as propriedades do box model. Estilo inicial de elementos como h1, p, div e outros.

### Exemplo
- arquivo.html
```<h1>H1 Block</h1>
<a href="/">Link Inline</a>
<span>Span Inline</span>
<strong>Strong inline</strong>
<p>P Block</p>
<p>Esse é um texto com um <span>elemento inline</span> dentro dele.</p>
<div>
  Esse é um texto com um
  <div>elemento block</div>
  dentro dele.
</div>

```
- arquivo.css
```
span,
a,
strong {
  border: 1px solid rgba(0, 0, 0, 0.5);
}

h1,
p,
h2,
div {
  border: 1px solid rgba(255, 0, 0, 0.5);
}

```

## none e inline-block

### none
* Remove o elemento completamente da tela.

### inline-block
* O elemento continua inline, mas passa a receber as propriedades do box model.

### Exemplo
- arquivo.html
```
<div class="esconde">Esse elemento não aparece.</div>
<div>
  Acesso o meu <a href="/" class="inlineblock">link inline-block</a> aqui.
</div>
<div>Novo elemento de bloco</div>
<div>Acesse o meu <a href="/">link inline</a> aqui.</div>
<div>Novo elemento de bloco</div>

```
- arquivo.css
```
a {
  background: #ddd;
  padding: 10px;
  text-decoration: none;
  width: 160px;
  height: 30px;
  margin: 20px;
}

.inlineblock {
  display: inline-block;
}

.esconde {
  display: none;
}

```
## Posicionamento
* Para posicionamentos complexos, como o da imagem abaixo, utilizamos as propriedades display grid (CSS Grid Layout) e flex (Flexbox).



