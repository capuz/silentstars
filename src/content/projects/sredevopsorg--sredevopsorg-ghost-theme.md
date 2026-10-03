---
repo: "sredevopsorg/sredevopsorg-ghost-theme"
name: "sredevopsorg-ghost-theme"
description: "Ghost v6 Theme for SREDevOps.org — Multi-locale, Tailwind CSS v3, responsive, dark-mode first, top navigation, and tag-based language filtering."
readmeQualityOk: true
url: "https://github.com/sredevopsorg/sredevopsorg-ghost-theme"
homepage: "https://www.sredevops.org/"
language: "JavaScript"
languages: ["JavaScript", "Handlebars"]
languagePcts: [57, 38]
topics: ["ghost", "ghost-blog", "ghost-cms", "ghost-theme", "multilanguage-support"]
stars: 10
forks: 5
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2024-09-24T16:08:49Z"
lastCommitAt: "2026-10-03T09:23:19Z"
lastReleaseAt: "2025-11-13T08:50:38Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 83
maintainers: ["dependabot[bot]", "ngeorger", "sredevopsorgagents"]
openGraphImageUrl: "https://opengraph.githubassets.com/c92c90ce3d9bb6415789ec27eaf135ae32d97922d42d638fc76cb216f528ab92/sredevopsorg/sredevopsorg-ghost-theme"
discussionCount: 5
---

# SREDevOps.org Ghost Theme (v3)

> **Ghost 6 theme** for [SREDevOps.org](https://www.sredevops.org) — multi-locale, Tailwind CSS v4 built with Vite, React islands where interactivity is needed, light and dark palettes, and tag-based language filtering. Makes no third-party requests.

---

## 🌐 Multi-Locale Architecture

This theme implements a **template inheritance + tag-based routing strategy** to serve distinct content per locale without requiring separate Ghost instances. This approach aligns with community workarounds discussed in the [Ghost Forum](https://forum.ghost.org/t/different-locales-with-different-content/62836).

### Template Inheritance Pattern

```
┌─────────────────────────────────────┐
│ routes.yaml                          │
│ • /en/* → home-en.hbs               │
│ • /es/* → home-es.hbs               │
│ • /br/* → home-br.hbs               │
└─────────┬───────────────────────────┘
          │
          ▼
┌─────────────────────────────────────┐
│ home-*.hbs (collection template)    │
│ • Defines collection query/filter   │
│ • Renders post list via partials    │
│ • {{!< default-*.hbs}} inheritance  │
└─────────┬───────────────────────────┘
          │…
