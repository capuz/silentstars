---
repo: "trevhud/rote"
name: "rote"
description: "Compile AI agent skills into cheap, fast, deterministic pipelines that run without an LLM in the loop"
readmeQualityOk: true
url: "https://github.com/trevhud/rote"
homepage: "https://roteskills.com"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["agent-skills", "agentic-ai", "ai-agents", "anthropic", "claude", "cli", "cloudflare-workers", "dbos", "deterministic-workflows", "durable-execution"]
stars: 8
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-04-07T21:07:48Z"
lastCommitAt: "2026-10-21T21:15:02Z"
lastReleaseAt: "2026-07-30T04:18:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 50
maintainers: ["trevhud"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1204263942/6e21ce5d-6b57-4100-9e7c-37f53a16038a"
discussionCount: 0
---

# rote

**Compile AI agent skills into cheap, fast, deterministic pipelines that
run without an LLM in the loop.**

**Your Claude skill works. Running it a thousand times does not.**

`rote` is an open source CLI that compiles a proven Claude skill or
agent skill (a `SKILL.md` plus `references/`) into a typed,
deterministic pipeline. It moves the fixed logic and tool orchestration
into reviewable code, and calls a model only for the steps that
genuinely need judgment. A 10 to 20 minute agent loop becomes a
background workflow that costs a fraction of the tokens and can be
regression tested.

### Try it free in 60 seconds

No API key, no subscription, no tokens, no clone. The
[`expense-audit`](https://github.com/trevhud/rote/blob/HEAD/examples/expense-audit/) example is a month-end expense
audit skill whose compiled pipeline ships with working code, and it comes
inside the package, so you can emit it and run it before you compile
anything of your own:

```sh
uv tool install 'rote-cli[dbos]'   # or: python3 -m venv .venv && . .venv/bin/activate && pip install 'rote-cli[dbos]'
rote example expense-audit         # copies the skill, IR, code and sample input to ./expense-audit…
