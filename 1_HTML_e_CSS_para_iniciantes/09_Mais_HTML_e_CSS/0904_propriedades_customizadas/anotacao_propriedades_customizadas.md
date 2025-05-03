# Propriedades Customizadas

## Propriedades Customizadas
* Também conhecidas como variáveis css (custom properties), permite definirmos valores no CSS que podem ser reutilizados no nosso código.

* A propriedade é herdada pelos elementos filhos. É comum definirmos as mesmas nos elementos :root ou html, assim teremos acesso à propriedade em todos os elementos do site.

### --roxo: #caf
* Define uma propriedade customizada.

### var(--roxo)
* A função var utiliza uma propriedade customizada.

### Exemplo
#### arquivo.html
```
<h1>Nossos Produtos</h1>
<p>
  A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem
  equipada com os melhores acessórios da marca.
</p>

```
#### arquivo.css
```
:root {
  --tamanho-titulo: 3rem;
  --cor-primaria: #84e;
}

h1 {
  font-size: var(--tamanho-titulo);
  color: var(--cor-primaria);
}

p {
  --cor-primaria: #222;
  font-size: calc(var(--tamanho-titulo) / 2);
  color: var(--cor-primaria);
}

```
## prefers-color-scheme
* A @media prefers-color-scheme irá executar o código css conforme a preferência de tema do usuário. Funciona da mesma forma que o @media querie com o max-width, porém agora em relação ao modo escuro (dark) ou claro (light)

### Exemplo
#### arquivo.html
```
<h1>Nossos Produtos</h1>
<p>
  A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem
  equipada com os melhores acessórios da marca.
</p>

```

#### arquivo.css
```
@media (prefers-color-scheme: dark) {
  :root {
    --fundo: #222;
    --texto-1: #eee;
    --texto-2: #bbb;
  }
}

@media (prefers-color-scheme: light) {
  :root {
    --fundo: #fff;
    --texto-1: #111;
    --texto-2: #444;
  }
}

body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  background: var(--fundo);
}

h1 {
  color: var(--texto-1);
}

p {
  color: var(--texto-2);
}

```