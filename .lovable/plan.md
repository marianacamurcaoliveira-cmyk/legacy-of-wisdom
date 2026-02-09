

# Atualizar foto, titulo e imagem hero do site

## Alteracoes

### 1. Adicionar foto do professor ao projeto
- Copiar a imagem enviada (`user-uploads://image.png`) para `src/assets/professor-marcelo.jpg`
- Esta foto sera usada na secao "Sobre" do site

### 2. Substituir imagem de fundo do Hero
- Gerar uma nova imagem de fundo mais adequada para o hero (abstrata, academica, com livros/tons quentes) para substituir a atual `src/assets/hero-bg.jpg` que esta com uma "imagem estranha"
- Alternativa: usar um fundo com gradiente solido elegante em tons marrom/dourado sem imagem

### 3. Atualizar titulo do site (aba do navegador)
- Alterar `index.html`: titulo de "Lovable App" para "Prof. Marcelo Camurca"
- Atualizar meta tags (og:title, description) para refletir o professor

### 4. Adicionar foto na secao Sobre
- Atualizar `src/components/AboutSection.tsx` para incluir a foto do professor ao lado do texto biografico, substituindo ou complementando a area de estatisticas

### 5. Atualizar Header
- Mudar "Prof. Scholar" para "Prof. Camurca" no logo do header (`src/components/Header.tsx`)

## Detalhes tecnicos

- Arquivos modificados: `index.html`, `src/components/AboutSection.tsx`, `src/components/Header.tsx`, `src/components/HeroSection.tsx`
- Arquivo adicionado: `src/assets/professor-marcelo.jpg`
- Arquivo substituido: `src/assets/hero-bg.jpg` (nova imagem gerada)
- Nenhuma dependencia nova necessaria

