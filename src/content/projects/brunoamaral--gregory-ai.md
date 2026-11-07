---
repo: "brunoamaral/gregory-ai"
name: "gregory-ai"
description: "AI Research tracking and Machine Learning to filter relevant content and accelerate scientific research"
readmeQualityOk: true
url: "https://github.com/brunoamaral/gregory-ai"
homepage: "https://gregory-ai.com/"
language: "Python"
languages: ["Python", "Jupyter Notebook"]
languagePcts: [55, 43]
topics: ["multiple-sclerosis", "health", "research-tool", "machine-learning", "django", "python", "neurology", "ai", "artificial-intelligence"]
stars: 58
forks: 8
openIssues: 8
closedIssues: 235
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2021-02-23T18:08:37Z"
lastCommitAt: "2026-11-07T22:51:20Z"
lastReleaseAt: "2021-12-24T15:13:47Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero", "funded"]
healthScore: 98
undervaluedScore: 55
maintainers: ["brunoamaral"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce8945c4e59ef804d24c6a91d005c35e0bb87b8f5a25f671e1f22fcf182bfad4/brunoamaral/gregory-ai"
fundingLinks: ["CUSTOM:https://donate.stripe.com/6oEeVmf1tdHIdOw7ss"]
discussionCount: 17
---

[TOC]

# GregoryAI

Gregory is an AI system that uses Machine Learning and Natural Language Processing to track
clinical research and identify papers which improves the wellbeing of patients.

Sources for research can be added by RSS feed or manually.

The output can be seen in a static site, using `build.py` or via the api provided by the Django Rest Framework.

The docker compose file also includes a Metabase container which is used to build dashboards and manage notifications.

Sources can also be added to monitor Clinical Trials, in which case Gregory can notify a list of email subscribers.

## Features

1. Machine Learning to identify relevant research
2. Configure RSS feeds to gather search results from PubMed and other websites
3. Configure searches on any public website
4. Integration with Postmark for transactional emails
5. Automatic emails to the admin team with results in the last 48hours
6. Subscriber management
7. Configure email lists for different stakeholders
8. Public and Private API to integrate with other software solutions and websites
9. Configure categories to organize search results based on keywords in title
10. Configure different “subjects” to have keep…
