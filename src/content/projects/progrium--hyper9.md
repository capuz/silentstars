---
repo: "progrium/hyper9"
name: "hyper9"
description: "run isolated Plan 9 and Linux executables anywhere, fast"
readmeQualityOk: true
url: "https://github.com/progrium/hyper9"
homepage: "https://progrium.github.io/hyper9/"
language: "Zig"
languages: ["Zig"]
languagePcts: [89]
topics: ["cross-platform", "hypervisors", "plan9", "sandbox", "zig"]
stars: 20
forks: 2
openIssues: 4
closedIssues: 42
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-11-02T18:43:57Z"
lastCommitAt: "2026-11-21T13:34:42Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 98
undervaluedScore: 48
maintainers: ["progrium", "github-actions[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/fac7e98201c1a28db5942fb4e1d4fc784e73c209d16d844e20ddcc21c1521b93/progrium/hyper9"
discussionCount: 0
---

# h9 - Hyper9

h9 runs native Plan 9 (9front) programs on macOS, Linux, and Windows as if
they were host programs. Nothing boots and there's no disk image: you type
`h9 ls`, and 9front's own `ls` binary runs on a virtual CPU from your host's
hypervisor and lists your directory in a few milliseconds.

Each run is a small, complete Plan 9 machine with its own namespace,
processes, console, and `/srv`, and its system calls are answered by a Plan 9
kernel inside the h9 process (the one from drawterm), never by your host's.
That kernel is also the sandbox: a program sees only the host files and
network you give it. h9 runs Linux binaries the same way, so a 9front shell
and an Alpine `sh` can share one machine.

> **Status:** h9 is under active development, hasn't had a release yet, and
> its sandbox hasn't been through a security audit. Don't trust it with
> malicious code yet.

## Quick start

On a Mac with Apple Silicon, Zig 0.16, and Xcode:
