---
repo: "ArvorCo/PNAD"
name: "PNAD"
description: "Brasil-CLI is a PNAD-based statistics software that helps explaining the current state of the country"
readmeQualityOk: true
url: "https://github.com/ArvorCo/PNAD"
homepage: "http://brasil.arvor.co/"
language: "HTML"
languages: ["HTML"]
languagePcts: [90]
stars: 15
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-08-28T06:27:07Z"
lastCommitAt: "2026-10-31T09:53:21Z"
lastReleaseAt: "2026-04-19T18:29:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 67
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/062c7d08ef35bceeecdc350b1bb8f62c325decaef1589e833e66f10a04d22528/ArvorCo/PNAD"
---

# Brasil CLI

**A research-grade CLI for Brazilian public microdata.**

### 📚 [**All reports →**](https://brasil.arvor.co) &nbsp; · &nbsp; 📊 [Interactive data essay](https://brasil.arvor.co/pnad.html) &nbsp; · &nbsp; 🇧🇷 [Artigo PT](https://brasil.arvor.co/artigo_pt.html) &nbsp; · &nbsp; 🇬🇧 [Article EN](https://brasil.arvor.co/artigo_en.html)

---

## Why this exists

Brazil takes excellent photographs of itself. The IBGE's PNADC — a continuous
household survey that reaches roughly a quarter-million Brazilians each year —
is as meticulous a census as any nation conducts. And yet, between the raw
fixed-width files the government publishes and anything a citizen, journalist,
or policy analyst could read with their own eyes, there is a vast field of
friction: SAS layouts, archaic encodings, inflation deflators, nominal
minimum-wage splines, replicate weights nobody teaches. In that friction, the
country hides from itself.

This repository is an attempt to close that gap. It compresses the painful
path from official microdata into a single, auditable command-line tool
(`brasil`) whose output — CSVs, SQLite tables, JSON payloads, a rich terminal
dashboard, and the [interactive…
