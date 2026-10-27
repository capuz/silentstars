---
repo: "klfwdf/AnimusForge"
name: "AnimusForge"
description: "New AnimusForge, new creator"
originalDescription: "新的AnimusForge，新的制作者"
descriptionLang: "zh"
readmeQualityOk: false
url: "https://github.com/klfwdf/AnimusForge"
language: "C#"
languages: ["C#"]
languagePcts: [98]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2026-08-21T09:15:41Z"
lastCommitAt: "2026-10-27T12:39:02Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 47
maintainers: ["shenyic744-png", "GM-114514", "violet0o01019-prog"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa56ad5d7487b952e4e3a6e52e3bd5d4e90a784e5703c61bc479fa4a67ce50b7/klfwdf/AnimusForge"
---

# AnimusForge
A Mount & Blade II: Bannerlord mod that integrates an LLM

## Maintenance Notes
The current main chat pipeline is the scene shout pipeline and does not go through the vanilla direct conversation interface.
The vanilla direct conversation pipeline is kept only for compatibility/fallback purposes. For future changes, please check `ShoutBehavior` and `MyBehavior.BuildShoutPromptContextForExternalInternal(...)` first, and do not default to spending effort on the direct conversation system.
