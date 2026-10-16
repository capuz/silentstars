---
repo: "SourceShift/mini-ork"
name: "mini-ork"
description: "Prove an AI-written fix actually fixes the bug. mini-ork certify reproduces the bug against your repo's own code, attacks the patch with generated invariants in a Docker sandbox, and returns PROVEN / REFUTED / UNVERIFIED with a JSON certificate. Part of a verifier-gated, multi-model agent runtime."
readmeQualityOk: true
url: "https://github.com/SourceShift/mini-ork"
homepage: "https://github.com/SourceShift/mini-ork/blob/main/docs/RESULTS.md"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["agent-framework", "ai-agents", "grpo", "llm", "llm-orchestration", "multi-agent", "self-improving", "agentic-ai", "ai-verification", "llmops"]
stars: 32
forks: 10
openIssues: 0
closedIssues: 1
watchers: 6
contributors: 3
recentReleases: 1
createdAt: "2026-06-01T07:34:36Z"
lastCommitAt: "2026-10-16T08:26:13Z"
lastReleaseAt: "2026-07-30T08:04:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 47
maintainers: ["amirkhakshour"]
openGraphImageUrl: "https://opengraph.githubassets.com/03408aefe3dae9098d3887e14990a37fb7019c60376c97556122305c9db00400/SourceShift/mini-ork"
discussionCount: 0
---

> [!IMPORTANT]
> Remove this line to confirm you've reviewed this PR before submitting.

mini-ork turns a goal into a planned, executed, and *verified* run across a fleet of
different models: **classify → plan → execute → verify → reflect → improve**. The
verdict on every change is what the code **actually did when it ran** — tests, type
checks, schemas, real execution in an isolated sandbox — not a model's opinion of its
own output.

It is for teams who want an agent to do real work without treating fluent output, a
green-looking diff, or a panel of agreeing models as proof.

## ✅ Prove a fix in one command

Point `mini-ork certify` at a change and the bug it claims to fix. It reproduces the bug
against your repository's own code, generates extra inputs the change was not written
for, runs everything in a Docker sandbox, and returns a verdict with the evidence
attached:

~~~text
$ bash examples/certify-demo/demo.sh          # paths shortened
$ mini-ork certify --base base --head fix-correct --issue "median([1, 2, 3, 4]) returns 3, …should return 2.5."
PROVEN  the fix holds across 100% of 4 perturbed inputs (supermajority)
  change  1 file · sha256 506d0947   claim  "median([1, 2,…
