---
repo: "Naomarik/sova"
name: "sova"
description: "Sova — a web UI for running and orchestrating local AI coding agent sessions."
readmeQualityOk: true
url: "https://github.com/Naomarik/sova"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
stars: 6
forks: 3
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-09-22T15:56:41Z"
lastCommitAt: "2026-11-10T14:43:33Z"
lastReleaseAt: "2026-11-05T02:23:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 60
maintainers: ["Naomarik"]
openGraphImageUrl: "https://opengraph.githubassets.com/236146968fc57909b25f78dc3be4b9843af0c1aaf0f0c8ae57c5f814d6e765a6/Naomarik/sova"
---

# Sova

**Every agent session, one calm workspace. On your desk, or folded in your pocket.**

Sova runs the [pi](https://pi.dev) coding agent on your own machine, through pi's SDK, each chat in
a process of its own, and uses the same `~/.pi/agent` directory as pi. It lists every session on
the machine, shows any transcript, and gives web chats workers, branching and steering. It is one
person's tool for one person's agent.

## Try it

On macOS or Linux, with Git and Node.js 22.19 or later:

```sh
curl -fsSL https://raw.githubusercontent.com/Naomarik/sova/stable/scripts/install.sh | bash
```

That builds the latest release (the `stable` tag) in `~/.local/share/sova` and adds **Sova** to
your app launcher. Open it from there, or run `sova open`: it starts the server and opens
`http://127.0.0.1:4800` already unlocked, in a window of its own when Chrome, Chromium, Brave,
Edge or Vivaldi is installed (on macOS, an app of its own: its own Dock icon, no title bar). It
uses your existing pi provider login.
[Requirements and first login](https://github.com/Naomarik/sova/blob/HEAD/docs/getting-started.md).

## Why you'd run it

- **Every session in one place.** Web chats and the pi sessions…
