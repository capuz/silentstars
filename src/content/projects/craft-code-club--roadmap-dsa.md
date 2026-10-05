---
repo: "craft-code-club/roadmap-dsa"
name: "roadmap-dsa"
description: "Roadmap DSA: Visualização e aprofundamento em cada estrutura de dados"
readmeQualityOk: true
url: "https://github.com/craft-code-club/roadmap-dsa"
homepage: "https://dsa.craftcodeclub.io"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [77]
topics: ["algorithms", "algorithms-and-data-structures", "dsa"]
stars: 20
forks: 3
openIssues: 50
closedIssues: 5
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-08-02T11:46:41Z"
lastCommitAt: "2026-10-05T10:46:30Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 37
maintainers: ["wilsonneto-swe", "dependabot[bot]", "NelsonBN"]
openGraphImageUrl: "https://opengraph.githubassets.com/aafc7e7b8cdc64b31293c0e9ce37bca0bbb6bf9f186b7788198c96c9dfa7c417/craft-code-club/roadmap-dsa"
---

# Roadmap DSA

O maior guia **visual, gratuito e open source** de Algoritmos e Estruturas de Dados em português.
Feito pela comunidade [Craft & Code Club](https://craftcodeclub.io). Cada tópico reúne, numa
página só: o **algoritmo rodando passo a passo**, o **artigo**, o **vídeo**, uma lista de
**problemas** do LeetCode / GeeksforGeeks e **referências**, com o progresso salvo no navegador.

🔗 **A Plataforma:** https://dsa.craftcodeclub.io \
💬 **Comunidade:** [Discord](https://craftcodeclub.io/join) \
▶️ [YouTube](https://www.youtube.com/@CraftCodeClub) \
☕ [Apoie](https://dsa.craftcodeclub.io/apoie)

- **Stack:** Next.js 16 (App Router) + React 19, **SSG puro** (`output: "export"`). Requer Node 22+.
- **Conteúdo:** MDX. As partes dinâmicas (visualizadores, checkboxes) são ilhas client; o resto é estático.

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # gera ./out (site estático)
npm run serve    # serve o ./out localmente
npm test         # testes de navegação (Playwright)
```

## Estrutura

```
content/                    SÓ conteúdo (irmão de src/): dados, artigos e visualizadores
  topicos/<slug>/index.ts   o dado de um tópico:…
