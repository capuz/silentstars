---
repo: "squid-protocol/gitgalaxy"
name: "gitgalaxy"
description: "Convert source code into a repository-scale structural model. Air gapped, zero dependencies, SARIF and SBOM outputs."
readmeQualityOk: true
url: "https://github.com/squid-protocol/gitgalaxy"
homepage: "https://squid-protocol.github.io/gitgalaxy/"
language: "Python"
languages: ["Python"]
languagePcts: [91]
topics: ["auditing", "codebase-analysis", "sbom", "zero-trust", "ai-security", "appsec", "cybersecurity", "devsecops", "incident-response", "legacy-modernization"]
stars: 57
forks: 11
openIssues: 111
closedIssues: 1247
watchers: 0
contributors: 12
recentReleases: 0
createdAt: "2026-03-20T23:59:31Z"
lastCommitAt: "2026-10-05T10:46:38Z"
lastReleaseAt: "2026-07-05T15:59:52Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 98
undervaluedScore: 41
maintainers: ["squid-protocol"]
openGraphImageUrl: "https://opengraph.githubassets.com/aceda5ad61052261c5b16099ced88bc5f3b2a4b1a9845092a1be02c3247ccc5d/squid-protocol/gitgalaxy"
discussionCount: 3
---

# GitGalaxy

**Repository-scale structural intelligence without compilation.**

[Docs](https://squid-protocol.github.io/gitgalaxy/) ·
[Visualizer](https://gitgalaxy.io/) ·
[Language Crucible](https://github.com/squid-protocol/language-crucible) ·
[Keyword Rosetta](https://github.com/squid-protocol/keyword-rosetta) ·
[Raw Output](https://github.com/squid-protocol/gitgalaxy-raw-output)

**1 scan · 98 structural signals · 50+ languages · no compilation · 17
risk-exposure categories · 6 outputs**

## The short version

GitGalaxy builds a **language-agnostic structural graph of an entire
repository** directly from source text — no build, no per-language toolchain.

It is designed for repositories that are polyglot, partially broken, legacy,
vendor-heavy, or otherwise difficult to analyze through a build-first workflow:

``` text
Go + C++ + Python + Java + Bash + YAML
+ generated code + vendored code + legacy code
+ half-migrated modules + broken dependencies
```

Instead of a separate parser per language, GitGalaxy extracts a common
vocabulary of **structural signatures** — functions, classes, arguments,
control flow, state mutation, I/O, APIs, dependencies — and normalizes them
into…
