---
repo: "durable-workflow/sample-app"
name: "sample-app"
description: "Sample Laravel 13 application with example workflows."
readmeQualityOk: true
url: "https://github.com/durable-workflow/sample-app"
language: "PHP"
languages: ["PHP"]
languagePcts: [57]
topics: ["codespaces", "durable-execution", "durable-workflow", "laravel", "php", "polyglot", "python", "rust", "sample-application", "workflow-engine"]
stars: 39
forks: 26
openIssues: 0
closedIssues: 24
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2023-04-21T01:07:32Z"
lastCommitAt: "2026-08-30T00:43:00Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 99
undervaluedScore: 63
maintainers: ["durable-workflow-ops", "rmcdaniel"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4b296ef085ac05e2d561b20d23570a23591f902f69d5cb9a16da948505f025d/durable-workflow/sample-app"
---

# Durable Workflow Sample App

This Laravel 13 application demonstrates Durable Workflow 2.0 through two
first-class deployment paths: Service mode with a standalone Server and
first-party language workers, or an engine embedded in Laravel. Both paths run
in a GitHub Codespace on the supported 2.0 prerelease train. Stable Durable
Workflow 2.0 has not been released yet.

> **Looking for the Laravel 12 / Durable Workflow 1.x version?** It's preserved on the [`Laravel-12` branch](https://github.com/durable-workflow/sample-app/tree/Laravel-12). Older blog posts and tutorials that reference v1 patterns (e.g. `Workflow\Workflow`, `yield activity(...)`, `Workflow\Activity`) target that branch.

## Start in Codespaces

Create a Codespace from the main branch of this repository.

Wait while Codespaces pulls the prepared Sample App development image and
installs the repository's Composer and npm dependencies. PHP and Composer,
Python with an isolated SDK environment, Rust and Cargo, Docker Compose, `dw`,
Node, and Chromium are already in the image. Post-create does not run `apt`,
`rustup`, compile `dw`, or rebuild a language toolchain.

When setup finishes, choose either deployment path:

|…
