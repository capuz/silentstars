---
repo: "specdog/dotdog"
name: "dotdog"
description: "CLI tool for structured software specs. Validate .dog files, compile .dag graphs, query via MCP."
readmeQualityOk: true
url: "https://github.com/specdog/dotdog"
homepage: "https://specdog.github.io/dotdog"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["ai", "cli", "dogfood", "spec", "specification", "dotdog", "agent", "graph", "mcp", "spec-driven-development"]
stars: 7
forks: 6
openIssues: 13
closedIssues: 41
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-06-12T08:25:50Z"
lastCommitAt: "2026-11-01T10:43:51Z"
lastReleaseAt: "2026-11-01T09:29:38Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "under_pressure", "fork_magnet"]
healthScore: 86
undervaluedScore: 67
maintainers: ["logohere", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a4f9f5f0c7ad2b44dd7e91a03f0cbb01e242a22fa9e72fbd16bc87bea05dac6f/specdog/dotdog"
discussionCount: 0
---

# dotdog

Local-first spec and code graphs for coding agents. Keep human intent, observed implementation, and imported analysis evidence distinct and queryable.

## Install

These commands install the stable package. This guide covers Dotdog 1.0.

```sh
npm install -g dotdog
# or
bun add -g dotdog
```

Node.js 22.12+ or Bun 1.3+. npm and Bun install the same package. The global executable has a Node shebang; on a Bun-only machine, use `bunx --bun dotdog` to force the Bun runtime. The existing Homebrew distribution remains available through the Specdog tap; its formula/version is maintained separately from this source change.

```sh
brew tap specdog/tap
brew install dotdog
```

## Existing repository: one refresh, targeted questions

```sh
cd your-repository
dotdog refresh --json
dotdog query "authentication"
dotdog context "file:src/auth.ts" --json
dotdog impact "file:src/auth.ts" --json
dotdog path "file:src/auth.ts" "file:src/session.ts" --json
```

Use an actual graph label from `query`, not the illustrative paths above. `refresh` maps repository files, extracts JS/TS declarations and static relative imports, preserves semantic/overlay layers, compiles specs when present, and…
