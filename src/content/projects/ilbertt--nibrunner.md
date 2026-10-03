---
repo: "ilbertt/nibrunner"
name: "nibrunner"
description: "MicroVM orchestrator for your VPS with built-in sleep/wake policies, backups, snapshots, HTTPS, custom image, logs and metrics"
readmeQualityOk: true
url: "https://github.com/ilbertt/nibrunner"
homepage: "https://nibrunner.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["firecracker-sandbox", "microvm", "rust", "sqlite", "firecracker"]
stars: 53
forks: 4
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-09-04T10:44:13Z"
lastCommitAt: "2026-10-03T09:21:36Z"
lastReleaseAt: "2026-09-14T08:31:06Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 79
undervaluedScore: 34
maintainers: ["ilbertt", "github-actions[bot]", "nestarz"]
openGraphImageUrl: "https://opengraph.githubassets.com/c018a39362d56551d31df42f70b191995644e1ca7f182ee4fbd7dd1b3bf0dbb1/ilbertt/nibrunner"
---

<h1>nibrunner</h1>
  <p><em>MicroVM orchestrator for your VPS with built-in sleep/wake policies, backups, snapshots, HTTPS, custom image, logs and metrics</em></p>
  <p><a href="https://nibrunner.dev/"><strong>Documentation</strong></a></p>
</div>

nibrunner runs apps in Firecracker microVMs on one Linux machine. It is a single binary,
`nibrunnerd`. You list the apps you want in a JSON file. The daemon boots each one in its own
microVM and keeps it running.

- **Sleep/wake policies** — An app with no traffic is snapshotted and suspended. The next request
  wakes it. Which apps sleep, and after how long, is set per app, so a machine that runs a few
  dozen apps at once can hold hundreds.
- **Backups and snapshots** — Volumes can live in an object store, so they survive the machine. A
  checkpoint is a point-in-time copy of a volume. An export bundles a volume and the app's
  environment into an archive a new volume can start from.
- **HTTPS** — A built-in proxy routes each hostname to its app. It terminates TLS with the
  certificate you give it, or serves plain HTTP behind an edge that terminates TLS. Non-HTTP ports
  (ssh, DNS, WireGuard) are forwarded as-is, TCP or UDP, and wake…
