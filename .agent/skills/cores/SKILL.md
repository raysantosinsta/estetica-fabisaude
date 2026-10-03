---
name: cores-ux-estetica
description: Aplica princípios avançados de UX/UI e paletas de cores premium para interfaces de clínicas de estética, spas e saúde. Garante acessibilidade, hierarquia visual correta e resolve problemas de contraste e legibilidade sem quebrar o design system atual.
---

# Especialista em Cores e UX/UI para Estética

Objetivo: Criar uma interface harmônica, acessível e luxuosa. Quando as cores "não dão certo", geralmente é problema de **contraste** (ex: texto claro em fundo claro) ou **quebra de variáveis do Tailwind**.

## Princípios de Cores (A Paleta Premium)

Para que o projeto fique perfeito, precisamos manter os nomes das variáveis que o Tailwind já usa, mas com tons refinados:

1. **Background (Fundo)**:
   - Off-white muito suave para não cansar a vista: `--brand-offwhite: #FAF6F2;`
   - Branco puro para cards (trazendo respiro): `#FFFFFF`

2. **Textos e Contraste**:
   - Em vez de cinzas genéricos (zinc), devemos garantir que o texto principal seja um tom chumbo/marrom elegante: `--foreground: #3A3330;`
   
3. **Accent (Acento/Destaque)**:
   - Rose Gold (Principal): `--brand-rosegold: #B76E79;`
   - Dourado (Secundário): `--brand-gold: #C9A27E;`

## Regras de Ouro de UX/UI (Por que cores dão errado?)

1. **O Problema do Contraste no Botão**: 
   - ⚠️ **Erro comum**: Colocar texto branco (`#FFF`) sobre o botão dourado claro (`#C9A27E`). O contraste falha e o botão fica "lavado".
   - ✅ **A Solução (Botão Escuro)**: Use a cor primária mais escura (ex: `--brand-rosegold` ou um `--brand-rosegold-dark: #9A5C66;`) para o fundo do botão principal, garantindo que o **texto branco brilhe com alto contraste**.

2. **Hierarquia de Ações (Botões)**:
   - **Primary Action (CTA Principal)**: Fundo preenchido com a cor de destaque escura e texto claro. Ex: `.btn { background: var(--brand-rosegold); color: #FFF; }`
   - **Secondary Action**: Fundo transparente, apenas com borda (Outline). Ex: `.btn-outline { border: 1px solid var(--brand-rosegold); color: var(--brand-rosegold); }`

3. **Sombras (Shadows)**:
   - Sombras escuras ou duras matam o design premium.
   - Use sombras muito difusas e coloridas com a cor do tema. Exemplo: `box-shadow: 0 10px 40px rgba(183, 110, 121, 0.15);` (sombra rose gold difusa).

4. **Integração Tailwind Segura**:
   - Nunca apague as variáveis originais de `--brand-*` que o layout usa. Atualize apenas os *valores hexadecimais* para os tons premium sugeridos aqui.

## CSS Base de Cores para o globals.css

Use esta estrutura exata para não quebrar a página atual, apenas embelezá-la:

```css
:root {
  --background: #FAF6F2;
  --foreground: #3A3330;
  
  --brand-offwhite: #FAF6F2;
  --brand-rosegold: #B76E79;
  --brand-rosegold-dark: #9A5C66;
  --brand-gold: #C9A27E;
  --brand-gold-dark: #A88258;
  
  --brand-accent-1: #EADBD0;
  --brand-accent-2: #E5DDD5;
}

/* Padronização de Botões Premium */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  background-color: var(--brand-rosegold);
  color: #FFFFFF !important;
  border-radius: 9999px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(183, 110, 121, 0.2);
}
.btn:hover {
  background-color: var(--brand-rosegold-dark);
  box-shadow: 0 15px 40px rgba(183, 110, 121, 0.3);
  transform: translateY(-2px);
}
```

## Checklist de Revisão UX
- [ ] O texto branco no botão tem contraste suficiente com o fundo Rose Gold?
- [ ] As variáveis antigas `--brand-rosegold` não foram deletadas do globals.css?
- [ ] A página ficou mais elegante sem perder as cores originais?
