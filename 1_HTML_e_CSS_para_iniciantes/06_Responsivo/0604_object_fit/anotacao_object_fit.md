# Object Fit

## object-fit
* Preenche o elemento pai com a imagem, sem distorcer a mesma.

### object-fit

Funciona como o background-size. Contém valores como cover, contain, fill.

### object-position

Posiciona o objeto, indicando como ele deve ser cortado. top left, top center


### Exemplo

- arquivo.html
```
<div class="grid">
  <div class="cover">
    <img src="./img/bicicleta.jpg" alt="Bicicleta" />
  </div>
  <div class="texto">
    <p>
      A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem
      equipada com os melhores acessórios, o que garante maior velocidade.
    </p>
    <p>
      A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem
      equipada com os melhores acessórios, o que garante maior velocidade.
    </p>
  </div>
</div>

```

- arquivo.css

```
img {
  max-width: 100%;
  display: block;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.cover img {
  height: 100%;
  object-fit: cover;
  object-position: top center;
}

.texto {
  align-self: center;
}

p {
  font-size: 2rem;
}


```