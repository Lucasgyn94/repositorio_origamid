# Estilos do Browser

## Estilos do Browser
### Padrão
* Os browsers possuem um css inicial que é aplicado ao documento.

### h1 vs p
* Por isso quando marcamos um h1 o texto fica maior/negrito em relação a um texto marcado com um p.

## Reset, Reboot e Normalize
* Algumas soluções foram criadas para lidar com os estilos iniciais. O principal objetivo delas é reduzir a inconsistência entre os browsers.

### Reset
* Remove parte dos estilos iniciais
https://meyerweb.com/eric/tools/css/reset/

### Normalize
* Normaliza os estilos iniciais entre os browsers sem remover os mesmos.
https://necolas.github.io/normalize.css/

### Reboot
* É uma mistura de reset e normalize utilizada pelo Bootstrap.
https://raw.githubusercontent.com/twbs/bootstrap/main/dist/css/bootstrap-reboot.css

## inherit (herança)
* Existem propriedades do CSS que são passadas do pai para o filho como uma herança (inherit).

### Exemplos
color, font-size, font-family e outras.

### Padrão vs Herança
* O valor padrão irá escrever por cima da herança. Por isso ao definirmos uma color no body, os <a> não mudam de cor.
- arquivo.html
```
<h1>Curso de HTML</h1>
<p>Cursos de Design</p>
<button>Clique</button>
<div>Cursos de CSS</div>
<a href="/">Curso de JavaScript</a>

```

- arquivo.css
```
body {
  color: seagreen;
  font-size: 20px;
}

a {
  color: inherit;
}

```