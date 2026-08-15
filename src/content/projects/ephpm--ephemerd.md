---
repo: "ephpm/ephemerd"
name: "ephemerd"
description: "Ephemeral GitHub Actions runners. Single binary, every platform. Containers on Linux, Hyper-V on Windows, VMs on macOS. Secure by default —   every job gets an isolated, disposable environment."
readmeQualityOk: true
url: "https://github.com/ephpm/ephemerd"
homepage: "https://ephemerd.ephpm.dev"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["actions-runner", "ci-cd", "containerd", "containers", "devops", "ephemeral", "github-actions", "hyper-v", "macos", "self-hosted-runner"]
stars: 8
forks: 0
openIssues: 8
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-04-04T14:08:55Z"
lastCommitAt: "2026-08-15T04:05:28Z"
lastReleaseAt: "2026-08-12T07:55:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 52
maintainers: ["luthermonson", "ephpm-claude[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/180ac718de2081a04e161559e62ce7af5f1aa0087b1d63a4c8dbf30fedd1985d/ephpm/ephemerd"
---

# ephemerd

  <br>
</p>

Ephemeral GitHub Actions runner daemon. One binary, every platform. Secure by default.

ephemerd manages self-hosted GitHub Actions runners that are isolated, disposable, and automatic. Every job gets a fresh environment. When it's done, everything is destroyed. No leftover state, no security risk from untrusted PRs.

Designed by [@luthermonson](https://github.com/luthermonson) in Arizona 🌵 Assembled in [Claude Opus 4.6](https://claude.ai).

## Why

Self-hosted GitHub Actions runners on bare metal are a security problem — any PR can run arbitrary code on your machine. The existing solutions don't cover cross-platform:

- **ARC** requires Kubernetes. Linux only. No Windows.
- **Firecracker runners** are Linux only.
- **GitHub hosted runners** are expensive, limited ARM64, and you don't control the environment.

ephemerd is a single binary that runs on Linux, Windows, and macOS. It embeds containerd as a Go library (the same approach k3s and rke2 use) and manages the full lifecycle: receive job → create isolated environment → run → destroy.

## How It Works

### Linux

Containers run directly on the host via the embedded containerd. No VM needed — fastest…
