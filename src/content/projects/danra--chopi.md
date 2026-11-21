---
repo: "danra/chopi"
name: "chopi"
description: "macOS-native filesystem+network sandbox"
readmeQualityOk: true
url: "https://github.com/danra/chopi"
homepage: "https://danra.github.io/chopi/"
language: "Shell"
languages: ["Shell"]
languagePcts: [88]
topics: ["ai-agents", "macos", "proxy", "sandbox", "security"]
stars: 8
forks: 1
openIssues: 14
closedIssues: 11
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-07-01T08:07:36Z"
lastCommitAt: "2026-11-21T11:33:33Z"
lastReleaseAt: "2026-08-13T03:40:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 48
maintainers: ["yairchu"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c9e0bd2c0669d9758bd7e81929fd0ad316117203a656f9982d26aafe9ff95ce/danra/chopi"
---

# Chopi 🐶

Run an agent or any other command under a macOS sandbox that:
- Confines filesystem access
- Lets the command propose changes to [safe write targets](#safe-write-targets) as patches
  you review outside the sandbox
- Restricts outgoing network connections to allowed hosts
- Restricts git pushes to allowed repos (currently GitHub only)
- Hardens git internals

This is **not** a container- or VM-based solution. Chopi runs the command
directly on your machine with your real tools and environment, using the
OS's native sandboxing and additional network proxies to put guardrails
around it.

Chopi uses [**Agent Safehouse**](https://github.com/eugene1g/agent-safehouse) for building
most of the underlying macOS Seatbelt policy, [**Smokescreen**](https://github.com/stripe/smokescreen)
for its CONNECT proxy, and [**Caddy**](https://github.com/caddyserver/caddy) for its GitHub reverse proxy.

## Install

Clone the repo and run the installer:

   ```sh
   ./install.sh
   ```

Before first use, review the configuration.
