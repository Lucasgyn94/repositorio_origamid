
# Pseudo Elements

## ::before e ::after
* Os pseudo elements ::before e ::after criam elementos HTML com base no seletor.

### content
* Definir um conteúdo para o elemento é essencial para ele existir, mesmo que o conteúdo esteja vazio.

### uso
* São utilizados para decorarmos o conteúdo, com eles evitamos o uso de elementos desnecessários no HTML.


### Exemplo
- arquivo.html
```
<h1>Nossos Produtos</h1>

<ul>
  <li>Sobre</li>
  <li>Produtos</li>
  <li>Contato</li>
</ul>

```

- arquivo.css
```
h1::after {
  content: '';
  display: block;
  width: 40px;
  height: 4px;
  background: #caf;
}

li {
  font-size: 1.5rem;
  display: flex;
  align-items: center;
}

li::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-image: linear-gradient(#caf, #fff);
  border: 2px solid #caf;
  margin-right: 10px;
}

```

## ::first-line e ::first-letter

### ::first-line
* Seleciona a primeira linha do conteúdo.

### ::first-letter
* Seleciona a primeira letra do conteúdo.


### Exemplo
- arquivo.html
```
<p>
  A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem
  equipada com os melhores acessórios, o que garante maior velocidade.
</p>

```

- arquivo.css
```
p::first-line {
  font-weight: bold;
}

p::first-letter {
  font-size: 2rem;
}

```