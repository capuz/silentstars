---
repo: "iap/hermes-guide"
name: "hermes-guide"
description: "Self-diagnosis and troubleshooting for Hermes Agent."
readmeQualityOk: true
url: "https://github.com/iap/hermes-guide"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["hermes-agent", "self-diagnosis", "hermes-guide", "ai-agent", "llm-agent", "nous-hermes", "troubleshooting", "hermes-doctor"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 58
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-17T22:43:21Z"
lastCommitAt: "2026-11-02T17:56:33Z"
lastReleaseAt: "2026-10-16T16:48:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 67
maintainers: ["iap"]
openGraphImageUrl: "https://opengraph.githubassets.com/342e03c0b5c2055426111a13886de474a4fcb556cb4d2ea87d0eb3b31edf2709/iap/hermes-guide"
discussionCount: 0
---

# Hermes Guide

> **Package / slug:** `hermes-guide` · **Catalog:** curated Hermes plugin catalog (community tier)

Hermes usage and self-diagnosis guide for [Hermes Agent](https://github.com/NousResearch/hermes-agent).
It is an independent community project: not a Hermes core component, and it does
not ask upstream to change for this plugin's benefit. Genuine Hermes defects
found during diagnosis may still be reported upstream.

It **complements — never replaces —** Hermes's own diagnostics (`hermes doctor`, `hermes verify`, and the per-surface helpers): it covers the gaps they leave. The plugin is **read-only** (no config writes; empty `capabilities:`). It ships two independent things:

1. **A plugin.** `/hermes-doctor` in a session, `hermes guide` in a terminal. Read-only health checks across 
`config`, `mcp`, `skills`, `commands`, `hooks`, `plugins`, `memories`, `sessions`, `storage`, `update`
 — every one of those names is a valid scope.
2. **A skills tap.** 
**Thirty-one troubleshooting skills** — one install guide, one configuration map, twenty-seven per-surface `diagnosing-*` playbooks, two other skills (`hermes-post-update`, `plugin-authoring`).

Enabling the plugin…
