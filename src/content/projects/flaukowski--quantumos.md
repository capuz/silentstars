---
repo: "flaukowski/QuantumOS"
name: "QuantumOS"
description: "A next-generation quantum-aware operating system with microkernel architecture"
readmeQualityOk: true
url: "https://github.com/flaukowski/QuantumOS"
language: "C"
languages: ["C"]
languagePcts: [67]
stars: 5
forks: 2
openIssues: 3
closedIssues: 45
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-01-18T17:52:44Z"
lastCommitAt: "2026-07-09T20:45:33Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 61
maintainers: ["flaukowski", "NickFlach"]
openGraphImageUrl: "https://opengraph.githubassets.com/d790a6676defcafdab787978eaba3ece2a9dd96a9812914c87a1ec19563f0954/flaukowski/QuantumOS"
discussionCount: 2
---

> **Step 1** — find [`Ghost Magic.mp3`](https://github.com/flaukowski/QuantumOS/blob/HEAD/Ghost%20Magic.mp3) in the repo and vibe. 🎵

# 🚀 QuantumOS

*A next-generation quantum-aware operating system for the future of computing*

> *"The future of computing is quantum, and the future of operating systems must be quantum-aware."*

*A real boot (GRUB ISO, graphical entry): the splash's two-source interference pattern animates as subsystems come up, then the kernel idle loop renders `ghostd`'s live oscillator field.*

## 🌐 Try it in your browser — zero install

**[flaukowski.github.io/QuantumOS](https://flaukowski.github.io/QuantumOS/)** boots the real 64-bit kernel in your tab — an unmodified `qemu-system-x86_64` compiled to WebAssembly — and drops you at a live `qsh` prompt. Type into it: it's the real OS, running for real.

*The live demo: `imprint a cat sat on the mat`, then `recall a cxt sxt on thx mat` — the holographic field returns the stored phrase from a corrupted cue.*

## ✅ What runs today

QuantumOS boots on x86-64 under QEMU (`make run`), and every claim below is gated in CI (`make ci-smoke`):

- **Microkernel core** — preemptive scheduler, per-process page tables,…
