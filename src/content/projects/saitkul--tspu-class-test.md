---
repo: "saitkul/tspu-class-test"
name: "tspu-class-test"
description: "A script for determining the TSPU \"class\" on your provider. It helps you work out within a few minutes which bypass strategy you specifically need, instead of blindly trying other people's public configs."
originalDescription: "Скрипт для определения «класса» ТСПУ на вашем провайдере. Помогает за считанные минуты понять, какая стратегия обхода нужна именно вам, вместо слепого перебора чужих публичных конфигов."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/saitkul/tspu-class-test"
language: "Shell"
languages: ["Shell", "HTML"]
languagePcts: [55, 37]
stars: 9
forks: 0
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2026-11-06T19:52:34Z"
lastCommitAt: "2026-11-11T19:45:47Z"
lastReleaseAt: "2026-11-11T19:32:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 37
maintainers: ["saitkul"]
openGraphImageUrl: "https://opengraph.githubassets.com/2eea4d098fdbdd3ceed4d442609475946b041c517946496245c93926cff8f82b/saitkul/tspu-class-test"
---

# 🔬 TSPU test — TSPU class of your provider for Zapret2

*LuCI application and CLI script for express diagnostics of your provider's TSPU filtering. In 5–20 minutes it objectively determines which desynchronization mechanisms your TSPU lets through, prints a ready verdict "TSPU CLASS", and generates a report for the provider map, instead of blindly trying other people's configs.*

## 🎯 Why is this needed?

Instead of copying other people's heavy public strategies, you get an objective picture of which techniques your TSPU lets through and which it blocks. This makes it possible to choose an individual, minimally sufficient strategy, reduce the load on your router, and speed up services. And if we collect results from different cities, we get a **country-wide filtering map**: which provider suits what at the moment.

## ⚡ What can the application do?

| Feature | Description |
|---|---|
| **16 strategies in 3 groups** | slicing without fakes (1–6) / bare fake with different fooling methods (7–10) / fake + slicing (11–16). Technique and «дурка» (junk) are separated, so it's clear what actually works |
| **“TSPU CLASS” verdict** | based on the results, the class is printed…
