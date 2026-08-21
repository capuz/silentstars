---
repo: "agentrhq/webcmd"
name: "webcmd"
description: "The Browser Infra that learns and cuts token spend by upto 90%"
readmeQualityOk: true
url: "https://github.com/agentrhq/webcmd"
homepage: "https://webcmd.dev"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [65, 32]
topics: ["browser-automation", "cli", "ai-agents", "browser-use", "playwright", "self-learning-ai", "developer-tools"]
stars: 419
forks: 33
openIssues: 25
closedIssues: 80
watchers: 3
contributors: 20
recentReleases: 10
createdAt: "2026-07-02T11:49:31Z"
lastCommitAt: "2026-08-21T04:11:05Z"
lastReleaseAt: "2026-07-13T12:21:15Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 94
undervaluedScore: 29
maintainers: ["ankitranjan7", "beubax", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1287114669/1b0905fa-467e-4288-969e-7bc34d91db41"
---

</a>
  </a>
  </a>
  </a>
  </a>
</p>

# Webcmd

**Self-learning browser infra for AI agents.**

Webcmd learns the navigational context of websites as agents use them, then compiles that knowledge into deterministic commands for faster, cheaper, more reliable browser automation. The goal is simple: stop making agents rediscover the same sites on every run and cut browser-agent token spend by up to 90%.

On top of live browser control, Webcmd adds 3 layers of learnings. Each layer collapses cost and variance for the layer above it.

| Layer | Scenario | What Webcmd Helps With |
| --- | --- | --- |
| 0. Live browser control | The site is unfamiliar. | Use `webcmd browser` to inspect, click, type, extract, capture network calls, and complete the task in a real browser. |
| 1. Sitemap memory | The site is familiar, but the action space is not fully known. | Capture an agent-facing sitemap of observed pages, states, actions, workflows, APIs, pitfalls, and fallback paths. |
| 2. CLI authoring | The action space is known, but the path is still too variable for one fixed sequence. | Explicitly author a reusable `webcmd <site>` adapter with structured output, so future agents spend tokens…
