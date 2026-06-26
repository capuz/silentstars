---
repo: "AdamBien/zb"
name: "zb"
description: "Lightweight Java build tool with zero external dependencies. Compiles projects, auto-detects main classes, and   generates executable JARs using pure Java 21+. Supports .zb configuration files and automatic source discovery. A simple alternative to   Maven/Gradle for straightforward Java projects."
url: "https://github.com/AdamBien/zb"
homepage: "https://bce.design"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["airhacks", "bce-design", "build", "ci", "cicd", "java", "java25", "javase", "zero-dependencies"]
stars: 28
forks: 3
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 7
createdAt: "2025-05-22T12:15:19Z"
lastCommitAt: "2026-06-26T06:46:39Z"
lastReleaseAt: "2026-06-26T06:37:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 68
undervaluedScore: 55
maintainers: ["AdamBien"]
openGraphImageUrl: "https://opengraph.githubassets.com/285d99625871015f4b11505b581496022ac5b287976888a7b5eaa3c299aa97e6/AdamBien/zb"
---

# zb (Zero Dependencies Builder)

**The entire build tool is a single ~30 KB `zb.jar`.** No install, no daemon, no plugin tree, no `~/.m2` — one tiny jar and a Java 25 runtime is the whole story.

Built with pure Java 25, zb compiles and packages your project with zero external dependencies — its own and yours.

## Why zb

- 🪶 **~30 KB, one jar** — the whole build tool fits in a single `zb.jar` you can read, commit, and copy anywhere
- 🚀 **Zero dependencies** — nothing to download but the jar itself; pure Java 25, no third-party libraries
- ⚡ **Instant builds** — no dependency resolution, no daemon warm-up; just `javac` and packaging
- 🔍 **Automatic main class detection** — no manifest boilerplate
- 📦 **Executable JAR generation** out of the box
- 🎯 **One command, zero config** — sensible defaults, optional `.zb` file when you want control

## Prerequisites

- Java 25 or later
- Git (for cloning the repository)

## Installation

### Quick Install (from latest release)

[`zbinstall`](zbinstall) is a single-file Java 25 script that fetches `zb.jar` and `zb.sh` from the latest GitHub release into the current directory:

```bash
# Fetch the installer and run it
curl -fsSLO…
