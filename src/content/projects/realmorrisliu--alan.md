---
repo: "realmorrisliu/alan"
name: "alan"
description: "An agent built to be the next computer: a local-first, end-to-end experience for acting across the digital world."
readmeQualityOk: true
url: "https://github.com/realmorrisliu/alan"
language: "Rust"
languages: ["Rust", "Swift"]
languagePcts: [65, 29]
stars: 9
forks: 0
openIssues: 0
closedIssues: 124
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-10-23T11:28:28Z"
lastCommitAt: "2026-07-20T06:32:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 61
maintainers: ["realmorrisliu", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/068f870ea60ee60088d6237fe81f50e389df2f60cf0e3ec9b1fd138866a3110e/realmorrisliu/alan"
---

# Alan

Alan is a programmable personal computing environment. The repository is in
early development and currently contains three usable layers:

- Alan OS substrate crates for namespaces, mounts, files, descriptors,
  Processes, `/proc`, `/srv`, and file-server composition;
- an Agent Execution Engine that runs the AI Turing-machine loop and projects
  Agent Process state through AgentFS;
- local hosts: a file-backed Rust terminal UI, direct management commands, and
  the native Alan for macOS terminal workspace.

The dedicated system Host boots the Service Manager and Root Agent Process.
Alan for macOS attaches to the matching stable/dev Host over its protected aP
endpoint; it renders Agent Processes by boot ID and PID without owning their
lifecycle or embedding Alan OS.

Package Service is the system owner for installed Skill distributions. It
publishes `/srv/package`; Quartermaster runs as the ordinary `/bin/q` Process.
Installing changes the catalog only. A Process sees immutable package content
at `/lib/pkg/<package-id>` only when its launch context carries an explicit
package reference.

## Execution model

An agent is an ordinary Process whose file layout follows the…
