---
repo: "trailcurrentoss/TrailCurrentClaudeSkills"
name: "TrailCurrentClaudeSkills"
description: "A reposnitory for Claude skills we use to help speed up innovation"
readmeQualityOk: true
url: "https://github.com/trailcurrentoss/TrailCurrentClaudeSkills"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2026-06-20T17:58:58Z"
lastCommitAt: "2026-11-17T14:38:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 61
undervaluedScore: 21
maintainers: ["davidrfloydii"]
openGraphImageUrl: "https://opengraph.githubassets.com/059e51c491648b46aafeb73e54d66f67656d940465124cc72c20a68c8d9e3456/trailcurrentoss/TrailCurrentClaudeSkills"
---

# TrailCurrent Claude Skills

A growing library of [Claude skills](https://docs.claude.com/en/docs/claude-code/skills) that we use in TrailCurrent's R&D processes — from authoring embedded GUIs to running our hardware tooling.

We're publishing these as we extract them from our day-to-day work, so that other teams building hardware and embedded products can reuse the same workflows we rely on internally.

## What is a Claude skill?

A skill is a folder containing a `SKILL.md` file with YAML frontmatter (`name`, `description`) plus optional supporting scripts and references. When Claude Code encounters a task that matches a skill's description, it loads the skill and follows its instructions — encoding domain knowledge that would otherwise have to be re-derived every session.

See Anthropic's [skills documentation](https://docs.claude.com/en/docs/claude-code/skills) for the format spec.

## Skills in this repo

| Skill | What it does |
|---|---|
| [`eezstudio/`](https://github.com/trailcurrentoss/TrailCurrentClaudeSkills/blob/HEAD/eezstudio/SKILL.md) | Author and debug [EEZ Studio](https://www.envox.eu/studio/studio-introduction/) LVGL projects (`.eez-project` JSON files)…
