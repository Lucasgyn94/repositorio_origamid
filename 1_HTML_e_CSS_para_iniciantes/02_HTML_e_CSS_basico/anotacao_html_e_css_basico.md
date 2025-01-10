# Estrutura HTML

# Anatomia html

## Tag
* As tag's (etiqueta) servem para marcarmos o conteúdo no HTML. Geralmente abrimos <a> e fechamos </a> após o conteúdo.
* case insensitive, mas é boa prática escrever com minúscula <html>

## Atributo
* Os atributos dão informações extras sobre uma tag para o browser.
* case insensitive o nome do atributo. case sensitive o valor do atributo.

**Exemplo**
<a href="https://google.com.br">conteudo</a>

## Tag

### Conteúdo
* As tags servem para inserirmos conteúdos como textos, imagens, vídeos e outros. Além da dar informações para o browser como o título do site, linguagem e outras.

### Semântica

* Dar sentido ao conteúdo, a escrita de um documento semântico beneficia principalmente leitores de tela (acessibilidade) e leitores de códigos (robôs como o do Google).

### Interação com CSS e JavaScript

* Através das marcações das tags que conseguimos selecionar elementos para mudarmos o seu estilo ou comportamento.

# Tags Iniciais

## p
* Marca um parágrafo.

## h1, h2, h3, h4, h5, h6
* Marcam diferentes níveis de títulos.

## a
Marca um link.

```
<h1>Cursos Online de HTML e CSS</h1>

<h2>HTML</h2>
<p>Curso de HTML, aprenda do zero.</p>
<a href="/html">Curso de HTML</a>

<h2>CSS</h2>
<p>Curso de CSS, aprenda do zero.</p>
<a href="/css">Curso de CSS</a>
```


## Tag dentro de Tag
* A primeira que abre será sempre a última a fechar.

<p>Entre no meu site: <a href="https://www.origamid.com">origamid.com</a></p>


# Open Settings (JSON)
{
  "workbench.colorTheme": "Origamid Next",
  "workbench.iconTheme": "origamid-next-icons",
  "editor.fontSize": 16,
  "editor.lineHeight": 1.75,
  "editor.tabSize": 2,
  "workbench.startupEditor": "newUntitledFile",
  "editor.wordWrap": "on",
  "editor.minimap.renderCharacters": false,
  "telemetry.telemetryLevel": "off",
  "security.workspace.trust.untrustedFiles": "open",
  "breadcrumbs.filePath": "off",
  "outline.icons": false,
  "liveServer.settings.donotShowInfoMsg": true,
  "liveServer.settings.donotVerifyTags": true,
  "editor.formatOnSave": true,
  "html.format.wrapAttributes": "auto",
  "html.format.wrapLineLength": 0,
  "html.autoClosingTags": false,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "editor.bracketPairColorization.enabled": false
}
