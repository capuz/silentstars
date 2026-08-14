---
repo: "MartinForReal/okf-enforcer"
name: "okf-enforcer"
description: "Obsidian plugin to validate and enforce the Open Knowledge Format (OKF) with frontmatter checks, auto-fixes, index/log generation, and vault-wide reporting."
readmeQualityOk: true
url: "https://github.com/MartinForReal/okf-enforcer"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [58, 40]
topics: ["obsidian-plugin", "okf", "openknowledgeformat", "open-knowledge-format"]
stars: 10
forks: 2
openIssues: 0
closedIssues: 11
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-24T12:28:34Z"
lastCommitAt: "2026-08-14T05:13:34Z"
lastReleaseAt: "2026-08-05T09:31:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 61
maintainers: ["MartinForReal", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8d638cb1f2f76c6425682b6c01242511251c38cb1dd4374b7dd67ee6dbc9dac/MartinForReal/okf-enforcer"
---

# OKF Enforcer

An [Obsidian](https://obsidian.md) plugin that validates and enforces the **Open Knowledge Format (OKF) v0.2** across your vault — keeping every note self-describing, agent-readable, and portable.

OKF is an open, minimal convention for representing knowledge as a directory of Markdown files with YAML frontmatter. Its one hard rule: every non-reserved note carries a parseable frontmatter block with a non-empty `type`. v0.2 adds first-class **provenance, trust, lifecycle, and attestation** on top of that, while staying backward-compatible with v0.1 bundles. This plugin makes following the format effortless. See the [OKF specification](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md).

## Features

- **Conformance validation.** Checks every note against OKF v0.2. The hard rules (parseable frontmatter, non-empty `type`, valid `index.md`/`log.md` structure — §11/§8/§9) are reported as **errors**; the spec's recommended fields and SHOULD-guidance are **warnings** you can toggle. The spec's permissive rules are respected — broken links and missing optional fields never fail a bundle.
- **Trust & provenance (v0.2).** Opt-in checks for the §5…
