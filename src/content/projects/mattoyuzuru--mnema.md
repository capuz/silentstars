---
repo: "MattoYuzuru/Mnema"
name: "Mnema"
description: "Web application for effective memorization of information using interactive maps"
originalDescription: "Веб-приложение для эффективного запоминания информации с помощью интерактивных карт"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/MattoYuzuru/Mnema"
homepage: "https://mnema.app"
language: "Java"
languages: ["Java", "TypeScript"]
languagePcts: [55, 30]
topics: ["angular", "docker", "flashcards", "fsrs", "k8s", "nginx", "postgresql", "redis", "oauth2", "springboot"]
stars: 5
forks: 0
openIssues: 70
closedIssues: 200
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-10-06T06:34:57Z"
lastCommitAt: "2026-10-15T08:32:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 94
undervaluedScore: 78
maintainers: ["MattoYuzuru"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca72935ac291c23fa9cfc080d09b3ecdf6981dcaccb866aea005bc65a5edc48e/MattoYuzuru/Mnema"
---

# Mnema

Mnema helps you learn from your own materials. You save a summary, a word, or a fragment of text as a `LearningItem`, turn it into exercises, and work through them in study sessions. A repetition schedule explains why material came back today.

The repository is a new implementation of the product that fully replaced the first version. Old APIs, `/v2` routes, dual read and write, and backward compatibility with v1 are not supported.

## What already works

- **Accounts.** The Identity & Account service: registration, sign-in via OAuth 2.0/OIDC with PKCE, sessions, profile, avatar, and account deletion.
- **Materials.** The Learning API stores private decks and their `LearningItem`s with immutable revisions. The editor supports text, images, audio, video, YouTube, Mermaid, and tables, drafts, and quick notes (Capture).
- **Exercises.** Seven mechanics: recall and self-check (`SELF_CHECK`), free-response input (`FREE_RESPONSE`), cloze fill-in-the-blanks (`CLOZE`), multiple choice (`CHOICE`), matching (`MATCH`), ordering (`ORDER`), and categorizing into groups (`CATEGORIZE`). The prompt, options, and items can combine text and media. The author writes an exercise on a single…
