---
repo: "LIXBON-FOUNDER/Lixbon"
name: "Lixbon"
description: "LLMs auto-hospedados en un clúster GPU distribuido: gateway compatible con OpenAI, web, desktop, CLI y móvil."
readmeQualityOk: true
url: "https://github.com/LIXBON-FOUNDER/Lixbon"
homepage: "https://lixbon.com"
language: "JavaScript"
languages: ["JavaScript", "Rust"]
languagePcts: [39, 30]
topics: ["ai-agents", "fastapi", "golang", "llm", "ollama", "openai-api", "react", "self-hosted", "tauri"]
stars: 5
forks: 0
openIssues: 3
closedIssues: 23
watchers: 0
contributors: 7
recentReleases: 10
createdAt: "2026-04-28T20:50:30Z"
lastCommitAt: "2026-10-24T00:15:48Z"
lastReleaseAt: "2026-10-11T08:58:50Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 66
maintainers: ["gabriel-DgMr", "Gabriel-Dmrl", "SaretoTiyer"]
openGraphImageUrl: "https://opengraph.githubassets.com/6009aaf877a15a6444f69ac822d61dbe0e32c975562bbbb2062a3af1eb77be7d/LIXBON-FOUNDER/Lixbon"
---

# LIXBON

**Modelos LLM auto-hospedados sobre un clúster GPU distribuido, con API compatible con OpenAI y clientes web, escritorio, CLI y móvil.**

[lixbon.com](https://lixbon.com) · [Arquitectura](https://github.com/LIXBON-FOUNDER/Lixbon/blob/HEAD/docs/ARQUITECTURA.md) · [Contribuir](https://github.com/LIXBON-FOUNDER/Lixbon/blob/HEAD/CONTRIBUTING.md) · [Seguridad](https://github.com/LIXBON-FOUNDER/Lixbon/blob/HEAD/SECURITY.md) · [Toda la documentación](https://github.com/LIXBON-FOUNDER/Lixbon/blob/HEAD/docs/README.md)

---

## Índice

1. [Qué es lixbon](#qué-es-lixbon)
2. [Productos](#productos)
3. [Estructura del repositorio](#estructura-del-repositorio)
4. [Arranque rápido](#arranque-rápido)
5. [Añadir un nodo GPU](#añadir-un-nodo-gpu)
6. [Usar la API](#usar-la-api)
7. [Tests](#tests)
8. [Despliegue](#despliegue)
9. [Documentación](#documentación)

## Qué es lixbon

Un **gateway** central (FastAPI) recibe todas las peticiones, autentica al
usuario (cuenta web o API key `lixbon_sk_`), aplica los límites de su plan y
enruta la inferencia al mejor **nodo GPU** disponible. Cada nodo corre Ollama
detrás de un `node_agent` que se conecta al gateway por WebSocket saliente, así
que una…
