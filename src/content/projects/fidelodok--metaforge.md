---
repo: "FidelOdok/MetaForge"
name: "MetaForge"
description: "AI Engineering Agent"
readmeQualityOk: true
url: "https://github.com/FidelOdok/MetaForge"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 5
recentReleases: 10
createdAt: "2026-02-12T07:51:29Z"
lastCommitAt: "2026-09-13T08:30:42Z"
lastReleaseAt: "2026-07-27T05:44:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 54
maintainers: ["FidelOdok"]
openGraphImageUrl: "https://opengraph.githubassets.com/162f5c3e8dbd1da941c7b0029ae8e747cc56039520b4a45acd0e48a334dde69a/FidelOdok/MetaForge"
---

# MetaForge

**Local-first control plane for hardware design.** MetaForge turns
engineer intent — PRDs, constraints, design decisions — into
reviewable, manufacturable hardware deliverables. It orchestrates
specialist AI agents that drive real engineering tools (KiCad,
FreeCAD, CalculiX, SPICE) over the
[Model Context Protocol](https://modelcontextprotocol.io), and
keeps every step versioned and auditable.

> **Prime rule:** if it can't be versioned, reviewed, and built —
> MetaForge doesn't output it.

### See it in action

A real turn in the interactive `forge` TUI — the assistant calls a
tool, then answers from what it returned:

More screenshots (welcome screen, the Runs pane) in the
[CLI reference](https://github.com/FidelOdok/MetaForge/blob/HEAD/docs/cli-reference.md#what-it-looks-like).

```mermaid
flowchart LR
    intent["Human intent<br/>PRD · Constraints"]
    mf["MetaForge<br/>control plane"]
    agents["Specialist agents<br/>per discipline"]
    tools["Real tools<br/>KiCad · FreeCAD<br/>CalculiX · SPICE"]
    twin[("Digital Twin<br/>Neo4j · pgvector")]
    out["Reviewable deliverables<br/>schematics · BOM · Gerbers"]

    intent --> mf
    mf --> agents
    agents…
