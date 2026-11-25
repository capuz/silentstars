---
repo: "uiliannn/VItoriaBr"
name: "VItoriaBr"
description: "VItoriaBr - Native Windows Xbox Series X|S runtime & D3D12/DXIL shader translator (PT-BR / EN)"
readmeQualityOk: true
url: "https://github.com/uiliannn/VItoriaBr"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 74
forks: 7
openIssues: 4
closedIssues: 0
watchers: 5
contributors: 55
recentReleases: 0
createdAt: "2026-11-24T10:05:17Z"
lastCommitAt: "2026-11-25T03:13:44Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 60
undervaluedScore: 24
maintainers: ["uiliannn", "Marvisak", "fxceless"]
openGraphImageUrl: "https://opengraph.githubassets.com/3131b164e86da5ac11edd9671752b210077e564e4c4b4a94cb1f46b8c4d20b2d/uiliannn/VItoriaBr"
---

# VItoriaBr

> 🇧🇷 **Português** | [🇺🇸 **English below**](#english)

Camada nativa de execução em Windows para **um título Xbox Series X|S**, rodando diretamente a partir dos arquivos que o próprio usuário possui.

O código x86-64 original do título executa inalterado dentro do nosso processo; o **VItoriaBr** fornece a plataforma Xbox/GDK por baixo e traduz os dados e shaders do console (D3D12.X / GFX10 → D3D12 / DXIL). Veja [docs/architecture.md](https://github.com/uiliannn/VItoriaBr/blob/HEAD/docs/architecture.md).

> **Base e licença:** Fork/continuação baseada no projeto open-source [Marvisak/VIctory](https://github.com/Marvisak/VIctory), com integração das melhorias GPL-3.0 de renderização do mundo 3D, iluminação, relay/VRAM e otimizador DXIL de [fxceless/victory-fork](https://github.com/fxceless/victory-fork), mantido sob a licença **GPL-3.0-or-later** ([LICENSE](https://github.com/uiliannn/VItoriaBr/blob/HEAD/LICENSE)). **Este repositório não contém nem distribui nenhum arquivo de jogo** — todos os caminhos de jogo, cache e dados devem ficar fora do repositório ([docs/asset-policy.md](https://github.com/uiliannn/VItoriaBr/blob/HEAD/docs/asset-policy.md)).

---
