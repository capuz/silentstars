---
repo: "sebasgc0399/odd-workspace-template"
name: "odd-workspace-template"
description: "Que tu agente no vuelva a cometer el mismo error: plugin para Claude Code, Codex CLI y gentle-shell que convierte lo que aprendes en chequeos que corren solos."
readmeQualityOk: true
url: "https://github.com/sebasgc0399/odd-workspace-template"
homepage: "https://sebasgc0399.github.io/odd-workspace-template/"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["gentle-hub-project", "claude-code", "claude-code-plugin", "codex-cli", "gentle-shell", "ai-agents", "guardrails"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 10
createdAt: "2026-10-25T01:18:30Z"
lastCommitAt: "2026-11-26T14:31:43Z"
lastReleaseAt: "2026-11-16T21:52:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 66
maintainers: ["sebasgc0399"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1432731138/66971d3d-afd7-4500-9826-9024937de857"
---

# 

**Que tu agente no vuelva a cometer el mismo error.** `odd-ws` es un plugin que convierte lo que le corriges al agente en un proyecto en chequeos que corren solos, en vez de notas que tiene que recordar.

**Funciona con** Claude Code · Codex CLI · gentle-shell (Pi)

**Versión actual:** `0.18.0` ([qué cambió en cada versión](https://github.com/sebasgc0399/odd-workspace-template/blob/HEAD/CHANGELOG.md)).

[Inicio rápido](#inicio-rápido) · [Instalación](#instalación) · [Guía de uso](https://github.com/sebasgc0399/odd-workspace-template/blob/HEAD/Doc/uso.md) · [Página del proyecto](https://sebasgc0399.github.io/odd-workspace-template/) · [La instalación en video](https://youtu.be/-92eWjnwjtw)

## Inicio rápido

Con Claude Code, en tres pasos:

1. **Instala el plugin** desde una carpeta aparte, al lado de tus repos de código (puede estar vacía). Esa carpeta va a ser la instancia.

   ```text
   claude plugin marketplace add sebasgc0399/odd-workspace-template
   claude plugin install odd-ws@odd-workspace-template --scope project
   ```
