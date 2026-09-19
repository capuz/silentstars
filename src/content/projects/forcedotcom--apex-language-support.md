---
repo: "forcedotcom/apex-language-support"
name: "apex-language-support"
description: "experimental, do not use"
readmeQualityOk: true
url: "https://github.com/forcedotcom/apex-language-support"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
stars: 11
forks: 3
openIssues: 1
closedIssues: 3
watchers: 8
contributors: 24
recentReleases: 0
createdAt: "2025-04-04T19:55:58Z"
lastCommitAt: "2026-09-19T02:47:54Z"
lastReleaseAt: "2026-03-16T11:43:41Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 65
maintainers: ["actions-user", "dependabot[bot]", "kylewalke"]
openGraphImageUrl: "https://opengraph.githubassets.com/14cb6faa832da30d77e77dc0a858824f4e2b9914a107f3ca0a9c863225aea831/forcedotcom/apex-language-support"
---

# Apex Language Support

# This repository is experimental - DO NOT USE

This repository contains a set of packages that collectively implement language support for Salesforce Apex, following the Language Server Protocol (LSP) specification.

## Architecture Overview

The project is structured as a monorepo with several interconnected packages that serve different purposes in the language support ecosystem.

```mermaid
graph TD
    subgraph "Core Components"
        apex-parser-ast[apex-parser-ast]
        custom-services[custom-services]
        lsp-compliant-services[lsp-compliant-services]
        apex-lsp-shared[apex-lsp-shared]
    end

    subgraph "Runtime"
        apex-ls[apex-ls]
        apex-lsp-vscode-extension[apex-lsp-vscode-extension]
    end

    subgraph "Testing & Development"
        apex-lsp-testbed[apex-lsp-testbed]
    end

    %% Core dependencies
    apex-parser-ast --> custom-services
    apex-parser-ast --> lsp-compliant-services
    apex-lsp-shared --> custom-services
    apex-lsp-shared --> lsp-compliant-services

    %% Runtime implementation
    custom-services --> apex-ls
    lsp-compliant-services --> apex-ls
    apex-ls --> apex-lsp-vscode-extension…
