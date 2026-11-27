---
repo: "saatvik333/hba"
name: "hba"
description: "Let coding agents use your real browser: your logins, their own tabs. A fast Rust CLI for Helium, Chrome and Brave, with DevTools and extension development from the shell."
readmeQualityOk: true
url: "https://github.com/saatvik333/hba"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["ai-agents", "browser-automation", "chrome-devtools-protocol", "chromium", "claude-code", "cli", "coding-agents", "extension-development", "helium-browser", "rust"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-11-02T08:09:45Z"
lastCommitAt: "2026-11-27T12:52:55Z"
lastReleaseAt: "2026-11-27T10:06:23Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 32
maintainers: ["saatvik333"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae1195300de90827dd5b2a1aac427643ea0f4fe003956492d2c140294b79186f/saatvik333/hba"
---

# hba

**Let coding agents use your real browser: your logins, their own tabs.**

`hba` is a command-line tool that connects to the browser you already have open
([Helium](https://helium.computer/), Google Chrome or Brave). An agent such as Claude Code or Codex
can then browse with your profiles, using the sites you're already signed in to. It works in
background tabs of its own, and your tabs stay as they are.

```sh
hba open github.com/notifications     # a new background tab in your profile: t5 https://github.com/notifications "Notifications"
hba snap -i                           # what can be clicked or filled: - link "Inbox" [ref=e12]
hba click e12                         # a real mouse click; prints what changed (new URL, popups, dialogs, errors)
hba fill 'internal:label="Search"i' 'is:open' --submit
hba close                             # closes the tabs this session opened
```
