---
repo: "ajoslin/eng-mode"
name: "eng-mode"
description: "Opinionated pstack-forked engineering workflows, agents, orchestration, and native goal integration for OMP"
readmeQualityOk: true
url: "https://github.com/ajoslin/eng-mode"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
stars: 6
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-22T19:38:46Z"
lastCommitAt: "2026-10-21T17:30:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 60
maintainers: ["ajoslin"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b7f0f6acdb1fd1ac35a909e8b18d48d29974ccb94f6110dd036e23c8ab05ff2/ajoslin/eng-mode"
---

# Eng Mode for OMP

**Eng Mode is the [Oh My Pi](https://github.com/can1357/oh-my-pi) port of [Lauren Tan's pstack](https://github.com/cursor/plugins/tree/main/pstack).** It keeps pstack's playbook-driven engineering system and adapts it to OMP with a small set of runtime and repository-integration changes.

Eng Mode exists to:

- route nontrivial work through pstack-derived investigation, bug-fix, feature, refactoring, performance, review, and delivery playbooks;
- favor small changes, root-cause fixes, and proof against the real artifact;
- assign implementation, judgment, and adversarial review to model-specific agents;
- keep reusable workflow global while each repository owns its standards and product-verification contract.

## OMP-native by design

Eng Mode uses OMP primitives directly:

- `todo` for the active finite work list;
- `task` for typed agents and parallel work; `write` with `agent://<id>` for messages; `read` of `proc://<name>`, `history://<id>`, and `agent://<id>` for process status, transcripts, and agent output;
- LSP, debugger, and browser tools for grounded code and runtime evidence;
- plain `git commit` for commits and `eng-github` for GitHub and PR…
