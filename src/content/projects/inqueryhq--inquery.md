---
repo: "inqueryhq/inquery"
name: "inquery"
description: "AI-powered database query assistant that converts natural language to SQL"
readmeQualityOk: true
url: "https://github.com/inqueryhq/inquery"
language: "Java"
languages: ["Java", "Svelte"]
languagePcts: [72, 20]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-02T09:15:10Z"
lastCommitAt: "2026-11-19T05:07:27Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 9
maintainers: ["jeonghyeondang-da"]
openGraphImageUrl: "https://opengraph.githubassets.com/50b68faf5f39b14b59b18d702696d558598041c74f4c5f18af13ba3a60e16dc1/inqueryhq/inquery"
---

# Inquery

AI-powered database query assistant that converts natural language to SQL.

**Repository:** [github.com/inqueryhq/inquery](https://github.com/inqueryhq/inquery)

## Demo

All demos run against the bundled **Sample E-Commerce DB**. Waiting for the model is sped up and marked in the caption.

### AI Chat

Ask in natural language. Inquery looks up the official metric definition, writes and runs SQL, then returns the SQL, the result table, a chart, and an explanation whose numbers come from the result.

### Numbers you can trust

Some columns must never be summed: a monthly distinct-customer count added across months counts the same customer many times. Inquery checks generated SQL against the catalog before running it and rewrites it, so the answer is 29 customers, not 50.

### Glossary & metric definitions

Map abbreviations and nicknames to the exact values stored in your data, and register official metric definitions. Definitions are checked against the real table columns when saved, and AI Chat computes those metrics exactly as defined.
