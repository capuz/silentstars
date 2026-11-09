---
repo: "kosumic/whip"
name: "whip"
description: "Whip is an agent-native SSH mobile client, designed specifically for the Herdr multiplexer from day one"
readmeQualityOk: true
url: "https://github.com/kosumic/whip"
homepage: "https://kosumic.github.io/whip/"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [45, 45]
topics: ["ai-agents", "android", "developer-tools", "expo", "herdr", "react-native", "ssh", "tailscale", "terminal", "termius"]
stars: 132
forks: 16
openIssues: 7
closedIssues: 91
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2026-07-17T06:47:52Z"
lastCommitAt: "2026-11-09T03:30:47Z"
lastReleaseAt: "2026-07-23T00:28:08Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 33
maintainers: ["kosumic", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a31c733d22ec041b1cc1f69eaf8ff124c3821e1b93bd288c6a98aa5c3a3fd3b/kosumic/whip"
discussionCount: 7
---

Chat with Claude Code, Codex, OpenCode, and Pi, review their changes, and work in remote terminals from a native Android or iOS interface.

Whip gives [Herdr](https://github.com/herdrdev/herdr) a touch-friendly mobile interface without exposing Herdr itself to the network. **No extra host software is needed when SSH and Herdr are already running.** Opt-in [push notifications](#get-push-notifications) use a Herdr host plugin and remain off until explicitly enabled for each device and session. Whip connects to your machine over SSH—directly, through saved jump hosts, or with [Tailcat mode](#connect-with-tailcat)—and rebuilds the management experience as native screens. Watch the whole herd, follow Claude Code, Codex, OpenCode, and Pi conversations, dictate a prompt, review a Git diff, or attach to a full terminal. Plain SSH hosts work too, with multiple independent shell tabs even without Herdr.

With **Phone Use**, a remote Claude Code, Codex or OpenCode agent can also use Whip's browser and phone tools, inspect connected hosts, and coordinate other Herdr agents through the same SSH connections.

**Native terminal delivery:** Rust sends output directly to the Android or iOS WebView…
