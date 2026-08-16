---
repo: "iwamot/pnpm-override-prune"
name: "pnpm-override-prune"
description: "Detect prunable override entries in pnpm / aube projects."
readmeQualityOk: true
url: "https://github.com/iwamot/pnpm-override-prune"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["aube", "overrides", "pnpm"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-04-27T04:33:16Z"
lastCommitAt: "2026-08-16T04:08:40Z"
lastReleaseAt: "2026-08-13T12:11:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 40
maintainers: ["iwamot-renovate[bot]", "iwamot", "iwamot-oide[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/08b57a1318025056534bdba96ecc4041b57563a1e572ecd146856095df11a2d0/iwamot/pnpm-override-prune"
---

# pnpm-override-prune

Detect prunable override entries in pnpm / [aube](https://github.com/jdx/aube) projects.

## Usage

```bash
# Detect prunable entries (default)
pnpm dlx pnpm-override-prune                          # checks ./package.json
pnpm dlx pnpm-override-prune path/to/package.json     # checks given file

# Remove prunable entries in place
pnpm dlx pnpm-override-prune --fix
```

For aube users, replace `pnpm dlx` with `aube dlx`.

Example output:

```
=== package.json:pnpm.overrides (2 entries) ===
[PRUNE] @xmldom/xmldom >=0.9.10  0.9.10
[PRUNE] postcss >=8.5.10         8.5.12

Run with --fix to prune entries marked [PRUNE].
```

Exit codes:

| Code | Meaning |
|------|---------|
| `0`  | No prunable entries (or `--fix` succeeded) |
| `1`  | Prunable entries found (without `--fix`) |
| `2`  | `package.json` or lockfile not found, or parse error |

## Why

pnpm and aube let you pin a transitive dependency version via override entries — in `package.json` (`pnpm.overrides` or top-level `overrides`) or in `pnpm-workspace.yaml` / `aube-workspace.yaml` (top-level `overrides:`).

A common reason to reach for these is CVE mitigation: a vulnerability is disclosed in a…
