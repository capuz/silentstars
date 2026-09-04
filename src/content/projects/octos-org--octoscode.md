---
repo: "octos-org/octoscode"
name: "octoscode"
description: "Octoscode - Octos's Coding Agent "
readmeQualityOk: true
url: "https://github.com/octos-org/octoscode"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
stars: 34
forks: 7
openIssues: 20
closedIssues: 98
watchers: 0
contributors: 13
recentReleases: 7
createdAt: "2026-04-28T06:15:06Z"
lastCommitAt: "2026-09-04T08:10:21Z"
lastReleaseAt: "2026-07-16T06:37:20Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 96
undervaluedScore: 46
maintainers: ["ZhangHanDong", "ymote", "alanpoon"]
openGraphImageUrl: "https://opengraph.githubassets.com/f59ee6824d1d682bffbb45f9f86f83bfae03928bd783aefd87236fbd53e834fc/octos-org/octoscode"
---

# octoscode

<pre>

 ██████╗  ██████╗████████╗ ██████╗ ███████╗
██╔═══██╗██╔════╝╚══██╔══╝██╔═══██╗██╔════╝
██║   ██║██║        ██║   ██║   ██║███████╗
██║   ██║██║        ██║   ██║   ██║╚════██║
╚██████╔╝╚██████╗   ██║   ╚██████╔╝███████║
 ╚═════╝  ╚═════╝   ╚═╝    ╚═════╝ ╚══════╝
</pre>
<em>Welcome to Octoscode — Your Coding Buddy</em>
</div>

`octoscode` is the terminal app for [Octos](https://github.com/octos-org/octos)
— an AI coding assistant in your terminal, in the spirit of Claude Code and
Codex. The Octos server runs the agent, the models, and the tools; `octoscode`
is the fast, keyboard-driven way to talk to it: chat, diffs, tool approvals,
background tasks — all without leaving the shell.

## Start here

Install **just the TUI** — it auto-provisions the Octos **server** (the brain)
on first launch, so there's nothing else to set up:

```bash
npm install -g @octos-org/octoscode
# or Homebrew (this repo is its own tap):
#   brew tap octos-org/octoscode https://github.com/octos-org/octoscode
#   brew install octos-org/octoscode/octoscode
# (or the shell / PowerShell installer — see Install below)
```

Then just run it:

```bash
octoscode
```

On first launch the TUI…
