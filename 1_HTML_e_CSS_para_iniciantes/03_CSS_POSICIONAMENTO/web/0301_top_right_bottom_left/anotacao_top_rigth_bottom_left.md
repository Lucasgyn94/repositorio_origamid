# Top, Right, Bottom, Left

## Top, Right, Bottom, Left
* Propriedades como margin, padding e border permitem definirmos valores diferentes para cada um dos lados da caixa (box model).

```
span {
  display: inline-block;
  background: #ddd;
}

.padding {
  padding-top: 20px;
  padding-right: 60px;
  padding-bottom: 40px;
  padding-left: 10px;

```

## inline e block
* Os valores de top, bottom, right e left são relativos ao documento. Para valores relativos a caixa (box) que pode ser influenciada pelo modo de escrita, use inline-start, inline-end, block-start, block-end.

```
body {
  writing-mode: vertical-rl;
}

h1 {
  margin: 0px;
}

.top h1 {
  margin-top: 30px;
```

```
div {
  margin-block-start: 20px; /* top */
  margin-inline-end: 40px; /* right */
  margin-block-end: 80px; /* bottom */
  margin-inline-start: 160px; /* left */
  margin: 20px 40px 80px 160px;
}

```