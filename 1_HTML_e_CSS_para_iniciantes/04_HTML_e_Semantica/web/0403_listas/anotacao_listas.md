# Listas

## ul
A tag <ul> marca uma lista de itens sem ordem (unordered list). Cada item da lista deve ser marcado com uma <li></li>

### Acessibilidade
Listas são anunciadas pelo leitor de tela e o usuário é informado previamente quantos itens existem na lista.

### Exemplo
- arquivo.html:
```
<h2>Livros Recomendados</h2>
<ul>
  <li>O Senhor dos Anéis</li>
  <li>O Hobbit</li>
  <li>A Guerra dos Tronos</li>
</ul>

<h2>Lista dentro de lista</h2>
<ul>
  <li>Legumes</li>
  <li>
    Frutas
    <ul>
      <li>Banana</li>
      <li>Uva</li>
      <li>Abacaxi</li>
    </ul>
  </li>
  <li>Verduras</li>
</ul>
```

## ol
A tag <ol> marca uma lista ordenada (ordered list).

### Exemplo
- arquivo.html:
```
<h2>Classificação Final</h2>
<ol>
  <li>Mariana</li>
  <li>Marcos</li>
  <li>Júlia</li>
  <li>Pedro</li>
</ol>
```

## dl
* A tag <dl> marca uma lista de descrições (description list). A lista é criada com dois elementos <dt> e <dd>

### dt
* Marca o termo/frase a ser definido.

### dd
* Marca a definição do termo acima.

### Exemplo
- arquivo.html:
```
<h2>Perguntas Frequentes</h2>
<dl>
  <dt>Quais as formas de pagamento?</dt>
  <dd>Dinheiro ou Cartão de Crédito</dd>
  <dt>Possui certificado?</dt>
  <dd>Sim, emitimos certificados.</dd>
</dl>
```

## CSS
* As listas não são utilizadas apenas para textos simples, é possível agruparmos uma lista de produtos em uma ul > li. Para isso geralmente removemos os estilos padrões definidos por listas.

### list-style

Possui diferentes valores que definem o estilo dos marcadores da lista (disc, square e outros). O list-style define o tipo / imagem / posição (outside / inside)

### Exemplo
- arquivo.html:
```
<ul class="ul-limpo">
  <li>
    Produto 1
    <ul>
      <li>Produto 1.1</li>
      <li>Produto 1.2</li>
    </ul>
  </li>
  <li>Produto 2</li>
</ul>

<ul class="ul-estilo">
  <li>Produto 1</li>
  <li>Produto 2</li>
</ul>
```

- arquivo.css:
```
.ul-limpo {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

.ul-estilo {
  list-style: square inside;
  padding: 0px;
}

```
