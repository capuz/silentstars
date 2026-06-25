---
repo: "micherra/canon"
name: "canon"
description: "Engineering principles as code — enforce, track, and learn."
url: "https://github.com/micherra/canon"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
stars: 5
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-03-14T16:20:11Z"
lastCommitAt: "2026-06-25T01:38:07Z"
lastReleaseAt: "2026-06-07T17:11:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 67
maintainers: ["micherra", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a572aa291b3cb2845fff4e1883fc6820f6175bf56a31a7956aee215891e6c7c/micherra/canon"
---

# Canon

Install Canon and Claude gains something it doesn't have by default: systematic engineering judgment. Principles loaded per task. A knowledge graph of your codebase. Coordinated multi-agent builds with interactive review dashboards. And a disciplined habit of asking you to approve the plan before writing a single line of code.

That's what Canon does — it makes Claude a principled engineering partner.

---

## What Canon Is

Canon is a [Claude Code plugin](https://docs.anthropic.com/en/docs/claude-code/plugins). Once installed, Claude understands your codebase structure, enforces your engineering principles in every build, and surfaces decisions at the right moments — never burying you in choices you don't need to make.

Canon has strong opinions about software engineering and shares them with every agent it spawns. Principles are loaded per task, enforced during implementation, and drift-tracked across sessions. When the codebase diverges from your standards, Canon tells you.

---

## How It Works

### The pipeline

```
request → PM triage → architect → engineer(s) → tester → reviewer → scribe → shipper
```

Every build request goes through a triage step before any code…
