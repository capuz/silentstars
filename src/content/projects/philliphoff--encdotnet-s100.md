---
repo: "philliphoff/EncDotNet.S100"
name: "EncDotNet.S100"
description: "Libraries for manipulating S-100 based nautical charts."
url: "https://github.com/philliphoff/EncDotNet.S100"
homepage: "https://philliphoff.github.io/EncDotNet.S100/"
language: "C#"
languages: ["C#"]
languagePcts: [82]
stars: 5
forks: 3
openIssues: 49
closedIssues: 70
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-04-05T08:25:00Z"
lastCommitAt: "2026-07-02T06:33:36Z"
lastReleaseAt: "2026-05-15T06:35:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 91
undervaluedScore: 71
maintainers: ["philliphoff"]
openGraphImageUrl: "https://opengraph.githubassets.com/25ab2d8421d3f006eac0bf052a647122f9bcabcf9f8a40ea3293fb93f478ba5d/philliphoff/EncDotNet.S100"
---

# EncDotNet.S100

## Overview

**EncDotNet.S100** is a managed, cross-platform implementation of the
IHO [S-100](https://iho.int/en/s-100-edition-5-2-0) Universal
Hydrographic Data Model for .NET. In plain terms, it reads and draws
**electronic nautical charts and related marine data layers** —
depths, currents, water levels, navigational warnings, aids to
navigation, and more — and it runs on macOS, Windows, and Linux. It
provides:

- A set of **reusable libraries** for reading, portraying, rendering,
  and **validating** S-100 product data — from ISO 8211 ENC cells to
  HDF5 coverage grids to GML feature collections — behind a common
  pipeline abstraction.
- A **cross-platform desktop viewer** (Avalonia + Mapsui) that loads
  any combination of supported products from an exchange set or as
  loose files and renders them, time-aligned, on an interactive map.
- A **standalone command-line tool** (`s100`) that renders any
  supported dataset to a PNG from the shell — self-contained, with no
  .NET install required — for batch and headless scripting.
- An **optional MCP server** that exposes loaded datasets to AI
  agents — feature discovery and query (`identify_features`,…
