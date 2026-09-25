---
repo: "apmantza/pi-lens"
name: "pi-lens"
description: "Real-time code feedback for pi — LSP, linters, formatters, structural analysis"
readmeQualityOk: true
url: "https://github.com/apmantza/pi-lens"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 435
forks: 119
openIssues: 239
closedIssues: 1398
watchers: 2
contributors: 64
recentReleases: 0
createdAt: "2026-03-22T22:35:38Z"
lastCommitAt: "2026-09-25T09:01:51Z"
lastReleaseAt: "2026-04-19T11:56:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 26
maintainers: ["wastedC", "apmantza"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d4652b21939eb9751e3980ab88206b7d1e982e2bafdbee7f2540736521d5c71/apmantza/pi-lens"
---

</p>

# pi-lens

pi-lens gives AI coding agents fast, language-aware feedback while they write/edit.

> **Working in this project as an AI agent?** Read the [agent guide](https://github.com/apmantza/pi-lens/blob/HEAD/docs/agent-guide.md)
> for how pi-lens surfaces diagnostics (honesty labels, blockers, read-before-edit)
> and how to respond.

## What It Does

- LSP diagnostics and navigation across supported languages
- Impact cascade diagnostics that show which related files were affected and run LSP diagnostics on them
- Language-specific linters, type-checkers, and scanners on every write/edit
- Safe formatting/autofix where tools are configured or confidently detected
- ast-grep and tree-sitter structural rules for correctness/security smells
- Agent-facing tools for LSP navigation/diagnostics, AST search/replace,
  diagnostics state, and project intelligence
- Review-graph intelligence for supported languages via bundled tree-sitter WASMs
- Ranked identifier search (`symbol_search`) over an always-warm word index,
  feeding the discovery funnel (symbol_search → module_report → read_symbol)
- Diagnostic triage (`lens_diagnostic_mark`): findings can be marked
  false-positive,…
