---
repo: "fivetaku/pumasi"
name: "pumasi"
description: "Claude as PM + Codex CLI as parallel outsource developers — for large parallel coding tasks"
readmeQualityOk: true
url: "https://github.com/fivetaku/pumasi"
language: "JavaScript"
languages: ["JavaScript", "Shell", "Python"]
languagePcts: [57, 23, 20]
stars: 89
forks: 18
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-24T14:08:12Z"
lastCommitAt: "2026-11-09T00:53:30Z"
lastReleaseAt: "2026-07-23T14:54:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 85
undervaluedScore: 29
maintainers: ["fivetaku"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8ebce8cdda93c31becf56292469b7c800b1889399f1174e3684dbbb045c1a1e/fivetaku/pumasi"
fundingLinks: ["GITHUB:https://github.com/fivetaku"]
---

English | [한국어](https://github.com/fivetaku/pumasi/blob/HEAD/README.ko.md) | [中文](https://github.com/fivetaku/pumasi/blob/HEAD/README.zh.md) | [日本語](https://github.com/fivetaku/pumasi/blob/HEAD/README.ja.md) | [Español](https://github.com/fivetaku/pumasi/blob/HEAD/README.es.md)

# pumasi

> **Parallel coding orchestration — Claude as PM, Codex CLI as your dev team.**

Delegate the building to Codex. Keep the thinking for Claude.

**Using OMO, Codex, or another host?** The current session remains the controller;
`start --host omo` selects Claude Code as the default worker. Explicit task or
default commands still win. Use the direct Node runner without installing
Claude-specific hooks: [host/worker guide](https://github.com/fivetaku/pumasi/blob/HEAD/docs/host-workers.md). The examples
below describe the original Claude Code host mode.

[Quick Start](#quick-start) • [Why pumasi?](#why-pumasi) • [How it works](#how-it-works) • [Features](#features) • [Requirements](#requirements)

---

## Quick Start

### 1. Add the marketplace (once)

```
/plugin marketplace add https://github.com/fivetaku/gptaku_plugins.git
```

### 2. Install

```
/plugin install pumasi
```

Restart Claude Code…
