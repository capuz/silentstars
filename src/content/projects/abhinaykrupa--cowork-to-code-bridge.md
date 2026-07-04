---
repo: "abhinaykrupa/cowork-to-code-bridge"
name: "cowork-to-code-bridge"
description: "Let Claude run code on your real machine — safely — from any Claude chat. Bridges Claude Cowork to Claude Code on your Mac/Linux box. One command, idempotent, no open ports."
readmeQualityOk: true
url: "https://github.com/abhinaykrupa/cowork-to-code-bridge"
homepage: "https://github.com/abhinaykrupa/cowork-to-code-bridge#install--two-pastes-total"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [78, 21]
topics: ["ai-agents", "anthropic", "automation", "claude", "claude-code", "claude-cowork", "cli", "developer-tools", "linux", "macos"]
stars: 7
forks: 8
openIssues: 14
closedIssues: 25
watchers: 1
contributors: 8
recentReleases: 2
createdAt: "2026-05-28T22:48:42Z"
lastCommitAt: "2026-07-04T22:20:01Z"
lastReleaseAt: "2026-05-31T17:59:07Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 91
undervaluedScore: 71
maintainers: ["abhinaykrupa", "EagleEye-0101", "sureshpegadapelli84"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1252819987/8135e45e-cbcb-4321-b60e-efc6ba5637b9"
discussionCount: 2
---

# cowork-to-code-bridge

> ⭐ **If this saves you time, [a star helps others find it](https://github.com/abhinaykrupa/cowork-to-code-bridge/stargazers).** It takes one click.

**Let Claude run code on your real machine — safely — from any Claude chat. Integrate with Hermes, cron jobs, CI/CD, or any daemon.**

</p>

> 🖥️ **macOS, Linux, and WSL2.** Works on your Mac (launchd), a Linux box/server (systemd, or a [manual path](https://github.com/abhinaykrupa/cowork-to-code-bridge/blob/main/docs/LINUX-NO-SYSTEMD.md) for containers/minimal distros), or **Windows via WSL2** (systemd in Ubuntu). Native Windows isn't supported yet — see [docs/WSL.md](https://github.com/abhinaykrupa/cowork-to-code-bridge/blob/main/docs/WSL.md).

[Claude Cowork](https://claude.ai/cowork) (and Claude in your browser) is great at planning and editing, but it runs in a sealed cloud sandbox — it can't reach your actual machine. **Claude Code**, running on your computer, *can*: it has your shell, your repos, your tools, and full agent abilities.

This bridge connects the two. Cowork hands a task to **Claude Code on your machine**, a real local agent does the work, and the result streams back to your chat. So you…
