---
repo: "dstroy0/ProtoCore"
name: "ProtoCore"
description: "Fully deterministic protocol core, self-contained highly-optimized ecosystem."
readmeQualityOk: true
url: "https://github.com/dstroy0/ProtoCore"
homepage: "https://dstroy0.github.io/ProtoCore/"
language: "C"
languages: ["C"]
languagePcts: [86]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-06-19T19:25:34Z"
lastCommitAt: "2026-08-10T05:06:43Z"
lastReleaseAt: "2026-06-26T23:15:37Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 58
maintainers: ["dstroy0", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/096e2cf3c42d36f094c09f4a9783e7e9779cd224fe37d6932fe4916467bb7692/dstroy0/ProtoCore"
discussionCount: 2
---

</p>

# ProtoCore (@dstroy0)

A multi-protocol network server for microcontrollers with a fully deterministic memory footprint, RFC 7230 compliant request parsing, and an OSI-layered architecture. It serves HTTP/1.1/2/and 3 over QUIC, HTTPS/TLS/DTLS, SSH (full OpenSSH interop), Telnet, SNMP, and post quantum crypto.

**Supported today:** ESP32, all 13 variants. The core is vendor-neutral C with no vendor idioms; Arm and TI C2000 are in progress, tracked in [docs/ROADMAP.md](https://github.com/dstroy0/ProtoCore/blob/HEAD/docs/ROADMAP.md).

## Active development

> [!WARNING]
>
> 1. **Expect breaking changes**
> 2. **We fix things the right way and put security and correctness first**
> 3. **We do not write backwards-compatibility shims**
> 4. **We only support the latest library, toolchains, and platforms**
> 5. **Releases are version-tagged**
>
> - Pin an exact version if you need stability until we lock the core.
>   **The code is the source of truth**
> - Read [CHANGELOG.md](https://github.com/dstroy0/ProtoCore/blob/HEAD/docs/CHANGELOG.md) before every upgrade.

## Audit status

> [!WARNING]
> **THIS LIBRARY HAS NOT BEEN AUDITED BY A 3RD PARTY**
>
> No third party has reviewed…
