---
repo: "dali-benothmen/woml"
name: "woml"
description: "Workflow applications as readable documents. Build automations, that can automate anything."
readmeQualityOk: true
url: "https://github.com/dali-benothmen/woml"
homepage: "https://woml.org"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [50, 50]
topics: ["automation", "bunjs", "rust", "typescript", "webhooks", "workflow-automation", "workflow-engine", "ai-agents", "workflow", "markup-language"]
stars: 126
forks: 11
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-07-21T07:48:19Z"
lastCommitAt: "2026-08-24T06:10:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 44
maintainers: ["dali-benothmen"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6afa5c5ad276a37042f52d57b2329026cc5d6ae59ee04f5725a7dbd0ee32a14/dali-benothmen/woml"
discussionCount: 2
---

# WOML: Workflow Orchestration Markup Language

### If you can read HTML, you can use WOML to automate anything, literally anything.

</div>

## What is WOML?

WOML is an open, executable format for durable workflow applications. It lets you describe a workflow with readable, HTML-inspired markup, implement custom logic with JavaScript, and run the result through a cross-platform, Rust-powered runtime.

WOML is three things working together:

- **A language** for expressing triggers, steps, data flow, loops, decisions, parallel work, approvals, lifecycle hooks, and runtime policies.
- **A durable engine** for supervising attempts, retries, state, events, workflow calls, recovery, and execution history.
- **An operational runtime** for running, inspecting, cancelling, backing up, and managing automations from the command line.

A `.woml` file is more than configuration. It is the program, the architecture diagram, the execution policy, and the human-readable documentation for an automation—all in one source-controlled document.

When a step needs logic, write JavaScript directly inside `<script>`. WOML handles everything around that code: execution order, durable history,…
