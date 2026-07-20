---
repo: "42core-team/monorepo"
name: "monorepo"
description: "⚡️🎸🔥🚀💥 Core Game's Game server, client library, visualizer, user bot environment (C + Go), and wiki. ✨"
readmeQualityOk: true
url: "https://github.com/42core-team/monorepo"
language: "C++"
languages: ["C++", "TypeScript"]
languagePcts: [29, 21]
stars: 6
forks: 3
openIssues: 6
closedIssues: 141
watchers: 3
contributors: 14
recentReleases: 0
createdAt: "2025-08-20T20:31:37Z"
lastCommitAt: "2026-07-20T06:33:55Z"
lastReleaseAt: "2025-09-20T06:04:27Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 75
maintainers: ["FreddyMSchubert", "PaulicStudios", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/63eaa449a63bb2e29c3109f72a813f23dd28c2036f84d1ffddbed3d48498f339/42core-team/monorepo"
---

# CORE GAME Monorepo

## How to Run

1. Clone this via SSH
2. Open this via [Microsoft devcontainer extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) in VSCode
3. Run `make` to build, Makefile will give further instructions.

---

## Folders & Project Structure

- bots/?/client_lib/ -> previously connection, the helper lib used by participants
- server/ -> previously even_COREnier, the gameplay server, single source of truth connection players during matches, cpp
- visualizer/ -> previously debug_visualizerm displays replay files generated from the server with vanilla html ts css
- bots/ -> bot coding environment for Core players. Put files or folders into the .coreignore to not have them show up in the generated player repositories.
- wiki/ -> previously it's own repo, handles all the documentation. Deployed under wiki.coregame.sh; Please make sure to also update the wiki when something wiki-relevant changes.

---

## How to write a bot

- configs are at bots/?/?/configs
- to write a test bot, write it in bots/?/?/your_bot
- you can also add a new folder for your bot if and add the folder to the coreignore, this will stop it from…
