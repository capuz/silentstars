---
repo: "Stieges/bpmn-generator"
name: "bpmn-generator"
description: "Enterprise BPMN 2.0 Generator — JSON Logic-Core → ElkJS Layout → OMG-compliant XML + SVG"
readmeQualityOk: true
url: "https://github.com/Stieges/bpmn-generator"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["bpmn", "bpmn2", "diagram", "elkjs", "mcp", "process-modeling", "svg", "workflow", "xml"]
stars: 64
forks: 11
openIssues: 32
closedIssues: 23
watchers: 2
contributors: 3
recentReleases: 2
createdAt: "2026-03-23T09:41:24Z"
lastCommitAt: "2026-11-25T13:18:44Z"
lastReleaseAt: "2026-10-12T16:00:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 39
maintainers: ["jfenal"]
openGraphImageUrl: "https://opengraph.githubassets.com/1dc75aaa333212e08b6c382a79c660f6a445604838228298d46f7fe427e93de2/Stieges/bpmn-generator"
---

# BPMN Generator

BPMN 2.0 diagram generator — converts natural language process descriptions or structured JSON into OMG-compliant BPMN 2.0.2 XML files and SVG previews (ISO/IEC 19510:2013). Also generates DMN 1.3 decision models (opt-in, see [DMN Support](#dmn-support-opt-in)) and enumerates the scenarios a process admits (see [Scenario Enumeration](#scenario-enumeration-opt-in)).

### What's new in 4.0

4.0 changes the default output: lane compaction, edge-label repair, the bend rule, node labels that
avoid flows and the repair of flows through foreign shapes are all on by default, and boundary events
face their target. Rule profiles, HTTP inputs and outbound URLs are hardened, and several options
were removed or renamed (`dynamicLaneHeader`, `visualRefinement.enabled`, the wrapping keys). Every
default change names its rollback switch. The migration notes are the **Breaking** section of the
top entry in [CHANGELOG.md](https://github.com/Stieges/bpmn-generator/blob/HEAD/CHANGELOG.md); read it before upgrading.

## Why this one

Three things you can verify in the repo, not just claim:
