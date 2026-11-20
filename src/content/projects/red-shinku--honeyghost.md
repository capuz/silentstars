---
repo: "red-shinku/HoneyGhost"
name: "HoneyGhost"
description: "now an eBPF-based runtime monitoring agent for Linux. Organize events with Roles and Contexts"
readmeQualityOk: true
url: "https://github.com/red-shinku/HoneyGhost"
language: "C++"
languages: ["C++"]
languagePcts: [77]
topics: ["ebpf", "observability"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 3
createdAt: "2026-08-05T04:01:18Z"
lastCommitAt: "2026-11-20T12:23:51Z"
lastReleaseAt: "2026-11-16T12:36:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 54
maintainers: ["red-shinku"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ca0154770d1bc33443e10d26c47c8379b33d1883670f76bda506fba1f0bd8e0/red-shinku/HoneyGhost"
discussionCount: 0
---

# HoneyGhost

**English** | [简体中文](https://github.com/red-shinku/HoneyGhost/blob/HEAD/README.cn.md)

HoneyGhost is an eBPF-based runtime monitoring agent for Linux. It collects
system-call and file events from the kernel, maintains a live view of processes,
roles (systemd services and containerd containers) and contexts, and exposes
that view — together with a filtered event stream — through a local Unix socket
to the `hghost` command-line client.

> **Project status:** Currently, only the basic architecture has been completed. Advanced features are still in planning/development and are expected to include security policies, intrusion detection, etc. Configuration, CLI output, and protocol formats may change across versions. For currently available capabilities, see [Project status](#project-status)
> for what works today.

> I hope it can be a sweet-honey-softly ghost on your server... in the future. There is a far way to go, and for me, still many things to know.
