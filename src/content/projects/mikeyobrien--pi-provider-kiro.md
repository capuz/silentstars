---
repo: "mikeyobrien/pi-provider-kiro"
name: "pi-provider-kiro"
description: "pi extension for Kiro API (AWS CodeWhisperer/Q) — 17 models, 7 families, OAuth via AWS Builder ID"
readmeQualityOk: true
url: "https://github.com/mikeyobrien/pi-provider-kiro"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 86
forks: 48
openIssues: 4
closedIssues: 26
watchers: 1
contributors: 23
recentReleases: 0
createdAt: "2026-02-18T21:58:41Z"
lastCommitAt: "2026-08-30T00:45:06Z"
lastReleaseAt: "2026-03-30T02:12:08Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 91
undervaluedScore: 38
maintainers: ["mikeyobrien", "cosminilie", "cad0p"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e696d135e1e79116f1d92811ac1765e8f44911c6fff2039cf0f5a9a240cf936/mikeyobrien/pi-provider-kiro"
---

# pi-provider-kiro

A [pi](https://shittycodingagent.ai/) provider extension that connects pi to the **Kiro API** (AWS CodeWhisperer/Q), exposing **12 kiro-cli-verified models** through one provider surface.

## Why this exists

Kiro gives you a strong free model menu, but pi needs a provider that speaks Kiro's auth, model catalog, and streaming protocol cleanly. `pi-provider-kiro` handles that bridge, including:

- AWS Builder ID, IAM Identity Center, Google, GitHub, and enterprise external IdP (OIDC) login flows
- shared credentials from an existing `kiro-cli` session when available
- reasoning-aware streaming
- region-aware model filtering so pi only shows models your Kiro region can actually use

## Quick start

Install the provider:

```bash
pi install npm:pi-provider-kiro
```

Or install it globally with npm:

```bash
npm install -g pi-provider-kiro
```

Then log in from pi:

```text
/login kiro
```

The login flow supports:
- **AWS Builder ID** — native device-code flow, works well over SSH/remotes
- **Your organization** — IAM Identity Center start URL
- **Google** — social login via `kiro-cli`
- **GitHub** — social login via `kiro-cli`

If your organization uses an…
