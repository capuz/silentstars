---
repo: "openmagi/magi-agent"
name: "magi-agent"
description: "Open-source runtime for personal AI agents that can finish work reliably."
url: "https://github.com/openmagi/magi-agent"
language: "Python"
languages: ["Python"]
languagePcts: [84]
stars: 7
forks: 0
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-05-07T11:51:27Z"
lastCommitAt: "2026-06-27T00:48:38Z"
lastReleaseAt: "2026-06-05T06:16:08Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 44
maintainers: ["kevin-hs-sohn"]
openGraphImageUrl: "https://opengraph.githubassets.com/5928ffbba56f3fc61d7dc63d65cc0405691aa634d318d2601f4bcb85c1398a1a/openmagi/magi-agent"
---

# Open Magi Agent

**The programmable AI agent that gets real work done under your rules.**

[Website](https://openmagi.ai) ·
[CLI](docs/cli/magi.md) ·
[Releases](https://github.com/openmagi/magi-agent/releases)

</div>

> **Early beta:** Magi Agent is under active development. Expect rough edges.

> **Install once, run locally:** Homebrew installs the runtime, the `magi` CLI,
> and the local web dashboard. Optional external integrations require explicit
> configuration.

Magi Agent is a programmable AI agent runtime that actually gets things done.
Instead of relying on prompts and hoping the model follows every instruction,
Magi lets users configure the runtime around the model: which context it sees,
which tools it can use, what evidence must be recorded, what requires approval,
how failures are repaired, and what can be projected to the user.

## The Problem

Agents are powerful, but prompt-only control is weak for real work. An agent can
say it read a document it never opened, cite a source that does not support the
claim, skip an approval, or ship a plausible answer with no audit trail.

Coding agents worked first because in code the hard parts of governance come
**for…
