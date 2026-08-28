---
repo: "open-policy-agent/opa-idea-plugin"
name: "opa-idea-plugin"
description: "Open Policy Agent plugin for IntelliJ "
readmeQualityOk: true
url: "https://github.com/open-policy-agent/opa-idea-plugin"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [82]
stars: 62
forks: 29
openIssues: 34
closedIssues: 62
watchers: 6
contributors: 34
recentReleases: 0
createdAt: "2020-03-11T23:04:33Z"
lastCommitAt: "2026-08-28T14:26:14Z"
lastReleaseAt: "2023-04-11T08:02:55Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 78
undervaluedScore: 33
maintainers: ["SeanLedford", "charlieegan3", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f7a23a8b08ae21a6b18ecd492c11b31ecd6774bf72e65cc2da45431b2cbef93e/open-policy-agent/opa-idea-plugin"
---

# OPA IntelliJ Plugin
A plugin for [IntelliJ](https://www.jetbrains.com/idea/) that provides support for [Open Policy Agent](https://www.openpolicyagent.org/).

Main features are:
* Highlighting
* `opa eval` run configuration
* `opa test` run configuration
* Regal linter and language server support (diagnostics, code completions, code folding, signature help, document symbols, debugging)

# Compatibility

The plugin is compatible with all IntelliJ-based IDEs starting from the version 2020.3, with the following differences in the sets of the available features:

|                        | [IntelliJ IDEA] Community and Ultimate (commercial) |Other IDE
|------------------------|---|---|
| Rego project creation  | + | - |
| Other features         | + | + |

Plugin has been tested against OPA `1.12.3`, but should work with more recent versions.

# Installation 
OPA binary must be in the path.
Installation instructions for OPA can be found [here](https://www.openpolicyagent.org/docs/latest/#running-opa).

For enhanced IDE features (diagnostics, code completions, etc.), Regal must also be installed.
Regal releases are available [here](https://github.com/StyraInc/regal/releases).

## From…
