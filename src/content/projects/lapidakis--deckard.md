---
repo: "lapidakis/Deckard"
name: "Deckard"
description: "Mac-resident MCP server: securely proxies Mail / Calendar / Drive / Contacts to AI agents over stdio or Tailnet HTTP, with ACLs, secret redaction, prompt-injection tagging, and an audit log."
readmeQualityOk: true
url: "https://github.com/lapidakis/Deckard"
language: "Swift"
languages: ["Swift"]
languagePcts: [97]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-06T14:04:25Z"
lastCommitAt: "2026-11-22T02:12:20Z"
lastReleaseAt: "2026-05-09T16:00:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 68
undervaluedScore: 27
maintainers: ["mlapida"]
openGraphImageUrl: "https://opengraph.githubassets.com/cfe8673b485930777993f7ce0383dd102a7693a01418efd77f4db6d509190717/lapidakis/Deckard"
---

# Deckard

A Mac-resident MCP server that proxies Apple-native services — Mail, Calendar, iCloud Drive, Voice Memos, Reminders — to AI agents over stdio or HTTP. One trust boundary, one audit log, one place to enforce safety.

The bridge is built around a simple premise: an LLM agent talking to your iCloud should look more like a service account with scoped permissions than a fully-trusted user. Every call passes through the same policy pipeline (auth → ACL → redaction → injection-tagging → approval-gate → audit), and every layer is configurable per token.

**Status:** **v1.0.0-beta.4 (public beta).** 43 tools across 6 services, codesigned + notarized Developer ID build, **208 automated tests** (incl. a schema validator that walks every registered tool), daemon + menubar UI with first-launch onboarding, auto-update via Sparkle (UI) and `deckard self-update` (CLI), CI on every push. Designed for personal homelab use; security model documented in [`docs/security-model.md`](https://github.com/lapidakis/Deckard/blob/HEAD/docs/security-model.md). Known beta issues + roadmap in [`CHANGELOG.md`](https://github.com/lapidakis/Deckard/blob/HEAD/CHANGELOG.md).

---
