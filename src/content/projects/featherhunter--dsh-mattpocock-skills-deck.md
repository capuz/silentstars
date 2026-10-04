---
repo: "FeatherHunter/dsh-mattpocock-skills-deck"
name: "dsh-mattpocock-skills-deck"
description: "Installation comes with 25 engineering and productivity skills from mattpocock/skills v1.2.3, no manual skill installation needed. Built with 30 billion tokens. This plugin provides 10x development efficiency on top of the original skills. Primarily supports GitHub issues; Markdown is in preview; GitLab is not yet supported."
originalDescription: "安装即自带mattpocock/skills v1.2.3的25个工程与效率技能，无需手动装技能。300亿token打造。本插件在原始技能之上提供10倍的开发效率。主力支持GitHub issue；Markdown为预览版；GitLab暂不支持。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/FeatherHunter/dsh-mattpocock-skills-deck"
homepage: "https://featherhunter.github.io/dsh-mattpocock-skills-deck/architecture/MattSkills-architecture.html"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [89]
topics: ["agent", "ai", "claude", "deepseek-harness", "dsh", "dsh-plugin", "github-issues", "skills", "wayfinder", "dsh-better-sidebar"]
stars: 108
forks: 10
openIssues: 31
closedIssues: 800
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-17T00:23:57Z"
lastCommitAt: "2026-10-04T10:00:48Z"
lastReleaseAt: "2026-09-03T07:00:32Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 93
undervaluedScore: 39
maintainers: ["FeatherHunter", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e92337c70aa8ed5631ffc5040d8830026c66664e287fdf64eeff8f3506a6c33/FeatherHunter/dsh-mattpocock-skills-deck"
discussionCount: 2
---

**Chinese** · [English](https://github.com/FeatherHunter/dsh-mattpocock-skills-deck/blob/HEAD/docs/README.en.md)

**Part the fog of war, see the end — MattSkillsDeck handles the rest.**

Make [mattpocock/skills](https://github.com/mattpocock/skills) into a visible, deployable task board in DSH.

Your ⭐ is the brightest star in my night sky.

*Part the fog of war, see the end — MattSkillsDeck handles the rest.*

Prerequisites: [DSH](https://www.npmjs.com/package/@deepseek-ai/dsh) (DeepSeek Harness). In DSH, you give commands and AI does the work; MattSkillsDeck turns these tasks into panel tasks.

```bash
# ① Install DSH CLI (skip if already installed)
npm install -g @deepseek-ai/dsh

# ② Install MattSkillsDeck — --profile is required: install into the profile corresponding to the DSH entry you actually use
#    (Installing the wrong profile is equivalent to not installing it, no amount of restarts will load it)
dsh plugin --profile web add dsh-mattpocock-skills-deck     # Use auto-start web service (dsh web)
#     or
dsh plugin --profile desktop add dsh-mattpocock-skills-deck   # Use DSH Desktop application
# Pin to the latest version for stability (currently 1.7.39):
dsh plugin…
