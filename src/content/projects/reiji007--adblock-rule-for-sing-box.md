---
repo: "REIJI007/AdBlock_Rule_For_Sing-box"
name: "AdBlock_Rule_For_Sing-box"
description: "Ad-blocking domain interception RULE-SET for Sing-box, updated every 20 minutes"
originalDescription: "适用于Sing-box的广告域名拦截RULE-SET规则集，每20分钟更新一次"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/REIJI007/AdBlock_Rule_For_Sing-box"
homepage: "https://github.com/REIJI007/AdBlock_Rule_For_Sing-box"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [100]
topics: ["adblock", "rule-set", "sing-box", "route", "rules"]
stars: 142
forks: 20
openIssues: 0
closedIssues: 6
watchers: 2
contributors: 2
recentReleases: 6
createdAt: "2024-08-21T00:47:04Z"
lastCommitAt: "2026-07-04T22:21:07Z"
lastReleaseAt: "2026-07-04T22:08:56Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 90
undervaluedScore: 39
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/845288931/ce0341b6-cd56-40f5-9da3-3d4b66122511"
discussionCount: 0
---

# AdBlock Rule For Sing-box

**Ad-blocking domain interception rule set for Sing-box**

</div>

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
      <td><b>Intercepted Domains</b></td>
      <td>
      </td>
    </tr>
  </tbody>
</table>

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
