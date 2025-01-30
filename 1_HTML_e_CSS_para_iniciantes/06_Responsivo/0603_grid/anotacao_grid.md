# Grid

## repeat(auto-fit)
* O repeat com auto-fit irá gerar o total de colunas que forem necessárias para preencher a área.

### Exemplo
- arquivo.html
```
<div class="minmax">
  <img src="./img/bicicleta.jpg" alt="Bicicleta" />
  <p>
    A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem
    equipada com os melhores acessórios, o que garante maior velocidade.
  </p>
</div>

<div class="galeria">
  <img src="./img/bicicleta.jpg" alt="Bicicleta" />
  <img src="./img/bicicleta.jpg" alt="Bicicleta" />
  <img src="./img/bicicleta.jpg" alt="Bicicleta" />
  <img src="./img/bicicleta.jpg" alt="Bicicleta" />
  <img src="./img/bicicleta.jpg" alt="Bicicleta" />
  <img src="./img/bicicleta.jpg" alt="Bicicleta" />
  <img src="./img/bicicleta.jpg" alt="Bicicleta" />
  <img src="./img/bicicleta.jpg" alt="Bicicleta" />
</div>

```

- arquivo.css
```
.minmax {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.galeria {
  grid-template-columns: repeat(auto-fit, 150px);
}

div {
  display: grid;
  gap: 1rem;
  margin-bottom: 1rem;
}

img {
  max-width: 100%;
  display: block;
}

p {
  font-size: 2rem;
}

```

## order
* É possível mudar a ordem visual dos elementos na tela. Importante a ordem semântica (leitura da tela), não é afetada pelo order.

### Exemplo
- arquivo.html
```
<div>
  <img src="./img/bicicleta.jpg" alt="Bicicleta" />
  <p>
    A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem
    equipada com os melhores acessórios, o que garante maior velocidade.
  </p>
</div>

```

- arquivo.css
```
div {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

@media (min-width: 300px) {
  div img {
    order: 2;
  }
}

img {
  max-width: 100%;
  display: block;
}

p {
  font-size: 2rem;
}


```