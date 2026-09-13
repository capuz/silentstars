---
repo: "Behnam-RK/dezhban"
name: "dezhban"
description: "Cross-platform network kill switch (Go) — blocks traffic by geo-IP country"
readmeQualityOk: true
url: "https://github.com/Behnam-RK/dezhban"
language: "Go"
languages: ["Go", "Swift"]
languagePcts: [67, 28]
topics: ["firewall", "go", "golang", "guard", "iran", "kill-switch", "networking", "russia", "sanctions", "vpn"]
stars: 6
forks: 0
openIssues: 3
closedIssues: 4
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-06-11T14:39:41Z"
lastCommitAt: "2026-09-13T08:28:38Z"
lastReleaseAt: "2026-08-16T11:54:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 55
maintainers: ["Behnam-RK"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b0914537695f1ef4d669eedd0af2aa03f9b5e55b29aaa1d5d8733abea5a922f/Behnam-RK/dezhban"
---

# Dezhban

> Persian *dežbān* (دژبان) — "gatekeeper / garrison guard."

> **Dezhban is dedicated, humbly, to the civilians killed in Iran since
> December 2025** — shot, executed, or tortured to death by the state for
> protesting, while that same state cut the country off from the internet so
> the world could not watch.
>
> [2025–2026 Iran massacres][iran]

**dezhban makes sure your traffic can only leave this machine through your VPN.**
If the VPN drops, your connection is cut instantly instead of silently falling
back to your real IP. If the VPN redials somewhere you've told it to refuse,
everything stops. On macOS it's a menubar app you click; everywhere else, and
for anyone who prefers it, it's a CLI and background service.

```
  [ your machine ] --- VPN tunnel up ---> [ the internet ]

      VPN drops: nothing to react to, the standing rule
      already blocks every non-tunnel path
              |
              v
  [ egress cut, instantly ]   (a plain kill switch would leak right here)
```

> [!WARNING]
> dezhban deliberately cuts network access. A wrong VPN endpoint, a crash before
> teardown, or running it over a remote session can **lock you out of your own
>…
