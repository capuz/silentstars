---
repo: "sari3l/Poc-Monitor"
name: "Poc-Monitor"
description: "🔍 Github CVE POC Information Monitoring and Push 🚀"
originalDescription: "🔍 Github CVE POC 信息监控推送 🚀"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/sari3l/Poc-Monitor"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["github", "poc", "monitor", "cve"]
stars: 423
forks: 70
openIssues: 0
closedIssues: 2
watchers: 23
contributors: 2
recentReleases: 0
createdAt: "2022-06-15T08:56:56Z"
lastCommitAt: "2026-10-31T07:46:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 37
maintainers: ["actions-user"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/503688932/900ef2f0-c5b7-4eba-b641-c75690f13b8e"
---

<img
        src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fsari3l%2FPoc-Monitor&amp;count_bg=%2379C83D&amp;title_bg=%23555555&amp;icon=&amp;icon_color=%23E7E7E7&amp;title=visitors&amp;edge_flat=false"
        alt="Hits"
    />

## About

1. Status `failing` means there have been no updates in the short term
2. The most recent newly added CVE project information can be obtained from the [new.json](https://raw.githubusercontent.com/sari3l/CVE-Monitor/main/new.json) file
3. The most recent updated CVE project information can be obtained from the [update.json](https://raw.githubusercontent.com/sari3l/CVE-Monitor/main/update.json) file
4. The complete information for a given year can be obtained from the `README.md` in that year's directory
5. The CVE content added and updated on a given day can be obtained from the `dateLog` directory

## Notifications

1. With `enableRelatedQuery` disabled, only recently updated projects are followed; with it enabled, other projects under the same CVE are also followed
2. Notifications are only triggered by `新增`-type additions, and the logic can be modified as needed
3. To change the notification channel,…
