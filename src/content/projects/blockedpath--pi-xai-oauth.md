---
repo: "BlockedPath/pi-xai-oauth"
name: "pi-xai-oauth"
description: "xAI (Grok) provider with OAuth support for pi"
readmeQualityOk: true
url: "https://github.com/BlockedPath/pi-xai-oauth"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["grok", "grok-build", "pi-extension", "xai", "grok-4-5", "composer-2-5"]
stars: 43
forks: 13
openIssues: 3
closedIssues: 54
watchers: 1
contributors: 5
recentReleases: 6
createdAt: "2026-05-16T22:54:10Z"
lastCommitAt: "2026-08-23T04:10:05Z"
lastReleaseAt: "2026-08-21T11:43:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 46
maintainers: ["BlockedPath", "dependabot[bot]", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b0d0dc7473c445c0c809f12ca592a033ae251c14090f7e2110a38996153a254/BlockedPath/pi-xai-oauth"
---

# pi-xai-oauth

**xAI (Grok) OAuth provider for pi** — now with **Grok 4.6**, reasoning, long context, and custom xAI tools.

```bash
npx pi-xai-oauth
```

## ✨ New: Grok 4.6

| | |
| --- | --- |
| **Model ID** | `grok-4.6` |
| **Role** | xAI flagship for coding, agentic tasks, and knowledge work |
| **Context** | 500K tokens |
| **Input** | text + image |
| **Reasoning** | `low` / `medium` / `high` / `xhigh` (defaults to **high**; cannot be disabled) |
| **Fast mode** | Same model with **`low`** reasoning effort — not a separate model ID |
| **Pricing** | $2 / $6 per 1M input/output · $0.50 cache read |

```bash
pi --model grok-4.6 "Ship this feature end-to-end"
pi --model grok-4.6:high "Review this architecture for failure modes"
pi --model grok-4.6:xhigh "Deep multi-step design review"
pi --model grok-4.6:low "Quick status check"   # fast mode
```

This package adds xAI's **account-specific OAuth model catalog** to pi, with **Grok 4.6** as the offline fallback/default, proper OAuth login, automatic token refresh, and a suite of custom xAI tools (`xai_generate_text`, `web_search`, `xai_x_search`, etc.). The normalized cache remains exact; registration may additionally expose…
