# Formulários

## form

### form
* A tag form é utilizada para envolver os campos de um formulário.

### action=""
* O atributo action indica o arquivo/url que será ativado ao enviarmos o formulário.

### method=""
* POST (envio de informações) e GET (busca de informações).

### Exemplo
* arquivo.html:
```
<form action="/" method="POST">
  <div>
    <label for="nome">Nome</label>
    <input type="text" id="nome" name="nome" />
  </div>
</form>
```

* arquivo.css:
```
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
}

label {
  display: block;
  margin-bottom: 10px;
}

input {
  font-size: 1.2rem;
  padding: 10px;
  margin-bottom: 30px;
}

```

## input
### input
* Campo mais comum de formulário, possui diferentes tipos.

### type=""
* Define o tipo. text, checkbox, radio, email, file e outros.

### name=""
* Define um nome único para o formulário. É utilizado pelo JavaScript ou Back End para puxarmos o valor do campo do formulário.

### label
* Define o rótulo do formulário. for="" relaciona a label e o id="" do formulário.

### Exemplo
* arquivo.html:
```
<form>
  <div>
    <label for="usuario">Usuário</label>
    <input type="text" id="usuario" name="usuario" />
  </div>
  <div>
    <label for="senha">Senha</label>
    <input type="password" id="senha" name="senha" />
  </div>
</form>
```

* arquivo.css:
```
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
}

label {
  display: block;
  margin-bottom: 10px;
}

input {
  font-size: 1.2rem;
  padding: 10px;
  margin-bottom: 20px;
}

```

## button
### button
* Cria um botão, utilizado para diferentes interações na página.

### form > button
* Button dentro de form envia/ativa a action do form.

### Exemplo
* arquivo.html
```
<button>Enviar</button>

<button class="comprar">Compre Hoje</button>
```

* arquivo.css
```
.comprar {
  margin-top: 30px;
  display: block;
  font-size: 1.2rem;
  padding: 10px 20px;
  background: #caf;
  border: none;
  border-radius: 4px;
  color: #217;
  cursor: pointer;
}
```

## Atributos

### placeholder=""
* Texto quando o formulário não está preenchido. (dica de preenchimento)

### required
* Define o input como obrigatório.

### disabled
* Desabilita o input.

### minlength e maxlength
* Mínimo e máximo de caracteres.

### value
* Valor inicial do formulário.

### Exemplo
* arquivo.html
```
<div>
  <label for="email">Email</label>
  <input
    type="email"
    id="email"
    name="email"
    required
    placeholder="nome@email.com"
  />
</div>

<div>
  <label for="senha">Senha</label>
  <input type="password" id="senha" name="senha" required minlength="3" />
</div>

```

* arquivo.css
```
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
}

label {
  display: block;
  margin-bottom: 10px;
}

input {
  font-size: 1.2rem;
  padding: 10px;
  margin-bottom: 20px;
}

```
## checkbox e radio

### checkbox
* Caixa que pode ser marcada/desmarcada.

### radio
* Grupo de inputs com base no mesmo name, apenas um pode ser selecionado.

* arquivo.html
```
<div class="checkbox">
  <input type="checkbox" id="marketing" name="marketing" value="marketing" />
  <label for="marketing">Desejo receber avisos de promoções.</label>
</div>
<div class="checkbox">
  <input type="checkbox" id="termos" name="termos" value="termos" />
  <label for="termos">Li os termos e condições.</label>
</div>

<p>Entrega:</p>
<div class="radio">
  <input type="radio" id="retirada" name="retirada" />
  <label for="retirada">Retirar no local.</label>
</div>
<div class="radio">
  <input type="radio" id="entrega" name="retirada" />
  <label for="entrega">Entrega em casa.</label>
</div>

```

* arquivo.css
```
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
}

label {
  display: block;
  margin-bottom: 10px;
}

input {
  font-size: 1.2rem;
  padding: 10px;
  margin-bottom: 30px;
}

.checkbox,
.radio {
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  gap: 10px;
  margin-bottom: 10px;
}

.checkbox label,
.radio label {
  margin: 0px;
}

.checkbox input,
.radio input {
  width: 20px;
  height: 20px;
  margin: 0px;
}

```

## select

### select
* Campo de seleção com diferentes opções (option).

### option
* Opções do campo de seleção.


### Exemplo
* arquivo.html
```
<label for="parcelas">Parcelas</label>
<select name="parcelas" id="parcelas">
  <option value="1x">1x de R$ 1200</option>
  <option value="3x">3x de R$ 400</option>
  <option value="6x">6x de R$ 200</option>
  <option value="12x">12x de R$ 100</option>
</select>

```

* arquivo.css
```
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
}

label {
  display: block;
  margin-bottom: 10px;
}

select {
  font-size: 1.2rem;
  padding: 10px;
  margin-bottom: 30px;
}

```

## textarea

### textarea
* Área de texto, para valores que ocupem mais de uma linha.

### rows=""
* Indica o tamanho de linhas visíveis.

### Exemplo
* arquivo.html
```
<label for="mensagem">Mensagem</label>
<textarea id="mensagem" name="mensagem" rows="5"></textarea>

```

* arquivo.css
```
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
}

label {
  display: block;
  margin-bottom: 10px;
}

textarea {
  font-size: 1.2rem;
  padding: 10px;
  margin-bottom: 30px;
}

```

/*

### Exemplo
* arquivo.html
```

```

* arquivo.css
```

```

*/
