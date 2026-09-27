---
repo: "kguardian-dev/kguardian"
name: "kguardian"
description: "A Kubernetes tool leveraging eBPF for advanced Kubernetes security, auto-generating Network Policies, Seccomp Profiles, and more."
readmeQualityOk: true
url: "https://github.com/kguardian-dev/kguardian"
homepage: "https://docs.kguardian.dev"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [40, 23]
topics: ["kubernetes", "security", "ebpf"]
stars: 66
forks: 3
openIssues: 14
closedIssues: 31
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2023-07-09T08:34:57Z"
lastCommitAt: "2026-09-27T09:28:09Z"
lastReleaseAt: "2024-08-19T11:45:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 50
maintainers: ["xunholy", "kguardian-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf4f0ee008980e49576f79243f823f9a2128e4be70bdddcbc93055757e4124aa/kguardian-dev/kguardian"
discussionCount: 0
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/logo/dark.svg">
</picture>

_Least-privilege Kubernetes security policies, generated from what your pods actually do_

</div>

</div>

</div>

[Overview](#-overview) · [In action](#-in-action) · [Features](#-features) · [Architecture](#️-architecture) · [Quick Start](#-quick-start) · [Usage](#️-usage) · [AI Assistant](#-ai-assistant) · [Compatibility](#-compatibility) · [Performance](#-performance) · [Telemetry](#-telemetry) · [Contributing](#-contributing) · [License](#-license)

</div>

# 🔭 Overview

kguardian watches pod traffic and syscalls with eBPF, then writes Kubernetes `NetworkPolicy`, `CiliumNetworkPolicy`, and seccomp profiles from what it sees — no hand-authored rules.

It's built for platform and security teams who want policy-as-code without writing rules by hand: the Controller (an eBPF DaemonSet) captures every TCP/UDP connection and syscall on each node, the Broker stores the per-pod baseline in PostgreSQL, and the `kubectl kguardian` plugin turns that baseline into least-privilege policy YAML for any pod, namespace, or the whole cluster.

## 📸 In action

<table>
  <tr>
    <td width="50%"…
