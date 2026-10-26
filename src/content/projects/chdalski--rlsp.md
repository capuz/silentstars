---
repo: "chdalski/rlsp"
name: "rlsp"
description: "The Rust Language Server Project"
readmeQualityOk: true
url: "https://github.com/chdalski/rlsp"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["lsp-server", "yaml", "yaml-parser"]
stars: 12
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-26T12:00:34Z"
lastCommitAt: "2026-10-26T09:18:02Z"
lastReleaseAt: "2026-03-28T12:29:45Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 53
maintainers: ["chdalski", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/37a393dcc489d29185a14c93f19174f36e6b115221b50c5766d21aa952e0086a/chdalski/rlsp"
---

# The Rust Language Server Project

Small, fast language server implementations written in Rust with minimal memory footprint.

 [](https://codecov.io/gh/chdalski/rlsp) [](https://crates.io/crates/rlsp-yaml) 

## Crates

| Crate | Description |
|-------|-------------|
| [rlsp-yaml](https://github.com/chdalski/rlsp/blob/HEAD/rlsp-yaml/README.md) | YAML language server |
| [rlsp-yaml-parser](https://github.com/chdalski/rlsp/blob/HEAD/rlsp-yaml-parser/README.md) | Spec-faithful streaming YAML 1.2 parser |
| [rlsp-fmt](https://github.com/chdalski/rlsp/blob/HEAD/rlsp-fmt/README.md) | Generic Wadler-Lindig pretty-printing engine |

## Editor Extensions

**VS Code** — a dedicated extension is included at [`rlsp-yaml/integrations/vscode/`](https://github.com/chdalski/rlsp/blob/HEAD/rlsp-yaml/integrations/vscode/). It bundles the compiled server binary and provides full YAML language support — hover, completion, validation, formatting, and more — without any manual configuration. Platform-specific VSIX packages are built for Linux (x64, arm64), macOS (x64, arm64), and Windows (x64).

**Zed** — a Zed extension is available in the [Zed…
