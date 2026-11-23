---
repo: "pullrun/pullrun"
name: "pullrun"
description: "The AI agent sandbox runtime. Boot any OCI image as a Firecracker microVM, Linux container, or Apple Silicon VM in ~400 ms — zero-copy DAG storage, P2P image sync, native MCP for opencode/Claude Code/Cursor."
readmeQualityOk: true
url: "https://github.com/pullrun/pullrun"
homepage: "https://pullrun.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [73]
stars: 135
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-11T23:39:24Z"
lastCommitAt: "2026-11-23T13:29:08Z"
lastReleaseAt: "2026-07-11T13:11:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 28
maintainers: ["boukaba"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1266760430/9c57ca54-faf4-4ee3-a402-868a53693db4"
discussionCount: 4
---

# **Pullrun**

### *The AI agent sandbox runtime — a disposable microVM per task, booted from any OCI image in ~400 ms.*

**Give every agent task its own sandbox. Pullrun boots any OCI image as a hardened microVM (Firecracker or Apple Silicon), a Linux container, or a dense sandbox group in ~400 ms — from one content-addressed image store. Native MCP server, so opencode, Claude Code, and Cursor pull images, run tasks, exec, and commit filesystem state directly. No daemon required. No overlayfs in the image store. No separate VM images.**

**One OCI image. Any execution target — agent sandbox, container, Firecracker microVM, Apple Silicon VM, or Kubernetes workload. CLI + runtime under 25 MB.**

---

## ⚡ What is Pullrun?

Pullrun is the **sandbox runtime for AI agents** — and the same runtime underneath. It stores OCI layers in a content-addressed DAG (no overlayfs), syncs blocks peer-to-peer, and ships as a ~14 MB CLI + ~6 MB runtime daemon.
