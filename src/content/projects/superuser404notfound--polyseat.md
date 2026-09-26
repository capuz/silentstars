---
repo: "superuser404notfound/Polyseat"
name: "Polyseat"
description: "Multi-seat game streaming on Linux: several people play on one PC at the same time, each in an isolated container with their own Sway, Sunshine and Steam account, streamed to their own Moonlight client. Shared game library, strict input isolation, resolution and framerate per client."
readmeQualityOk: true
url: "https://github.com/superuser404notfound/Polyseat"
language: "Go"
languages: ["Go"]
languagePcts: [67]
topics: ["game-streaming", "incus", "linux-gaming", "moonlight", "multiseat", "sunshine", "sway", "wayland", "gaming", "nvenc"]
stars: 20
forks: 0
openIssues: 6
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-07-28T08:19:16Z"
lastCommitAt: "2026-09-26T08:47:11Z"
lastReleaseAt: "2026-08-23T19:28:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 37
maintainers: ["superuser404notfound"]
openGraphImageUrl: "https://opengraph.githubassets.com/c71a2e6664e3893934dfefe8adc3860a480345dd91f3ce4fbbd668d042a47bef/superuser404notfound/Polyseat"
discussionCount: 0
---

# Polyseat

**Several people playing on one Linux PC at the same time.** Each in their own
session with their own Steam account, their own controller and their own screen,
streamed to their own Moonlight client. The machine's regular desktop keeps
running undisturbed while they play.

A **seat** is a container with its own desktop, its own Steam account and its
own Sunshine, streamed to one Moonlight client. One graphics card serves all of
them. Polyseat implements neither a compositor, nor an encoder, nor a streaming
protocol: Incus, Sway, Sunshine and PipeWire do that work, and Polyseat is the
orchestrator on top. It builds the seats, wires them up collision-free, sends
each person's input to the right one, shares the game library, and repairs what
drifts.

## What the machine needs

- **Arch, Debian or Fedora**, or anything based on one of those. The host
  scripts work out which from `/etc/os-release` and speak `pacman`, `apt` or
  `dnf` accordingly. This binds only the *host*: a seat is an Arch container on
  every one of the three, so which distribution the machine runs changes nothing
  about the seats or the games in them.

  **Arch is the only one that has been run on…
