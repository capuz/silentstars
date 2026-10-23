---
repo: "oxyzenQ/zejtron"
name: "zejtron"
description: "Read-only evidence ledger for the Linux host. Native kernel readers, eBPF event windows, zero external wrappers. Boring and serious."
readmeQualityOk: true
url: "https://github.com/oxyzenQ/zejtron"
language: "Rust"
languages: ["Rust", "Shell"]
languagePcts: [72, 25]
topics: ["cli", "linux", "rust", "command-line-tool", "commandline", "developer-tool", "ebpf", "forensics", "observability", "rust-cli"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-25T18:05:01Z"
lastCommitAt: "2026-10-23T08:46:53Z"
lastReleaseAt: "2026-05-28T17:07:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 80
undervaluedScore: 46
maintainers: ["oxyzenQ", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d3402773126fa4ca7c3f5fcd40b60b9cf86d4eb53517c79895216f3dd20ddb2/oxyzenQ/zejtron"
fundingLinks: ["KO_FI:https://ko-fi.com/rezky"]
---

> The operator asks. The host answers.
> zejtron reads the evidence and prints the ledger — nothing more, and never less.

zejtron's output complies with the [Evidence Ledger Specification v1](https://github.com/oxyzenQ/zejtron/blob/HEAD/docs/EVIDENCE-LEDGER.md). See [docs/EVIDENCE-LEDGER.md](https://github.com/oxyzenQ/zejtron/blob/HEAD/docs/EVIDENCE-LEDGER.md) for the citable format.

## Demo

       alt="zejtron doctor readiness report"
       width="800"
       style="border-radius:24px; box-shadow:0 4px 20px rgba(0,0,0,0.15);">

       alt="zejtron why evidence report for /etc/resolv.conf"
       width="800"
       style="border-radius:24px; box-shadow:0 4px 20px rgba(0,0,0,0.15);">

## Why zejtron?

An investigation fragments across seven tools: `which` for the binary,
`ss` for the port, `lsof` for the holder, `ps` for the tree, `systemctl`
for the unit, `journalctl` for the evidence, and shell glue to hold it
together — each with its own output dialect, none of it deterministic.

zejtron is one binary that answers the incident questions in one
dialect. The output is deterministic, the timestamps are UTC with an
explicit marker, and the tool never writes.

### What makes…
