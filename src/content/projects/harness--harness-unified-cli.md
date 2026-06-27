---
repo: "harness/harness-unified-cli"
name: "harness-unified-cli"
description: "A unified CLI for Harness. Build for Humans and Agents. Manage pipelines, artifacts, platform resources, and more from the command line."
url: "https://github.com/harness/harness-unified-cli"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["cli", "developer-experience", "harness"]
stars: 5
forks: 1
openIssues: 16
closedIssues: 16
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-06-08T10:40:58Z"
lastCommitAt: "2026-06-27T00:48:20Z"
lastReleaseAt: "2026-06-19T00:56:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 59
maintainers: ["sawka-harness", "sunilgattupalle", "rahulbalani-eng"]
openGraphImageUrl: "https://opengraph.githubassets.com/274c8da392e3944d983a852cad05dc96fb47e0a24e34c796af13b3a6a5eb5345/harness/harness-unified-cli"
discussionCount: 1
---

# Harness CLI - CLI For Humans and Agents

A unified CLI for Harness ecosystem. Manage pipelines, artifacts, code, IaCM, platform resources, and more using the terminals and Agents.

---

## Install

```sh
curl -fsSL https://raw.githubusercontent.com/harness/harness-unified-cli/main/install.sh | sh
```

The installer will:

- Download the latest `harness-bundle` for your platform (macOS and Linux, amd64/arm64)
- Install both the `harness` and `harness-har` binaries to `~/.local/bin` (override with `--install-dir`)
- Optionally add `~/.local/bin` to your `PATH` and enable shell completions

Prefer to install manually? Download a release archive directly from [GitHub Releases](https://github.com/harness/harness-unified-cli/releases) and place the binaries on your `PATH`.

### Installer flags

| Flag                   | Description                                                    |
| ---------------------- | -------------------------------------------------------------- |
| `--install-dir <path>` | Override the install directory (default: `~/.local/bin`)       |
| `--core`               | Install only the `harness` binary (skips `harness-har`)        |
| `--non-interactive`    |…
