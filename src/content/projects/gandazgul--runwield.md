---
repo: "gandazgul/runwield"
name: "runwield"
description: "RunWield is an opinionated, plan-by-default coding harness built on top of Pi.dev."
url: "https://github.com/gandazgul/runwield"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-04-26T00:12:47Z"
lastCommitAt: "2026-06-25T01:38:07Z"
lastReleaseAt: "2026-06-16T16:05:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 52
maintainers: ["gandazgul", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5aeac6a1a1731aba1ffefb799f1f95acde3317f2ab70f84b676f3db903b0c446/gandazgul/runwield"
---

# RunWield

**RunWield** is an opinionated, plan-by-default coding harness for developers who want agents to slow down at the right
moments: classify the work, write a reviewable plan when the blast radius is real, execute through specialized roles,
and then prove the result.

It is built on top of [Pi](https://pi.dev), with a Deno CLI, an interactive TUI, a browser-based plan review loop via
[Plannotator](https://plannotator.ai), [Cymbal](https://github.com/1broseidon/cymbal) for code intelligence, and
[Mnemosyne](https://github.com/gandazgul/mnemosyne) for project/global memory.

> For full documentation, see **[docs/index.md](docs/index.md)**.

## Why RunWield

Most coding harnesses optimize for getting an agent typing quickly. RunWield optimizes for getting the right kind of
work done with the right amount of ceremony.

- **Triage is explicit.** Every routed request gets a routing intent: `INQUIRY`, `IDEATION`, `QUICK_FIX`, `FEATURE`, or
  `PROJECT`. Implementation work records complexity and affected paths before execution.
- **Planning is a product surface, not a prompt vibe.** Non-trivial work becomes a markdown plan in `plans/`, goes
  through Plannotator review, and can…
