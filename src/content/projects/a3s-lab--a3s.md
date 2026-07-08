---
repo: "A3S-Lab/a3s"
name: "a3s"
description: "Agent as a Service"
readmeQualityOk: true
url: "https://github.com/A3S-Lab/a3s"
homepage: "https://a3s-lab.github.io/a3s/"
language: "MDX"
languages: ["MDX"]
languagePcts: [93]
stars: 11
forks: 3
openIssues: 5
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-02-05T13:32:34Z"
lastCommitAt: "2026-07-08T05:42:25Z"
lastReleaseAt: "2026-05-14T03:27:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 49
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/1e462262fd4db81404f0459451314d3f2e9547252f444635ffdf77db41201907/A3S-Lab/a3s"
---

# A3S

  <strong>Rust-native application stack for A3S Code.</strong>
</p>

  <em>Agent runtime, terminal and native UI, memory, workflows, safety,
  service infrastructure, and release tooling maintained as independent
  components.</em>
</p>

---

## Overview

A3S is the monorepo for A3S Code and its Rust-first platform components. The
root repository is for orchestration only: crates under `crates/` are
independent git submodules, and applications live under `apps/`.

The primary product surface today is `a3s code`, the interactive terminal
coding agent. Native desktop clients are built with `a3s-gui`, Rust function
components, RSX view templates, and platform hosts for AppKit, GTK, and WinUI.

The stack is intentionally not a root Rust workspace and not a JavaScript UI
runtime. Web and WebView packages are auxiliary surfaces; the core product path
is Rust.

## Repository Map

| Area | Paths | Purpose |
| --- | --- | --- |
| Product surfaces | `crates/cli`, `apps/desktop`, `apps/box`, `apps/docs` | CLI, native apps, and documentation site. |
| Agent runtime | `crates/code`, `crates/ahp`, `crates/acl`, `crates/common` | Sessions, tools, policy, protocol, config, and shared…
