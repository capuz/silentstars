---
repo: "antaalt/shader-validator"
name: "shader-validator"
description: "HLSL / GLSL / WGSL extension for vscode"
url: "https://github.com/antaalt/shader-validator"
homepage: "https://marketplace.visualstudio.com/items?itemName=antaalt.shader-validator"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["glsl", "hlsl", "linting", "lsp", "shader", "typescript", "wgsl"]
stars: 71
forks: 7
openIssues: 4
closedIssues: 19
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2023-01-30T22:30:15Z"
lastCommitAt: "2026-07-03T06:24:56Z"
lastReleaseAt: "2024-08-28T18:28:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 45
maintainers: ["antaalt"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6240f91c10279f95d7e416c3a7959796775b2bfef82f83320ddcdb3af100376/antaalt/shader-validator"
---

# Shader validator

This is a vscode extension allowing syntax highlighting, linting & symbol providing for HLSL / GLSL / WGSL shaders. It is using [shader-language-server](https://github.com/antaalt/shader-sense/tree/main/shader-language-server), a shader language server written in Rust to lint shaders using common validator API & parse symbols for some code inspection.

It is mostly intended to be used with big shader codebase used in production by providing interesting features such as region selection and a shader variant entry point selection for quickly switching between two entry point context with decent performances. This make it also quite reliable for small shader codebase.

Currently, it support some features and languages:

-   **[Syntax Highlighting](#syntax-highlighting)**: Improved syntax highlighting for code.
-   **[Diagnostic](#diagnostics)**: Highlight errors & warning as user type code.
-   **[Goto](#goto)**: Go to a symbol definition.
-   **[Completion](#autocompletion)**: Suggest completion items.
-   **[Hover](#hover)**: Add tooltip when hovering symbols.
-   **[Signature](#signature)**: Provide signatures when completing a function.
-…
