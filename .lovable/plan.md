

# Atualizar ArticlesSection com dados reais do Prof. Marcelo Camurça

## Objetivo
Substituir os artigos placeholder na seção de artigos pelo conteudo real encontrado sobre o Professor Marcelo Ayres Camurça (UFJF).

## Dados reais encontrados

Com base nas buscas realizadas, os seguintes artigos foram identificados:

| # | Titulo | Revista | Ano |
|---|--------|---------|-----|
| 1 | Estilos de Espiritualidade como Criterio para Tipologias e Interpretacoes do Campo Religioso na Contemporaneidade | Ciencias Sociais e Religiao (Porto Alegre) | 2016 |
| 2 | A questao da laicidade no Brasil: mosaico de configuracoes e arena de controversias | Horizonte (PUC Minas) | 2017 |
| 3 | O debate acerca das nocoes de "Intolerancia Religiosa" e "Racismo Religioso" para a compreensao da violencia contra as Religioes Afro-brasileiras | Revista OQ | 2022 |

## Alteracoes

### 1. Atualizar `src/components/ArticlesSection.tsx`
- Substituir o array `articles` com os dados reais acima
- Atualizar os resumos (abstracts) com base nas descricoes encontradas nos PDFs e paginas
- Manter a mesma estrutura visual do componente

### 2. Atualizar `src/components/AboutSection.tsx`
- Atualizar o nome do professor para "Marcelo Ayres Camurca"
- Atualizar a descricao para incluir: Professor Titular UFJF, Departamento de Ciencia da Religiao, pesquisador CNPq, membro do ISER

### 3. Atualizar `src/components/BooksSection.tsx`
- Adicionar os livros reais encontrados:
  - "Ciencias Sociais e Ciencias da Religiao: Polemicas e Interlocucoes" (Paulinas, 2008)
  - "Corpo, Emocao e Rito: Antropologia dos Carismaticos Catolicos"

## Observacao importante

O site do Google Sites do professor bloqueou o acesso automatico, entao a lista de artigos pode estar incompleta. E altamente recomendado que o usuario forneca a lista completa de artigos copiando o conteudo da pagina diretamente no chat para garantir precisao total.

## Detalhes tecnicos

- Apenas os dados dentro dos arrays serao alterados; a estrutura JSX e o estilo permanecem iguais
- Arquivos modificados: `ArticlesSection.tsx`, `AboutSection.tsx`, `BooksSection.tsx`
- Nenhuma dependencia nova necessaria

