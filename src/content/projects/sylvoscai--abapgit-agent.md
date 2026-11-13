---
repo: "SylvosCai/abapgit-agent"
name: "abapgit-agent"
description: "CLI tool to pull and activate ABAP code from git repositories via abapGit"
readmeQualityOk: true
url: "https://github.com/SylvosCai/abapgit-agent"
language: "JavaScript"
languages: ["JavaScript", "ABAP"]
languagePcts: [68, 31]
stars: 17
forks: 7
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-02-09T10:40:28Z"
lastCommitAt: "2026-11-13T11:22:49Z"
lastReleaseAt: "2026-02-23T13:32:37Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 84
undervaluedScore: 29
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/604d115aea4048c6d142f60b78b94a9bf408aff90378084353b64232a14965bd/SylvosCai/abapgit-agent"
---

---
title: abapGit Agent
nav_order: 1
permalink: /
---

# abapGit Agent

A local agent that enables AI coding tools (Claude, Copilot, etc.) to automatically pull and activate ABAP code from git repositories using REST API.

## Overview

This project provides a bridge between AI coding tools and your ABAP system:

1. **Claude generates ABAP code** → Push to git
2. **Local agent pulls from git** → Activates in ABAP system
3. **Returns activation results** → Claude fixes errors if any

## RAP Source Support

BDEF behavior definitions, SRVD service definitions and DDLX metadata extensions support native import/pull/drop/view and SAP supplied-source syntax checks. BDEF/DDLX also support abaplint parser checks; SRVD does not. This is not full RAP or service-binding publication support. Matching CLI/backend support is required; see the [command support matrix and file formats](https://github.com/SylvosCai/abapgit-agent/blob/HEAD/docs/commands.md#rap-source-support).

```bash
abapgit-agent syntax --files src/zr_my_bo.bdef.asbdef
# After committing/pushing, selectively activate the native source:
abapgit-agent pull --files src/zr_my_bo.bdef.asbdef
```

Prepare dependencies separately; a…
