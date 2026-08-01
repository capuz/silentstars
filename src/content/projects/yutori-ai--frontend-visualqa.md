---
repo: "yutori-ai/frontend-visualqa"
name: "frontend-visualqa"
description: "Gives coding agents eyes for frontend work — visual QA and verification powered by Yutori Navigator. "
readmeQualityOk: true
url: "https://github.com/yutori-ai/frontend-visualqa"
homepage: "https://yutori.com/api"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-03-06T19:27:21Z"
lastCommitAt: "2026-08-01T06:15:35Z"
lastReleaseAt: "2026-03-26T21:23:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 52
maintainers: ["dhruvbatra", "tiagosilvamwi", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5d1e85e5f682348056cfe201a3f0f3db62524bb9133396aded60bc408727b33/yutori-ai/frontend-visualqa"
---

# frontend-visualqa

Gives coding agents eyes for frontend work — visual QA and verification powered by [Yutori Navigator](https://yutori.com/api).

## What it does

- Verifies explicit visual claims against a running localhost frontend
- Captures screenshots for quick visual inspection
- Reuses browser sessions across MCP tool calls for multi-step debugging
- Works as a CLI (`frontend-visualqa verify`), MCP server (`frontend-visualqa serve`), or agent skill (`/frontend-visualqa`)

Does not start your dev server. If the URL is unreachable, claims return `not_testable`.

## Why visualqa?

Playwright MCP can click, type, and assert against the DOM — but it cannot *see* the page. It can run cleanly on the wrong page, assert `modal.isVisible()` on a modal rendered off-screen, or miss a layout that broke on mobile.

Navigator is an AI agent powered by a computer-use model (n1.5) that perceives a webpage via a screenshot and predicts actions to take in a browser. Two capabilities matter here:

- **Self-correcting navigation** — Point the agent at the product catalog instead of a specific product page and Navigator recognizes the wrong page, clicks through to the right one, and reports…
