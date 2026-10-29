---
repo: "psa-systems/claude-run"
name: "claude-run"
description: "Run, Claude, Run!"
readmeQualityOk: true
url: "https://github.com/psa-systems/claude-run"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["ai", "ai-automation", "automation", "claude", "claude-code", "spec-driven-coding", "spec-driven-design", "spec-driven-developement"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-10-12T22:32:48Z"
lastCommitAt: "2026-10-29T14:07:01Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: ["NiceGuyIT", "LongNguyenThanhLe"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ee51d9dcd13f5a46eef54fc32619e0a81baee28984e79f4db4bac589774b7fb/psa-systems/claude-run"
---

# claude-run

A YAML-driven runner for Claude Code: poll a source (YouTrack issues, Forgejo or GitHub CI failures, pull request comments, anything that emits a JSON array), hand each job to `claude --print`, and act on the result. It runs as a Docker container: one Rust binary that schedules every action, serves a web UI, and listens for webhooks.

## What it is

- **Actions** are YAML files under `$CLAUDE_RUN_CONFIG_DIR/actions/`. A scripted action runs nu snippets for its input, filter, pre and post steps; a native action (`youtrack`, `closed-issue-summary`) is a Rust handler that owns the whole run. The schema is [`actions/SCHEMA.md`](https://github.com/psa-systems/claude-run/blob/HEAD/actions/SCHEMA.md).
- **Guard rails**: per-run and per-day spend ceilings, attempt caps, a global pause honored at every entry point, and audited, capped tracker writes.
- **State** lives in SQLite by default, or PostgreSQL when the operator sets one.

## Install

Docker is the only supported install. `compose.yml` runs the published image, which carries the tools the runner calls (`nu`, `claude`, `yt`, `fj`, `gh`, `git`, `timeout`). The image is published under the private `psa-systems-private`…
