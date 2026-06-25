---
repo: "askalf/dario"
name: "dario"
description: "Your Claude Pro/Max subscription in any tool — Cursor, Cline, Aider, Agent SDK — at subscription pricing, not per-token bills. One local endpoint that replays Claude Code's wire shape so your traffic stays in the subscription pool."
url: "https://github.com/askalf/dario"
homepage: "https://www.npmjs.com/package/@askalf/dario"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [60, 39]
topics: ["ai", "anthropic", "claude", "claude-max", "claude-pro", "developer-tools", "llm", "oauth", "proxy", "openai"]
stars: 289
forks: 44
openIssues: 1
closedIssues: 140
watchers: 2
contributors: 9
recentReleases: 10
createdAt: "2026-04-08T16:08:01Z"
lastCommitAt: "2026-06-25T06:40:23Z"
lastReleaseAt: "2026-04-08T20:34:04Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 33
maintainers: ["askalf", "dependabot[bot]", "boredland"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1205083681/484d67e0-0cf2-49d2-92a0-b345352537bb"
discussionCount: 15
---

<h1 align="center">dario</h1>
</p>

</p>

---

> 🗓️ **2026-06-15 — Anthropic splits Claude billing.** Agent-SDK and `claude -p` (headless) traffic stops counting against your subscription pool and moves to a small separate monthly credit ($20 / $100 / $200 by plan), then metered per-token API rates. Most proxies forward your requests in exactly the shape that gets reclassified into that bucket. dario rewrites every request into interactive Claude Code wire-shape before it leaves your machine, so your traffic stays in the subscription pool you already pay for — same install, no config change for the cliff. **[What changes, and how to verify it on your own machine →](#the-deadline-2026-06-15)**

> ⛔ **Claude Fable 5 / Mythos 5 — temporarily suspended for all Anthropic customers.** On 2026-06-12 a US-government legal directive disabled Fable 5 and Mythos 5 for **every** Anthropic plan and tier — `api.anthropic.com` now returns `not_found` for them, and no account or proxy can route around it ([details](https://www.anthropic.com/news/fable-mythos-access)). As of **v4.8.71**, dario filters both families out of `/v1/models` and rejects any spelling (`fable`, `fable1m`,…
