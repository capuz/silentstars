---
repo: "REIJI007/AdBlock_Rule_For_Clash"
name: "AdBlock_Rule_For_Clash"
description: "适用于Clash（premium核心与mihomo核心）的广告域名拦截RULE-SET规则集，每20分钟更新一次"
readmeQualityOk: true
url: "https://github.com/REIJI007/AdBlock_Rule_For_Clash"
homepage: "https://github.com/REIJI007/AdBlock_Rule_For_Clash"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [100]
topics: ["adblock", "clash", "mihomo", "rule-set", "rule-provider", "clash-premium", "clash-meta"]
stars: 357
forks: 14
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2024-08-02T15:44:48Z"
lastCommitAt: "2026-08-09T04:46:45Z"
lastReleaseAt: "2026-08-09T03:42:41Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 41
maintainers: ["actions-user", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/837279992/c2da5eee-b642-4ea3-a9c6-e38b31a9991c"
discussionCount: 0
---

# AdBlock Rule For Clash

**适用于 Clash 的广告域名拦截规则集**

</div>

**链接**
---

<table>
  <thead>
    <tr>
      <th>格式</th>
      <th>订阅链接</th>
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

**配置**
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
