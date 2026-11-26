---
repo: "groupbees/pollen"
name: "pollen"
description: "Deploy Agent Skills from git repos, declaratively, from a single pollen.yaml"
readmeQualityOk: true
url: "https://github.com/groupbees/pollen"
homepage: "https://groupbees.github.io/pollen/"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
topics: ["agent-skills", "ai-agents", "claude-code", "cli", "rust"]
stars: 33
forks: 2
openIssues: 3
closedIssues: 2
watchers: 0
contributors: 4
recentReleases: 9
createdAt: "2026-09-03T07:24:38Z"
lastCommitAt: "2026-11-26T15:19:19Z"
lastReleaseAt: "2026-11-15T13:31:51Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 42
maintainers: ["leroyguillaume", "dependabot[bot]", "tosun-si"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c9e7763db4857bd0b6466f7a7d40529fc2fd574d811f6bfac5028bc7a7bcc0d/groupbees/pollen"
---

# pollen

Deploy [Agent Skills](https://agentskills.io) from git repositories, local
directories and well-known discovery indexes, declaratively, from a single
`pollen.yaml`.

## Description

`pollen` is a small CLI that reads a `pollen.yaml` describing where your
skills come from — git repositories pinned to a revision, directories next
to the config file, or origins publishing a well-known discovery index such as
a LiteLLM gateway — and makes your skills directories match it: it installs
what is declared, refreshes what moved, and removes what you dropped. The file
lists git repositories, each pinned to a revision with the paths to search for
skills, and discovery origins with the skills to take from their index.

Out of the box it deploys to **both** `.claude/skills/`, which Claude Code
reads, and `.agents/skills/`, the cross-client convention every other Agent
Skills client scans — so one `pollen update` serves every Agent Skills client
without configuring anything. A skill folder that also carries a `.claude-plugin/plugin.json` is
copied whole, so plugin-shaped skills keep working too.
