---
repo: "DrunkOnJava/rvt-rs"
name: "rvt-rs"
description: "Clean-room reader for Autodesk Revit files (.rvt/.rfa/.rte/.rft) without Revit: metadata and schema of 2016-2026 files, typed elements with measured geometry from 2024 and 2025 projects, exported as IFC4, glTF and plan SVG. Rust, Python, WebAssembly. Apache-2.0."
readmeQualityOk: true
url: "https://github.com/DrunkOnJava/rvt-rs"
homepage: "https://drunkonjava.github.io/rvt-rs/"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
topics: ["autodesk", "bim", "cad", "file-format", "ifc", "interoperability", "openbim", "reverse-engineering", "revit", "rfa"]
stars: 33
forks: 9
openIssues: 22
closedIssues: 120
watchers: 2
contributors: 3
recentReleases: 3
createdAt: "2026-04-19T15:45:43Z"
lastCommitAt: "2026-10-05T10:46:51Z"
lastReleaseAt: "2026-09-28T18:16:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 50
maintainers: ["DrunkOnJava"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b4c5cb6baefc1d713e822b8c3cf91fc889d38aa3b1718013067e6730bc12a31/DrunkOnJava/rvt-rs"
fundingLinks: ["GITHUB:https://github.com/DrunkOnJava"]
discussionCount: 3
---

# rvt-rs

**Apache-2.0 clean-room Rust/Python toolkit for reading Autodesk Revit files (`.rvt`, `.rfa`, `.rte`, `.rft`) without a Revit installation.** It opens any Revit file from 2016 to 2026 and reports its metadata, previews and embedded schema, and on Revit 2024 and 2025 project files it reads the building itself: walls, floors, roofs, doors, windows, stairs, curtain walls, furniture, MEP and structure, with the names, types, storeys, materials and GlobalIds Revit gives them, written out as IFC4, glTF, plan SVG or CSV. A zero-upload browser viewer does the same in a tab.

**It is a reader, not a converter for every model.** What rvt-rs recovers is measured element by element against Revit's own IFC export of the same file, on the handful of real models listed in [What rvt-rs reads from real projects](#what-rvt-rs-reads-from-real-projects). Those numbers are the claim; other models of the same releases are expected to behave alike but are not measured. Geometry is exact where the bytes say so and approximated elsewhere (see [What does not work yet](#what-does-not-work-yet)), and most element parameters are not read yet.

### What you can rely on, by input

| Input | Open,…
