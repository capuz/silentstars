---
repo: "laincat/vensrc"
name: "vensrc"
description: "Vensrc: VeneraX / Venera-Next comic source inspection, subscription, and single rolling Release"
originalDescription: "Vensrc：VeneraX / Venera-Next 漫画源巡检、订阅与单一滚动 Release"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/laincat/vensrc"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [64, 36]
topics: ["chinese", "comic-reader", "github-actions", "manga-sources", "source-index", "venera", "comic-source-index", "comic-sources", "venera-next", "venerax"]
stars: 34
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-10-23T09:04:33Z"
lastCommitAt: "2026-11-22T11:49:45Z"
lastReleaseAt: "2026-11-22T11:30:56Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 41
maintainers: ["github-actions[bot]", "laincat"]
openGraphImageUrl: "https://opengraph.githubassets.com/19cd0761a56f995d6a9ae757f6aa1aad502c206fae3b7660baa1981c053432a2/laincat/vensrc"
---

# Vensrc

Curates and inspects community comic sources for VeneraX and Venera-Next. The main subscription includes sources based on VeneraX results; Venera-Next is checked independently against the same sample.

## Subscriptions

| List | Fixed URL |
| --- | --- |
| Main subscription | [index.json](https://github.com/laincat/vensrc/releases/latest/download/index.json) |
| Extended subscription | [extended.json](https://github.com/laincat/vensrc/releases/latest/download/extended.json) |

Add the subscription URLs in the comic source repository management of the client. The two URLs are source lists and can be added together; do not import them as individual JS sources.
[Latest rolling Release](https://github.com/laincat/vensrc/releases/latest) uploads only the two JSON files above. The body lists the name, version, and source repository of each source in each list.
