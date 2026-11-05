---
repo: "Okymi-X/htb-terminal"
name: "htb-terminal"
description: "Zero-dependency Python CLI for the Hack The Box Labs v4 API: manage machines, switch VPN servers, and make raw API calls."
readmeQualityOk: true
url: "https://github.com/Okymi-X/htb-terminal"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["api-client", "cli", "ctf", "hackthebox", "htb", "pentesting", "python", "vpn"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-05-25T14:30:05Z"
lastCommitAt: "2026-11-05T08:06:35Z"
lastReleaseAt: "2026-10-16T16:16:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 20
maintainers: ["Okymi-X"]
openGraphImageUrl: "https://opengraph.githubassets.com/99ba1d1f2becbbaa1151fac12171a7569392eb915d67ac46afc1f86754beb866/Okymi-X/htb-terminal"
---

# htb-terminal

Python terminal client for selected HTB Labs API workflows (v4 and v5):
machines, challenges, Sherlocks, VPN, OVPN files, and raw API calls. Zero
external dependencies.

See the [command reference](https://github.com/Okymi-X/htb-terminal/blob/HEAD/docs/commands.md) for every command, option,
default, and the API endpoint each command calls.

## Sources

- Official HTB Enterprise Public API documentation: https://enterprise-help.hackthebox.com/en/articles/13375637-introduction-to-enterprise-public-api
- Official HTB article on Lab/OpenVPN access: https://help.hackthebox.com/en/articles/5185687-gs-introduction-to-lab-access
- v4 Postman collection: https://documenter.getpostman.com/view/13129365/TVeqbmeq
- Readable community reference for Labs v4 endpoints: https://github.com/D3vil0p3r/HackTheBox-API

Note: HTB officially documents the Enterprise API. The Labs v4 endpoints used here come from the Postman collection and community references; they may change without notice.

## Screenshots

Compact active-machine output keeps the session details and profile-only status text readable without dumping the full HTB profile.

`machine active --oneline` collapses that into a…
