---
repo: "AlexanderMattTurner/agent-glovebox"
name: "agent-glovebox"
description: "You've probably been using Claude irresponsibly. Today, you can turn a new leaf."
readmeQualityOk: true
url: "https://github.com/AlexanderMattTurner/agent-glovebox"
language: "Python"
languages: ["Python"]
languagePcts: [71]
stars: 50
forks: 6
openIssues: 28
closedIssues: 71
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-05-24T16:42:35Z"
lastCommitAt: "2026-08-03T05:21:12Z"
lastReleaseAt: "2026-07-12T09:56:58Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 40
maintainers: ["claude", "alexander-turner", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1248442200/662564c6-6530-4e3d-915c-4ef4aebf3840?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260803%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260803T064629Z&X-Amz-Expires=300&X-Amz-Signature=65caf0b6c551f428bd3bf974fc3ef8feae2b6b7d87a1d0f49c48614b4b0db466&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTczOTg4OSwibmJmIjoxNzg1NzM5NTg5LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.DJeleOTOGoU9kW86kvMjEgFoqw1vK9bcz_SEI85TkLU"
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
