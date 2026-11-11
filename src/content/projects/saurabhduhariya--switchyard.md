---
repo: "saurabhduhariya/Switchyard"
name: "Switchyard"
description: "Multi-account switcher for Antigravity IDE. Add accounts in a side window, switch in one click. Local-only, no telemetry."
readmeQualityOk: true
url: "https://github.com/saurabhduhariya/Switchyard"
homepage: "https://open-vsx.org/extension/saurabhduhariya/ag-switchyard"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 5
createdAt: "2026-10-01T12:48:53Z"
lastCommitAt: "2026-11-11T19:47:24Z"
lastReleaseAt: "2026-11-04T10:36:12Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 44
maintainers: ["saurabhduhariya"]
openGraphImageUrl: "https://opengraph.githubassets.com/b90547a4828c6882595ea3e06c6676a80e1c0d9210f570aaf5349b11a7a181e3/saurabhduhariya/Switchyard"
---

# Switchyard

Switchyard is a sidebar extension for Google Antigravity IDE that lets you manage, monitor, and switch between multiple Google accounts with a single click.

## Features

- **Non-Disruptive Account Addition**: Add new Google accounts without closing your main IDE window using the side-window capture flow.
- **One-Click Switching**: Switch between saved Google accounts without repeating the browser sign-in process.
- **Model Usage & Quotas**: View live remaining quota percentages (weekly and 5-hour limits, or weekly only on the Starter tier) and reset countdowns for Gemini, Claude, and GPT models.
- **Dual Switching Modes**:
  - **Token Swap (Default)**: Switches accounts in the current window via an atomic session swap and restart.
  - **Isolated Profiles**: Launches separate Antigravity windows side-by-side using isolated user data directories.
- **Automatic Backups**: Creates a backup of your session database before every switch, with automatic rollback if a session fails to verify.
- **In-Panel Settings**: Configure switching modes, add-account method, email masking, and backup retention directly inside the sidebar panel.
- **Privacy & Security**: Zero external…
