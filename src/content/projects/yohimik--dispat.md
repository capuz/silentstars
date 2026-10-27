---
repo: "yohimik/dispat"
name: "dispat"
description: "Next generation CI/CD framework. Mathematical planning and saga recovery for monorepos and linked repositories. Henry Ford CI/CD releases setup."
readmeQualityOk: true
url: "https://github.com/yohimik/dispat"
homepage: "https://dispat.dev"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["changelog-generator", "monorepo", "orchestration", "orchestrator", "release-automation", "versioning", "changelog", "cli", "continuous-delivery", "continuous-integration"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 9
createdAt: "2026-07-26T18:28:25Z"
lastCommitAt: "2026-10-27T09:16:18Z"
lastReleaseAt: "2026-08-09T19:01:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 58
maintainers: ["yohimik", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/29cdeef1e5ccceefb432609ff4205d72d5bd7a5d47abff2883de28905de321b4/yohimik/dispat"
---

# dispat <img alt="dispat logo" align="right" width="128" height="128" src="./imgs/logo.png" />

**Next generation CI/CD framework. Mathematical planning. Saga recovery.**

**dispat** turns conventional commits into versions, then builds and publishes changed packages in dependency order.
Mathematical version rules make the plan repeatable: identical history and configuration produce the same versions.
Saga recovery preserves recorded publications so the next run can finish the remaining packages. Preview the work with `dispat status` before releasing.

Build and publish stages run your own shell commands, so a package in any language can take part. Automatic manifest
editing covers a defined list of [supported formats](https://dispat.dev/editing/manifests/). dispat works with one
package, a [monorepo](https://dispat.dev/monorepo/), or several repositories joined through a
[control repository](https://dispat.dev/control-repository/) or a
[choreographed fleet](https://dispat.dev/next/choreographed-repositories/).
Independent source histories and choreographed fleets require the 1.11 release candidate; the default installers
select the latest stable release.

Install the binary, run…
