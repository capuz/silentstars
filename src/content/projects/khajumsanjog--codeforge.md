---
repo: "khajumsanjog/CodeForge"
name: "CodeForge"
description: "CodeForge is a powerful DevOps automation toolkit that simplifies CI/CD workflows with intelligent pipeline management, secure deployments, and seamless integrations. Built for modern developers and teams, it enables fast, reliable, and scalable software delivery across multiple environments."
readmeQualityOk: true
url: "https://github.com/khajumsanjog/CodeForge"
language: "Go"
languages: ["Go"]
languagePcts: [95]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 6
createdAt: "2026-06-18T04:43:22Z"
lastCommitAt: "2026-07-23T06:16:00Z"
lastReleaseAt: "2026-07-23T04:33:57Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 76
undervaluedScore: 31
maintainers: ["khajumsanjog"]
openGraphImageUrl: "https://opengraph.githubassets.com/765fc839a3a39f64e60da42b6b35f0c33f00c20063ae62351863bf425043b141/khajumsanjog/CodeForge"
---

# CodeForge - Production-Ready CI/CD Daemon & GUI Dashboard

CodeForge is a complete, production-ready CI/CD daemon built in Go 1.22. It features its own configuration scripting language (**KZM**), a secure encrypted credentials vault, a REST API server, and a premium graphical desktop dashboard compiled into a single cross-platform executable.

* **Tagline**: CI/CD - v1.0.0
* **Author**: KhajumSanjog
* **Primary Accent Color**: #534AB7 (Purple)

---

## 1. System Architecture

```mermaid
graph TD
    %% Define styles
    classDef main fill:#534AB7,stroke:#fff,stroke-width:2px,color:#fff;
    classDef vault fill:#BA7517,stroke:#fff,stroke-width:1px,color:#fff;
    classDef executor fill:#0F6E56,stroke:#fff,stroke-width:2px,color:#fff;
    classDef client fill:#D85A30,stroke:#fff,stroke-width:1px,color:#fff;
    classDef target fill:#1a1a2e,stroke:#534AB7,stroke-width:2px,color:#fff;

    %% Components
    KZM["KZM Config Script (.kzm)"]:::main
    Vault["Secrets Vault (~/.codeforge/secrets.enc)"]:::vault
    CLI["Cobra CLI Command Suite"]:::client
    GUI["Fyne Desktop GUI Dashboard"]:::client
    
    subgraph Daemon [CodeForge Daemon]
        Watcher["Folder Watcher…
