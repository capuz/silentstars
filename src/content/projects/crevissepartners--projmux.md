---
repo: "crevissepartners/projmux"
name: "projmux"
description: "A tmux-native workspace for multi-agent AI development across Claude Code, Codex, and   Antigravity."
readmeQualityOk: true
url: "https://github.com/crevissepartners/projmux"
homepage: "https://github.com/crevissepartners/projmux#readme"
language: "Go"
languages: ["Go"]
languagePcts: [93]
topics: ["ai-agents", "claude-code", "codex", "developer-tools", "terminal", "tmux", "antigravity", "antigravity-cli", "claude-cli", "codex-cli"]
stars: 11
forks: 3
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-22T16:51:06Z"
lastCommitAt: "2026-10-03T22:03:23Z"
lastReleaseAt: "2026-05-08T05:10:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 53
maintainers: ["es5h"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f2f1a2278e410a6ca7fdcc51e700d7332513e1a479a7df9eb35b15734af3784/crevissepartners/projmux"
---

# projmux

```sh
npm install -g projmux
projmux shell
```

## Keys

- `Alt-1` projects
- `Alt-2` notifications
- `Alt-3` recent windows
- `Alt-4` resume an AI session
- `Alt-5` settings
- `Alt-7` new AI split

`Alt-1`–`Alt-5` work with no configuration. See
[Terminal Keybindings](https://github.com/crevissepartners/projmux/blob/HEAD/docs/keybindings.md) to remap them.

## Pick up a conversation

`Alt-4` lists your Codex, Claude Code, and Antigravity sessions. Choose one and
it opens where you left it, as the same conversation.

## Get called back

Agent permission requests and completions land in one grouped inbox. `Alt-2`
takes you to the pane that is waiting.

## Run agents in parallel

Keep a shell, Codex, and Claude Code in the same window. Agents can open other
agents through the same CLI you use:

```sh
projmux create claude --project mobile-client -- "Draft the migration plan."
```

Templates and naming conventions are in
[AI Agent Shortcuts](https://github.com/crevissepartners/projmux/blob/HEAD/docs/ai-agent-shortcuts.md).

## Also in the app

- Live per-project, per-window, and per-pane CPU/RSS in the
  [Resource…
