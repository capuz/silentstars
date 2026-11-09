---
repo: "anomalyco/browse"
name: "browse"
description: "Let your AI agents use your real browser: an MCP server and a Chromium extension"
readmeQualityOk: true
url: "https://github.com/anomalyco/browse"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 344
forks: 21
openIssues: 9
closedIssues: 39
watchers: 1
contributors: 11
recentReleases: 10
createdAt: "2026-10-27T14:33:24Z"
lastCommitAt: "2026-11-09T00:54:11Z"
lastReleaseAt: "2026-11-08T19:59:08Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 94
undervaluedScore: 28
maintainers: ["thdxr", "R44VC0RP", "adamdotdevin"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b10076fba8a5a0e69861da83e77992a9561c4f7bd6551b68ed6e911bf7bc5df/anomalyco/browse"
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
