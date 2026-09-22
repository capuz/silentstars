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
stars: 35
forks: 7
openIssues: 39
closedIssues: 279
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-06-04T20:05:59Z"
lastCommitAt: "2026-09-22T08:46:14Z"
lastReleaseAt: "2026-06-11T17:27:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 40
maintainers: ["Avick3110"]
openGraphImageUrl: "https://opengraph.githubassets.com/cdabbb2dcd6c86d90704cdbd1e88562e408d9c0d13740223a832d8e94a58556b/Avick3110/houseCARL"
---

# houseCARL

houseCARL is an MCP server that exposes a Skyrim Special Edition load order at the data layer. It reads a Mod Organizer 2 instance's profile and presents every plugin record, every Data-relative asset, the compiled Papyrus, the SKSE plugin layer and the SkyPatcher INI layer to an AI assistant as a set of tools. It is built on [Mutagen](https://github.com/Mutagen-Modding/Mutagen). The host is [Claude Code](https://claude.com/claude-code) or OpenAI Codex.

A write produces a new plugin in a new MO2 mod folder. Editing an existing plugin in place is an opt-in that names the file. MO2 does not need to be running. No plugin file handle is held between calls.

| | |
|---|---|
| Process | One C#/.NET 9 executable, MCP over stdio |
| Substrate | Mutagen.Bethesda.Skyrim 0.54.4 |
| Tools | 31 |
| Skills | 7 |
| Record coverage | 133 record types, 242 sub-structures, 497 polymorphic arms, 280 enums, generated at build time |
| Licence | GPL-3.0-only |

## Design

Four rules. The surface follows from them.

1. **Record coverage is generated.** A build-time generator reflects over Mutagen's record interfaces and emits the schema and validation data. The set of record types…
