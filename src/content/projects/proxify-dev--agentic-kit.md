---
repo: "proxify-dev/agentic-kit"
name: "agentic-kit"
description: "For people who work in Claude Code all day: find any past chat, see what really happened in it, and check an agent's work before it ships."
readmeQualityOk: true
url: "https://github.com/proxify-dev/agentic-kit"
language: "Python"
languages: ["Python"]
languagePcts: [69]
topics: ["chat-search", "engineering-skills", "prompt-inspection", "session-memory", "account-gateway", "verbatim-web"]
stars: 7
forks: 2
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-10-01T12:37:33Z"
lastCommitAt: "2026-11-12T11:44:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 40
maintainers: ["teocns", "AlexJov996"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6cb99b2f4fbbe3c535d64c6be7296963430c66162ca9b0d2c7b0a84aea5520d/proxify-dev/agentic-kit"
---

# agentic-kit

**Nothing you did with Claude gets lost.<br>Nothing it did stays a guess.**

For people who work in Claude Code all day: find any past chat, see what really happened in it,
and check an agent's work before it ships.

Find any chat&nbsp; ◦ &nbsp;See what Claude really sent&nbsp; ◦ &nbsp;Skills that check your work&nbsp; ◦ &nbsp;Web pages word for word&nbsp; ◦ &nbsp;All your accounts behind one `claude`&nbsp; ◦ &nbsp;One install, one undo

[What it does](#what-it-does-for-you) • [Install](#install) • [Measured](#measured) • [What you can pick](#what-you-can-pick) • [What changes](#what-setup-changes-on-your-machine) • [Without setup](#without-setup)

---

## What it does for you

Every chat you have with Claude Code is saved on your machine, often gigabytes of it. Without help,
that history is a pile of raw files: a chat you lost stays lost, and an hour that went wrong stays a
guess. The kit turns it into answers.

**You don't type the commands on this page. Claude does.** At the start of every session the kit tells
Claude which commands it has; you ask in your own words, and Claude runs them in its Bash tool:

```
you      "Which chat last changed gateway/README.md?"…
