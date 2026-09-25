---
repo: "crevissepartners/projmux"
name: "projmux"
description: "A tmux-native workspace for multi-agent AI development across Claude Code, Codex, and   Antigravity."
readmeQualityOk: true
url: "https://github.com/crevissepartners/projmux"
homepage: "https://github.com/crevissepartners/projmux#readme"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["ai-agents", "claude-code", "codex", "developer-tools", "terminal", "tmux", "antigravity", "antigravity-cli", "claude-cli", "codex-cli"]
stars: 11
forks: 3
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-22T16:51:06Z"
lastCommitAt: "2026-09-25T09:03:48Z"
lastReleaseAt: "2026-05-08T05:10:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 50
maintainers: ["es5h"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d6c0f39e69c03beb8fb9df94a20123bf7ec3615a255e75a78813dfc54f033b7/crevissepartners/projmux"
---

# projmux

</p>

  <strong>A tmux-native workspace for multi-agent AI development.</strong>
  <br>
  <em>Run Codex, Claude Code, and Antigravity side by side in one workspace.</em>
</p>

</p>

```sh
npm install -g projmux
projmux shell
```

</p>

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

</p>

## Run agents in parallel

Keep a shell, Codex, and Claude Code in the same window. Agents can open other
agents through the same CLI you use:

```sh
projmux create claude --project mobile-client -- "Draft the migration plan."
```

</p>

Templates and naming conventions are in
[AI Agent…
