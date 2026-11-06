---
repo: "2409324124/blender-asset-workflow-skill"
name: "blender-asset-workflow-skill"
description: "Blender low-poly asset and modular scene workflow — private review draft"
readmeQualityOk: true
url: "https://github.com/2409324124/blender-asset-workflow-skill"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 8
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-10-30T17:02:43Z"
lastCommitAt: "2026-11-06T12:17:26Z"
lastReleaseAt: "2026-11-03T07:55:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 37
maintainers: ["2409324124"]
openGraphImageUrl: "https://opengraph.githubassets.com/931e260946da65f428912dd95ac8f389b3c4c9b0d1d47957bbee0e284228ca5c/2409324124/blender-asset-workflow-skill"
---

# Blender Asset Workflow

**v0.1.1 — DSH workflow update:** Added a verified real-time Blender bridge workflow for incremental modeling and visual feedback. See the [release notes](https://github.com/2409324124/blender-asset-workflow-skill/blob/HEAD/RELEASE-NOTES.md) and [experiment report](https://github.com/2409324124/blender-asset-workflow-skill/blob/HEAD/repro/dsh-forced-bridge/REPORT.md).

**Plan the geometry. Validate the blockout. Refine with visual feedback.**

An open-source AI agent skill for procedural low-poly modeling with Blender CLI, Python/bpy and independent visual QA.

Instead of jumping directly from natural language to detailed meshes, the workflow starts with a **geometry plan and a coarse blockout**. It validates proportions, silhouettes and structural relationships through inexpensive Blender previews before investing in further detail.

> **No Blender?** The agent asks before installing anything. See [No Blender?](#no-blender).

## How it works

**Natural language → Geometry planning → Coarse blockout → White previews → Visual QA → Iterative refinement → BLEND verification (GLB export/reimport when requested)**

## Roadmap

**One geometry-first workflow,…
