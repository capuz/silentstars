---
repo: "dmno-dev/bumpy"
name: "bumpy"
description: "🐸 Modern monorepo friendly version management + changelog tool"
url: "https://github.com/dmno-dev/bumpy"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 89
forks: 1
openIssues: 3
closedIssues: 4
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-04-14T16:40:54Z"
lastCommitAt: "2026-06-25T06:42:12Z"
lastReleaseAt: "2026-04-29T04:26:10Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 33
maintainers: ["theoephraim", "bumpy-bot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1210674793/07544140-519c-47ff-87f9-94bfb56b5cd3"
---

</a>
</p>
</p>

<br/>

# @varlock/bumpy 🐸

A modern package versioning, release, and changelog generation tool. Built for monorepos, but works great in simple projects too.

## How It Works

Bumpy uses **bump files** (you may know them as "changesets" if coming from [that tool 🦋](https://github.com/changesets/changesets)) - small markdown files that declare an _intent to release packages_ with a bump level (patch/minor/major), and a description that ends up in changelogs. Developers create these files as part of their PRs, and these files are then used to consolidate changes, generate changelogs, and trigger publishing.

- Devs/agents create bump files as part of their PRs (using `bumpy add` or manually)
- A git hook (pre-commit or pre-push) can enforce bump files exist for changed packages
- In CI, a workflow checks PRs for bump files, leaves a comment on the PR detailing changed packages
- As PRs merge to the base branch, a "release PR" is kept up to date
  - Shows what packages will be released and their changelogs (incl. those bumped via dep relationships)
- When release PR is merged, publishing is triggered
  - Pending bump files are deleted and packages are published with…
