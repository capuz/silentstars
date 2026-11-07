---
repo: "anomalyco/browse"
name: "browse"
description: "Let your AI agents use your real browser: an MCP server and a Chromium extension"
readmeQualityOk: true
url: "https://github.com/anomalyco/browse"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 99
forks: 7
openIssues: 4
closedIssues: 8
watchers: 0
contributors: 11
recentReleases: 8
createdAt: "2026-10-27T14:33:24Z"
lastCommitAt: "2026-11-07T09:30:01Z"
lastReleaseAt: "2026-11-07T08:08:10Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 34
maintainers: ["thdxr", "R44VC0RP", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe38dc5afccb17ec887e4d2f5f1871972f128424ff26c0547919ea4a2e0b70ca/anomalyco/browse"
---

Let your AI agents use your real browser: your tabs, your logins, your extensions. An MCP server and a Chromium
extension, for [opencode](https://opencode.ai) and any other MCP client.

---

Agents get a `browse` MCP server. They open and drive tabs with Playwright, take screenshots, capture network
traffic and record the screen, in background tabs grouped out of your way. When it's your turn (a login,
a 2FA prompt, a payment), they hand the tab back to you and continue once you click **Continue**.

It works in Chrome, Edge, Brave, Arc, Helium, Vivaldi, Opera and Chromium.

## Install

```sh
curl -fsSL https://opencode.ai/browse/install | bash
```

On Windows, run `irm https://opencode.ai/browse/install.ps1 | iex` in PowerShell. With Node.js,
`npx @opencode/browse install` works too: it installs the package globally so agents run `browse` from PATH. The
installer puts the `browse` command in `~/.local/bin` (`$XDG_BIN_HOME` when set) and runs `browse install`. It reads
the channel's manifest from [Anomaly's release service](https://anoma.ly/release), downloads the binary for this
computer, and verifies its size and SHA-256 before installing it. `--channel stable|beta|dev` picks the…
