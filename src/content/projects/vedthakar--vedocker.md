---
repo: "Vedthakar/Vedocker"
name: "Vedocker"
description: "Change a GitHub URL, get a running container. Docker + Kubernetes-style platform built from scratch in Go on Linux namespaces — Gemini writes the Dockerfile when a repo has none."
readmeQualityOk: true
url: "https://github.com/Vedthakar/Vedocker"
language: "Go"
languages: ["Go"]
languagePcts: [78]
topics: ["cgroups", "container-runtime", "containers", "devtools", "docker", "dockerfile", "gemini", "go", "golang", "kubernetes"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-18T02:28:01Z"
lastCommitAt: "2026-10-03T22:05:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 55
undervaluedScore: 9
maintainers: ["Vedthakar"]
openGraphImageUrl: "https://opengraph.githubassets.com/886b5402153a9d0f056663917608c5c33a3a8e7ced9166a1ea57f9e043d07901/Vedthakar/Vedocker"
---

# Vedocker

**A Docker and Kubernetes platform built from scratch in Go and Linux — with AI that can containerize any GitHub repo, even if it has no Dockerfile.**

**[▶ Watch the 20-second launch video (with sound)](https://github.com/Vedthakar/Vedocker/blob/HEAD/assets/vedocker-launch.mp4)**
[How it works, layer by layer: I built my own Docker and Kubernetes from scratch](https://towardsaws.com/i-built-my-own-docker-and-kubernetes-system-from-scratch-and-you-can-too-759ffabe9993)

[Quickstart](#quickstart) · [The URL trick](#the-url-trick) · [Use cases](#what-you-can-do-with-it) · [How it works](#how-it-works) · [CLI reference](#cli-reference)

---

## What is Vedocker?

**Paste any GitHub link and get a running container, with or without a Dockerfile.**

Vedocker is a container platform written from the ground up in Go. It doesn't use Docker Engine, containerd or Kubernetes underneath. The runtime, image store, build engine, networking and orchestration are built directly on Linux namespaces, cgroups and iptables. Point it at a repo and it clones the repo, builds it and runs it. If the repo has no Dockerfile, Gemini writes one.

---

## The URL trick

Take any GitHub URL and…
