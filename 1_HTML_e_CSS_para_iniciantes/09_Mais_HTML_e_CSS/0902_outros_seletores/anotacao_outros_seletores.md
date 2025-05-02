# Outros Seletores

## Atributos

### [atributo]
* Seleciona os elementos que tiverem o atributo dentro dos [].

### [name="email"]
* Seleciona apenas o elemento que tiver o atributo e o valor.

### [href^="#"]
* Atributos que comecem ^ com o valor.

### [href$=".com"]
* Atributos que terminem $ com o valor.

### Exemplo
=> arquivo.html:
```
<input type="text" required />
<input type="text" name="email" />
<p required>Necessário</p>

<a href="#interno">Link Interno</a>
<a href="https://www.origamid.com">Link Origamid</a>
```

=> arquivo.css:
```
[required] {
  border: 2px solid red;
}

[name='email'] {
  border: 2px solid blue;
}

[href^='#'] {
  border: 2px solid green;
}

[href$='origamid.com'] {
  border: 2px solid gold;
}

```
## Sinais

### div > p
* Apenas p que for filho direto de div

### p + p
* Todo p que vier após um elemento p

### *
* Seleciona todos os elementos do site.
### Exemplo
=> arquivo.html:
```
<section>
  <h2>Nossa Empresa</h2>
  <div>
    <h2>Saiba Mais</h2>
  </div>
</section>

<article>
  <p>Esse é um teste de parágrafo</p>
  <p>Mais um teste aqui</p>
  <p>E um último teste de p</p>
</article>


```
=> arquivo.css:
```
section > h2 {
  color: tomato;
}

p {
  margin: 0px;
  font-size: 1.5rem;
}

article {
  background: lightgreen;
  padding: 10px;
}

p + p {
  margin-top: 20px;
}

```

