---
repo: "FidelOdok/MetaForge"
name: "MetaForge"
description: "AI Engineering Agent"
readmeQualityOk: true
url: "https://github.com/FidelOdok/MetaForge"
homepage: "https://meta-forge-khaki.vercel.app"
language: "Python"
languages: ["Python"]
languagePcts: [87]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 5
recentReleases: 10
createdAt: "2026-02-12T07:51:29Z"
lastCommitAt: "2026-09-26T08:47:31Z"
lastReleaseAt: "2026-07-27T05:44:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 60
maintainers: ["FidelOdok"]
openGraphImageUrl: "https://opengraph.githubassets.com/f730a9928a7e1831bf249670e2750f1480e27464d220aa2467bdd529e297440d/FidelOdok/MetaForge"
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
