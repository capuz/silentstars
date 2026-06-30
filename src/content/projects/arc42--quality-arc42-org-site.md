---
repo: "arc42/quality.arc42.org-site"
name: "quality.arc42.org-site"
description: "Quality requirements and goals for software and system architectures"
url: "https://github.com/arc42/quality.arc42.org-site"
homepage: "https://quality.arc42.org"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [39, 22]
topics: ["arc42", "hacktoberfest", "quality", "isaqb"]
stars: 40
forks: 20
openIssues: 12
closedIssues: 268
watchers: 4
contributors: 19
recentReleases: 0
createdAt: "2022-12-14T21:09:39Z"
lastCommitAt: "2026-06-30T06:50:53Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 98
undervaluedScore: 63
maintainers: ["gernotstarke", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/055a566499af8ccdd67cc691ebde44155f998e4c174bf0337240a67fb941deeb/arc42/quality.arc42.org-site"
---

# arc42 Quality Model

Definitions, examples, and relationships for **software quality**: characteristics,
requirements, standards, and the architectural approaches that help systems achieve them.

**Live site:** https://quality.arc42.org

The site is a static Jekyll build with interactive D3.js force-directed graphs that
visualise how qualities, requirements, standards, and approaches connect. The content
is the product — the build pipeline is intentionally simple so contributors can focus
on writing.

> Working on this codebase with Claude Code or another AI agent? See
> [CLAUDE.md](CLAUDE.md) for the agent-oriented guide (deeper schema notes,
> gotchas, and conventions).

---

## Contents

1. [Metamodel — our domain language](#metamodel--our-domain-language)
2. [Repository at a glance](#repository-at-a-glance)
3. [Quick start](#quick-start)
4. [Adding content](#adding-content)
5. [Why standards use `categories` instead of `tags`](#why-standards-use-categories-instead-of-tags)
6. [Testing & validation](#testing--validation)
7. [How it deploys](#how-it-deploys)
8. [Search (Lunr)](#search-lunr)
9. [Color & design system](#color--design-system)
10. [License &…
