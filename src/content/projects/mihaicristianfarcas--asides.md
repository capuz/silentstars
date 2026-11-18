---
repo: "mihaicristianfarcas/asides"
name: "asides"
description: "Talk through bugs while you test; get them transcribed on your Mac and appended to a Markdown note in your repo. macOS menu-bar app + CLI."
readmeQualityOk: true
url: "https://github.com/mihaicristianfarcas/asides"
homepage: "https://asides.mihaicristian.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["accessibility", "agentic-coding", "agentic-engineering", "agentic-workflow", "agents", "annotation", "annotation-tool", "claude-code", "codex", "cross-platform"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-15T15:32:36Z"
lastCommitAt: "2026-11-18T12:03:38Z"
lastReleaseAt: "2026-10-18T06:22:50Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 69
maintainers: ["mihaicristianfarcas", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/210b141a3065be441befa990260785889846ae836d13d786e77bbcb53e6589a2/mihaicristianfarcas/asides"
discussionCount: 0
---

# asides

**Freeze your screen, click what's wrong, say why.** It lands in your coding agent's chat as your
own message, with the screenshot, the elements you clicked and what you measured. Transcribed
locally, on your Mac or PC, on Windows or Linux.

```
⌃⌥Space   freeze the screen (and start listening)      Windows, Linux: Ctrl+Alt+Space
click     pin what's under the pointer; drag to pin an area; talk
⌃⌥Space   send it to the agent session you typed into last
```

- **Into the session you're already in:** Claude Code, Codex, Cursor, Gemini CLI, Copilot CLI,
  OpenCode and [16 more](https://github.com/mihaicristianfarcas/asides/blob/HEAD/guide/using.md#agents-and-terminals), in Terminal, iTerm, Ghostty, WezTerm,
  [Diri](https://diri.sh), or tmux, Zellij or screen in any terminal (on Windows and Linux, any
  terminal). Nothing to install in the agent.
- **For anything on screen:** pins name the element (`button "Save"`, and in browsers the page and
  a CSS-like location). Measure like PixelSnap, draw arrows, take partial screenshots.
- **Local and free:** [whisper.cpp](https://github.com/ggml-org/whisper.cpp) on your Mac's GPU (on
  Windows and Linux, the CPU).
