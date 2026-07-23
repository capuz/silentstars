---
repo: "nomoticai/agtp"
name: "agtp"
description: "Agent Transfer Protocol (AGTP) — a dedicated application-layer protocol  for AI agent traffic. Specification, Internet-Draft, and documentation.  Core spec is open and royalty-free. IETF submission: draft-hood-independent-atp-00."
readmeQualityOk: true
url: "https://github.com/nomoticai/agtp"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 8
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-04-20T21:38:48Z"
lastCommitAt: "2026-07-23T06:15:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 65
undervaluedScore: 32
maintainers: ["hoodchris"]
openGraphImageUrl: "https://opengraph.githubassets.com/ab23bc7ca3332adb60b4cbc6d6b4fc45164c67d278b1cc0bce187c0f703730c7/nomoticai/agtp"
---

# AGTP — Agent Transfer Protocol

A dedicated application-layer protocol for AI agent traffic.
Specification, Internet-Draft, and reference implementation.

- **IETF submission:** `draft-hood-independent-agtp-08`
- **IANA-registered ports:** 4480/TCP (`agtp`) and 4480/UDP (`agtp-quic`)
- **Reference implementation:** `core/`, `server/`, `client/`, `registry/` (this repository)
- **First registered agent:** Lauren —
  `agtp://d8dc6f0df55d66c7b30100db3cffbe383c5f814e6e58a08521fb7636c3bcc230`

## AGTP Repos

- **AGTP MCP:** `https://github.com/nomoticai/agtp-mcp`
- **AGTP PHP:** `https://github.com/nomoticai/agtp-php`
- **AGTP SYMFONY:** `https://github.com/nomoticai/agtp-symfony`
- **AGTP DRUPAL:** `https://github.com/nomoticai/agtp-drupal`
- **AGTP WORDPRESS:** `https://github.com/nomoticai/agtp-wordpress`

## Repository layout

This repo is a **monorepo of products**, all sharing the AGTP wire
format defined in `core/`. Each product is its own top-level
directory with its own entry point, agents, and configuration. The
client / server split mirrors SMTP's MTA: same protocol, two
distinct user agents that may evolve independently.

```
agtp/
├── core/                 AGTP…
