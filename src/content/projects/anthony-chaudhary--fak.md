---
repo: "anthony-chaudhary/fak"
name: "fak"
description: "Create your Agentic AIs."
readmeQualityOk: true
url: "https://github.com/anthony-chaudhary/fak"
homepage: "https://anthony-chaudhary.github.io/fak/showcase.html"
language: "Go"
languages: ["Go"]
languagePcts: [86]
topics: ["agentic-ai", "ai-agents", "golang", "kv-cache", "llm-agents", "llm-inference", "llm-serving", "mcp", "self-hosted", "llmops"]
stars: 32
forks: 13
openIssues: 2228
closedIssues: 7454
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-06-21T19:52:45Z"
lastCommitAt: "2026-08-28T14:28:44Z"
lastReleaseAt: "2026-07-11T21:41:37Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 51
maintainers: ["anthony-chaudhary"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1276297427/9494cd94-2aa0-4aa3-9306-198f0534046e"
---

<picture><source media="(prefers-color-scheme: dark)" srcset="visuals/brand/fak-logo.svg"><img src="visuals/brand/fak-logo-ink.svg" alt="fak logo" width="320"></picture>
</p>

# fak — configure your agents for the task at hand

## fak in one line

fak turns a tool-using agent into a managed agent: one Go binary owns the
operational boundary for context, models, tools, policy, and witnessed receipts.

The current tuned path does **4.1× less work** in its matched published envelope;
this is not a universal quality or speed claim. Roles stay separate: the native
engine owns execution, the policy floor owns tool admission, and the claims
ledger names what is shipped, gated, or diagnostic without claiming live-model quality.

## First offline proof

No key, model, or GPU is needed:

```bash
go build -o fak ./cmd/fak
./fak agent --offline
```

Expected result: `task completed (booked)` while the poisoned result is blocked
and the destructive op is prevented.

## Going deeper

Documentation home by audience: [start here](https://github.com/anthony-chaudhary/fak/blob/HEAD/START-HERE.md) ·
[concept course](https://github.com/anthony-chaudhary/fak/blob/HEAD/LEARNING-PATH.md) ·…
