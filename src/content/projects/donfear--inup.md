---
repo: "donfear/inup"
name: "inup"
description: "Interactive dependency upgrader for npm, yarn, pnpm & bun. Changelogs, vulnerability audit, monorepo & pnpm catalogs, zero-config."
readmeQualityOk: true
url: "https://github.com/donfear/inup"
homepage: "https://www.npmjs.com/package/inup"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["bun", "cli", "dependency-management", "monorepo", "npm", "pnpm", "workspace", "yarn", "upgrade-interactive", "audit"]
stars: 31
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-27T12:08:31Z"
lastCommitAt: "2026-10-22T08:51:24Z"
lastReleaseAt: "2026-03-17T19:41:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 51
maintainers: ["donfear"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d959f65771f09e455e6ecf1edc17aa2c9e88a664915c92bd06ea3b3e33425b6/donfear/inup"
discussionCount: 0
---

# inup

**Dependency updates. Your call.**

See what's outdated, read what changed, and pick what to upgrade. Works with **npm, pnpm, Yarn, and Bun**.

Run this in your project:

```bash
npx inup
```

Requires Node.js 22.19+. No configuration needed.

## Pick your updates

Move with `↑` / `↓`, select with `Space`, and press `Enter` to apply. Your dependency files stay untouched until you confirm. Then inup writes the selected versions and runs your package manager's install to update the lockfile.

| Want to… | Press |
| --- | --- |
| Find a package | `/` |
| Read its changelog | `i` |
| Check known vulnerabilities and available fixes | `s` |
| Select updates within your existing version ranges | `m` |
| Choose an in-range update or the latest version | `←` / `→` |

Review the diff and run your tests after upgrading.

| Key | Action |
|-----|--------|
| `↑ / k` | Move up |
| `↓ / j` | Move down |
| `g / Home` | Jump to the first package |
| `G / End` | Jump to the last package |
| `PgUp` | Move up one page |
| `PgDn` | Move down one page |
| `←` | Cycle selection left (latest → range → none) |
| `→` | Cycle selection right (none → range → latest) |
| `Space` | Toggle the current…
