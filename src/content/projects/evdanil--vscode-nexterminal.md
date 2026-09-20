---
repo: "evdanil/vscode-NexTerminal"
name: "vscode-NexTerminal"
description: "Terminal manager supporting ssh and serial connections"
readmeQualityOk: true
url: "https://github.com/evdanil/vscode-NexTerminal"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 8
forks: 4
openIssues: 5
closedIssues: 11
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-02-14T11:18:19Z"
lastCommitAt: "2026-09-20T08:45:52Z"
lastReleaseAt: "2026-02-17T06:58:29Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 93
undervaluedScore: 58
maintainers: ["sentriflow", "evdanil", "kanekitakitos"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb45c689df191119d7dad51600eff333837259bc5be248bb63fcace5480b7a98/evdanil/vscode-NexTerminal"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/evgeny_danilchenko"]
---

# Nexus Terminal

A full SSH + serial + port-forwarding client inside VS Code — without Remote-SSH's 300MB server payload on the box.

- **Replaces PuTTY + MobaXterm + SecureCRT + TeraTerm** — SSH, serial consoles, local shells, port forwarding, and SFTP live in one VS Code sidebar instead of four separate windows.
- **Unlike Remote-SSH, nothing is installed on the remote.** It's a pure client: no `vscode-server` unpacked into the target, no node process running on the far end. That matters when the far end is a Cisco switch, a bastion you only get a shell on, or a change-controlled box where you can't drop an agent.
- **Bring your existing connections** — import session profiles straight from MobaXterm `.ini` and SecureCRT XML exports, folder hierarchy preserved, so switching costs you minutes, not a weekend.
- **Onboard a whole rack in one paste** — feed it a CSV export or a plain list of hostnames and it creates the connections in bulk, with folders, ports, and usernames picked up from the columns. Duplicates are skipped and unparsable lines are reported with their line numbers instead of failing the batch.
- **Sync servers straight from NetBox, EVE-NG or a Proxmox cluster** —…
