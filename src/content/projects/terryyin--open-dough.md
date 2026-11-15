---
repo: "terryyin/open-dough"
name: "open-dough"
description: "The ai-augmented software development life cycle, largely based on LeSS."
readmeQualityOk: true
url: "https://github.com/terryyin/open-dough"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [54, 36]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-09-05T23:34:51Z"
lastCommitAt: "2026-11-15T08:29:08Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 46
maintainers: ["terryyin"]
openGraphImageUrl: "https://opengraph.githubassets.com/22c4ac1881311ceea25b4bdcf62fb02761ae4039a39ce554a569a15c57da0554/terryyin/open-dough"
---

# Open Dough

**A shared, AI-augmented software development lifecycle for projects and the tools that help build them.**

Open Dough defines how people and AI work together to develop software. It brings a common set of philosophies, principles, processes, AI agent rules, and AI agent skills into a project's own repository, where they can guide everyday work and evolve alongside the code.

The aim is to define the lifecycle once, reuse it across projects, and make it usable across AI development platforms. The initial platform scope is **Codex, Cursor, and Claude Code**.

> **Status:** Codex, Cursor, and Claude Code can install and update the
> project-local client payload from the latest numeric release of a supplied
> repository URL. Codex and Cursor share `.agents/skills/`; Claude Code uses
> `.claude/skills/`.

## Install with an AI agent

Open your client project in an AI agent with web and shell access, then ask:

> Install https://github.com/terryyin/open-dough into this project.

**For the installing agent:**

1. Use the user's current project as the target, or their explicitly supplied
   target path. Ask only if the target is unclear. Capture its absolute path
   before…
