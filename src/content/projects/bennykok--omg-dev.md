---
repo: "BennyKok/omg.dev"
name: "omg.dev"
description: "omg.dev — run AI coding agents on your own machine (formerly BennyKok/lfg)"
readmeQualityOk: true
url: "https://github.com/BennyKok/omg.dev"
homepage: "https://omg.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 366
forks: 21
openIssues: 1
closedIssues: 2
watchers: 3
contributors: 6
recentReleases: 10
createdAt: "2026-06-17T07:33:04Z"
lastCommitAt: "2026-08-08T04:35:03Z"
lastReleaseAt: "2026-06-30T09:42:25Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 93
undervaluedScore: 29
maintainers: ["github-actions[bot]", "BennyKok"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c0c21c3e4061ccc299b18ae6ed1b551beb333c33a62ed157c7be46168b745a1/BennyKok/omg.dev"
---

</a>

# omg

**Run your AI coding agents on your own machine — and drive them from your phone.**

*The open-source agent control plane behind [omg.dev](https://omg.dev). The CLI is `omg` (`lfg` still works).*

[Quick start](#quick-start) · [Why omg](#why-omg) · [Agents](#connect-a-coding-agent) · [Remote access](#reach-it-from-your-phone) · [Security](#security)

<p>
</p>

---

Running one coding agent in a terminal is fine. Running five is not: they die
when you close the laptop, you can't tell which one is stuck waiting on a
permission prompt, and you have to be at your desk to answer it.

`omg` turns a Linux box or macOS workstation into a private control plane for
Claude Code, Codex, OpenCode, Cursor, Grok, Hermes, Pi, and GitHub Copilot. Each
agent runs in a long-lived `tmux` session that survives disconnects. The
transcript streams to a web UI you can install as a PWA — so you can check on
work, answer prompts, and steer from your phone.

**You bring your own agent accounts.** `omg` drives CLIs you already own and
authenticate. It does not resell tokens and has no model of its own.

## Quick start

```bash
curl -fsSL…
