---
repo: "mahdintm/Get-IP-Iran"
name: "Get-IP-Iran"
description: "get ip list iran for mikrotik"
readmeQualityOk: true
url: "https://github.com/mahdintm/Get-IP-Iran"
language: "RouterOS Script"
languages: ["RouterOS Script"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-10-14T14:44:50Z"
lastCommitAt: "2026-08-18T04:08:22Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 71
maintainers: ["mahdintm"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f8a334de22ca446a1ed8e393c53beb61f9e3c01ee546fbffe9f7acb44cf2234/mahdintm/Get-IP-Iran"
---

## Get IP Iran

This script is for get iran ip subnet and added to address list mikrotik

## How to use script

```bash
foreach i in={"Iran"} do={
  /tool fetch url="https://raw.githubusercontent.com/mahdintm/Get-IP-Iran/main/list.rsc" dst-path=Iran
  /import file-name=$i
  /file remove $i
}
```

## Author

[Mahdi](https://github.com/mahdintm)
