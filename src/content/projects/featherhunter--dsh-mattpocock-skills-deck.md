---
repo: "FeatherHunter/dsh-mattpocock-skills-deck"
name: "dsh-mattpocock-skills-deck"
description: "🌹 Comes with the 27 engineering and productivity skills from mattpocock/skills v1.3.1 out of the box, so you don't need to install the skills manually. Built with 52 billion tokens, this plugin delivers 10x development efficiency on top of the original skills and helps newcomers get up to speed with the skill suite faster. Supports issues on GitHub and GitLab; local Markdown is in preview. Thanks for using and supporting it 💗"
originalDescription: "🌹安装即自带mattpocock/skills v1.3.1的27个工程与效率技能，无需手动装技能。520亿token打造本插件，在原始技能之上提供10倍的开发效率，也能帮助新手更快上手该技能套件。支持 GitHub 与 GitLab 的 issue；本地 Markdown 为预览版。感谢您的使用和支持💗"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/FeatherHunter/dsh-mattpocock-skills-deck"
homepage: "https://featherhunter.github.io/dsh-mattpocock-skills-deck/architecture/MattSkills-architecture.html"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["agent", "ai", "claude", "deepseek-harness", "dsh", "dsh-plugin", "github-issues", "skills", "wayfinder", "dsh-better-sidebar"]
stars: 220
forks: 19
openIssues: 87
closedIssues: 1328
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-08-17T00:23:57Z"
lastCommitAt: "2026-10-24T08:07:39Z"
lastReleaseAt: "2026-09-03T07:00:32Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 97
undervaluedScore: 34
maintainers: ["FeatherHunter", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/70f3d991d80bc04bc2d7b0e1990d69de6a49124167d49b0274d582753a0a34af/FeatherHunter/dsh-mattpocock-skills-deck"
discussionCount: 5
---

**Chinese** · [English](https://github.com/FeatherHunter/dsh-mattpocock-skills-deck/blob/HEAD/docs/README.en.md)

**Part the fog of war to see the finish line, and leave the rest to MattSkillsDeck.**  
Turns [mattpocock/skills](https://github.com/mattpocock/skills) into the task panel of the game system inside DSH.

Your ⭐ is the brightest star in my night sky.

*Part the fog of war, see the end — MattSkillsDeck handles the rest.*

The only requirement: use the /pr skill to fill in the PR information.

```bash
# ① Install the DSH CLI (skip if already installed)
npm install -g @deepseek-ai/dsh

# ② Install MattSkillsDeck — --profile is required: install it into the profile that matches the DSH entry point you actually use
#    (installing into the wrong profile is the same as not installing; no number of restarts will load it)
dsh plugin --profile web add dsh-mattpocock-skills-deck     # for the self-started web service (dsh web)
#     or
dsh plugin --profile desktop add dsh-mattpocock-skills-deck   # for the DSH Desktop app
# Pinning the latest version is more stable (currently 1.9.0-beta.12):
dsh plugin --profile web add dsh-mattpocock-skills-deck@1.9.0-beta.12 --registry…
