---
repo: "ai-hub-open/marketing-strategist"
name: "marketing-strategist"
description: "Claude skill: ad strategy before campaign setup — research, hypotheses, platforms, phased budget, KPI. Docs in Russian."
originalDescription: "Claude skill: ad strategy before campaign setup — research, hypotheses, platforms, phased budget, KPI. Docs in Russian."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/ai-hub-open/marketing-strategist"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-agents", "claude", "claude-skills", "marketing"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 5
recentReleases: 9
createdAt: "2026-07-27T06:00:40Z"
lastCommitAt: "2026-11-17T14:33:53Z"
lastReleaseAt: "2026-10-13T10:04:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 47
maintainers: ["liseren91", "akainq", "dzhokhov"]
openGraphImageUrl: "https://opengraph.githubassets.com/98dbeab9f1534a9fc753a750b7816e1dc1662fc03f26e9275e43b8fb89ad971a/ai-hub-open/marketing-strategist"
---

# Маркетинг-стратег
 
A skill is a folder with instructions and scripts that an AI agent uses to do a marketer's work. "Marketing Strategist" covers everything that happens before the first campaign in the ad account: it analyzes the product and website, studies the industry and competitors, gathers hypotheses, buyer personas and USPs, ranks platforms, breaks the budget into phases, and sets KPIs.

To get started, the product name and a link to the website are enough. The output is a strategy report, a media plan, and a one-page summary, alongside files for every stage so you can see where each decision came from.

## Route

The preparatory step creates the working folder `marketing-campaigns/<slug>/` and the state file `_state.json`; in `SKILL.md` it is step 0. After that come 12 stages. Each one ends with a file in this folder and a short summary in the chat.

| Stage | What the agent does | What remains in the folder |
|---|---|---|
| 1. Client materials | analyzes the brief, presentations, correspondence, and reports from past campaigns using the "fact → source" scheme; past channel figures go into the channel history | `00_client_materials.md` |
| 2. Brief | reads the site,…
