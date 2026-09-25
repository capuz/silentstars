---
repo: "deathemperor/infinitus"
name: "infinitus"
description: "Every Claude account in one menu bar — swap before you stall. Native macOS app for the claude-swap engine."
readmeQualityOk: true
url: "https://github.com/deathemperor/infinitus"
homepage: "https://infinitus.run/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["ai", "ai-agent", "ai-agents", "claude", "claude-ai", "claude-code", "claude-code-plugin", "claude-desktop", "own-your-data"]
stars: 6
forks: 2
openIssues: 30
closedIssues: 306
watchers: 0
contributors: 383
recentReleases: 10
createdAt: "2026-08-30T14:46:25Z"
lastCommitAt: "2026-09-25T09:03:43Z"
lastReleaseAt: "2026-09-11T06:33:43Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 70
maintainers: ["deathemperor", "juliusmarminge", "t3-code[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2352935f1152fa199e2c556e125e3069fcfb111ebec60fd657ff8e874b69b834/deathemperor/infinitus"
discussionCount: 0
---

# Infinitus

Infinitus is one product on three screens: the macOS menu bar app that runs your Claude Code accounts (usage windows, swapping, the sessions on the Mac), the desktop and web app that drive the agents, and the phone app. This repository's `main` holds the desktop, web and phone apps and their server; the menu bar app lives in [`apps/mac`](https://github.com/deathemperor/infinitus/blob/HEAD/apps/mac/README.md), and one `v<version>` tag releases all of them together (#823). Site: [infinitus.run](https://infinitus.run).

What the desktop, web and phone apps add to the agent client:

- **Accounts page** — every engine's fleet with per-account usage bars, the switch / hold / star / rename actions, the forecast of the next reset, and lapsed AWS and gcloud sign-ins with their device codes.
- **Settings › Menu bar, Notifications, Devices, Engines, Lock** — the menu bar app's preferences, notification routes, paired devices, engines and lock, edited from the browser.
- **Sidebar** — an Accounts pill with the active account and its fullest window.
- **Command palette** — "Open accounts".
- **Event toasts** — the engine's events (a swap, a reset, every account exhausted) surface…
