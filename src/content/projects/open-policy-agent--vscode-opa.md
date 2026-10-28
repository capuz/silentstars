---
repo: "open-policy-agent/vscode-opa"
name: "vscode-opa"
description: "An extension for VS Code which provides support for OPA and the Rego policy language"
readmeQualityOk: true
url: "https://github.com/open-policy-agent/vscode-opa"
homepage: "https://openpolicyagent.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["opa", "open-policy-agent", "policy-as-code", "rego", "vscode-extension"]
stars: 136
forks: 37
openIssues: 10
closedIssues: 70
watchers: 7
contributors: 35
recentReleases: 2
createdAt: "2018-03-13T18:25:52Z"
lastCommitAt: "2026-10-28T09:57:19Z"
lastReleaseAt: "2026-09-30T13:11:44Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 92
undervaluedScore: 50
maintainers: ["dependabot[bot]", "charlieegan3", "sspaink"]
openGraphImageUrl: "https://opengraph.githubassets.com/370719eeabf8c009b33c6b3f3e9fd8bb3752151c269b2da001c5e9d87ab540b8/open-policy-agent/vscode-opa"
---

# vscode-opa

This plugin provides a number of features to help you work with
[Open Policy Agent](https://www.openpolicyagent.org)
(OPA) policies in Visual Studio Code.

## Features

- Evaluate Packages
- Evaluate Selections
- Partially Evaluate Selections
- Trace Selections
- Profile Selections
- Run Tests in Workspace

Additionally, users may choose to install
[Regal](https://www.openpolicyagent.org/projects/regal),
which adds the following features via the
[Language Server Protocol](https://microsoft.github.io/language-server-protocol/) (LSP):

- Diagnostics (linting)
- Hover / tooltips (for inline docs on built-in functions)
- Go to definition (ctrl/cmd + click on a reference to go to definition)
- Folding ranges (expand/collapse blocks, imports, comments)
- Document and workspace symbols (navigate to rules, functions, packages)
- Inlay hints (show names of built-in function arguments next to their values)
- Formatting (`opa fmt`, `opa fmt --rego-v1` or `regal fix`, see [Configuration](#configuration) below)
- Code actions (quick fixes for linting issues)
- Code completions
- Code lenses (click to evaluate any package or rule in the editor, and have the result displayed…
