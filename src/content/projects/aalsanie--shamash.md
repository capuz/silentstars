---
repo: "aalsanie/shamash"
name: "shamash"
description: "A tool to stop JVM architecture drift before it reaches main. Highly configurable through yaml; no architecture test code."
readmeQualityOk: true
url: "https://github.com/aalsanie/shamash"
homepage: "https://plugins.jetbrains.com/plugin/29504-shamash"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [94]
topics: ["architecture-testing", "code-quality", "dependency-analysis", "github-actions", "intellij-plugin", "java", "jvm", "kotlin", "software-architecture", "static-analysis"]
stars: 335
forks: 7
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2025-12-24T15:46:02Z"
lastCommitAt: "2026-11-07T10:36:34Z"
lastReleaseAt: "2026-01-21T02:48:21Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 85
undervaluedScore: 31
maintainers: ["aalsanie", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/19f1df3e4d5638437cc48bfc1b63dfedb287876394741461a713dcacbc9ed72d/aalsanie/shamash"
fundingLinks: ["GITHUB:https://github.com/aalsanie"]
---

# Shamash

**Architecture checks for Java and Kotlin, without architecture tests.**

Detect dependency cycles, enforce package and role boundaries, and surface coupling hotspots. Use compiled-code checks in the CLI or CI, with source-aware findings and fixes in IntelliJ.

## First scan

Requires **Java 17+** and compiled classes. Download the [CLI archive and checksums](https://github.com/aalsanie/shamash/releases/latest), verify the archive, and add its `bin` directory to your `PATH` (`shamash` on Unix, `shamash.bat` on Windows).

```bash
./gradlew classes  # or ./mvnw package
shamash scan
```

Without a config, the scan reports findings but does not write project files or fail because of architecture violations.

## Enforce rules

```bash
shamash init
shamash validate
shamash scan --fail-on ERROR
```

`init` creates `shamash/configs/asm.yml` with a dependency-cycle rule. Use `shamash init --preset spring` for Spring defaults or `--preset reference` for the full example.

For an existing codebase, run `shamash baseline create` to accept current findings. Commit the updated config and `.shamash/baseline/asm-baseline.json`; subsequent scans report new violations.

## GitHub Actions…
