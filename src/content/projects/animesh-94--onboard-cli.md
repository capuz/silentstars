---
repo: "animesh-94/Onboard-CLI"
name: "Onboard-CLI"
description: "An AST-powered, local-first CLI that visualizes complex system architectures and enforces architectural boundaries via instant Git hooks."
url: "https://github.com/animesh-94/Onboard-CLI"
homepage: "https://onboard-cli.vercel.app"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [56, 31]
topics: ["golang", "ast", "cli-tool", "developer-tools", "tree-sitter"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 9
createdAt: "2026-06-28T19:54:58Z"
lastCommitAt: "2026-07-04T06:13:10Z"
lastReleaseAt: "2026-07-01T14:59:01Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 80
undervaluedScore: 49
maintainers: ["animesh-94"]
openGraphImageUrl: "https://opengraph.githubassets.com/95315262b3dfaf14cf063c8485f378ebede8e77ecbb20ded5a4da56d7b84b4b4/animesh-94/Onboard-CLI"
---

https://github.com/user-attachments/assets/5f350795-de1f-44a4-95fe-e041ce3467d1

# Onboard-CLI

> Developer platform for code parsing, systems profiling, and canvas-based node visualization.

**Onboard-CLI** is an advanced command-line interface tool and web-based visualizer designed to help developers quickly understand and map out large, complex codebases. By leveraging AST (Abstract Syntax Tree) parsing via Tree-sitter, Onboard-CLI generates structural topology graphs and enforces architectural boundaries, presenting them through an intuitive React Flow canvas.

## 🌟 Key Features

- **AST Slicing Engine**: Deep code parsing using `tree-sitter` for accurate structural node generation across multiple languages (Go, JS, TS, Python, Java).
- **Interactive Visualizer (`map`)**: Automatically spins up a local React Flow canvas (`http://localhost:3000/app`) to visually explore code paths, dependencies, and topological maps within a specified radius.
- **Architecture Drift Detection (`drift`)**: Analyzes codebase against `architecture.yml` rules to detect unauthorized cross-file imports and boundary violations, ensuring long-term code health.
- **Comprehensive Ecosystem**: Built-in…
