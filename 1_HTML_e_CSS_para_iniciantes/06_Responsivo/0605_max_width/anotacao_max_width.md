# max-width

## max-width
* O max-width determina um valor máximo de largura do elemento. Não deixe os elementos livres na tela, principal os textos.

### ch
* Unidade relacionada à largura do caractere 0 da tipografia.

### Largura do texto
* Controlar o tamanho máximo da largura do texto é essencial para garantir uma boa leiturabilidade. Para corpo de texto entre 50-75 caracteres é o ponto ideal.

### margin: 0 auto;

margin top e bottom 0. margin left e right auto (automática, define valores iguais com base no espaço em branco e alinha o conteúdo ao centro).

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

- arquivo.css:
```
img {
  max-width: 100%;
  display: block;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.cover img {
  height: 100%;
  object-fit: cover;
  object-position: top left;
}

.texto {
  align-self: center;
}

.texto p {
  max-width: 60ch;
}

```