---
repo: "PzMNo1/PzMCiphertool"
name: "PzMCiphertool"
description: "Instant Noodles' Cipher Toolbox"
originalDescription: "泡面的密码工具箱"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/PzMNo1/PzMCiphertool"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [75]
stars: 75
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-02-17T15:15:45Z"
lastCommitAt: "2026-11-07T13:56:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 52
undervaluedScore: 30
maintainers: ["PzMNo1"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ec1dec5a27ff169ed06a37cee61fdbb0ac0fa15a163bd7d545b70ecd83554cd/PzMNo1/PzMCiphertool"
discussionCount: 1
---

# Instant Noodles' Agent Toolbox (PzMCiphertool)

## Quick Start

### One-click start (recommended)

Double-click `backendcipher\start.bat`, which automatically completes all of the following steps:
Redis start → backend Maven build → backend Spring Boot start → frontend http-server start.

> [!IMPORTANT]
> **Codex CLI / AI coding tool note**: The Codex CLI sandbox blocks commands such as `npx` (access to the `C:\Users\mi` directory is denied by the sandbox), so the frontend cannot start inside the sandbox.
> 
> Workarounds:
> 1. **Double-click `start.bat` directly** (recommended, not subject to sandbox restrictions)
> 2. In Codex, start only the backend (`mvn` + `java -jar`), and start the frontend with VS Code Live Server or by manually running `npx http-server` in a terminal
> 3. The backend Maven build commands work normally in Codex; only `npx` is blocked

---

### Manual start

#### Environment dependencies

| Dependency | Path |
|------|------|
| JDK 17 | `d:\10_Leochad\jdk-17.0.12` |
| Maven 3.9 | `d:\10_Leochad\apache-maven-3.9.5` |
| Redis | `d:\10_Leochad\redis` |
| Node.js | Installed globally |
| Rust stable | Only needed for `frontend-rust/` |
| Trunk | Only needed…
