---
repo: "fr4nsyz/KernelHarbor"
name: "KernelHarbor"
description: "An LLM-assisted eBPF-based EDR from scratch"
readmeQualityOk: true
url: "https://github.com/fr4nsyz/KernelHarbor"
language: "Go"
languages: ["Go"]
languagePcts: [76]
topics: ["cybersecurity", "ebpf", "edr", "rag"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-21T16:47:11Z"
lastCommitAt: "2026-07-05T20:17:08Z"
status: "thriving"
tags: []
healthScore: 84
undervaluedScore: 52
maintainers: ["fr4nsyz", "john00003", "meharklair"]
openGraphImageUrl: "https://opengraph.githubassets.com/ebfc9f84154418bde7b9caa7a0c7edae6dd722bafec1d0bf74eecca09e9e82a0/fr4nsyz/KernelHarbor"
---

# KernelHarbor

Linux kernel security monitoring with eBPF and AI-powered analysis and automated response.

Credits:

| Person | Details |
|-----------|-------------|
| [Kien Do -- Security Engineer @ Trend Micro](https://github.com/kienmarkdo) | Guided the team on how production-grade EDRs work. |
| [Francois Coleongco (Me) -- SWE Intern @ IBM](https://github.com/fr4nsyz) | Detection & Response Engine, `execve` / `execveat` syscall monitoring. |
| [John Tyler -- GPU Programmer @ AMD](https://github.com/john00003) | `open` / `openat` syscall monitoring. |
| [Mehar Klair -- Incident Response @ KPMG](https://github.com/meharklair) | `connect` syscall monitoring. |

## Overview

KernelHarbor captures system events (execve, open, network) using eBPF and analyzes them with an AI pipeline for threat detection and response. When malicious behavior is detected, it can automatically kill processes or block network connections.

The demo below was done on the same device for simplicity. Analysis server ideally would run on a separate machine than the one running the agent.

https://github.com/user-attachments/assets/99ef4a91-b9aa-411d-b847-0af310006de9

[alternate demo…
