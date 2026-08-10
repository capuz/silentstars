---
repo: "Monkopedia/sdbus-kotlin"
name: "sdbus-kotlin"
description: "Kotlin Multiplatform D-Bus client and server library — native sd-bus via cinterop, JVM via a pure-Kotlin junixsocket transport, with an XML-to-Kotlin proxy/adapter code generator and Gradle plugin"
readmeQualityOk: true
url: "https://github.com/Monkopedia/sdbus-kotlin"
homepage: "https://central.sonatype.com/artifact/com.monkopedia/sdbus-kotlin"
language: "Kotlin"
languages: ["Kotlin", "C"]
languagePcts: [77, 20]
topics: ["cinterop", "dbus", "ipc", "kotlin", "kotlin-multiplatform", "kotlin-native", "kotlinx-serialization", "linux", "sd-bus", "junixsocket"]
stars: 16
forks: 1
openIssues: 26
closedIssues: 101
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2023-05-18T00:11:44Z"
lastCommitAt: "2026-08-10T05:06:51Z"
lastReleaseAt: "2025-06-24T12:51:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 67
maintainers: ["monkopedia-coder"]
openGraphImageUrl: "https://opengraph.githubassets.com/9878de68aec0199e8991fc03f1268d812170f7f6b46d04c1ff9a62e30d47e5b6/Monkopedia/sdbus-kotlin"
---

# sdbus-kotlin

sdbus-kotlin is a high-level D-Bus library for Kotlin Multiplatform, born as a port of
[sdbus-c++](https://github.com/Kistler-Group/sdbus-cpp). It provides typed client proxies and
service adaptors over D-Bus, and ships a Gradle plugin that generates the Kotlin bindings from
D-Bus introspection XML.

It is published for three targets, all sharing the same common API:

| Target | Backend |
| --- | --- |
| `jvm` | own D-Bus connection over [junixsocket](https://github.com/kohlschutter/junixsocket) — pure-Kotlin marshaller + dispatch, no native code |
| `linuxX64` | sd-bus via libsystemd (cinterop) |
| `linuxArm64` | sd-bus via libsystemd (cinterop) |

## API stability

**1.0 freezes the public API.** A post-0.5.0 review applied a final wave of renames and deprecations
(see the [CHANGELOG](https://github.com/Monkopedia/sdbus-kotlin/blob/HEAD/CHANGELOG.md) migration guide), and 1.0 removes the names that were deprecated
in 0.6.0. From here the surface is stable. Compatibility is enforced in CI with
[binary-compatibility-validator](https://github.com/Kotlin/binary-compatibility-validator)
(JVM and klib API dumps are checked in under `api/`), so any change to the public…
