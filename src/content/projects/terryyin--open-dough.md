---
repo: "terryyin/open-dough"
name: "open-dough"
description: "The ai-augmented software development life cycle, largely based on LeSS."
readmeQualityOk: true
url: "https://github.com/terryyin/open-dough"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [52, 38]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-09-05T23:34:51Z"
lastCommitAt: "2026-11-07T13:56:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: ["terryyin"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8cc253ef6f8b45d5f0652525a5fddcb0c3e95bbd051347481ad7a0fd11837f7/terryyin/open-dough"
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
