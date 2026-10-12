---
repo: "tinylabscom/mvm"
name: "mvm"
description: "Manage secure microVMs — one command from zero to secure sessions, locally and remotely."
readmeQualityOk: true
url: "https://github.com/tinylabscom/mvm"
homepage: "https://runmvm.com/"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["agent-sandbox", "agent-security", "ai-agent-sandbox", "ai-agent-security", "ai-agents", "ai-security", "code-execution", "code-sandbox", "cybersecurity", "llm-security"]
stars: 44
forks: 4
openIssues: 48
closedIssues: 714
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-08T23:45:29Z"
lastCommitAt: "2026-10-12T03:33:17Z"
lastReleaseAt: "2026-03-14T21:28:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 46
maintainers: ["auser"]
openGraphImageUrl: "https://opengraph.githubassets.com/e41c1c535178ecf815e9c11069277a47ed7c18f7f21f7203c457dcc2cb1f4511/tinylabscom/mvm"
---

# mvm

mvm runs workloads in microVMs on macOS and Linux. Each workload gets its own
Linux kernel under a hypervisor: the in-house HVF backend on macOS 26+ Apple
Silicon, Firecracker on Linux with `/dev/kvm`. You can start one from an OCI
image, a Nix flake, or a decorated Python or TypeScript function. The CLI is
`mvmctl`. Python, TypeScript and Rust libraries drive the same operations from
code.

It is built for running code you don't fully trust, such as agent tool calls,
user-submitted scripts or third-party builds, on a laptop or a single host.
Fleet orchestration lives in a separate project,
[mvmd](https://github.com/tinylabscom/mvmd).

Workload VMs have no network device. Everything the guest sends goes over
vsock to a per-VM process on the host, and that process opens any outbound
connection itself. This gives the host one place to enforce default-deny
egress and to swap secret placeholders for real credentials, so the guest
never holds them. Every launch is described by an execution plan that `mvmctl`
signs, checks and records in a hash-chained audit log before the VM boots.
There is no SSH server in any guest.

## Install

```bash
# Release binary: macOS 26+ on Apple…
