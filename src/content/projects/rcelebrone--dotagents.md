---
repo: "rcelebrone/DotAgents"
name: "DotAgents"
description: "Framework agnóstico de orquestração multi-agente para integrar uma squad autônoma de IA (PO, Tech Lead, Dev, QA e Ops) diretamente no seu repositório de software."
readmeQualityOk: true
url: "https://github.com/rcelebrone/DotAgents"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["ai-agents", "ai-developer", "autonomous-agents", "framework", "llm-orchestration", "multi-agent-systems", "prompt-engineering"]
stars: 15
forks: 4
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-04-04T00:05:17Z"
lastCommitAt: "2026-11-03T12:48:07Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 91
undervaluedScore: 35
maintainers: ["rcelebrone"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a7e6b6929ab802405ca2d5fb8d6c67d39d495a10d72445626768e708fe71533/rcelebrone/DotAgents"
---

# DotAgents — Squad Multi-Agente Agnóstica

Framework agnóstico para instalar uma **squad multi-agente** (PO, Architect, Tech Lead, Developer, QA, Security, Ops) em qualquer projeto, de qualquer linguagem. A squad é regida por um **Manager central** com roteamento automático, **gates por artefato verificável** (nenhuma etapa "aconteceu" sem o arquivo que a prova), estados de task auditáveis e uma **memória viva** específica do projeto.

**Versão:** 2.2.0 · **Ferramentas suportadas:** Antigravity (IDE e CLI) · Claude Code · Cursor AI

---

## 🚀 Instalação

Requisitos: `bash` e `git`. Opcional: `python3` ou `jq` (registro automático dos hooks de enforcement).

Clone o repositório (dentro ou fora do seu projeto):

```bash
git clone git@github.com:rcelebrone/DotAgents.git
```

Rode o instalador **a partir da raiz do seu projeto** (ou aponte com `--dest`):

```bash
cd meu-projeto
bash DotAgents/install.sh --claude          # ou --antigravity, ou --cursor
```

| Flag | Efeito |
|---|---|
| `--antigravity` / `--claude` / `--cursor` | Escolhe a ferramenta (sem flag: menu interativo) |
| `--dest <dir>` | Projeto destino (default: diretório atual) |
| `--yes` | Sem confirmações…
