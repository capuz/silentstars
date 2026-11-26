---
repo: "skorokithakis/symphony"
name: "symphony"
description: "An implementation of OpenAI's symphony with OpenCode and Linear."
readmeQualityOk: true
url: "https://github.com/skorokithakis/symphony"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [57, 38]
stars: 23
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2026-05-12T19:40:23Z"
lastCommitAt: "2026-11-26T23:32:31Z"
lastReleaseAt: "2026-11-25T22:29:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 49
maintainers: ["skorokithakis"]
openGraphImageUrl: "https://opengraph.githubassets.com/31f2acd27a02ff12087b41340d7ff7a6b408888ca05a97f54faaac767b364519/skorokithakis/symphony"
---

# Symphony

**A self-hosted web UI that runs your coding agent on tickets, in a sandbox,
on your own machine.**

Write a ticket, press Start, and walk away. Symphony clones the repository,
runs [OpenCode](https://opencode.ai/), OMP or pi on it inside a
[bubblewrap](https://github.com/containers/bubblewrap) sandbox, and posts the
agent's reply on the ticket. Answer when you have a moment, from your desk or
your phone, and the agent continues the same session. Several tickets run at
the same time, so you can keep planning while the agents work.

It is one small Python daemon. There is no database, no account and no cloud
service: a ticket is a JSON file in a directory you choose, and the agent is
the CLI you already use, with the login it already has.
