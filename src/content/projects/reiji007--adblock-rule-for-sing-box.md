---
repo: "REIJI007/AdBlock_Rule_For_Sing-box"
name: "AdBlock_Rule_For_Sing-box"
description: "Ad-domain blocking RULE-SET rule set for Sing-box, updated every 20 minutes"
originalDescription: "适用于Sing-box的广告域名拦截RULE-SET规则集，每20分钟更新一次"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/REIJI007/AdBlock_Rule_For_Sing-box"
homepage: "https://github.com/REIJI007/AdBlock_Rule_For_Sing-box"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [100]
topics: ["adblock", "rule-set", "sing-box", "route", "rules"]
stars: 149
forks: 20
openIssues: 0
closedIssues: 9
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2024-08-21T00:47:04Z"
lastCommitAt: "2026-10-21T23:37:01Z"
lastReleaseAt: "2026-10-21T23:26:45Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 48
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/845288931/ce0341b6-cd56-40f5-9da3-3d4b66122511"
discussionCount: 0
---

# AdBlock Rule For Sing-box

**Ad-domain blocking rule set for Sing-box**

**Links**

---

**Configuration**

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
