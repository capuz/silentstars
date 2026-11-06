---
repo: "Kaiji-Z/dsh-plugin-lookatstudy"
name: "dsh-plugin-lookatstudy"
description: "dsh community plugin: turn any markdown/folder/GitHub learning repo into a guided AI-tutor course (gated skill tree, BKT mastery, SM-2 reviews) inside DeepSeek Harness"
readmeQualityOk: true
url: "https://github.com/Kaiji-Z/dsh-plugin-lookatstudy"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["deepseek-harness", "dsh-plugin", "learning", "spaced-repetition", "tutor"]
stars: 23
forks: 3
openIssues: 1
closedIssues: 16
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-08-15T14:12:29Z"
lastCommitAt: "2026-11-06T02:44:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 43
maintainers: ["Kaiji-Z"]
openGraphImageUrl: "https://opengraph.githubassets.com/8dea86c2abe39962f88f73233b0106ea8f284beef3eb33302a82172a4cfdddff/Kaiji-Z/dsh-plugin-lookatstudy"
---

# dsh-plugin-lookatstudy

**English** | [简体中文](https://github.com/Kaiji-Z/dsh-plugin-lookatstudy/blob/HEAD/README.zh-CN.md)

Turn any markdown document, local folder, or GitHub learning repository into a guided course inside [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (dsh) — your dsh agent becomes a full AI tutor with the interaction design of [LookatStudy](https://github.com/Kaiji-Z/LookatStudy): per-concept knowledge tracking, mastery-driven progression, spaced repetition, mastery proposals, friction awareness, learner memory, a Cornell notebook, an in-chat proposal card, exam mode with star grades, XP & streak, bilingual lessons, read-aloud (Edge TTS with a system-voice fallback), and a rich blackboard (KaTeX math, syntax-highlighted code, mermaid diagrams, mindmap & concept-map views). Learning engine modules are vendored from LookatStudy (MIT).

## Screenshots

## Install

```sh
dsh plugin add dsh-plugin-lookatstudy        # from npm
# or from a tarball:
dsh plugin add ./dsh-plugin-lookatstudy-0.2.1.tgz
```

Works with any profile. In the `web` profile the plugin additionally serves the study tab's HTTP API and loads its browser half; headless…
