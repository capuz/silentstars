---
repo: "ChrisLi826/tabit"
name: "tabit"
description: "Terminal sessions as vertical tabs on the left — shells, serial consoles, AI CLIs, notes, and remote logins in one GTK window"
readmeQualityOk: true
url: "https://github.com/ChrisLi826/tabit"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["claude-code", "gtk3", "linux", "python", "serial-console", "serial-terminal", "terminal-emulator", "tmux", "vertical-tabs", "vte"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-13T07:40:44Z"
lastCommitAt: "2026-10-20T08:49:52Z"
lastReleaseAt: "2026-07-15T03:00:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 54
maintainers: ["ChrisLi826"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1299005871/77589bba-7f9b-4793-8f2e-b2502e3403c5"
---

tabit is a Linux GTK terminal. Shells, serial consoles, SSH, AI agents, tmux
sessions, notes and files all live in one tab list down the left of one
window. Tabs sit in colour groups, and every AI tab shows its status.

**Remote** puts the same list on your phone or laptop, live, over Tailscale.
You can also type into a tab from there.

Native GTK + VTE. No Electron, no pip. One install script.

## Every kind of work is a tab

| Your work | Its tab |
|---|---|
| A board on a USB serial port | **+ Serial**: `screen`, `kermit` or `picocom`; or `ssh` / `telnet` to a console server |
| A shell, here or over SSH | **+ Terminal**, or **+ Command** for any command line (`ssh root@192.168.1.1`) |
| An AI agent: Claude, Codex, Grok and more | **+ AI**: in a folder you pick; it can run inside tmux, so it keeps working while tabit is closed |
| A long-running tmux session | **+ tmux**: attach to one or make one |
| A note, a Markdown file, an image or a PDF | **+ Open**: an editor with a Markdown preview; images and PDFs open rendered |

Then every tab works the same way:

- **Colour groups**: one colour per project; collapse what you are not using.
- **Status at a glance**: an AI tab shows…
