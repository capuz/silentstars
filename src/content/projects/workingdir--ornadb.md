---
repo: "workingdir/ornadb"
name: "ornadb"
description: "The Object-Relational Native Application Database"
readmeQualityOk: true
url: "https://github.com/workingdir/ornadb"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
stars: 5
forks: 0
openIssues: 175
closedIssues: 435
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-07T22:22:03Z"
lastCommitAt: "2026-09-05T07:49:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 94
undervaluedScore: 50
maintainers: ["kierandrewett"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8701555a09830ded5d43f211dac3b5fd7c37ece4e75120e960d04f9383588a6/workingdir/ornadb"
---

# OrnaDB

OrnaDB is a database platform for typed applications, with SERVER functions beside the data and CLIENT functions in the application.

## Features

- One function model covers queries, mutations, user interfaces, presenters, and integrations.
- Stable identities and revisions apply across code, data, and dependencies.
- PostgreSQL-backed storage provides transactions, constraints, and server-side functions.
- Client runtimes provide application interfaces, state, resources, actions, and local presentation.
- Structured invocation traces show execution details and security decisions.
- Source checking, semantic diffs, and editor integrations support local development.

## Build

Requirements:

- Linux x86_64 is required for commands that compile the embedded PostgreSQL
  engine, including the workspace server build; use the Docker-backed engine
  gate when the host itself is not Linux x86_64
- Rust 1.95 or later, with `rustfmt` and `clippy`
- Cargo and `just`
- Python 3.11 or newer, Node 22, and `tree-sitter-cli@0.26.5` for editor checks
- Git, GNU `make`, `patch`, and standard Unix file/archive tools
- Docker Engine with the Compose plugin for PostgreSQL gates
- GCC with…
