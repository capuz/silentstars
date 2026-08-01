---
repo: "REIJI007/AdBlock_Rule_For_Sing-box"
name: "AdBlock_Rule_For_Sing-box"
description: "适用于Sing-box的广告域名拦截RULE-SET规则集，每20分钟更新一次"
readmeQualityOk: true
url: "https://github.com/REIJI007/AdBlock_Rule_For_Sing-box"
homepage: "https://github.com/REIJI007/AdBlock_Rule_For_Sing-box"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [100]
topics: ["adblock", "rule-set", "sing-box", "route", "rules"]
stars: 143
forks: 20
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2024-08-21T00:47:04Z"
lastCommitAt: "2026-08-01T06:15:47Z"
lastReleaseAt: "2026-08-01T06:15:48Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 52
maintainers: ["github-actions[bot]", "actions-user"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/845288931/ce0341b6-cd56-40f5-9da3-3d4b66122511?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260801%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260801T061709Z&X-Amz-Expires=300&X-Amz-Signature=0a2ed1e2e8e054b3dc998a6cac7ff0f3d4d23d0f9ac8414feecd4ef605f493d6&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTU2NTMyOSwibmJmIjoxNzg1NTY1MDI5LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.q6O2qyQ9mMsmdA4qGBqqvCYKZU2UlCBKzHPaH4j66VM"
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
