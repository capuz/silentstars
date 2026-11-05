---
repo: "optivem/gh-optivem"
name: "gh-optivem"
description: "CLI tool for ATDD & AI workflow"
readmeQualityOk: true
url: "https://github.com/optivem/gh-optivem"
language: "Go"
languages: ["Go"]
languagePcts: [95]
stars: 9
forks: 1
openIssues: 39
closedIssues: 22
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2026-04-01T16:50:28Z"
lastCommitAt: "2026-11-05T11:23:46Z"
lastReleaseAt: "2026-04-28T11:03:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 77
undervaluedScore: 44
maintainers: ["valentinajemuovic", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6c7ece1b1e2daf524103737f82dfafc5ca5bee7fed7c343aeee40e6b2ee99a9/optivem/gh-optivem"
---

# gh-optivem

`gh-optivem` is a command line tool that helps you implement software in a reliable way using ATDD & AI.

# Why gh-optivem

I originally hand-rolled this as a single AI agent that owned the entire ATDD process end to end. It decided for itself when to run each step — and would sometimes skip straight to writing implementation code without ever writing the acceptance test it was meant to be red against first. It also ran up about $1,000 in extra usage on top of my Claude Pro plan, because nothing stopped it from re-exploring the whole codebase at every step. gh-optivem exists to fix both problems.

### What you get

1. **Ship AI-generated code you can trust, faster.** A fixed, auditable process — not an agent's own judgment — drives every change, with a human reviewing and approving before anything merges. ATDD discipline catches defects early, and narrow per-step context stops rework loops that eat into velocity.
2. **Full traceability from ticket to commit.** Every acceptance criterion maps to a test, every step lands as its own reviewed commit, and the GitHub board status updates itself — you always know exactly what shipped and why.
3. **Token-cost-optimized by…
