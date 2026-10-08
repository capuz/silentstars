---
repo: "swissmakers/fail2ban-ui"
name: "fail2ban-ui"
description: "Fail2Ban UI is a management platform for operating Fail2Ban across one or more Linux hosts. It provides a central place to review bans, search and unban IP addresses, manage jails and filters, and receive notifications."
readmeQualityOk: true
url: "https://github.com/swissmakers/fail2ban-ui"
homepage: "https://fail2ban-ui.com"
language: "Go"
languages: ["Go", "JavaScript"]
languagePcts: [61, 25]
topics: ["dashboard", "fail2ban", "golang", "linux", "webui", "fail2ban-dashboard", "intrusion-detection", "remote-management", "fail2ban-ui"]
stars: 357
forks: 40
openIssues: 10
closedIssues: 80
watchers: 7
contributors: 14
recentReleases: 0
createdAt: "2025-01-25T14:57:53Z"
lastCommitAt: "2026-10-08T10:51:01Z"
lastReleaseAt: "2026-02-20T14:38:35Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 39
maintainers: ["Cloud9Developer", "swissmakers", "easez88"]
openGraphImageUrl: "https://opengraph.githubassets.com/475871c27d728f23a7ed7239a04e8554d7ea9851ac2ace6901a249acb578f2c3/swissmakers/fail2ban-ui"
---

# Fail2Ban UI

**Enterprise-Grade Intrusion Detection System Management Platform**

> Maintained in our free time and free forever. If it is useful to you,
> [feel free to sponsor the project](https://github.com/sponsors/swissmakers).

Fail2Ban UI is a management platform for operating Fail2Ban across one or more Linux hosts. It provides a central place to review bans, search and unban IP addresses, manage jails and filters, and receive notifications.

The project is maintained by Swissmakers GmbH and released under AGPL-3.0.

[Quick start](#quick-start-container) - [Documentation](#documentation) - [Configuration reference](https://github.com/swissmakers/fail2ban-ui/blob/HEAD/docs/configuration.md) - [Architecture](https://github.com/swissmakers/fail2ban-ui/blob/HEAD/docs/architecture.md) - [Screenshots](#screenshots)

## What this project does

Fail2Ban UI does not replace Fail2Ban. Ban decisions are still made by the Fail2Ban daemon on each host. The UI connects to existing instances and adds:

* A dashboard of active jails and recent ban/unban activity, updated in real time over WebSocket
* A server manager for local, SSH-connected, and agent-connected Fail2Ban instances
*…
