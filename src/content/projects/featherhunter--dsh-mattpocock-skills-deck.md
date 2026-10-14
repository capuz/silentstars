---
repo: "FeatherHunter/dsh-mattpocock-skills-deck"
name: "dsh-mattpocock-skills-deck"
description: "Comes bundled with the 27 engineering and productivity skills from mattpocock/skills v1.3.1, so you don't need to install skills manually. Built with 40 billion tokens, this plugin aims to provide 10x development efficiency on top of the original skills, and also helps newcomers get up to speed with the skill suite faster. Full support for GitHub issues; Markdown is in preview; GitLab is not supported yet. Thanks for using and supporting it 💗"
originalDescription: "安装即自带mattpocock/skills v1.3.1的27个工程与效率技能，无需手动装技能。400亿token打造本插件，在原始技能之上提供10倍的开发效率，也能帮助新手更快上手该技能套件。全力支持GitHub issue；Markdown为预览版；GitLab暂不支持。感谢您的使用和支持💗"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/FeatherHunter/dsh-mattpocock-skills-deck"
homepage: "https://featherhunter.github.io/dsh-mattpocock-skills-deck/architecture/MattSkills-architecture.html"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [61, 20]
topics: ["agent", "ai", "claude", "deepseek-harness", "dsh", "dsh-plugin", "github-issues", "skills", "wayfinder", "dsh-better-sidebar"]
stars: 145
forks: 14
openIssues: 126
closedIssues: 994
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-08-17T00:23:57Z"
lastCommitAt: "2026-10-14T08:57:45Z"
lastReleaseAt: "2026-09-03T07:00:32Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 36
maintainers: ["FeatherHunter"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4b2c71679ded271f81e44f7aaeeb1842c81d3966d7d7bea1a6ea3f1570d0ffb/FeatherHunter/dsh-mattpocock-skills-deck"
discussionCount: 3
---

**Chinese** · [English](https://github.com/FeatherHunter/dsh-mattpocock-skills-deck/blob/HEAD/docs/README.en.md)

**Part the fog of war to see the finish line, and leave the rest to MattSkillsDeck.**  
Let [mattpocock/skills](https://github.com/mattpocock/skills) turn into a visible, dispatchable task board inside DSH.

Your ⭐ is the brightest star in my night sky.

*Part the fog of war, see the end — MattSkillsDeck handles the rest.*

Prerequisite: [DSH](https://www.npmjs.com/package/@deepseek-ai/dsh) (DeepSeek Harness). In DSH, you give instructions and the AI does the work; MattSkillsDeck turns that work into tasks on the board.

The repository bound to the task board requires write access: creating new labels requires push permission, and labeling issues requires triage or higher. With read-only access, you can create and read issues, but adding labels, label transitions, and wayfinder labels are unavailable.

```bash
# ① Install the DSH CLI (skip if already installed)
npm install -g @deepseek-ai/dsh

# ② Install MattSkillsDeck — --profile is required: install it into the profile that matches the DSH entry point you actually use
#    (Installing into the wrong profile is the…
