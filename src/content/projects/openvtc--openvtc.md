---
repo: "OpenVTC/openvtc"
name: "openvtc"
description: "Open Verifiable Trust Community (OpenVTC) "
readmeQualityOk: true
url: "https://github.com/OpenVTC/openvtc"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 31
forks: 19
openIssues: 16
closedIssues: 68
watchers: 3
contributors: 9
recentReleases: 4
createdAt: "2026-02-24T21:31:54Z"
lastCommitAt: "2026-11-15T08:27:13Z"
lastReleaseAt: "2026-11-05T10:41:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 58
maintainers: ["stormer78", "dependabot[bot]", "marat-affinidi"]
openGraphImageUrl: "https://opengraph.githubassets.com/98d41e54eb4038f3bf42d7e205f19ccaf0c665db88aa55bf31726414305c910e/OpenVTC/openvtc"
discussionCount: 8
---

# Open Verifiable Trust Community (OpenVTC) with First Person Protocol

A CLI tool for establishing verifiable trust relationships within developer
communities using Decentralised Identifiers (DIDs) and Verifiable Credentials
(VCs).

OpenVTC implements open standards and protocols to enable _"Know Your Developer"_
capabilities, following the [First Person Project white paper](https://www.firstperson.network/white-paper)
for establishing and verifying **first-person trust relationships** using
Personhood Credentials (PHCs) and Verifiable Relationship Credentials (VRCs).

## Workspace Crates

| Crate | Description |
|-------|-------------|
| [`openvtc`](https://github.com/OpenVTC/openvtc/blob/HEAD/openvtc/) | The OpenVTC client: a terminal UI (TUI) plus headless subcommands |
| [`openvtc-core`](https://github.com/OpenVTC/openvtc/blob/HEAD/openvtc-core/) | Shared library for configuration, DID management, messaging and crypto |

The verifiable trust infrastructure that OpenVTC talks to (the VTA, key
management, credential protocols and DIDComm services) lives in
[verifiable-trust-infrastructure](https://github.com/OpenVTC/verifiable-trust-infrastructure).
The `did-git-sign` commit…
