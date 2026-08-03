---
repo: "ingelabs/classpath"
name: "classpath"
description: "GNU Classpath, Essential Libraries for Java"
readmeQualityOk: true
url: "https://github.com/ingelabs/classpath"
language: "Java"
languages: ["Java"]
languagePcts: [94]
topics: ["java", "java-library", "java-api", "classpath"]
stars: 12
forks: 4
openIssues: 5
closedIssues: 20
watchers: 1
contributors: 25
recentReleases: 0
createdAt: "2018-10-18T15:52:52Z"
lastCommitAt: "2026-08-03T06:42:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 71
undervaluedScore: 43
maintainers: ["guillerodriguez", "phvega"]
openGraphImageUrl: "https://opengraph.githubassets.com/f7eace6f8860bf5fd8a434d330ff012dca6a3d4726e0334b20317e71bd32544d/ingelabs/classpath"
---

# GNU Classpath

GNU Classpath is a set of core class libraries for use with Java Virtual Machines, providing roughly Java 1.6 (Java SE 6) API compatibility.

## Why GNU Classpath

GNU Classpath provides a lightweight alternative to OpenJDK for environments where a full JDK is unnecessary. Combined with a compact VM such as [JamVM](https://github.com/ingelabs/jamvm), it is well suited for embedded and resource-constrained devices, offering:

- Smaller flash and RAM footprint
- Lower startup overhead
- Minimal impact on runtime performance for typical workloads

This makes it a practical choice when deploying Java applications on hardware where the size and startup cost of a full OpenJDK installation is prohibitive.

## Supported platforms

The primary targets are Linux embedded systems. The following architectures are supported:

- Linux / 32-bit ARM
- Linux / 64-bit ARM (aarch64)
- Linux / x86_64

macOS with Apple Silicon is also supported for development (not as a target).

Other platforms supported by the build system may work but are not actively tested.

## Building GNU Classpath

### Prerequisites

A Java 8 JDK is required to compile the class library.

For Linux, Temurin or…
