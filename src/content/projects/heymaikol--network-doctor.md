---
repo: "heymaikol/network-doctor"
name: "network-doctor"
description: "Network Doctor is a cross-platform network troubleshooting TUI that turns interface, DNS, TCP, TLS, HTTP, proxy, and path-MTU checks into one plain-English diagnosis."
readmeQualityOk: true
url: "https://github.com/heymaikol/network-doctor"
homepage: "https://heymaikol.github.io/network-doctor/"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["bubbletea", "cli", "golang", "network-troubleshooting", "networking", "tui", "cross-platform", "dns", "network-diagnostics", "network-tools"]
stars: 352
forks: 11
openIssues: 11
closedIssues: 14
watchers: 3
contributors: 6
recentReleases: 10
createdAt: "2026-06-28T04:11:17Z"
lastCommitAt: "2026-09-05T07:50:27Z"
lastReleaseAt: "2026-07-18T01:27:50Z"
status: "thriving"
tags: ["needs_contributors", "funded", "release_machine"]
healthScore: 89
undervaluedScore: 28
maintainers: ["heymaikol", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1282665509/41a99694-99e3-4809-892f-a5da493a220a"
fundingLinks: ["GITHUB:https://github.com/heymaikol"]
discussionCount: 2
---

# Network Doctor

**Find the layer where your connection breaks.** Network Doctor is a
cross-platform network troubleshooting TUI that turns interface, DNS, TCP,
TLS, HTTP, proxy, and path-MTU checks into one plain-English diagnosis.

Instead of handing you a wall of `ping`, `dig`, and `curl` output, Network
Doctor answers the useful question: **is the problem on my network, along the
path, or at the service?**

## Why Network Doctor

- **Isolates the failing layer.** Independent probes distinguish local-link,
  DNS, egress, target, TLS, HTTP, proxy, and path-MTU failures, and say so when
  the evidence stops short of naming one.
- **Explains what to do next.** Results include evidence and targeted fix hints,
  with familiar drill-down tools one keypress away.
- **Needs no root access.** Even the path-MTU check and LAN map use unprivileged
  sockets and bounded probes.
- **Works interactively or in automation.** Use the TUI for live investigation,
  `--watch` for intermittent faults, or stable JSON and exit codes in scripts.
- **Runs everywhere.** The same diagnosis engine supports Linux, macOS, and
  Windows, with native packages and prebuilt binaries.

## Quick start

Install…
