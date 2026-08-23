---
repo: "BennyKok/omg.dev"
name: "omg.dev"
description: "omg.dev — Remote control for claude, codex, cursor, opencode, pi, grok, jcocde with mobile client"
readmeQualityOk: true
url: "https://github.com/BennyKok/omg.dev"
homepage: "https://omg.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 477
forks: 33
openIssues: 0
closedIssues: 5
watchers: 2
contributors: 6
recentReleases: 10
createdAt: "2026-06-17T07:33:04Z"
lastCommitAt: "2026-08-23T04:09:17Z"
lastReleaseAt: "2026-06-30T09:42:25Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 100
undervaluedScore: 30
maintainers: ["github-actions[bot]", "BennyKok"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa641e257ae7628d70be98fe04f1f9abc9458b8c62c37ee431c02cfbfad40218/BennyKok/omg.dev"
---

</a>

# omg.dev

**Run your AI coding agents on your own machine — and drive them from your phone.**

*The open-source agent control plane. Self-host it, or use the hosted service at
[omg.dev](https://omg.dev).*

[Quick start](#quick-start) · [Let an agent install it](#let-an-agent-install-it) · [Join the Discord](https://omg.dev/discord) · [Why omg.dev](#why-omgdev) · [Agents](#connect-a-coding-agent) · [Remote access](#reach-it-from-your-phone) · [Security](#security)

<p>
</p>

---

Running one coding agent in a terminal is fine. Running five is not: they die
when you close the laptop, you can't tell which one is stuck waiting on a
permission prompt, and you have to be at your desk to answer it.

omg.dev turns a Linux box or macOS workstation into a private control plane for
Claude Code, Codex, OpenCode, Jcode, Cursor, Grok, fx, Pi, and GitHub Copilot.
Each agent runs in a long-lived `tmux` session that survives disconnects. The
transcript streams to a web UI you can install as a PWA — so you can check on
work, answer prompts, and steer from your phone.

**You bring your own agent accounts.** omg.dev drives CLIs you already own and
authenticate. It does not resell tokens and…
