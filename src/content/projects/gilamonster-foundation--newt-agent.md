---
repo: "Gilamonster-Foundation/newt-agent"
name: "newt-agent"
description: "An Experimental \"uplift\" harness ... making small models smarter."
readmeQualityOk: true
url: "https://github.com/Gilamonster-Foundation/newt-agent"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["ai-agent", "ai-tools", "dgx-spark", "ocap", "pyo3", "python", "rust-library", "herdr", "herdr-integration"]
stars: 6
forks: 2
openIssues: 508
closedIssues: 606
watchers: 0
contributors: 6
recentReleases: 5
createdAt: "2026-05-25T16:46:28Z"
lastCommitAt: "2026-10-29T10:21:04Z"
lastReleaseAt: "2026-10-23T03:41:46Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 60
maintainers: ["hartsock"]
openGraphImageUrl: "https://opengraph.githubassets.com/07f57d3dfe33f8771047caec9268d3ce6d733dee41c17f28335e4c979036dfda/Gilamonster-Foundation/newt-agent"
---

# Newt-Agent

Newt is an experimental agentic coder in Rust, built for local models first.
Hosted providers are also available through `newt setup`.

The operator grants each tool call a capability: what it may read, write,
run, and reach on the network. The operator can narrow that grant before a run
and audit it after. [`agent-bridle`](https://github.com/Gilamonster-Foundation/agent-bridle)
enforces it, in the kernel where the OS allows.

Confinement has a cost, so we measure it rather than describe it. We score each
model on a fixed Terminal-Bench task set, with the grant enforced and without,
and no release may lower a score: [Terminal-Bench scoreboard](https://github.com/Gilamonster-Foundation/newt-agent/blob/HEAD/docs/terminal-bench.md).

## Install

```bash
git clone https://github.com/Gilamonster-Foundation/newt-agent
cd newt-agent
just install
newt
```

The first run opens a setup wizard. `newt --help` is the authority on what the
binary does; this file is not.

## Read next

| Topic | Where |
|---|---|
| Why Newt exists | [`docs/vision.md`](https://github.com/Gilamonster-Foundation/newt-agent/blob/HEAD/docs/vision.md) |
| The invariants it keeps |…
