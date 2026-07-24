---
repo: "AlexanderMattTurner/agent-glovebox"
name: "agent-glovebox"
description: "You've probably been using Claude irresponsibly. Today, you can turn a new leaf."
readmeQualityOk: true
url: "https://github.com/AlexanderMattTurner/agent-glovebox"
language: "Python"
languages: ["Python"]
languagePcts: [70]
stars: 44
forks: 5
openIssues: 26
closedIssues: 30
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-05-24T16:42:35Z"
lastCommitAt: "2026-07-24T06:08:55Z"
lastReleaseAt: "2026-07-12T09:56:58Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 39
maintainers: ["claude", "alexander-turner", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1248442200/662564c6-6530-4e3d-915c-4ef4aebf3840"
---

When handling dangerous materials, a chemist doesn't YOLO it barehanded on the open bench. They reach through a _glovebox_ to do their work.

Right now, you're probably barehanding AI, tossing it into a shell onto your machine with access to your credentials. At most, you're shielded by a single prompted “auto-mode” classifier. Doing better is hard and while there are a few papers on best practices, it's not clear how to do it properly and you have experiments to run.

After all, what's the chance that something bad happens?

`glovebox` is a sealed enclosure that only gives the agent what it needs to do your work. Tap-tap-tap `glovebox` and press Enter to spin up a hardware-isolated, allowlist-firewalled microVM, employing input/output sanitization to strip injections and tricks the AI might play on you, with an AI monitor with a red-alert ability to push-notify your phone and halt the AI until you return. The goal is a minimal-friction secure experience that gets the job done.

_Disclaimer: I'm an AI professional but not a security professional. I welcome issues and PRs._

## Install

### Install and set up (recommended)

```bash
git clone…
