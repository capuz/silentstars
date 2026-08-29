---
repo: "ProjectAJ14/eklavya"
name: "eklavya"
description: "learn by watching the agent work"
readmeQualityOk: true
url: "https://github.com/ProjectAJ14/eklavya"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [66]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-25T21:09:44Z"
lastCommitAt: "2026-08-29T10:22:23Z"
lastReleaseAt: "2026-08-27T15:36:55Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 55
maintainers: ["ProjectAJ14", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/f37b3a215301d7979f0106379ece0f38b28eae5239ee4f4f30eeaf50b744e541/ProjectAJ14/eklavya"
---

# Eklavya

**Learn while your agent works.**

*Named for Ekalavya, who mastered archery practicing before a silent statue of his guru. Here, the statue talks back.*

</div>

Eklavya turns agent generation time into learning time. While Claude Code implements your task, Eklavya teaches you the concepts behind *that exact work* — adaptive Socratic questions grounded in the diff it just wrote, mastery tracked in a local knowledge graph, and optionally a commit gate until you can show you understood it.

Everything is local. No accounts, no sync, no telemetry.

---

## Why

Coding agents create a comprehension gap. You ship code you didn't write and couldn't debug. The moment that code is being generated is the highest-leverage teaching moment there is: the concepts are concrete, the code is right in front of you, and your hands are free.

So Eklavya asks you about it — once per task, never the same question twice, and harder each time you get it right.

## Install

### Claude Code

```bash
/plugin marketplace add ProjectAJ14/eklavya
/plugin install eklavya@eklavya
/eklavya:setup
```

Or run it straight from a checkout while developing:

```bash
git clone <this repo> eklavya
cd…
