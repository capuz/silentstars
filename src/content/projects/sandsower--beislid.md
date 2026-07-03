---
repo: "sandsower/beislid"
name: "beislid"
description: "Opinionated, agent-agnostic workflow skills. Hard gates, not suggestions."
url: "https://github.com/sandsower/beislid"
language: "Python"
languages: ["Python", "Shell", "TypeScript"]
languagePcts: [52, 27, 21]
stars: 9
forks: 0
openIssues: 14
closedIssues: 53
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-05-12T10:22:49Z"
lastCommitAt: "2026-07-03T12:38:49Z"
lastReleaseAt: "2026-07-01T15:34:25Z"
status: "newborn"
tags: ["hidden_gem", "under_pressure"]
healthScore: 96
undervaluedScore: 55
maintainers: ["sandsower", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/760e7247cb36b4a51c3e732f1b68f105943277c28f95b8e460f522a30eca8301/sandsower/beislid"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/assets/beislid/beislid-mark-dark.svg">
  </picture>
</p>

<h1 align="center">Beislið</h1>

</p>

  <b>A human-centric, extensible framework for collaborating with coding agents.</b><br>
  Make agents follow the same ticket, verification, review, and PR handoff process your team expects.
</p>

  · <a href="./docs/how-to-use.md">How to use</a>
  · <a href="./docs/faq.md">FAQ</a>
  · <a href="#philosophy">Philosophy</a>
</p>

---

## v0.2 migration for existing installs

Beislið v0.2 starts from a clean repository history. If you installed v0.1.x, do a one-time migration from a fresh v0.2 checkout instead of `git pull`:

```bash
mv ~/Projects/beislid ~/Projects/beislid-pre-v0.2-archive
git clone git@github.com:sandsower/beislid.git ~/Projects/beislid
~/Projects/beislid/install.sh --migrate-v0.2
```

The migration reads the previous install manifest, removes only old Beislið symlinks that point into the previous checkout, preserves install targets and opt-ins, and reinstalls from the new checkout. It never deletes the old checkout or clobbers regular files.

New installs can skip this and use the normal install…
