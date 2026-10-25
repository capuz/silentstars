---
repo: "KyoMio/dsh-zen-remote"
name: "dsh-zen-remote"
description: "Use DeepSeek Harness from your phone or another computer. Host: mobile UI, pairing-code gateway, PWA and Web Push, plus sharing chosen sessions. Client: those sessions appear in another DSH desktop's sidebar. 手机和另一台电脑都能安全远程使用 DSH"
readmeQualityOk: true
url: "https://github.com/KyoMio/dsh-zen-remote"
homepage: "https://www.npmjs.com/package/dsh-zen-remote"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [62, 37]
topics: ["deepseek-harness", "dsh-plugin", "mobile", "pwa", "remote-access", "web-push", "ai-agent", "deepseek", "remote-session"]
stars: 20
forks: 8
openIssues: 2
closedIssues: 12
watchers: 0
contributors: 9
recentReleases: 10
createdAt: "2026-08-17T17:09:14Z"
lastCommitAt: "2026-10-25T02:47:37Z"
lastReleaseAt: "2026-10-11T05:08:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 58
maintainers: ["KyoMio", "kyomarshal", "Zijian-Wang"]
openGraphImageUrl: "https://opengraph.githubassets.com/99fe06dfe6088e09f2ed170763199a158304591b763f0bc5404cb15c302e31ae/KyoMio/dsh-zen-remote"
---

| Session list home | Session page | Session info card |
| --- | --- | --- |
|  |  |  |

| Composer permission sheet | Pairing page a public visitor sees |
| --- | --- |
|  |  |

> Screenshots are a 390×844 phone viewport in the light theme; both themes are supported. The pairing page is drawn by the gateway in DSH's official style, following the system light / dark appearance.

---

## One plugin, two roles

Same package, same plugin row. What runs is decided by the `role` setting in the DSH plugin settings page:

| | **Host** (`role: host`, the default) | **Client** (`role: client`) |
| --- | --- | --- |
| Machine | The one that runs the sessions | Another computer running the DSH desktop app |
| What it loads | Mobile UI, gateway (child process), Web Push, session sharing, the relay server | The relay client and the sidebar/session-page remote parts |
| What it does NOT load | — | No gateway, no push, no phone UI — it never fights the host for the gateway port |

A paired **desktop client** sees exactly the sessions the host has turned remote access on for, grouped under "server name · workspace name" after the local workspaces. A server workspace only appears once at least one…
