---
repo: "leanprover/lean-workbench"
name: "lean-workbench"
description: "Online Lean Workbench"
readmeQualityOk: true
url: "https://github.com/leanprover/lean-workbench"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
stars: 11
forks: 1
openIssues: 37
closedIssues: 27
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2026-03-05T17:37:55Z"
lastCommitAt: "2026-10-31T15:58:46Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 47
maintainers: ["robsimmons", "Vtec234", "jcreedcmu"]
openGraphImageUrl: "https://opengraph.githubassets.com/a527e3cc7017845136520a553abe8fb5f7057e20ca3a50ea5725976ec8eaa599/leanprover/lean-workbench"
---

# Lean Workbench

⚠️ Warning: in progress and experimental. There are not yet guarantees
of stable interfaces. A more careful security audit is forthcoming.
Running unsandboxed or with confidential data is at your own risk.

This project aims to provide an online experience that facilitates
familiar (i.e. VS Code with the Lean 4 extension) and novel interfaces
to the Lean proof assistant.

A core part of the system is a multi-user sandboxed VS Code server:
each user gets an isolated [Code Server](https://github.com/coder/code-server) instance
inside a [bubblewrap](https://github.com/containers/bubblewrap) sandbox.

## Setup

This section walks you through setting up a Lean Workbench instance.
It is written with IT staff/system administrators in mind.

### Prerequisites

- A Linux machine (or VM)
  - 3 GiB of RAM per concurrent user is recommended.
  - A dedicated machine (hosting nothing else) is recommended:
    the Workbench container runs with elevated privileges.
  - A significant swap disk (at least 12 GiB, and up to half the available RAM):
    while the default for web servers is often to not configure swap,
    this interacts badly with Lean's reliance on large…
