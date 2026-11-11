---
repo: "huanlin-labs/dsh-skill-cockpit"
name: "dsh-skill-cockpit"
description: "DSH Skill Cockpit: skill enable/disable, preset mounting, and usage statistics"
originalDescription: "DSH 技能驾驶舱：技能启停、预设挂载与用量统计"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/huanlin-labs/dsh-skill-cockpit"
homepage: "https://www.npmjs.com/package/dsh-skill-cockpit"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["cockpit", "deepseek-harness", "dsh", "dsh-plugin", "skills", "skill-manager", "cordis", "dsh-bundle", "dsh-skills", "developer-tools"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-14T12:24:03Z"
lastCommitAt: "2026-11-11T11:23:36Z"
lastReleaseAt: "2026-10-27T07:58:22Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 66
maintainers: ["huanlin-labs", "huanlin"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f424965ada648ddf535b2f341e4c9ba7ab62d3b904084ce8b6659fd236b246b/huanlin-labs/dsh-skill-cockpit"
---

# dsh-skill-cockpit

> **v1.7.0 — published on npm.**
> 19/19 self-test suites, all green · `npm run verify:install` packs the tarball, installs it into an
> empty directory and boots **that copy** (13/13 checks; `/ping` reads back `1.7.0`).
> Published as [`dsh-skill-cockpit`](https://www.npmjs.com/package/dsh-skill-cockpit); npm `latest` = **1.7.0**.
> (The bare name `dsh-skill-panel` belongs to a different author.)

> **Release:** `v1.7.0` is on npm, tagged in git, and has a GitHub Release. It delivers the D/E UI
> enhancements (density, sticky header, root grouping, body search, keyboard row actions, copy
> actions, path-aware search) and fixes the vault page's missing `reserveListPathOf` helper.
> Details are at the top of `CHANGELOG.md`.

> **Honest boundary.** This is **not a sandbox**. It manages only the skill roots DSH itself
> exposes and writes only inside `~/.dsh/skills` and `~/.agents/skills`; it cannot stop other
> processes, manual edits, or skills invoked outside DSH. CLI / doctor / `verify:install` are
> covered by automated tests on this Windows machine. The running host was restarted on 2026-11-04
> and `/ping` reports **1.7.0**. On 1.7.0 the live page renders…
