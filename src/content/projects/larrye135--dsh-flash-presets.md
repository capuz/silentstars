---
repo: "LarryE135/dsh-flash-presets"
name: "dsh-flash-presets"
description: "Reduce Token consumption of Deepseek v4.1flash/Raising Token efficiency without lossing performance(Works for v4.1flash)"
originalDescription: "降低Deepseek v4.1flash的Token消耗/Raising Token efficiency without lossing performance(Works for v4.1flash)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/LarryE135/dsh-flash-presets"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [92]
topics: ["dsh-plugin", "token-efficiency", "dsh"]
stars: 92
forks: 6
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 3
recentReleases: 7
createdAt: "2026-09-22T16:27:57Z"
lastCommitAt: "2026-10-31T09:54:34Z"
lastReleaseAt: "2026-10-30T08:46:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 36
maintainers: ["LarryE135", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7128b97dd3e949ec315f373a763e3a6c4f74a589cb4208a7a47a2b715abc480f/LarryE135/dsh-flash-presets"
---

# dsh-flash-presets

DSH agent presets for the DeepSeek V4.1 Flash routing tier, delivered as a DSH bundle (`dsh.bundle`). After installation, several lines of `@deepseek-ai/dsh-agent-preset` are inserted into the profile's plugin list. Host code is not modified, and the shared tool registry is not touched.

The presets affect three things: budget and turn count (counted per turn, not per step), folding and trimming of tool output, and the criteria for judging task completion. They do not improve model capability. They only determine how many turns a session uses, at which step it stops, and what standard it uses to wrap up.

> [!IMPORTANT]
> Current version: v0.2.5 (GitHub Release and npm are both 0.2.5). The plan mode plugin `dsh-plan-mode-ui`, version 0.5.2, **ships together with the main version** (it is not released separately on Release, not tagged separately, and still not on npm). `v3` (internal codename lean-v3) is the main version, aligned with DSH 0.2.1-rc.2 and the v41flash 1017 snapshot.
> Verified: installer regression on three platforms; simulated installation (after installing with a temporary `DSH_HOME`, `dsh 0.2.1 --dump-config` synthesizes the three presets;…
