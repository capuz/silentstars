---
repo: "zackees/running-process"
name: "running-process"
description: "A python subprocess replacement written in rust - track zombie processes, launch PTY and more"
readmeQualityOk: true
url: "https://github.com/zackees/running-process"
homepage: "https://pypi.org/project/running-process/"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
topics: ["cross-platform", "process-management", "pty", "python", "rust", "subprocess", "zombie-processes"]
stars: 7
forks: 1
openIssues: 14
closedIssues: 278
watchers: 1
contributors: 2
recentReleases: 5
createdAt: "2025-09-16T06:06:08Z"
lastCommitAt: "2026-08-23T04:08:46Z"
lastReleaseAt: "2026-06-13T14:59:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 99
undervaluedScore: 83
maintainers: ["zackees"]
openGraphImageUrl: "https://opengraph.githubassets.com/c74cd807dc420a241d4d507dc4b21d425a19a360cf50c112744e7018711f36d7/zackees/running-process"
---

# running-process

`running-process` is a cross-platform operating-system process runtime for Rust
and Python. It gives applications one coherent abstraction over process
creation, pipes, PTYs, process trees, containment, observation, detached
daemons, and brokered long-lived services.

## Why?

Operating-system process behavior is not portable by default. Windows Job
Objects and ConPTY, Unix process groups and signals, Linux tracing, named
pipes, Unix-domain sockets, child reaping, and terminal control all have
different lifetime and failure rules. `running-process` puts those rules in a
Rust core and exposes them through first-class Rust APIs and Python bindings.

This is deliberately more than a nicer `subprocess`. It is the process layer
for software that launches concurrent tools, owns descendant trees, drives
interactive terminals, survives parent death, observes nested executions, or
runs reusable daemon backends.

## What it gives you

| Capability | What the abstraction owns |
| --- | --- |
| Commands and streams | Concurrent stdout/stderr capture, bounded waits, typed exits, text and bytes |
| Interactive terminals | Native PTYs on Windows, Linux, and macOS; expect…
