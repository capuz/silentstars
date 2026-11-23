---
repo: "txtsamu/claude-research"
name: "claude-research"
description: "AI homelab research notes and tutorials"
readmeQualityOk: true
url: "https://github.com/txtsamu/claude-research"
language: "Python"
languages: ["Python"]
languagePcts: [76]
stars: 5
forks: 0
openIssues: 1
closedIssues: 28
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-23T20:01:44Z"
lastCommitAt: "2026-11-23T10:29:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 55
maintainers: ["txtsamu"]
openGraphImageUrl: "https://opengraph.githubassets.com/7923663c46b68101e4883fc672cd6bf63c1703cf58debdce632f0daeb16310ac/txtsamu/claude-research"
---

# claude-research

Working notes from Claude Code sessions on the homelab — deployment write-ups, investigations, and troubleshooting logs. Written primarily so a *future* session (human or AI) can pick up context fast without re-deriving it.

## Structure

Flat, no folders. Research says metadata beats hierarchy for a collection this size — a deep PARA/Zettelkasten-style folder tree is overkill for a few dozen docs and just adds navigation cost. Each file has YAML frontmatter instead:

Another code folder: **`hermes-to-evonic-migration/`** holds the converter, import and cutover scripts behind `hermes-to-evonic-migration.md`. Another code folder: **`evonic-hermes-benchmark/`** holds the agent benchmark harness and raw results behind `evonic-vs-hermes-agent-benchmark.md`. Another code folder: **`kt0211l-flasher/`** holds the Linux flasher (`ktflash_kt0211l.py`, tests, README) for KTMicro KT02H20/KT0211L dongles, documented in `fission-rational-hifi-firmware-upgrade-linux-flasher-ktmicro-kt0211l.md`.
