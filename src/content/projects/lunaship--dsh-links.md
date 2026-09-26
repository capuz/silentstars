---
repo: "lunaship/dsh-links"
name: "dsh-links"
description: "Android companion for DeepSeek Harness: trusted-LAN pairing, mobile sessions, SSE approvals, experimental tunnels, and a planned DSH Links Relay."
originalDescription: "Android companion for DeepSeek Harness: trusted-LAN pairing, mobile sessions, SSE approvals, experimental tunnels, and a planned DSH Links Relay."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/lunaship/dsh-links"
language: "Kotlin"
languages: ["Kotlin", "JavaScript", "Go"]
languagePcts: [57, 21, 20]
topics: ["android", "beta", "deepseek", "jetpack-compose", "kotlin", "dsh-plugin"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-18T14:04:31Z"
lastCommitAt: "2026-09-26T08:46:42Z"
lastReleaseAt: "2026-08-27T14:57:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 55
maintainers: ["lunaship"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d3697ad5fe8e7283d3a54081ed470d0e78c240db9b044fa5d44478a8b5533ad/lunaship/dsh-links"
---

# dsh-links

  <strong>Bring DeepSeek Harness to your phone</strong><br>
  Give DSH running on your computer, home server, or remote server a paired native Android entry point.
</p>

</p>

---

## What is this

DSH Links is a **DSH mobile plugin** that turns an Android phone into a paired client for DSH. The computer continues to run DSH, tools, and workspaces; the phone is responsible for viewing sessions, sending messages, receiving real-time events, and handling approvals.

This is not a remote desktop, nor is it shoving the DSH Web page into a mobile browser.

| Component | Role | Distribution Method |
|---|---|---|
| **This repository `dsh-links`** | DSH plugin, mobile HTTPS access proxy, computer-side pairing and device management panel; Relay source code is in [`relay/`](https://github.com/lunaship/dsh-links/blob/HEAD/relay/) | Open-source npm plugin; Relay source code is public in the same repository, but use still requires a maintainer access code |
| **DSH Links Android App** | QR code/manual pairing, device entry, native session workbench, real-time streaming and approvals | Source code in `apps/android/`; official signed APK see Releases (`app-v*`) |

---

## Core…
