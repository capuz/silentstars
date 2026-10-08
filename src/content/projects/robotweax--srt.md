---
repo: "Robotweax/srt"
name: "srt"
description: "Robotweax Open Source SRT (Secure Reliable Streaming) Protocol"
readmeQualityOk: true
url: "https://github.com/Robotweax/srt"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [64, 32]
stars: 19
forks: 2
openIssues: 8
closedIssues: 11
watchers: 2
contributors: 4
recentReleases: 5
createdAt: "2026-09-07T12:52:42Z"
lastCommitAt: "2026-10-08T10:51:26Z"
lastReleaseAt: "2026-10-02T06:18:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 46
maintainers: ["SRTPioneer"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8472d3b4e23b41e37c6d687e907f7036a3f36110505d97fa253e4cadcb20ef1/Robotweax/srt"
---

# Robotweax SRT

Robotweax SRT is an independent implementation of Secure Reliable Transport
(SRT). It provides the familiar public SRT C API, reliable low-latency UDP
transport, encryption, rendezvous connections, File/Stream mode, packet
filtering, and connection groups in a portable C++20 library.

The project favors explicit compatibility boundaries, bounded protocol state,
and reproducible tests. It is suitable for developers who want to embed SRT,
build transport tools, or evaluate an alternative implementation without
depending on implementation-specific C++ internals.

## Release status

Version **0.2.7** was published on **2026-10-02** as a pre-1.0 recovery and
runtime hardening release. The [latest release](https://github.com/Robotweax/srt/releases/tag/v0.2.7)
includes signed OpenSSL and BCrypt Windows SDK installers and post-signing
checksums. See the [release notes](https://github.com/Robotweax/srt/blob/HEAD/docs/release-notes-0.2.7.md) for changes,
qualification evidence and remaining limits.

| Axis | Robotweax SRT 0.2.7 |
| --- | --- |
| Project release | `0.2.7` |
| Shared-library ABI | `0.2` |
| Default public API target | SRT `1.5.7` |
| `srt_getversion()` |…
