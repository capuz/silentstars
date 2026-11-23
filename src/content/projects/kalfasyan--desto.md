---
repo: "kalfasyan/desto"
name: "desto"
description: "web-interface and cli to manage python and shell scripts in tmux sessions"
readmeQualityOk: true
url: "https://github.com/kalfasyan/desto"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["nicegui", "session-management", "tmux", "bash-script-manager", "ui", "cli", "command-line-tool", "docker", "uv"]
stars: 104
forks: 2
openIssues: 0
closedIssues: 8
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-05-10T06:32:28Z"
lastCommitAt: "2026-11-23T13:29:06Z"
lastReleaseAt: "2025-05-19T11:57:55Z"
status: "thriving"
tags: ["funded"]
healthScore: 98
undervaluedScore: 46
maintainers: ["kalfasyan", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/375f3a55ab593361241013bb0baa0ae13ba8949a259514f6f5d4b6b7fd2db298/kalfasyan/desto"
fundingLinks: ["GITHUB:https://github.com/kalfasyan", "CUSTOM:https://buymeacoffee.com/kalfasyan"]
discussionCount: 1
---

No more <code>ssh</code> → <code>tmux attach</code> → scroll back to see whether your job finished.

---

## 🤔 Why desto?

You have a box somewhere (a home server, a VPS, a lab workstation, your laptop) and scripts that take a while: a model training run, a nightly backup, a scraper, a data pipeline. Running them in `tmux` works, but checking on them means logging in, finding the right session and scrolling through output.

desto puts all of that in one page:

- **Start a script in two clicks.** Pick it, name the session, hit *Launch*. It keeps running in `tmux` after you close the tab.
- **See everything at a glance.** Running, finished and failed sessions with exit codes, durations and live system stats.
- **Read logs as they happen.** Open any session's output while it is still running, or long after it finished.
- **Automate the boring parts.** Chain scripts, schedule them for later or on repeat, and get a phone notification when they're done.
