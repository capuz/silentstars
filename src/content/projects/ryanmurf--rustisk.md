---
repo: "ryanmurf/rustisk"
name: "rustisk"
description: "Asterisk PBX rewritten in Rust — 2-5x faster, memory-safe"
readmeQualityOk: true
url: "https://github.com/ryanmurf/rustisk"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
stars: 19
forks: 1
openIssues: 11
closedIssues: 13
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-04-02T03:29:33Z"
lastCommitAt: "2026-07-12T06:16:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 18
maintainers: ["ryanmurf", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/6564b70d5ea623baf757c42aa75caf9eff0c66252665095fe2c36cbfaed4e83e/ryanmurf/rustisk"
---

# Rustisk

**A Rust-native PBX and telephony toolkit with Asterisk-compatible concepts**

---

## Disclaimer

**This project is NOT production ready.**

Rustisk is an experimental research project that demonstrates the feasibility of rebuilding a large C telecom system in Rust. It is not affiliated with Sangoma, Digium, or the Asterisk project.

**Do not use this for production telephony.** It may drop calls, misroute audio, or behave in unexpected ways. Use the official [Asterisk](https://www.asterisk.org/) for anything that matters.

---

## What is this?

Rustisk is a Rust-native PBX and telephony toolkit that tracks the architecture, configuration style, and management interfaces familiar to Asterisk users:

- **1.16 million lines of C** rewritten as **~204K lines of Rust**
- **18 crates** in a Cargo workspace
- **Pure Rust SIP stack** replacing pjproject (2-5x faster SIP message processing)
- **C-compatible pjsip-shim library** that passes 100% of pjlib's own test suite

## Features

### SIP Stack
- Full RFC 3261 SIP implementation (INVITE, REGISTER, SUBSCRIBE, NOTIFY, OPTIONS, MESSAGE, REFER, UPDATE, INFO, PUBLISH)
- ICE / TURN / STUN for NAT traversal
- DTLS-SRTP for…
