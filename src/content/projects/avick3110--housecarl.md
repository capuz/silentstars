---
repo: "Avick3110/houseCARL"
name: "houseCARL"
description: "Comprehensive data-layer access to your Skyrim SE load order: read any record, author patches into a new plugin, create/remove records, and look up record schemas, Papyrus signatures, and distributor grammars - in plain English, through Claude or Codex."
readmeQualityOk: true
url: "https://github.com/Avick3110/houseCARL"
language: "C#"
languages: ["C#"]
languagePcts: [99]
topics: ["mcp", "mod-organizer-2", "modding", "mutagen", "papyrus", "skyrim", "xedit"]
stars: 21
forks: 7
openIssues: 90
closedIssues: 88
watchers: 0
contributors: 4
recentReleases: 8
createdAt: "2026-06-04T20:05:59Z"
lastCommitAt: "2026-09-03T08:13:17Z"
lastReleaseAt: "2026-06-11T17:27:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 48
maintainers: ["Avick3110", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f09dc85dfb99f1693b818d5c7c112a4fa09f18aeb0ed1ef141f7b69af455fa33/Avick3110/houseCARL"
---

# houseCARL

**Comprehensive, data-layer access to your Skyrim Special Edition load order — in plain English, through Claude or Codex.**

houseCARL runs a local MCP server with [Mutagen](https://github.com/Mutagen-Modding/Mutagen) — the
Bethesda-format library — kept warm in memory, giving your AI assistant direct access to every plugin
record across your Mod Organizer 2 load order, at the **true load-order winner**, with the full conflict
tree on request. You describe what you want in plain English; houseCARL does the mechanical work and, by
default, writes results into a **new** plugin you review and enable in MO2 — your originals untouched. When
you ask for it, an opt-in **in-place lane** edits an existing plugin directly instead (see below).

Coverage is **reflection-driven**: a build-time generator walks Mutagen's record interfaces and emits
houseCARL's schema automatically, so the set of record types houseCARL understands *is* the set Mutagen
models — by construction, not a hand-maintained subset.

## What it can do

- **Read any record** at the true load-order winner, with the full conflict tree on request — plus batch
  record detail and cross-plugin queries. Read a plugin…
