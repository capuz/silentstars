---
repo: "openJiuwen-ai/agent-memory"
name: "agent-memory"
description: "Memory is a long-term memory module for AI agents, providing capabilities for memory extraction, storage, retrieval, and migration for agents running on the openJiuwen framework."
readmeQualityOk: true
url: "https://github.com/openJiuwen-ai/agent-memory"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 76
forks: 24
openIssues: 61
closedIssues: 176
watchers: 0
contributors: 21
recentReleases: 3
createdAt: "2026-06-18T02:33:51Z"
lastCommitAt: "2026-11-03T12:47:03Z"
lastReleaseAt: "2026-09-21T10:00:14Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 39
maintainers: ["BigFaceCat-xx", "HankDUMPLINGZhong", "zyw0808"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5ace5d73d91f560056e711983b248cd57f3433591f259def50e7fb3dffdabe8/openJiuwen-ai/agent-memory"
---

·
  ·
  ·

---

## Introduction

openJiuwen **agent-memory** (also known as Jiuwen Memory) is a user-centric, high-precision, high-performance, natively secure, and configurable agent memory system open-sourced by the openJiuwen community. It goes beyond simple vector retrieval — integrating multi-form indexing, self-evolving memory, fused retrieval, and multiple integration methods into a general-purpose memory infrastructure. Whether the host is a chat assistant, a coding agent, or an autonomous agent, the same memory capabilities can be accessed conveniently through SDK, HTTP API, CLI, and more.

**Note**: Future memory-related evolution in openJiuwen will primarily happen in this project. Memory capabilities in agent-core will gradually migrate here.

### Why agent-memory?

| Capability | Value |
| --- | --- |
| Framework-Agnostic, Multi-Form Access | Memory is no longer tied to a specific framework or product: in-process SDK embedding and out-of-process HTTP API access both converge to a unified `MemoryAPI` |
| Flexible & Configurable | Layered design with pipeline-based processing and pluggable operators — horizontally extensible and configurable per scenario |
| Layered…
