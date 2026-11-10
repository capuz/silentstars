---
repo: "WilliamSmithEdward/pyVBAReference"
name: "pyVBAReference"
description: "Extract and ships VBA / Office COM reference data in tool-friendly formats."
readmeQualityOk: true
url: "https://github.com/WilliamSmithEdward/pyVBAReference"
homepage: "https://pypi.org/project/vba-reference/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["python", "reference-materials", "vba"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2026-05-31T02:29:41Z"
lastCommitAt: "2026-11-10T11:39:19Z"
lastReleaseAt: "2026-10-13T16:51:48Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 66
maintainers: ["WilliamSmithEdward", "dependabot[bot]", "williamsmithedward-repo-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/34b2aa1d878de154e1d8ec6295728b60ec61bf9c1b873073cfe17d523b7bf0ff/WilliamSmithEdward/pyVBAReference"
---

# pyVBAReference

A complete, machine-generated reference of the VBA (Visual Basic for Applications)
object models for Excel, PowerPoint, Word and Access, plus the nine shared COM
type libraries every host can reference. Every public type is exported as both
human-readable Markdown and machine-readable JSON.

## Layout

All generated data lives under `reference/` to keep the repo root clean:

```
reference/
  agentic_llm_primer.md  guide for AI agents (schema + grounding)
  index.json             master catalog of every library and type
  members.json           member name -> the types that define it
  <library>/
    md/     one .md per type   + _index.md
    json/   one .json per type + _index.json
  consolidated/          the same data folded into one set of files per app
    <app>.json / .md             every type
    <app>_constants.json / .md   every enumeration and module constant
    <app>_properties.json / .md  every property of every object
```

Both `md/` and `json/` hold the same data: signatures, return types, parameter
lists, property access modes, enum values, remarks, and examples - introspected
from the registered COM type libraries and enriched with descriptions…
