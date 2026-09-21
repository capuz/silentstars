---
repo: "fcreme/TerminalStyles"
name: "TerminalStyles"
description: "Themed terminal styling for PowerShell"
readmeQualityOk: true
url: "https://github.com/fcreme/TerminalStyles"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [98]
topics: ["cli", "powershell", "powershell-script", "shell-customization", "terminal-styling", "windows-terminal"]
stars: 15
forks: 1
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-05-26T17:17:32Z"
lastCommitAt: "2026-09-21T09:14:03Z"
lastReleaseAt: "2026-09-19T08:16:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 54
maintainers: ["fcreme"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a01e2cc15550b703fedec54f410fbe24752fd793f062b92e022e840eb3fce35/fcreme/TerminalStyles"
---

</p>

</p>

**Switch terminal themes live.** Run `tstyles`, arrow through 16 themes
previewing each one *in your current tab* — **Enter** keeps it, **Esc** reverts to
exactly how it looked before. The palette, the cursor color and the prompt
repaint instantly on any terminal that speaks OSC; on **Windows Terminal** and
**WezTerm** the font, opacity and animated background come with them. All in one
command, all non-destructive.

</p>

Works on **Windows Terminal**, **macOS Terminal.app**, **iTerm2**, and any
terminal that speaks OSC color sequences — and in **zsh** and **bash**, not just
PowerShell. Runs on PowerShell 7 and Windows PowerShell 5.1. Keep your own prompt
(Oh My Posh / Starship) with `tstyles <name> -KeepPrompt`.

## Install

```powershell
Install-PSResource -Name TerminalStyles
Import-Module TerminalStyles -DisableNameChecking
```

On macOS and Linux this needs PowerShell first — `brew install powershell`,
or see [Requirements](#requirements). On Windows it is already there.

Add the `Import-Module` line to your `$PROFILE` so it loads on every
new shell tab — or run `tstyles register` once and it does that for
you, with a confirm prompt first. It writes to the…
