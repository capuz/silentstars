---
repo: "grist-ai/grist"
name: "grist"
description: "Smart Coding Harness for software teams"
readmeQualityOk: true
url: "https://github.com/grist-ai/grist"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-18T23:05:41Z"
lastCommitAt: "2026-11-05T14:04:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 47
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/54a4639c9215395dc9bac77d8e4c3272452acb4eea5749e49625e5561e2131c2/grist-ai/grist"
---

Confidence-gated model routing, doctrine-driven sessions, and BYOK economics —
  frontier-tier output at metered cost.

```bash
npm install -g grist-ai
```

Grist is a coding-agent harness built on [OpenCode v2](https://github.com/anomalyco/opencode)
(MIT). The agent loop *is* the upstream codebase — Grist ships as a first-class
OpenCode plugin (`@grist-ai/plugin`) baked into the `grist` binary, so every
session loads the Jev confidence gate, the doctrine injector, and the
control-plane hooks with zero user config.

What makes it different is what's wrapped around that loop: a **Jev confidence
gate** that routes every task to the cheapest capable model rung; **doctrine**
injected into session context; **escalate-only model switching** mid-run;
**SoL-Pi** token cuts (packed tool output, fused edit+verify); a **verified
memory** and **code map** that brief every session on your codebase; and
**BYOK economics** — inference bills to your provider account (OpenRouter,
Vercel AI Gateway, or any OpenAI-compatible endpoint) with zero markup. Grist
never holds your inference budget.

**Docs:** [grist.lol/docs](https://grist.lol/docs) — every concept explained:
the…
