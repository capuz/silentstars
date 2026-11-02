---
repo: "Twigpine/openrecall"
name: "openrecall"
description: "Open-source, self-hostable, zero-knowledge memory for AI agents. End-to-end encrypted — the server stores only ciphertext and can't read your agent's memory. Works with any MCP agent ."
readmeQualityOk: true
url: "https://github.com/Twigpine/openrecall"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 60
forks: 12
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-25T01:19:42Z"
lastCommitAt: "2026-11-02T15:17:42Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 59
undervaluedScore: 14
maintainers: ["beardthelion", "kevincodex1"]
openGraphImageUrl: "https://opengraph.githubassets.com/e70cacd7388460a832ac1a4d1be3113d9d0fc08af65a37843df9d05bfe54830a/Twigpine/openrecall"
---

```
╭─────────────────────────────────────────────────────────────────────────────────────────╮
│  ● ● ●                          openrecall — ~/memory                          ⌘ + T    │
├─────────────────────────────────────────────────────────────────────────────────────────┤

     ██████╗ ██████╗ ███████╗███╗   ██╗██████╗ ███████╗ ██████╗ █████╗ ██╗     ██╗
    ██╔═══██╗██╔══██╗██╔════╝████╗  ██║██╔══██╗██╔════╝██╔════╝██╔══██╗██║     ██║
    ██║   ██║██████╔╝█████╗  ██╔██╗ ██║██████╔╝█████╗  ██║     ███████║██║     ██║
    ██║   ██║██╔═══╝ ██╔══╝  ██║╚██╗██║██╔══██╗██╔══╝  ██║     ██╔══██║██║     ██║
    ╚██████╔╝██║     ███████╗██║ ╚████║██║  ██║███████╗╚██████╗██║  ██║███████╗███████╗
     ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚══════╝

      one memory for every agent and every session · the host cannot read it

    $ openrecall push ./memories user:me
      ⠿ scan secrets    ✓  0 leaked
      ⠿ encrypt  12     ✓  aes-256-gcm · key derived locally, never sent
      ⠿ delta sync   →  memory.twigpine.com
        ↑ 3 changed   · 9 unchanged   ✓ server saw only ciphertext
    $ ▮…
