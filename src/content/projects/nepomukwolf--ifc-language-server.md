---
repo: "NepomukWolf/IFC-Language-Server"
name: "IFC-Language-Server"
description: "Language Server Protocol implementation for IFC STEP files, providing schema-aware diagnostics, navigation, hover, completion, and editor assistance."
readmeQualityOk: true
url: "https://github.com/NepomukWolf/IFC-Language-Server"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["bim", "express-schema", "ifc", "language-server", "lsp", "openbim", "rust", "step"]
stars: 23
forks: 4
openIssues: 11
closedIssues: 58
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-03-12T08:57:19Z"
lastCommitAt: "2026-11-20T12:24:52Z"
lastReleaseAt: "2026-08-05T13:42:37Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 50
maintainers: ["NepomukWolf", "Amixx", "Finradon"]
openGraphImageUrl: "https://opengraph.githubassets.com/41036d5b2287bb3e2cfc9bec29e4d3a08e4818d6233530fb6ff14f0c19c27914/NepomukWolf/IFC-Language-Server"
---

# IFC-Language-Server

`ifc-language-server` is a lightweight Language Server Protocol server for [IFC STEP P21](https://technical.buildingsmart.org/standards/ifc/ifc-schema-specifications/) files (ISO 10303). It provides schema-aware IFC editing features, local STEP id navigation, diagnostics, semantic tokens, and editor assistance for IFC entity arguments.

## Current Capabilities

- Hover on IFC entity names such as `IFCWALL` and `IFCSPACE`
- Hover preview for entity references such as `#123`
- Derived `*` hover for `IfcSIUnit` and `IfcGeometricRepresentationSubContext`
- Go-to-definition for local entity references
- Find-references within the current document
- Document highlight for local STEP ids such as `#123`
- Signature help for IFC entity parameter lists
- Document symbols for editor Outline, breadcrumbs, and go-to-symbol navigation
- IFC STEP boilerplate via `!ifc` / `!!ifc` / `!!!ifc` completions and empty-document code actions
- Range-based semantic tokens for syntax highlighting
- Schema-aware diagnostics for:
  - invalid local reference targets
  - primitive datatype mismatches
  - invalid enumeration values
  - incorrect entity argument counts
  - invalid `$` /…
