---
repo: "REIJI007/AdBlock_Rule_For_Sing-box"
name: "AdBlock_Rule_For_Sing-box"
description: "适用于Sing-box的广告域名拦截RULE-SET规则集，每20分钟更新一次"
url: "https://github.com/REIJI007/AdBlock_Rule_For_Sing-box"
homepage: "https://github.com/REIJI007/AdBlock_Rule_For_Sing-box"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [100]
topics: ["adblock", "rule-set", "sing-box", "route", "rules"]
stars: 141
forks: 20
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 2
recentReleases: 8
createdAt: "2024-08-21T00:47:04Z"
lastCommitAt: "2026-06-25T01:34:57Z"
lastReleaseAt: "2026-06-25T01:32:14Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 90
undervaluedScore: 52
maintainers: ["github-actions[bot]", "actions-user"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/845288931/ce0341b6-cd56-40f5-9da3-3d4b66122511"
discussionCount: 0
---

# AdBlock Rule For Sing-box

**适用于 Sing-box 的广告域名拦截规则集**

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
      <td><b>JSON</b></td>
      <td>
      </td>
    </tr>
    <tr>
      <td><b>SRS</b></td>
      <td>
      </td>
    </tr>
    <tr>
      <td><b>拦截域名</b></td>
      <td>
      </td>
    </tr>
  </tbody>
</table>

**配置**

---

```json
{
  "dns": {
    "rules": [
      {
        "rule_set": ["adblock"],
        "action": "reject"
      }
    ]
  },
  "route": {
    "rule_set": [
      {
        "tag": "adblock",
        "type": "remote",
        "format": "source",
        "url": "https://raw.githubusercontent.com/REIJI007/AdBlock_Rule_For_Sing-box/main/adblock_reject.json",
        "update_interval": "1h"
      }
    ],
    "rules": [
      {
        "rule_set": ["adblock"],
        "action": "reject"
      }
    ]
  }
}
```
