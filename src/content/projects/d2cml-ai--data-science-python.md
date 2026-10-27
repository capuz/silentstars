---
repo: "d2cml-ai/Data-Science-Python"
name: "Data-Science-Python"
description: "This is a course in Data Science with Python"
readmeQualityOk: true
url: "https://github.com/d2cml-ai/Data-Science-Python"
homepage: "https://d2cml-ai.github.io/Data-Science-Python/2026-II"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [80]
stars: 16
forks: 18
openIssues: 28
closedIssues: 6
watchers: 0
contributors: 45
recentReleases: 0
createdAt: "2025-03-19T02:13:57Z"
lastCommitAt: "2026-10-27T12:39:27Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 77
undervaluedScore: 73
maintainers: ["alexanderquispe", "The-Paul2002", "jeanpool1415"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ba4ce58cfa4f93f1ddcb7d215015fbde1861254f11936ff6d73b7412a53e56c/d2cml-ai/Data-Science-Python"
---

# Ciencia de Datos con Python — UP 2026-II

Material del curso. Una carpeta por tema del sílabo, en `sessions/`.

## Montar el entorno

```bash
uv sync --group geo      # solo lo que necesita la sesión de geoespacial
uv sync --all-groups     # todo el curso
uv run jupyter lab
```

Las versiones exactas están fijadas en `uv.lock`. No hace falta activar nada:
`uv run` se encarga.

## Sesiones

| # | Tema | Grupo de dependencias |
|---|------|----------------------|
| 01 | Ciencia de datos, Git y agentes de código | — |
| 02 | Fundamentos de Python | — |
| 03 | Web Scraping y APIs | `scraping` |
| 04 | MCPs en Claude Code | `llm` |
| 05 | Visualización y dashboards | `deploy` |
| 06 | Análisis geoespacial | `geo` |
| 07 | Datos raster | `raster` |
| 08 | LLMs, salidas estructuradas y RAG | `llm` |
| 09 | Hugging Face y fine-tuning | `hf` |
| 10 | Document AI y voz | `docai` |
| 11 | Agentes | `agents` |
| 12 | Despliegue y evaluación | `deploy` |
| 13 | De la voz al texto con modelos abiertos | `audio` |
| 15 | Del texto a tu voz: reels con modelos abiertos | entorno propio (ver su README) |

## Datos

No se versionan. Se descargan desde Hugging Face:

```bash
uv run python…
