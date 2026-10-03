---
repo: "homie-rocks/homie"
name: "homie"
description: "Homie: turn Claude or Codex into a game studio. Multiplayer web games on your own Cloudflare."
readmeQualityOk: true
url: "https://github.com/homie-rocks/homie"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [56, 44]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 0
recentReleases: 10
createdAt: "2026-09-29T18:45:30Z"
lastCommitAt: "2026-10-03T21:58:41Z"
lastReleaseAt: "2026-10-02T07:40:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 54
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/caa82fe9875cb772527c18bfb73be6ded4c36f6b3a1f53dcd81388890149068d/homie-rocks/homie"
discussionCount: 0
---

# Homie

A studio in a box for your AI: make games, music and video, and publish them from a studio
that runs on your own Cloudflare, on the free plan.

> **Beta.** Homie for studios is in a friends beta. Bugs, port requests and questions go
> to [Issues](https://github.com/homie-rocks/homie/issues/new/choose); read
> [Known issues](#known-issues) first.

Homie is a plugin for Claude Code and Codex. Ask it to *"set up a game studio called
Night Owls and make a multiplayer game"* and it:

1. makes a **studio**: one folder you can see and open, a git repository with `games/`,
   `music/`, `videos/`, `posts/` and `site/`, and an `AGENTS.md` that tells your AI how
   everything in it works;
2. makes your **game**, built on the Gem Rush starter and the netplay contract: every browser
   renders the game itself, strangers who press Play meet in the same public room,
   bots fill empty seats, and rounds end and restart on their own;
3. **proves it**: two fresh browsers (a computer and a phone) press Play, and the check
   passes only when they share a room and finish a round;
4. **deploys** the studio's site to **your own Cloudflare account**, after you approve
   Cloudflare once in your…
