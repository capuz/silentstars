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
forks: 2
openIssues: 1
closedIssues: 2
watchers: 8
contributors: 23
recentReleases: 0
createdAt: "2025-04-04T19:55:58Z"
lastCommitAt: "2026-07-28T14:56:36Z"
lastReleaseAt: "2026-03-16T11:43:41Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 63
maintainers: ["dependabot[bot]", "actions-user", "madhur310"]
openGraphImageUrl: "https://opengraph.githubassets.com/bea8462371bc5a944fe61de5087d2764dbb38e0b527b7964ba3366cd90660a89/forcedotcom/apex-language-support"
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
