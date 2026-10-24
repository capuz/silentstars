---
repo: "S1N6H/Bug-Bounty-Skills"
name: "Bug-Bounty-Skills"
description: "Every great bug bounty skill on GitHub, one repo, refreshed daily — auto-harvested, deduplicated, and credited to every source author"
readmeQualityOk: true
url: "https://github.com/S1N6H/Bug-Bounty-Skills"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-skills", "bugbounty", "claude-code", "claude-skills", "osint", "pentesting", "red-team", "security"]
stars: 12
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-11T08:44:50Z"
lastCommitAt: "2026-10-24T08:08:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 43
maintainers: ["S1N6H"]
openGraphImageUrl: "https://opengraph.githubassets.com/f4ad3ee9276c73600048cfe59a9b078b1af223dceb2bc19b4985a47b20f1c2f9/S1N6H/Bug-Bounty-Skills"
---

# 🎯 Bug Bounty Skills

> **Every great bug bounty skill on GitHub. One repo. Refreshed daily.**

The `skills/` folder holds **every `.md` skill file** harvested daily from the best bug bounty, offensive security, OSINT and red team skill repositories on GitHub — flattened, deduplicated, and credited to every source author.

## 📅 How it works

A scheduled GitHub Actions workflow (harvest.yml) runs **daily at 03:17 UTC**: it reads `sources.txt`, downloads every `SKILL.md` from each source repo, dedupes by content hash, and drops one flat copy in `skills/` named `<owner>-<repo>-<path>.md`. Trigger manually anytime: **Actions → Daily Skill Harvest → Run workflow**.

## ➕ Add a repository

PR one line into `sources.txt`:

```text
owner/repo
```

The next daily run picks it up.

## ⚠️ Safety

Written by third parties for **authorized** security testing only. Read any skill before installing it into an agent, and run it only against targets you have permission to test. Aggregation is not endorsement.

---

## 🏆 Credits — the repositories this library is built from

**None of this content is ours.** Every skill was written and maintained by the authors below — this repo only collects…
