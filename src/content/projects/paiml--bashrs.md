---
repo: "paiml/bashrs"
name: "bashrs"
description: "Bashrs: Rust-to-Shell Transpiler for Deterministic Bootstrap Scripts"
readmeQualityOk: true
url: "https://github.com/paiml/bashrs"
homepage: "https://paiml.github.io/bashrs/"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["bash", "mcp", "rust", "paiml-active-tool"]
stars: 40
forks: 3
openIssues: 3
closedIssues: 186
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-05-27T14:54:24Z"
lastCommitAt: "2026-09-12T08:04:29Z"
lastReleaseAt: "2025-10-02T19:39:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 60
maintainers: ["noahgift"]
openGraphImageUrl: "https://opengraph.githubassets.com/0edff4e48776350f96bd8f3af4655717391864df102b527ebe3916ce149b5f02/paiml/bashrs"
---

</p>

<h1 align="center">bashrs</h1>

  <strong>Rust-to-POSIX Shell Transpiler</strong>
</p>

  </a>
  </a>
         alt="CI">
  </a>
  </a>
  </a>
</p>

</p>

A bidirectional shell safety tool that transpiles Rust to deterministic
POSIX shell scripts and purifies legacy bash into safe, portable shell.
Also known as **Rash** (the library crate). Part of the PAIML Sovereign
AI Stack transpiler family alongside
[depyler](https://github.com/paiml/depyler) and
[decy](https://github.com/paiml/decy).

---

## Table of Contents

- [What is bashrs?](#what-is-bashrs)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Features](#features)
- [Architecture](#architecture)
- [Quality](#quality)
- [Sovereign AI Stack](#sovereign-ai-stack)
- [Documentation](#documentation)
- [License](#license)

## What is bashrs?

Shell scripts power CI/CD pipelines, deployment automation, and system
configuration across every production environment. They are also
notoriously fragile -- unquoted variables, non-idempotent operations,
and injection vulnerabilities are the norm, not the exception.

bashrs solves this in two directions:

1. **Rust to Shell** -- Write type-safe Rust, transpile to…
