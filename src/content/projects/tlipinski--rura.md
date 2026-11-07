---
repo: "tlipinski/rura"
name: "rura"
description: "Terminal UI for building shell pipelines"
readmeQualityOk: true
url: "https://github.com/tlipinski/rura"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["cli", "tui", "pipeline", "shell", "terminal"]
stars: 342
forks: 5
openIssues: 1
closedIssues: 8
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-05-05T19:29:45Z"
lastCommitAt: "2026-11-07T10:34:52Z"
lastReleaseAt: "2026-06-25T18:14:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 84
undervaluedScore: 12
maintainers: ["tlipinski"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1230208265/c85b835b-93c5-485b-896f-a79f559000db"
discussionCount: 2
---

## Features

- **Partial Pipeline Execution**: Execute only up to the current subcommand to debug complex pipes.
- **Live Execution Modes**: Real-time feedback as you type, with optional "Live Until Cursor" or "Live Full" modes.
- **Diff Mode**: Line-based diff between two outputs, with a selectable base (stdin or any subcommand's output).
- **Presets**: Save frequently used commands as named presets with optional single-key shortcuts.
- **Context-aware Completion**: Tab-complete commands and file paths using your system's bash, zsh, or fish tools.
- **Command Caching**: Automatically caches output of subcommands to speed up iteration.
- **Customizable**: Fully configurable key bindings, themes, and UI placement via TOML.
- **Vim Mode**: Full Vim-style keybindings for command editing (optional).

- **Syntax & Error Highlighting**: Visual feedback for subcommand boundaries, quotes, and pipes, plus highlighting of
  failed subcommands.
- **Custom Shell Support**: Specify which shell to use for command execution and completions (supports `sh`, `bash`,
  `zsh`, `fish` on Unix and `powershell` on Windows).
- **Search**: Search and highlight text within the output pane with regex…
