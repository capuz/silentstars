---
repo: "mosamlife/wpmgr"
name: "wpmgr"
description: "Open-source, self-hostable WordPress fleet management: backups, updates, uptime monitoring, security, and image optimization for every site from one dashboard you own. A self-hosted MainWP and WP Remote alternative."
readmeQualityOk: true
url: "https://github.com/mosamlife/wpmgr"
homepage: "https://wpmgr.app"
language: "Go"
languages: ["Go", "PHP", "TypeScript"]
languagePcts: [44, 26, 22]
topics: ["backup", "fleet-management", "go", "open-source", "react", "self-hosted", "wordpress", "wordpress-management"]
stars: 162
forks: 29
openIssues: 103
closedIssues: 163
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-05-27T11:11:06Z"
lastCommitAt: "2026-10-09T10:50:41Z"
lastReleaseAt: "2026-06-08T05:58:45Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 29
maintainers: ["mosamlife", "wildfang", "Coysh"]
openGraphImageUrl: "https://opengraph.githubassets.com/8712bd7ae2c76d01a842bca541229b941fcd7b9396453a8bbb940e4c07f907cf/mosamlife/wpmgr"
---

# WPMgr

**Open-source, self-hostable WordPress fleet management.**

WPMgr lets you enroll, monitor, update, back up, and secure a fleet of WordPress sites from one dashboard, running on infrastructure you control when you self-host it. The control plane is a Go binary with a React dashboard; a lightweight PHP plugin on each managed site handles the work. Everything between the agent and the control plane is Ed25519-signed.

**v0.61.163**: open-source and production-usable for self-hosters. The agent plugin is reviewed and listed in the [WordPress.org plugin directory](https://wordpress.org/plugins/fleet-agent-site-manager/).

---

## Quick start

Get the whole stack running on your own server with one command, no repo clone needed:

```bash
curl -fsSL https://raw.githubusercontent.com/mosamlife/wpmgr/main/scripts/quickstart-selfhost.sh | bash
```

The script downloads every file the stack needs, generates all secrets, and prints the exact command to bring WPMgr up. You need a 64-bit Linux host with Docker 24+ (2 GB RAM is enough to start). See [system requirements](https://github.com/mosamlife/wpmgr/blob/HEAD/docs/requirements.md) for sizing by fleet size, or the [full…
