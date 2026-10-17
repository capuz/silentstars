---
repo: "FeatherHunter/dsh-mattpocock-skills-deck"
name: "dsh-mattpocock-skills-deck"
description: "Ships with the 27 engineering and productivity skills from mattpocock/skills v1.3.1, so you don't need to install the skills yourself. Built on 40 billion tokens, this plugin adds 10x development efficiency on top of the original skills and helps newcomers get up to speed on the skill suite faster. Full support for GitHub issues; Markdown is in preview; GitLab is not yet supported. Thanks for using and supporting it 💗"
originalDescription: "安装即自带mattpocock/skills v1.3.1的27个工程与效率技能，无需手动装技能。400亿token打造本插件，在原始技能之上提供10倍的开发效率，也能帮助新手更快上手该技能套件。全力支持GitHub issue；Markdown为预览版；GitLab暂不支持。感谢您的使用和支持💗"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/FeatherHunter/dsh-mattpocock-skills-deck"
homepage: "https://featherhunter.github.io/dsh-mattpocock-skills-deck/architecture/MattSkills-architecture.html"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [64]
topics: ["agent", "ai", "claude", "deepseek-harness", "dsh", "dsh-plugin", "github-issues", "skills", "wayfinder", "dsh-better-sidebar"]
stars: 158
forks: 14
openIssues: 95
closedIssues: 1110
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-08-17T00:23:57Z"
lastCommitAt: "2026-10-17T07:59:56Z"
lastReleaseAt: "2026-09-03T07:00:32Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 96
undervaluedScore: 36
maintainers: ["FeatherHunter"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e2c93e91cbbf098971e40ad4e51af3be63dbffa46af1210e8215f4539c130da/FeatherHunter/dsh-mattpocock-skills-deck"
discussionCount: 3
---

**Chinese** · [English](https://github.com/FeatherHunter/dsh-mattpocock-skills-deck/blob/HEAD/docs/README.en.md)

**Clear the fog of war to see the finish line, and leave the rest to MattSkillsDeck.**  
Turn [mattpocock/skills](https://github.com/mattpocock/skills) inside DSH into a visible, dispatchable task board.

Your ⭐ is the brightest star in my night sky.

*Part the fog of war, see the end — MattSkillsDeck handles the rest.*

Prerequisite: [DSH](https://www.npmjs.com/package/@deepseek-ai/dsh) (DeepSeek Harness). In DSH, you issue instructions and the AI does the work; MattSkillsDeck turns that work into tasks on the panel.

The repository bound to the task board needs write access: creating labels requires push permission, and labeling issues requires triage or higher. With read-only access you can create and read issues, but adding labels, label transitions, and wayfinder labels are unavailable.

```bash
# ① Install the DSH CLI (skip if already installed)
npm install -g @deepseek-ai/dsh

# ② Install MattSkillsDeck — --profile is required: install into the profile that matches the DSH entry point you actually use
#    (installing into the wrong profile is the same as not…
