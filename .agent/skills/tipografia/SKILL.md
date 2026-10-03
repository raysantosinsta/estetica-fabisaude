---
name: tipografia-clinica-estetica
description: Aplica uma tipografia e um sistema visual premium (Cormorant Garamond + Jost, paleta off-white/dourado/rose) em landing pages, sites e seções de clínicas de estética, beleza, spa, harmonização, dermatologia e cuidados com a pele. Use sempre que o usuário pedir landing page, hero, seção de tratamentos, página de agendamento ou qualquer UI para clínica de estética, mesmo que ele não fale em "tipografia" ou "fonte".
---

# Tipografia para Clínica de Estética

Objetivo: passar **sofisticação, cuidado e confiança**. Serifa elegante nos títulos, sans-serif leve no texto, muito espaço em branco.

## Regras

1. Use apenas **duas famílias**: Cormorant Garamond (títulos) e Jost (texto, botões, rótulos).
2. Nunca use Arial, Roboto, Inter ou fontes do sistema como fonte principal.
3. Carregue só os pesos necessários (Cormorant 500, 600, 500 itálico; Jost 400, 500, 600).
4. Não use negrito pesado nos títulos: pesos 500 a 600 bastam.
5. Todo título principal (h1) deve ter **uma palavra em itálico** (`<em>`) para dar toque editorial. Ex.: "Realce sua beleza <em>natural</em>".
6. Acima dos títulos de seção, use um rótulo pequeno (`.eyebrow`) em caixa alta com espaçamento largo. Ex.: "TRATAMENTOS FACIAIS".
7. Espaçamento vertical entre seções: 80 a 120px (`clamp(5rem, 10vw, 7.5rem)`).
8. Tamanhos sempre com `clamp()` para escalar no mobile.

## Fontes (colocar no `<head>`)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Jost:wght@400;500;600&display=swap" rel="stylesheet">
```

## CSS base

```css
:root {
  --font-title: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'Jost', system-ui, sans-serif;

  --bg: #FAF6F2;
  --text: #3A3330;
  --accent: #C9A27E;      /* dourado suave */
  --accent-alt: #B76E79;  /* rose, alternativa ao dourado */
  --soft: #EADBD0;

  --section-space: clamp(5rem, 10vw, 7.5rem);
}

body {
  font-family: var(--font-body);
  font-size: clamp(16px, 1.1vw + 12px, 18px);
  line-height: 1.7;
  color: var(--text);
  background: var(--bg);
}

h1, h2, h3 {
  font-family: var(--font-title);
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.1;
}

h1 { font-size: clamp(2.6rem, 6vw, 4.8rem); }
h2 { font-size: clamp(2rem, 4vw, 3.2rem); }
h3 { font-size: clamp(1.4rem, 2.2vw, 1.8rem); }

h1 em, h2 em { font-style: italic; font-weight: 500; color: var(--accent); }

.eyebrow, .btn {
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.eyebrow { color: var(--accent); margin-bottom: 1rem; display: block; }

.btn {
  display: inline-block;
  padding: 1rem 2rem;
  background: var(--text);
  color: var(--bg);
  border-radius: 999px;
  transition: background .3s ease;
}
.btn:hover { background: var(--accent); }

section { padding-block: var(--section-space); }
```

## Como aplicar

1. Se o projeto já existe, substitua as fontes atuais por estas variáveis e ajuste os seletores de título, texto, botões e rótulos.
2. Se for um projeto novo, comece com o CSS base acima e construa as seções em cima dele.
3. Em Tailwind: registre `--font-title` e `--font-body` em `fontFamily` no `tailwind.config` (ex.: `title` e `body`) e as cores em `colors`.
4. Em Next.js: prefira `next/font/google` com `Cormorant_Garamond` e `Jost` em vez do `<link>`, usando `display: 'swap'` e só os pesos listados.

## Variação mais acolhedora

Se o cliente pedir algo menos "luxo clássico" e mais próximo do público, troque por **Fraunces** (títulos) + **DM Sans** (texto) mantendo as mesmas regras e a mesma paleta.

## Checklist final

- [ ] Só duas famílias carregadas, com pesos mínimos
- [ ] h1 com uma palavra em itálico
- [ ] Rótulos `.eyebrow` acima dos títulos de seção
- [ ] Tamanhos com `clamp()`, testado no mobile
- [ ] Espaço em branco generoso entre seções
- [ ] Contraste do texto legível sobre o fundo (texto escuro sobre `#FAF6F2`)
