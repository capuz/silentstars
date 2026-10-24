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
watchers: 24
contributors: 2
recentReleases: 0
createdAt: "2022-06-15T08:56:56Z"
lastCommitAt: "2026-10-24T00:16:00Z"
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

1. Status `failing` means no updates in the short term
2. The most recently `added` CVE project information can be obtained from the [new.json](https://raw.githubusercontent.com/sari3l/CVE-Monitor/main/new.json) file
3. The most recently `updated` CVE project information can be obtained from the [update.json](https://raw.githubusercontent.com/sari3l/CVE-Monitor/main/update.json) file
4. Complete information for the current year can be obtained from `README.md` in the year directory
5. Today's added and updated CVE content can be obtained from the `dateLog` directory

## Notifications

1. With `enableRelatedQuery` disabled, only recently updated projects are tracked; when enabled, other projects under the same CVE are also tracked
2. Only `added` entries trigger notifications; the specific logic can be modified as needed
3. To change the notification channel, modify the notification function in…
