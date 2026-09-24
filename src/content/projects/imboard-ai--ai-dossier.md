---
repo: "imboard-ai/ai-dossier"
name: "ai-dossier"
description: "Universal standard for LLM-executable automation"
readmeQualityOk: true
url: "https://github.com/imboard-ai/ai-dossier"
homepage: "https://dossier-registry.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 8
forks: 3
openIssues: 45
closedIssues: 348
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-11-05T09:51:43Z"
lastCommitAt: "2026-09-24T08:41:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 74
maintainers: ["yuvaldim", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2ddaae5b4f13fa501a2f2499f23abbe039725418060973d30e15e7ca7f98825/imboard-ai/ai-dossier"
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
