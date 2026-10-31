---
repo: "FeatherHunter/dsh-mattpocock-skills-deck"
name: "dsh-mattpocock-skills-deck"
description: "🌹 Comes with the 27 engineering and productivity skills from mattpocock/skills v1.3.1 out of the box, so you don't need to install the skills manually. Built with 52 billion tokens, this plugin adds 10x development efficiency on top of the original skills and helps newcomers get started with the skill suite faster. Supports GitHub and GitLab issues; local Markdown is in preview. Thanks for your use and support 💗"
originalDescription: "🌹安装即自带mattpocock/skills v1.3.1的27个工程与效率技能，无需手动装技能。520亿token打造本插件，在原始技能之上提供10倍的开发效率，也能帮助新手更快上手该技能套件。支持 GitHub 与 GitLab 的 issue；本地 Markdown 为预览版。感谢您的使用和支持💗"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/FeatherHunter/dsh-mattpocock-skills-deck"
homepage: "https://featherhunter.github.io/dsh-mattpocock-skills-deck/architecture/MattSkills-architecture.html"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["agent", "ai", "claude", "deepseek-harness", "dsh", "dsh-plugin", "github-issues", "skills", "wayfinder", "dsh-better-sidebar"]
stars: 266
forks: 23
openIssues: 51
closedIssues: 1640
watchers: 0
contributors: 7
recentReleases: 10
createdAt: "2026-08-17T00:23:57Z"
lastCommitAt: "2026-10-31T09:53:00Z"
lastReleaseAt: "2026-09-03T07:00:32Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 33
maintainers: ["FeatherHunter", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4dc35085dd5976cab60f03e6f58a29c97afffd6f2280fa31a540a10018d949eb/FeatherHunter/dsh-mattpocock-skills-deck"
discussionCount: 6
---

**[Chinese](https://github.com/FeatherHunter/dsh-mattpocock-skills-deck/blob/HEAD/docs/README.en.md)** · [English](https://github.com/FeatherHunter/dsh-mattpocock-skills-deck/blob/HEAD/docs/README.en.md)

**Part the fog of war to see the finish line, and leave the rest to MattSkillsDeck.**  
Turns [mattpocock/skills](https://github.com/mattpocock/skills) into a task panel for the game system inside DSH.

Your ⭐ is the brightest star in my night sky.

*Part the fog of war, see the end — MattSkillsDeck handles the rest.*

The only requirement: use the skill /pr to fill in the PR information.

```bash
# ① Install the DSH CLI (skip if already installed)
npm install -g @deepseek-ai/dsh

# ② Install MattSkillsDeck — --profile is required: install it into the profile that matches the DSH entry point you actually use
#    (installing into the wrong profile is the same as not installing; it won't load no matter how many times you restart)
dsh plugin --profile web add dsh-mattpocock-skills-deck     # for the auto-started web service (dsh web)
#     or
dsh plugin --profile desktop add dsh-mattpocock-skills-deck   # for the DSH Desktop app
# Pinning the latest version is more stable…
