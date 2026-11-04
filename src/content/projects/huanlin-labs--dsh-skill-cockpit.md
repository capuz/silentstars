---
repo: "huanlin-labs/dsh-skill-cockpit"
name: "dsh-skill-cockpit"
description: "DSH Skill Cockpit: skill enable/disable, preset attachment, and usage statistics"
originalDescription: "DSH 技能驾驶舱：技能启停、预设挂载与用量统计"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/huanlin-labs/dsh-skill-cockpit"
homepage: "https://www.npmjs.com/package/dsh-skill-cockpit"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["cockpit", "deepseek-harness", "dsh", "dsh-plugin", "skills", "skill-manager", "cordis", "dsh-bundle", "dsh-skills", "developer-tools"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-14T12:24:03Z"
lastCommitAt: "2026-11-04T11:27:50Z"
lastReleaseAt: "2026-10-27T07:58:22Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 58
maintainers: ["huanlin-labs", "huanlin"]
openGraphImageUrl: "https://opengraph.githubassets.com/2761aaeba33c9d52ad811128ba94ddb081e74565867ce605b4e6c0dde8648b18/huanlin-labs/dsh-skill-cockpit"
---

# dsh-skill-cockpit

> **v1.5.6 — published on npm.**
> 19/19 self-test suites, all green · `npm run verify:install` packs the tarball, installs it into an
> empty directory and boots **that copy** (13/13 checks; `/ping` reads back `1.5.6`).
> Published as [`dsh-skill-cockpit`](https://www.npmjs.com/package/dsh-skill-cockpit); npm `latest` = **1.5.6**.
> (The bare name `dsh-skill-panel` belongs to a different author.)

> **Release:** `v1.5.6` is on npm, tagged in git, and has a GitHub Release. It fixes the version
> string that 1.5.2–1.5.5 left at `1.5.1` in `lib/index.js` / `lib/client.js`, and fixes
> `Back up all` returning zero files. Details are at the top of `CHANGELOG.md`.

> **Honest boundary.** This is **not a sandbox**. It manages only the skill roots DSH itself
> exposes and writes only inside `~/.dsh/skills` and `~/.agents/skills`; it cannot stop other
> processes, manual edits, or skills invoked outside DSH. CLI / doctor / `verify:install` are
> covered by automated tests on this Windows machine. The running host was restarted on 2026-11-04
> and `/ping` reports **1.5.6**. On 1.5.6 the live page renders 76/76 skills with a clean 76-item
> health check; this round…
