---
repo: "overdrive-sh/overdrive"
name: "overdrive"
description: "The operating system for running software in production"
readmeQualityOk: true
url: "https://github.com/overdrive-sh/overdrive"
homepage: "https://overdrive.sh"
language: "Rust"
languages: ["Rust"]
languagePcts: [73]
topics: ["microvm", "orchestration", "unikernel", "bpf", "containers", "ebpf", "kubernetes", "rust", "agent", "linux"]
stars: 25
forks: 1
openIssues: 198
closedIssues: 80
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-19T01:45:55Z"
lastCommitAt: "2026-11-02T11:36:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 38
maintainers: ["marcus-sa"]
openGraphImageUrl: "https://opengraph.githubassets.com/85a616f24b2c8700959b088f562102dfba6e313a18934700d7ca1de5e1558a43/overdrive-sh/overdrive"
discussionCount: 0
---

# Overdrive

**Everything you run, on one platform.**

Overdrive is a workload orchestration platform written in Rust. It is designed
to run long-running services, batch jobs, microVMs, and WebAssembly functions
under one control plane — with mutual TLS, load balancing, identity,
and health checks built in. One platform to operate on your own hardware,
instead of a stack you assemble and babysit.

> **Status: early.** Overdrive runs on a single node today and is
> pre-production. This README marks what runs now and what is intended;
> nothing here is presented as shipped that isn't, and there are no benchmark
> numbers because there is nothing at fleet scale to measure yet. The full
> design — most of which is still ahead of the implementation — is tracked in
> the roadmap below.

## What runs today

Single-node and pre-production. This is the shipped surface — what you can
actually run right now:

- **Ship from one file.** Describe a service or job in a single TOML spec and
  deploy it with `overdrive deploy`. Deploy is idempotent on the spec's content
  hash — an identical spec is a no-op, so it is safe to run straight from CI.
- **Boot a microVM with enforced limits.** Declare…
