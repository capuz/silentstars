---
repo: "REIJI007/AdBlock_Rule_For_Clash"
name: "AdBlock_Rule_For_Clash"
description: "Ad domain interception RULE-SET rules for Clash (premium core and mihomo core), updated every 20 minutes"
originalDescription: "适用于Clash（premium核心与mihomo核心）的广告域名拦截RULE-SET规则集，每20分钟更新一次"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/REIJI007/AdBlock_Rule_For_Clash"
homepage: "https://github.com/REIJI007/AdBlock_Rule_For_Clash"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [100]
topics: ["adblock", "clash", "mihomo", "rule-set", "rule-provider", "clash-premium", "clash-meta"]
stars: 350
forks: 14
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2024-08-02T15:44:48Z"
lastCommitAt: "2026-07-04T22:52:49Z"
lastReleaseAt: "2026-07-04T22:05:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 35
maintainers: ["actions-user", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/837279992/c2da5eee-b642-4ea3-a9c6-e38b31a9991c"
discussionCount: 0
---

# AdBlock Rule For Clash

**Ad domain interception rule set for Clash**

**Links**
---

<table>
  <thead>
    <tr>
      <th>Format</th>
      <th>Subscription Link</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>YAML</b></td>
      <td>
      </td>
    </tr>
    <tr>
      <td><b>MRS</b></td>
      <td>
      </td>
    </tr>
    <tr>
      <td><b>TXT</b></td>
      <td>
      </td>
    </tr>
  </tbody>
</table>

**Configuration**
---

```yaml
dns:
  enable: true
  nameserver-policy:
    'geosite:category-ads-all': rcode://success

rule-providers:
  adblock:
    type: http
    behavior: classical
    url: https://raw.githubusercontent.com/REIJI007/AdBlock_Rule_For_Clash/main/adblock_reject.yaml
    path: ./ruleset/adblock_reject.yaml
    interval: 120
    timeout: 30

rules:
  - GEOSITE,category-ads-all,REJECT
  - RULE-SET,adblock,REJECT
```
