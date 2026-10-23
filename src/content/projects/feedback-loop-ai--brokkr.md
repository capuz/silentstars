---
repo: "feedback-loop-ai/brokkr"
name: "brokkr"
description: "Deterministic delivery engine for autonomous multi-agent software delivery: an event-sourced phase state machine at the outermost layer, agent sessions as leaf effects."
readmeQualityOk: true
url: "https://github.com/feedback-loop-ai/brokkr"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 5
forks: 0
openIssues: 131
closedIssues: 118
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-08-21T20:27:43Z"
lastCommitAt: "2026-10-23T08:07:34Z"
lastReleaseAt: "2026-08-31T15:15:41Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 89
undervaluedScore: 55
maintainers: ["valentinyanakiev"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1342197582/c6b4d63d-7486-4b92-be89-cd2e731bb6a4"
---

# Brokkr

**Coordination tools help agents work together. Brokkr proves what they did.**

Brokkr is a deterministic delivery engine for autonomous multi-agent software delivery: you give it a feature and a reviewable recipe, its agents implement, verify, review and ship, and its event-sourced phase machine records every result and ruling in a journal you can replay and audit.

The [v0.12.0 release](https://github.com/feedback-loop-ai/brokkr/blob/HEAD/docs/releases/v0.12.0.md) makes every capability the
realm's to grant, opens a terminal console that shows who must act, and adds
gates that hold the code to its architecture.

## Install

Pick one channel. Each row is the channel's published command; the availability labels and the checksum-first release path are explained in the [quickstart](https://github.com/feedback-loop-ai/brokkr/blob/HEAD/docs/guides/quickstart.md#step-1--install).

| Channel | One command | Availability |
|---|---|---|
| Release tarball (Linux x86_64) | `curl -LO https://github.com/feedback-loop-ai/brokkr/releases/latest/download/brokkr-linux-x86_64.tar.gz && curl -LO https://github.com/feedback-loop-ai/brokkr/releases/latest/download/SHA256SUMS && sha256sum…
