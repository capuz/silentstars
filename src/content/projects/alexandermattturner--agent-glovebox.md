---
repo: "AlexanderMattTurner/agent-glovebox"
name: "agent-glovebox"
description: "A minimal-friction secure experience that lets agents do their work. (beta)"
readmeQualityOk: true
url: "https://github.com/AlexanderMattTurner/agent-glovebox"
language: "Python"
languages: ["Python"]
languagePcts: [79]
stars: 59
forks: 11
openIssues: 57
closedIssues: 380
watchers: 2
contributors: 10
recentReleases: 9
createdAt: "2026-05-24T16:42:35Z"
lastCommitAt: "2026-09-07T08:00:47Z"
lastReleaseAt: "2026-07-12T09:56:58Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 41
maintainers: ["claude", "alexander-turner", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1248442200/662564c6-6530-4e3d-915c-4ef4aebf3840"
---

When handling dangerous materials, a chemist doesn't YOLO it barehanded on the open bench. They reach through a _glovebox_ to do their work.

Right now, you're probably barehanding AI, tossing it into a shell onto your machine with access to your credentials. At most, you're shielded by a single prompted “auto-mode” classifier. Doing better is hard and while there are a few papers on best practices, it's not clear how to do it properly and you have experiments to run.

After all, what's the chance that something bad happens?

`glovebox` is a sealed enclosure that only gives the agent what it needs to do your work. Tap-tap-tap `glovebox` and press Enter to spin up a hardware-isolated, allowlist-firewalled microVM, with a (currently experimental) AI monitor with a red-alert ability to push-notify your phone and halt the AI until you return. The goal is a minimal-friction secure experience that gets the job done.

**glovebox is an Inspect sandbox provider in addition to a coding-agent wrapper.** The goal: `pip install inspect-glovebox`, then `sandbox="glovebox"` on a Task gives every eval sample its own microVM.

## Install

### GitHub (recommended)

```bash
git clone…
