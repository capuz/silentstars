---
repo: "deckflow/deckuse"
name: "deckuse"
description: "💻 A local-first structural editing engine for PPTX files."
readmeQualityOk: true
url: "https://github.com/deckflow/deckuse"
homepage: "https://deckflow.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["agent", "deck", "office", "pptx"]
stars: 105
forks: 8
openIssues: 0
closedIssues: 7
watchers: 6
contributors: 4
recentReleases: 0
createdAt: "2026-03-30T10:43:54Z"
lastCommitAt: "2026-11-05T14:03:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 37
maintainers: ["zhaoxiongfei"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c10669f05773d58bd24e2dd79440880db3364110a2813abdcd8e94e6cafdc09/deckflow/deckuse"
discussionCount: 1
---

# Deckuse

[English](https://github.com/deckflow/deckuse/blob/HEAD/README.md) · [简体中文](https://github.com/deckflow/deckuse/blob/HEAD/README.zh-CN.md) · [Français](https://github.com/deckflow/deckuse/blob/HEAD/README.fr.md) · [日本語](https://github.com/deckflow/deckuse/blob/HEAD/README.ja.md) · [한국어](https://github.com/deckflow/deckuse/blob/HEAD/README.ko.md) · [Русский](https://github.com/deckflow/deckuse/blob/HEAD/README.ru.md) · [Español](https://github.com/deckflow/deckuse/blob/HEAD/README.es.md) · [Português](https://github.com/deckflow/deckuse/blob/HEAD/README.pt-BR.md)

Deckuse is a local-first, schema-driven Office document automation engine for coding agents. It turns document editing into an explicit, reviewable workflow: open a versioned workspace, inspect and target its structure, apply JSON commands, validate the result, and export a new document.

The engine is built around format adapters. PPTX and DOCX are implemented. XLSX, Keynote, and Numbers adapters return `FORMAT_NOT_IMPLEMENTED` today, so agents fail clearly instead of silently producing unsafe edits.
Deckuse is a local-first, schema-driven Office document automation engine for coding agents. It opens a…
