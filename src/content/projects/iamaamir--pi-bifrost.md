---
repo: "iamaamir/pi-bifrost"
name: "pi-bifrost"
description: "Automatically route each Pi prompt to a model based on task complexity, price, speed, or context length. Smart model router for pi."
readmeQualityOk: true
url: "https://github.com/iamaamir/pi-bifrost"
homepage: "https://iamaamir.github.io/pi-bifrost/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
topics: ["ai", "coding-agent", "devtools", "llm", "model-router", "pi-extension", "pi-package"]
stars: 44
forks: 4
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-25T12:28:15Z"
lastCommitAt: "2026-08-24T01:19:26Z"
status: "quiet"
tags: ["solo_builder"]
healthScore: 59
undervaluedScore: 30
maintainers: ["iamaamir"]
openGraphImageUrl: "https://opengraph.githubassets.com/148782e7d7fa23ea6ffaa23172f9d09344e54a13e0659b29003a5f683e943fd9/iamaamir/pi-bifrost"
---

# Bifrost

Pi-Bifrost is **native model routing for [Pi](https://pi.dev)**. Before generation starts, it switches Pi's actual active model to one from your configuration.

```text
"summarize this file"         → your quick model
"debug this race condition"   → your frontier model
```

**Why it is different:**

- **Native model switch** — Pi uses selected provider/model for turn, not a virtual profile or prompt-side delegation.
- **Persistent circuit breaker** — repeated probe, activation, and stream failures survive restart; one half-open trial controls recovery.
- **No automatic replay** — Bifrost routes future prompts around uncertain failures. It never silently repeats edits, commands, or external side effects.
- **Inspectable control** — preview route, pin current model, or force a tier for one message.
- **Model-agnostic setup** — `/bifrost init` probes supported models available through Pi, then proposes tier lists without hardcoded maintainer model IDs.
- **Host-real verification** — unit tests, Pi TUI smoke tests, and fake-provider SSE E2E cover routing and reliability behavior.

## Install

```bash
pi install npm:pi-bifrost
```

Or from source:

```bash
pi install…
