---
repo: "sari3l/Poc-Monitor"
name: "Poc-Monitor"
description: "🔍 Github CVE POC 信息监控推送 🚀"
url: "https://github.com/sari3l/Poc-Monitor"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["github", "poc", "monitor", "cve"]
stars: 410
forks: 68
openIssues: 0
closedIssues: 2
watchers: 23
contributors: 2
recentReleases: 0
createdAt: "2022-06-15T08:56:56Z"
lastCommitAt: "2026-06-24T00:20:45Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 37
maintainers: ["actions-user"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/503688932/900ef2f0-c5b7-4eba-b641-c75690f13b8e"
---

<h1 align="center">Poc-Monitor</h1>

</p>
        src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fsari3l%2FPoc-Monitor&amp;count_bg=%2379C83D&amp;title_bg=%23555555&amp;icon=&amp;icon_color=%23E7E7E7&amp;title=visitors&amp;edge_flat=false"
        alt="Hits"
    />
</p>

## 关于

1. 状态 `failing` 为短期内没有更新
2. 可从 [new.json](https://raw.githubusercontent.com/sari3l/CVE-Monitor/main/new.json) 文件获取最近一次`新增`的CVE项目信息
3. 可从 [update.json](https://raw.githubusercontent.com/sari3l/CVE-Monitor/main/update.json) 文件获取最近一次`更新`的CVE项目信息
4. 可从年限目录内`README.md`获取当年完整信息
5. 可从`dateLog`目录获取当天新增、更新cve内容

## 通知

1. `enableRelatedQuery`关闭下只关注最近更新的项目，开启下会关注同CVE下其他项目
2. 只有`新增`才会触发通知，具体逻辑可自行修改 
3. 修改`search.go`中通知函数更换通知渠道，具体可看[sari3l/notify](https://github.com/sari3l/notify)项目

## 效果
