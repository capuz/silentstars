---
repo: "MeinardEdrei/tmux-spotlight"
name: "tmux-spotlight"
description: "A minimalist tmux session manager and window spotlight powered by fzf. Rounded popups, live previews, and zero clutter."
readmeQualityOk: true
url: "https://github.com/MeinardEdrei/tmux-spotlight"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["tmux", "minimalist", "fzf", "session-manager", "terminal", "tmux-plugin", "tpm", "window-switcher", "bash", "cli"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-07-05T09:59:08Z"
lastCommitAt: "2026-07-07T06:43:43Z"
lastReleaseAt: "2026-07-06T17:02:58Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 44
maintainers: ["MeinardEdrei"]
openGraphImageUrl: "https://opengraph.githubassets.com/5db4e71da812d0f1f21518cb437660659fe9c28f07e81e5c265936f718a8b090/MeinardEdrei/tmux-spotlight"
---

# tmux-spotlight

A fast, minimalist fuzzy finder for tmux windows and sessions, powered by `fzf`.

I wanted a MacBook-like app switcher for my tmux environment but found existing plugins too cluttered and noisy. So I wrote this. It currently focuses strictly on window and session management—keeping things minimal, fast, and visually clean without looking like a 90s terminal wizard.

*fuzzy searching windows and killing hoarded sessions.*

## Features

- **Minimal Dependencies:** Just `bash`, `tmux`, and `fzf` (plus `zoxide` for folder launching).
- **Zoxide Workspace Launcher:** Toggle to folder-search mode to search frequently visited directories and launch new windows instantly.
- **Live Previews:** See active terminal contents or directory file listings on hover. Background colors are stripped to keep code and directories looking clean.
- **Clean Grid Layout:** Information aligns on a neat vertical grid for fast visual parsing.
- **Quick Cleanup:** Kill entire sessions or close individual windows directly inside the picker. The popup reloads instantly.
- **MRU Ordering:** Your most recently used windows float to the top of the list, tracked both from the popup and from native…
