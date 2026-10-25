---
repo: "XMoon/dsh-pi-tui"
name: "dsh-pi-tui"
description: "A third-party TUI mode for DeepSeek Harness (dsh), built on a vendored fork of pi-tui. npm @xmoon76/dsh-pi-tui"
originalDescription: "A third-party TUI mode for DeepSeek Harness (dsh), built on a vendored fork of pi-tui. npm @xmoon76/dsh-pi-tui"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/XMoon/dsh-pi-tui"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["dsh", "dsh-plugin", "deepseek-harness"]
stars: 20
forks: 3
openIssues: 14
closedIssues: 19
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-08-14T15:23:07Z"
lastCommitAt: "2026-10-25T02:46:08Z"
lastReleaseAt: "2026-09-13T13:12:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 47
maintainers: ["XMoon"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d4060890d6a7d78ca4872771ae4bc13ee14711b5b3016cae0073497e8213a6e/XMoon/dsh-pi-tui"
discussionCount: 1
---

# dsh-pi-tui

[English](https://github.com/XMoon/dsh-pi-tui/blob/HEAD/README.en.md) | Simplified Chinese

A terminal frontend for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) based on Pi TUI.

`dsh-pi-tui` installs into a profile as a standalone dsh bundle. It provides terminal interactions including streaming conversations, tool calls, session management, Subagents, history search, Shell, approvals, and settings. Runtime capabilities such as models, tools, Sessions, permissions, Skills, Plan, Goal, and Subagents are still provided by DeepSeek Harness.

## Install to a DSH Profile

### Stable / latest

The stable release is the recommended channel for regular users. Install DSH first, then add the TUI to the `pi-tui` profile:

```sh
npm install -g --allow-scripts=@deepseek-ai/dsh-subprocess-local,koffi,node-pty @deepseek-ai/dsh@latest
dsh plugin --profile pi-tui -- add @xmoon76/dsh-pi-tui@latest
dsh --profile pi-tui
```

### Next / npm line (verification)

The preview install uses DSH's `alpha` channel and the TUI's `next` channel. When installing DSH, you must explicitly allow its native install scripts:

```sh
npm install -g…
