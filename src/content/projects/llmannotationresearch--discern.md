---
repo: "LLMAnnotationResearch/discern"
name: "discern"
description: "Discover and statistically validate the differences between two groups of texts."
readmeQualityOk: true
url: "https://github.com/LLMAnnotationResearch/discern"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-07-23T17:44:06Z"
lastCommitAt: "2026-11-01T22:58:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 19
maintainers: ["LLMAnnotationResearch", "web-flow"]
openGraphImageUrl: "https://opengraph.githubassets.com/20b23dd001bfa24a703c91905ff2f7a4fc3285a4ac04f8aa05992e6ba2d88879/LLMAnnotationResearch/discern"
---

# discern

`discern` identifies interpretable features that distinguish texts associated with two groups.
It takes a table with a text column and a group column, proposes candidate differences, and
measures those candidates on data reserved before discovery. Each feature has a definition,
a yes/no measurement question, and an estimated group difference.

The language models generate candidates; held-out measurement and replication determine which
features are retained. The researcher interprets the findings and decides which explanations
or new questions warrant further study.

Read the [CampaignView example output](https://github.com/LLMAnnotationResearch/discern/blob/HEAD/examples/sample-output/campaignview.md) for a complete saved
feature report. The [walkthrough](https://github.com/LLMAnnotationResearch/discern/blob/HEAD/examples/campaignview/README.md) includes openly licensed data,
complete saved real and placebo runs, and an offline check of the reported results.

## Intended use

Use `discern` when you have texts from two groups and want to learn how they differ without
specifying all the relevant dimensions in advance. Examples include open-ended responses from
treatment…
