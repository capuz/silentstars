---
repo: "SaimoTV/SaimoRoku"
name: "SaimoRoku"
description: "Saimo TV nativo para Roku (BrightScript / SceneGraph)"
readmeQualityOk: true
url: "https://github.com/SaimoTV/SaimoRoku"
language: "Brightscript"
languages: ["Brightscript"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-10-30T13:44:40Z"
lastCommitAt: "2026-11-23T12:23:17Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 46
maintainers: ["gabrielsaimo"]
openGraphImageUrl: "https://opengraph.githubassets.com/dee8bdf475d324407eb4d5ed08f33384ab42ac5e3f253a2a8768c52f7d84e5c9/SaimoTV/SaimoRoku"
---

# Saimo TV para Roku (v2.6.4)

Aplicativo oficial 100% nativo para TVs e dispositivos Roku, desenvolvido em **BrightScript** e **SceneGraph** para máxima performance, baixíssimo consumo de memória e resposta instantânea ao controle remoto.

## Recursos
- **Paridade 1:1 com Android TV Box:**
  - **Ao Vivo:** Zapping rápido (Cima/Baixo), teclado numérico direto (0-9), mini ZapHUD com programação EPG, Drawer lateral de canais (tecla OK) e Bloqueio Parental.
  - **Início (Home):** Hero banner com reprodução em 1 clique e trilhos dinâmicos ("Continuar Assistindo", "Destaques", "Ao Vivo Agora").
  - **Acervo (VOD):** Filtros rápidos por Filmes, Séries, Animes e Doramas com navegação fluida em grade de pôsteres acelerada por GPU.
  - **Filtros do On Demand:** fileira "Filtros" (Gênero, Ano, Idade, Nota, Ordem, Limpar) abrindo uma lista de opções; o resultado vem do `roku/filtros-<categoria>.txt` do catálogo, lido uma vez por uma tarefa (`FiltroTask`) que fica aberta esperando pedidos.
  - **Ficha Técnica:** Sinopse, ano, nota TMDB, áudio/legendas, e seletor de temporadas/episódios para séries.
