---
repo: "ramSeraph/pywmsdump"
name: "pywmsdump"
description: "Code to explore/extract vector data from a WMS server"
readmeQualityOk: true
url: "https://github.com/ramSeraph/pywmsdump"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 22
forks: 2
openIssues: 6
closedIssues: 12
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2024-12-09T08:06:59Z"
lastCommitAt: "2026-11-05T11:20:43Z"
lastReleaseAt: "2026-11-05T11:26:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 64
undervaluedScore: 38
maintainers: ["ramSeraph"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ede6f083af4737db379e81893bd43135394c5abbca782292790b87b44f88a78/ramSeraph/pywmsdump"
---

# wmsdump [](https://pypi.org/project/wmsdump/) [](https://github.com/ramSeraph/pywmsdump/releases/latest)

A library and command-line tool for extracting **vector layer** data from OGC services (WMS, WFS).

> **Note:** This tool only supports vector layers. Raster layers are not supported.

## Checkpoint compatibility in 0.3.0

**Breaking change:** Saved checkpoints must contain `output_bytes`. Older checkpoint formats without this field are unsupported in every retrieval mode. They are rejected without reading or modifying the output; there is no automatic migration or recount fallback. Finish those downloads with the version that created them, or start a new extraction.

OFFSET recovery uses the saved byte boundary and record count without rescanning the output. Use `--verify-record-count` when an explicit recount is needed. EXTENT modes still read the output to rebuild their deduplication index.

## Features

*   **Supports WMS and WFS:** Extracts data from both Web Map Service (WMS) and Web Feature Service (WFS) endpoints.
*   **Flexible Retrieval Modes:** Offers `OFFSET` (paged retrieval) and `EXTENT` (bbox splitting and drilling down by spatial extent) retrieval modes for…
