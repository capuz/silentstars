---
repo: "fulll/github-code-search"
name: "github-code-search"
description: "An interactive TUI CLI to search GitHub code across an organization, with per-repository result aggregation, keyboard and mouse navigation, and fine-grained extract selection"
readmeQualityOk: true
url: "https://github.com/fulll/github-code-search"
homepage: "https://fulll.github.io/github-code-search/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["cli", "code-search", "github", "tui"]
stars: 10
forks: 0
openIssues: 6
closedIssues: 94
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-18T22:09:17Z"
lastCommitAt: "2026-10-29T12:25:29Z"
lastReleaseAt: "2026-02-27T11:14:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 61
maintainers: ["shouze", "dependabot[bot]", "aikido-autofix[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1161236305/5a26c06a-18be-4737-a847-ff2379421891"
discussionCount: 1
---

# github-code-search

Interactive CLI to search GitHub code across an organization — per-repository aggregation,
keyboard- and mouse-driven TUI, fine-grained extract selection, markdown/JSON output.

→ **Full documentation: https://fulll.github.io/github-code-search/**

## Requirements

- **Bun** ≥ 1.4.4 when running or building from source; compiled binaries do not require Bun
- **GitHub Token** with `repo` and `read:org` scopes

Development uses Bun's built-in `bun fmt` and `bun check`, with no standalone
formatter or linter dependency. Run `bun run format`, `bun run format:check` and
`bun run typecheck`; `bun run lint` is a compatibility alias for type checking,
not equivalent lint coverage. See [Contributing](https://github.com/fulll/github-code-search/blob/HEAD/CONTRIBUTING.md) for setup and checks.

## Quick start

**macOS / Linux**

```bash
export GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx
curl -fsSL https://raw.githubusercontent.com/fulll/github-code-search/main/install.sh | bash
github-code-search query "TODO" --org my-org
```

**Windows** (PowerShell)

```powershell
$env:GITHUB_TOKEN = "ghp_xxxxxxxxxxxxxxxxxxxx"
powershell -c "irm…
