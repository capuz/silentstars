---
repo: "BrokkAi/muse-acp"
name: "muse-acp"
description: "Use Meta Muse Code in Zed, IntelliJ IDEA, and other JetBrains IDEs with your existing subscription. Dependency-free Rust adapter for Agent Client Protocol (ACP), using the native Muse Session Protocol (MSP)."
readmeQualityOk: true
url: "https://github.com/BrokkAi/muse-acp"
homepage: "https://github.com/BrokkAi/muse-acp/releases/latest"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["acp", "agent-client-protocol", "ai-agent", "coding-agent", "developer-tools", "intellij", "jetbrains", "json-rpc", "msp", "muse-code"]
stars: 10
forks: 1
openIssues: 1
closedIssues: 64
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-09-03T18:54:22Z"
lastCommitAt: "2026-09-26T08:46:54Z"
lastReleaseAt: "2026-09-14T09:07:23Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 63
maintainers: ["foundev", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/64798ebac15140f24e0e7dbfab8744f85a520c7a7bdc91d381ce5a37464d9a81/BrokkAi/muse-acp"
---

# muse-acp

**Use your existing Muse Code subscription in Zed, IntelliJ IDEA, and other
JetBrains IDEs.**

`muse-acp` is a small, dependency-free Rust bridge between the
[Agent Client Protocol](https://agentclientprotocol.com/) (ACP) used by editors
and Muse Code's native [Muse Session Protocol](https://github.com/meta-models/muse-code-sdk)
(MSP). Standalone installs use one native binary and need no Node.js, npm, or
Python runtime. npm installs use a small Node.js launcher.

This project started from a simple itch: I wanted to use the Muse Code
subscription I already pay for inside the editors I already use, while keeping
Muse's session engine, tools, authentication, and approval flow.

> `muse-acp` is an independent community project. Muse Code and Muse Spark are
> products of Meta and are not affiliated with or supported by this project.

See [ROADMAP.md](https://github.com/BrokkAi/muse-acp/blob/HEAD/ROADMAP.md) for protocol-compatibility, reliability, feature,
and release priorities.
The [MSP event compatibility matrix](https://github.com/BrokkAi/muse-acp/blob/HEAD/docs/event-compatibility.md) records the
ACP mapping or intentional disposition of every notification in the…
