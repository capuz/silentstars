---
repo: "mosamlife/wpmgr"
name: "wpmgr"
description: "Open-source, self-hostable WordPress fleet management: backups, updates, uptime monitoring, security, and image optimization for every site from one dashboard you own. A self-hosted MainWP and WP Remote alternative."
readmeQualityOk: true
url: "https://github.com/mosamlife/wpmgr"
homepage: "https://wpmgr.app"
language: "Go"
languages: ["Go", "PHP", "TypeScript"]
languagePcts: [42, 30, 24]
topics: ["backup", "fleet-management", "go", "open-source", "react", "self-hosted", "wordpress", "wordpress-management"]
stars: 146
forks: 24
openIssues: 40
closedIssues: 126
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-05-27T11:11:06Z"
lastCommitAt: "2026-08-22T04:07:50Z"
lastReleaseAt: "2026-06-08T05:58:45Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 95
undervaluedScore: 36
maintainers: ["mosamlife"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf8283a95a795248efe6fb711f73241ef8a23f8b3cefa19297b7f0fdeb6b26df/mosamlife/wpmgr"
---

# WPMgr

**Open-source, self-hostable WordPress fleet management.**

WPMgr lets you enroll, monitor, update, back up, and secure a fleet of WordPress sites from one dashboard, all running on infrastructure you control. The control plane is a Go binary with a React dashboard; a lightweight PHP plugin on each managed site handles the work. Everything between the agent and the control plane is Ed25519-signed.

</p>

**v0.61.143**: open-source and production-usable for self-hosters. The agent plugin is reviewed and listed in the [WordPress.org plugin directory](https://wordpress.org/plugins/fleet-agent-site-manager/).

---

## Quick start

Get the whole stack running on your own server with one command, no repo clone needed:

```bash
curl -fsSL https://raw.githubusercontent.com/mosamlife/wpmgr/main/scripts/quickstart-selfhost.sh | bash
```

The script downloads every file the stack needs, generates all secrets, and prints the exact command to bring WPMgr up. You need a 64-bit Linux host with Docker 24+ (2 GB RAM is enough to start). See [system requirements](https://github.com/mosamlife/wpmgr/blob/HEAD/docs/requirements.md) for sizing by fleet size, or the [full…
