---
repo: "open-nvr/ai-adapter"
name: "ai-adapter"
description: "AI Adapter is a flexible integration layer for connecting any AI model to OpenNVR. It enables seamless support for cloud, local, and edge models through a modular architecture—allowing developers to plug in, switch, and scale AI capabilities for real-time video analytics without vendor lock-in. Run any AI model — YOLO, BLIP, InsightFace, LLMs"
readmeQualityOk: true
url: "https://github.com/open-nvr/ai-adapter"
homepage: "https://opennvr.org"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["ai", "computer-vision", "docker", "face-recognition", "inference", "inference-server", "license-plate-recognition", "machine-learning", "model-serving", "nvr"]
stars: 6
forks: 2
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 3
createdAt: "2026-03-30T13:29:06Z"
lastCommitAt: "2026-08-18T04:08:11Z"
lastReleaseAt: "2026-07-31T12:20:46Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 77
undervaluedScore: 55
maintainers: ["xpertvoip", "surajrb", "AbhishekChauhan1112"]
openGraphImageUrl: "https://opengraph.githubassets.com/893956df4d0a741b73434fff4f39007df9be61d8e3307401eea092b6471e3c14/open-nvr/ai-adapter"
---

# AI Adapter

### Any model. Any framework. One governed contract.

**Run YOLO, BLIP, InsightFace, an LLM, or your own model as a governed detector for self-hosted video surveillance — object detection, face recognition, licence plates and scene captioning, over HTTP or WebSocket, in Docker.**

The pluggable inference layer for [OpenNVR™](https://github.com/open-nvr/open-nvr). Drop any model behind an HTTP or WebSocket endpoint and it becomes a first-class, *governed* capability — with end-to-end audit, fingerprint drift detection, and sovereignty enforcement that the underlying model never had to know about. Governance lives in the contract itself, not bolted on after: an adapter must declare what it touches (GPU, filesystem, network egress) before it can run, and an operator's sovereignty policy can refuse it at registration. That is what lets you run third-party — even proprietary or classified — AI on regulated, air-gapped sites and still answer "which model, which weights, on which frame, under whose authority?"

[Write an adapter](#write-your-own-adapter) · [Install profiles](#install-profiles) · [What ships](#what-ships) · [Contract…
