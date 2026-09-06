---
repo: "imboard-ai/ai-dossier"
name: "ai-dossier"
description: "Universal standard for LLM-executable automation"
readmeQualityOk: true
url: "https://github.com/imboard-ai/ai-dossier"
homepage: "https://dossier-registry.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 8
forks: 3
openIssues: 23
closedIssues: 273
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-11-05T09:51:43Z"
lastCommitAt: "2026-09-06T08:03:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 73
maintainers: ["yuvaldim", "Georgefifth"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c7075583335cec99f3590d319ce97edcd024b9ffc910c36cb20cf2794865934/imboard-ai/ai-dossier"
---

# Dossier — Portable, Signed Skills for Any AI Agent

**Skills are easy to write. Dossiers make them trustworthy, versioned, and portable across every LLM tool.**

> **Quick Concept**
> A dossier is a skill — a reusable instruction set an AI executes — with trust, versioning, and cross-tool portability built in.
> Think npm or Docker Hub, but for AI skills: signed, versioned, shareable.

```
  ┌──────────────────────────────────────────────────────────────────────┐
  │                                                                      │
  │    Write instructions       Verify integrity       AI executes       │
  │    in Markdown (.ds.md)     with checksums &       the workflow      │
  │                             signatures             intelligently     │
  │                                                                      │
  │    ┌──────────┐    sign     ┌──────────┐   run     ┌──────────┐     │
  │    │  Author  │ ─────────> │  Verify  │ ────────> │ AI Agent │     │
  │    └──────────┘            └──────────┘            └──────────┘     │
  │         │                       │                       │            │
  │     .ds.md file            checksum +…
