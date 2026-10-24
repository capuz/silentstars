---
repo: "artalis-io/hull"
name: "hull"
description: "Hardened, capability-secure runtime for AI-native systems. Lua/JS/WASM under kernel-enforced capability boundaries. SQLite, WebGPU, single static binary. Code became disposable. Trust is not."
readmeQualityOk: true
url: "https://github.com/artalis-io/hull"
homepage: "https://gethull.dev"
language: "C"
languages: ["C"]
languagePcts: [59]
stars: 19
forks: 2
openIssues: 2
closedIssues: 26
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-25T13:40:59Z"
lastCommitAt: "2026-10-24T08:20:08Z"
lastReleaseAt: "2026-06-01T07:00:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 54
maintainers: ["farkasmark"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1166677494/ea1a1abc-bb77-4374-a069-a2dac8307f2b"
---

# Hull

Hardened, capability-secure runtime infrastructure for AI-native systems. Lua, JavaScript, and WASM execute under declared, kernel-enforced capability boundaries. SQLite storage. Single static binary.

**Code became disposable. Trust is not.** AI generates code endlessly. Hull constrains what that code can actually do, at a kernel-enforced boundary the script cannot cross.

The app declares its capabilities (files, environment variables, outbound hosts, database resources) in a manifest. The runtime enforces those bounds. `hull build` produces a single static executable (under 10 MB) that runs on Linux, macOS, Windows, FreeBSD, OpenBSD, and NetBSD. Code, schema, static assets, tests, and signatures all packaged together. The resulting binary is the product.

## Why

AI made code abundant. Trusted execution did not get cheaper. The runtime is now the scarce layer. The only place where you can still say *what code is allowed to do* and have it stick.

Hull is that layer. Applications are distributed as a single file with no infrastructure required. Each app declares its capabilities in a manifest enforced by the runtime, so users can verify exactly what it can access.

In a…
