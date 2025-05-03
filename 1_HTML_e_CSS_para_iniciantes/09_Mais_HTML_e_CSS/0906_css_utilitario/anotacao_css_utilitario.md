# CSS Utilitário

## CSS Utilitário
* Uso de classes com propriedades pré-definidas, geralmente utilizado em bibliotecas de CSS como Bootstrap e Tailwind.

### Exemplo
#### arquivo.html
```
<h1 class="titulo">Nossos Produtos</h1>

<h1 class="texto-grande cor-primaria bg-escuro p-1 br">Nossos Produtos</h1>

```

#### arquivo.css
```
/* CSS */
.titulo {
  font-size: 40px;
  line-height: 50px;
  color: #a8f;
  background: #111;
  padding: 10px;
  border-radius: 5px;
}

/* CSS Utilitário */
.texto-grande {
  font-size: 40px;
  line-height: 50px;
}

.cor-primaria {
  color: #a8f;
}

.bg-escuro {
  background: #111;
}

.p-1 {
  padding: 10px;
}

.p2 {
  padding: 20px;
}

.br {
  border-radius: 5px;
}

```

## Bibliotecas
### Bootstrap
* https://getbootstrap.com/

### Tailwind
* https://tailwindcss.com/