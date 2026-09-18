---
repo: "RealTimeLogic/SharkSSL"
name: "SharkSSL"
description: "SharkSSL is a high-performance embedded TLS solution that is known for its small size and fast performance"
readmeQualityOk: true
url: "https://github.com/RealTimeLogic/SharkSSL"
homepage: "https://realtimelogic.com/products/sharkssl/"
language: "C"
languages: ["C"]
languagePcts: [96]
topics: ["tls"]
stars: 25
forks: 6
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2021-12-14T23:46:47Z"
lastCommitAt: "2026-09-18T08:26:49Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 75
undervaluedScore: 34
maintainers: ["Telemechanics"]
openGraphImageUrl: "https://opengraph.githubassets.com/0097cfc9acbf2cf3a56d3f53d4a988116e9ec2674b223c78e4821d51d6782ed2/RealTimeLogic/SharkSSL"
---

# SharkSSL Amalgamated

[SharkSSL](https://realtimelogic.com/products/sharkssl/) is a compact embedded TLS 1.3 and TLS 1.2 client and server stack for devices where code size, memory use, and portability matter. This repository packages the SharkSSL core, porting layers, examples, command-line tools, and complementary application-protocol libraries in a source layout that is easy to add to an embedded C or C++ project.

SharkSSL Amalgamated includes the APIs provided by the standard SharkSSL SDK, except for assembler-optimized ciphers. For API details and integration guidance, use the [official SharkSSL documentation](https://realtimelogic.com/ba/doc/en/C/shark/index.html). This README focuses on what the repository contains and how to get started.

## Included protocol libraries

All five complementary protocol libraries shipped in `src` are listed below. They are included free of charge and are designed to work with SharkSSL when secure transport is required. Their use remains subject to the [SharkSSL Amalgamated license terms](#license).

| Library | Source | What it provides | Official documentation |
| --- | --- | --- | --- |
| SharkMQ | `src/SharkMQ.c` | Secure SimpleMQ…
