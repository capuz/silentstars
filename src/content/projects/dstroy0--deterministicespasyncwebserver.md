---
repo: "dstroy0/DeterministicESPAsyncWebServer"
name: "DeterministicESPAsyncWebServer"
description: "Built from scratch with determinism and modernization as the main goal, it preserves all ESPAsyncWebServer functionality and extends it."
readmeQualityOk: true
url: "https://github.com/dstroy0/DeterministicESPAsyncWebServer"
language: "C++"
languages: ["C++"]
languagePcts: [71]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-06-19T19:25:34Z"
lastCommitAt: "2026-07-23T06:15:21Z"
lastReleaseAt: "2026-06-26T23:15:37Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 54
maintainers: ["dstroy0", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2dddcdfbf1ff00a1ff931f6d6a13e4efde10750f334af50c091e3fca9b249cea/dstroy0/DeterministicESPAsyncWebServer"
discussionCount: 2
---

</p>

# DeterministicESPAsyncWebServer (@dstroy0)

A multi-protocol network server for ESP32 with a fully deterministic memory footprint, RFC 7230 compliant request parsing, and an OSI-layered architecture. It serves HTTP/1.1/2/and 3 over QUIC, HTTPS/TLS/DTLS, SSH (full OpenSSH interop), Telnet, SNMP, and post quantum crypto. This is designed for many use cases.

# Active development

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
> - Read [CHANGELOG.md](https://github.com/dstroy0/DeterministicESPAsyncWebServer/blob/HEAD/docs/CHANGELOG.md) before every upgrade.

# Audit status

> [!WARNING]
> **THIS LIBRARY HAS NOT BEEN AUDITED BY A 3RD PARTY**
>
> I am nearly finished with an audit of test/ and then I need to audit src/ one more time before I lock the core for 30 days.
> Crypto feature parity was achieved, but the branch and line…
