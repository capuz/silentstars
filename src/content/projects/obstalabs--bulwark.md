---
repo: "obstalabs/bulwark"
name: "bulwark"
description: "Kernel-level read gate for AI agents — protected file opens are denied or routed through off-band consent before bytes reach the agent. Linux (fanotify) + macOS (Endpoint Security)."
readmeQualityOk: true
url: "https://github.com/obstalabs/bulwark"
homepage: "https://obstalabs.dev/bulwark"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
topics: ["ai-agents", "endpoint-security", "fanotify", "kernel", "linux", "llm-security", "macos", "rust", "security", "access-control"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-06-17T10:20:13Z"
lastCommitAt: "2026-10-18T08:15:50Z"
lastReleaseAt: "2026-10-15T15:14:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 71
undervaluedScore: 27
maintainers: ["obstalabs"]
openGraphImageUrl: "https://opengraph.githubassets.com/41f14a807541bdea360697b46af5cbfd8d34ff7041bd5238cb4053b690abc393/obstalabs/bulwark"
---

# Bulwark

> Gate an agent's file reads at the OS, by inode, before the bytes reach it.

Bulwark is an OS-level read gate for running AI coding agents on a developer
machine. Launch an agent under it; when any process in its tree tries to `open()`
a protected file, Bulwark applies a policy before the bytes reach the agent: deny,
allow, or ask for consent. On Linux it uses fanotify permission events; on macOS,
Endpoint Security. Hardened mode adds a Landlock floor so protected paths stay
denied even if the userspace gate dies.

```sh
# Run an agent, but deny it any read of your SSH keys.
brew install obstalabs/tap/bulwark
sudo bulwark run --protect ~/.ssh -- claude
#   the agent works normally; a read of a protected file -> Operation not permitted

# macOS note: sudo resets PATH, so on Homebrew/Apple Silicon use the full form,
# which also keeps the agent's own runtime (e.g. node) on PATH:
sudo env "PATH=$PATH" "$(which bulwark)" run --protect ~/.ssh -- claude
```

## What Bulwark is

It supervises a process tree, installs a fanotify `FAN_OPEN_PERM` mark, and
decides each open by the file's **inode**, not its path string. A protected inode
opened by the supervised tree is denied;…
