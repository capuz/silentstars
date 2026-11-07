---
repo: "shidahuilang/hosts"
name: "hosts"
description: "Automatically updates IP addresses for github, docker and tinyMediaManager daily"
originalDescription: "每日自动更新 github, docker 和 tinyMediaManager 的 IP 地址"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/shidahuilang/hosts"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 25
forks: 4
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2022-10-25T13:53:51Z"
lastCommitAt: "2026-11-07T16:12:27Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 58
maintainers: ["github-actions[bot]", "shidahuilang"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5ec9fc0660a8e094bed68331667e3fefb65f7e46e0e5a1555beca642b2c9ae5/shidahuilang/hosts"
---

# hosts

## Note
Automatically updates IP addresses for github, docker and tinyMediaManager daily.

**Recent update**: Fixed a DNS query failure issue by switching from dnschecker.org to the Google DNS-over-HTTPS API, ensuring stable and reliable domain resolution.

hosts Url:
Raw Url: ``` https://raw.githubusercontent.com/shidahuilang/hosts/main/hosts ```
CDN Url: ``` https://gcore.jsdelivr.net/gh/shidahuilang/hosts@main/hosts ```
CDN Url: ``` https://cdn.staticaly.com/gh/shidahuilang/hosts/main/hosts ```    ```(Recommended)```

## Used
Windows/MacOS:
```
SwitchHosts is recommended
https://switchhosts.vercel.app
```

Linux:
```
# Delete old hosts records
sudo sed -i '/# ING Hosts Start/,/# ING Hosts End/d' /etc/hosts
# Add latest hosts
curl -s -L https://raw.githubusercontent.com/shidahuilang/hosts/main/hosts | sudo tee -a /etc/hosts
```

## Technical Notes

- **DNS queries**: Uses the Google DNS-over-HTTPS API and the Alibaba Cloud DNS API
- **Auto update**: Runs automatically every 3 days (can also be triggered manually)
- **Quality assurance**: Built-in validation; updates are only committed if at least 60% of domains resolve successfully
- **Error handling**: Supports…
