---
repo: "piotrekno1/second-shift"
name: "second-shift"
description: "Scheduled agent tasks for your repositories, defined in Git. Approved access, sandboxed runs, a full audit trail."
readmeQualityOk: true
url: "https://github.com/piotrekno1/second-shift"
homepage: "https://second-shift.app/"
language: "Python"
languages: ["Python"]
languagePcts: [76]
topics: ["agent-skills", "ai-agents", "automation", "developer-tools", "django", "gitops", "llm", "mcp", "model-context-protocol", "sandbox"]
stars: 7
forks: 1
openIssues: 31
closedIssues: 32
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-10-23T14:16:39Z"
lastCommitAt: "2026-11-13T11:24:54Z"
lastReleaseAt: "2026-10-30T22:07:27Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 59
maintainers: ["piotrekno1", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/79571881a209ca18db19aa9f39d7229484872acec64262a24297990054352da7/piotrekno1/second-shift"
discussionCount: 0
---

# SecondShift

**Give AI agents your team's recurring engineering work, without giving them
your credentials.**

SecondShift runs agent jobs you define in your repository. Write a skill,
commit it with its config, and review it like any other change. Each run is
sandboxed, with no network and no secrets, and can use only the tools the
workspace approved. Results land where your team already works, such as Slack,
a GitHub issue or a draft PR.

Runs on your laptop with one command, or on your
own server in production.

[Quick start](#quick-start) · [Skill catalog](https://github.com/piotrekno1/second-shift/blob/HEAD/examples/README.md) ·
[Security model](https://github.com/piotrekno1/second-shift/blob/HEAD/docs/security-model.md) ·
[Docs](https://second-shift.app/docs/overview/)

https://github.com/user-attachments/assets/69cbc92f-72f6-45fb-98ad-27b4b1056581

## Quick start

You need [uv](https://docs.astral.sh/uv/getting-started/installation/), Docker,
and a model API key or a Claude Code or Codex subscription. Start Docker, then
run:

```bash
release=https://github.com/piotrekno1/second-shift/releases
uv tool install --force --python 3.13 \…
