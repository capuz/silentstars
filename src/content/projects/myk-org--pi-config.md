---
repo: "myk-org/pi-config"
name: "pi-config"
description: "Pi orchestrator config: specialist subagents, enforcement, code review loop, workflow commands"
readmeQualityOk: true
url: "https://github.com/myk-org/pi-config"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
stars: 9
forks: 6
openIssues: 7
closedIssues: 530
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-04-09T12:44:14Z"
lastCommitAt: "2026-11-21T13:29:23Z"
lastReleaseAt: "2026-04-20T09:19:00Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 99
undervaluedScore: 65
maintainers: ["myakove"]
openGraphImageUrl: "https://opengraph.githubassets.com/675d9de14ef1ad5642b48117ba0b8c966fffea3d3701bb33641d1edd5cf86f84/myk-org/pi-config"
---

# Pi Orchestrator Config

A [pi package](https://github.com/badlogic/pi-mono) that implements an **orchestrator pattern** — the main agent delegates all work to specialist subagents.

📚 **[Full Documentation](https://myk-org.github.io/pi-config/)**

## Deploy reload confirmation

Deploy requests use `.pi/run/reload.flag` and confirm the captured pending nonce in `reload.done`.
Writers must publish a complete nonce by same-directory temporary-file atomic rename.
Retained claims retry automatically without replacing newer requests.
See [reload handshake](https://github.com/myk-org/pi-config/blob/HEAD/docs/configuration.md#reload-handshake) for the publication contract.
The interactive owner waits for idle and retries failed reload commands with exponential backoff (`1s` to `30s`, reset on a new flag nonce). Live foreign
owners and their queued flags are protected regardless of age. Oneshot and RPC children
leave the handshake untouched. Manual `/reload` leaves an unproven flag for one extra
reload rather than confirming code it may not have loaded.
