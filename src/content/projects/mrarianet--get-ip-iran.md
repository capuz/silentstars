---
repo: "MrAriaNet/Get-IP-Iran"
name: "Get-IP-Iran"
description: "Get IP Iran and add to Mikrotik Address List"
readmeQualityOk: true
url: "https://github.com/MrAriaNet/Get-IP-Iran"
language: "RouterOS Script"
languages: ["RouterOS Script"]
languagePcts: [99]
stars: 58
forks: 13
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2024-01-01T20:24:57Z"
lastCommitAt: "2026-07-04T23:15:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 54
maintainers: ["MrAriaNet"]
openGraphImageUrl: "https://opengraph.githubassets.com/9054c3a768716e081abac2a4506855378f3187d243f0f055266618f77790a0c6/MrAriaNet/Get-IP-Iran"
---

## Get IP Iran

This script is for get iran ip subnet and added to address list mikrotik

## How to use script

IPv4 List :

```bash
foreach i in={"NoNAT"} do={
  /tool fetch url="https://raw.githubusercontent.com/MrAriaNet/Get-IP-Iran/main/list.rsc" dst-path=NoNAT
  /ip firewall address-list remove [/ip firewall address-list find list=$i]
  /import file-name=$i
  /file remove $i
}
```

IPv6 List :

```bash
foreach i in={"IRv6"} do={
  /tool fetch url="https://raw.githubusercontent.com/MrAriaNet/Get-IP-Iran/main/list.rsc" dst-path=IRv6
  /ipv6 firewall address-list remove [/ipv6 firewall address-list find list=$i]
  /import file-name=$i
  /file remove $i
}
```

* If your internet is disconnected and you cannot connect to GitHub to fetch the new list, you can use the script below so that the previous list is not deleted.

IPv4 List :

```bash
foreach i in={"NoNAT"} do={

  :local fileName $i
  :local url "https://raw.githubusercontent.com/MrAriaNet/Get-IP-Iran/main/list.rsc"

  /tool fetch url=$url dst-path=$fileName mode=http

  :delay 5

  :if ([/file find name=$fileName] != "") do={

    :if ([/file get $fileName size] > 0) do={

      /ip firewall address-list remove [/ip…
