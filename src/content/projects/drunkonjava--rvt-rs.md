---
repo: "DrunkOnJava/rvt-rs"
name: "rvt-rs"
description: "Clean-room reader for Autodesk Revit files (.rvt/.rfa/.rte/.rft) without Revit: metadata and schema of 2016-2026 files, and typed elements with measured geometry from Revit 2023 to 2025 projects (2015 to 2022, 2026 and 2027 experimental), exported as IFC4, glTF and plan SVG. Rust, Python, WebAssembly. Apache-2.0."
readmeQualityOk: true
url: "https://github.com/DrunkOnJava/rvt-rs"
homepage: "https://drunkonjava.github.io/rvt-rs/"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
topics: ["autodesk", "bim", "cad", "file-format", "ifc", "interoperability", "openbim", "reverse-engineering", "revit", "rfa"]
stars: 99
forks: 31
openIssues: 47
closedIssues: 184
watchers: 1
contributors: 12
recentReleases: 10
createdAt: "2026-04-19T15:45:43Z"
lastCommitAt: "2026-11-04T02:57:38Z"
lastReleaseAt: "2026-10-26T16:23:36Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded", "release_machine"]
healthScore: 96
undervaluedScore: 42
maintainers: ["DrunkOnJava", "dependabot[bot]", "puzzbobb"]
openGraphImageUrl: "https://opengraph.githubassets.com/5fc44e012c654ec6377f84740f8252d88c07db801763820f836871fe4fd9b9d5/DrunkOnJava/rvt-rs"
fundingLinks: ["GITHUB:https://github.com/DrunkOnJava"]
discussionCount: 6
---

# rvt-rs

**Inspect Revit files without installing Revit.**

rvt-rs is an open-source toolkit for reading Autodesk Revit project, family and template files (`.rvt`, `.rfa`, `.rte`, `.rft`). It reads a file's metadata, preview images and embedded schema. On the Revit releases it supports, it also recovers the building's elements (walls, floors, roofs, doors, windows, stairs, curtain walls, furniture, MEP and structure) with the names, types, storeys, materials and identifiers Revit gives them, and exports them as IFC4 (the open building-model exchange format), glTF (3D), plan SVG and CSV schedules.

It comes as command-line tools, a Rust library, Python bindings and a browser viewer that reads your file inside the browser tab. It is built from public observations of the file format ([`CLEANROOM.md`](https://github.com/DrunkOnJava/rvt-rs/blob/HEAD/CLEANROOM.md)), licensed under the [Apache License 2.0](https://github.com/DrunkOnJava/rvt-rs/blob/HEAD/LICENSE), and not affiliated with Autodesk.

## Start here

| What you want to do | Where to start |
|---|---|
| See a model without installing anything | Open the [browser viewer](https://drunkonjava.github.io/rvt-rs/) and pick a demo,…
