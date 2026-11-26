---
repo: "lfpoulain/ragator"
name: "ragator"
description: "Posez vos questions à une chaîne YouTube : réponses citées à l'instant près (BM25 + vecteurs, OpenRouter), interface web, CLI et MCP"
readmeQualityOk: true
url: "https://github.com/lfpoulain/ragator"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["docker", "mcp", "openrouter", "paradedb", "pgvector", "rag", "search", "youtube"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-11-17T16:32:50Z"
lastCommitAt: "2026-11-26T15:25:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 17
maintainers: ["lfpoulain"]
openGraphImageUrl: "https://opengraph.githubassets.com/5bb40c0d8b74a6d47a1ec9d57702f4ca3169941107d15ca7d569fae1dc0311f8/lfpoulain/ragator"
---

Ragator indexe les transcriptions et les descriptions visuelles des vidéos d'une ou plusieurs chaînes YouTube, puis répond aux questions en langage naturel en **citant chaque affirmation au timecode près**. Quand les vidéos ne contiennent pas la réponse, il le dit au lieu d'inventer.

- 🏠 **Inférence locale** : Qwen et le juge Aplomb utilisent la carte graphique, pplx-embed utilise le processeur. Une fois les modèles installés, vos questions et vos vidéos sont traitées par les serveurs que vous avez choisis.
- ☁️ **Ou OpenRouter**, sans carte graphique : un clic dans les Réglages pour changer de mode, sans réindexer.
- 🎯 **Réponses citées** : chaque phrase renvoie au moment exact de la vidéo, vérifié par le code.
- 🔎 **Recherche hybride** : mots exacts (BM25 : marques, noms propres, fautes de frappe) et sens (vecteurs).
- 🧭 **Plusieurs types de questions** : précises, générales, décomptes, « la première fois que… ».
- **Inventaire des modèles essayés.** « Quelles imprimantes 3D ont-ils testées ? » retrouve les références et le minutage de leurs essais. La première lecture peut prendre plusieurs minutes. Sa durée et son coût avec OpenRouter dépendent du nombre d’épisodes relus.
