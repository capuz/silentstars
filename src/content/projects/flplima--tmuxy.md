---
repo: "flplima/tmuxy"
name: "tmuxy"
description: "The missing tmux GUI. Not a terminal emulator."
readmeQualityOk: true
url: "https://github.com/flplima/tmuxy"
homepage: "https://tmuxy.sh/"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [41, 34]
topics: ["terminal", "terminal-emulator", "tmux", "terminal-multiplexer"]
stars: 96
forks: 13
openIssues: 3
closedIssues: 75
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2026-01-06T17:11:30Z"
lastCommitAt: "2026-11-05T11:24:31Z"
lastReleaseAt: "2026-05-13T09:51:24Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 99
undervaluedScore: 44
maintainers: ["laika-assistant", "flplima", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1cb24c03a4579ff367fe874f55a94ddb636d2c7d8d10948aabb6c8f69ccddef0/flplima/tmuxy"
discussionCount: 0
---

> [!WARNING]
> _This project is under active development. Not ready for production. See [docs/SECURITY.md](https://github.com/flplima/tmuxy/blob/HEAD/docs/SECURITY.md)._

# tmuxy

The missing tmux GUI you didn't know you needed.

## why?

tmux is the best tool for agent-driven development, but it lacks a good UX.
**tmuxy** fixes that by adding an interface layer with a smoother UX on top of tmux, accessible from anywhere.

- **Agent-friendly**: AI agents already love tmux. Why create a new tool? Instead, tmuxy offers a better UI to watch them in their work.
- **Beginner-friendly**: Do you know what `<prefix> %` does? Me neither! tmuxy won't judge you for using the mouse and the system menus.
- **Mobile-friendly (Experimental)**: Combines the tmux power of detachable sessions with the convenience of the browser. Start something on your laptop, pick it up from your phone. No app required. (A VPN is highly recommended)
- **Web-friendly**: Built on web technologies to unlock richer interfaces. Pane group tabs, pane floats, image rendering, while behind the scenes it's still tmux!

## how it works

A Rust backend connects to tmux via [control…
