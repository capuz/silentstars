---
repo: "mhrlife/nutshell"
name: "nutshell"
description: "Your Coding Agent, in a nutshell. Voice-first, summary-first, expand to full answer if you need it"
readmeQualityOk: true
url: "https://github.com/mhrlife/nutshell"
language: "Go"
languages: ["Go", "JavaScript"]
languagePcts: [57, 29]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-10T07:57:03Z"
lastCommitAt: "2026-09-13T08:28:53Z"
lastReleaseAt: "2026-09-13T08:31:05Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 39
maintainers: ["mhrlife"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8955b6556fccfb154446644e158db1c5103e4597695972d84ec3b723d12d216/mhrlife/nutshell"
---

# nutshell

Ask a coding agent something and it hands you a wall of text. You read it,
you type again, you read again. Every tool we have talks to us in one
channel — text, text and more text — so the whole conversation stays on the
keyboard, even the half of it that could have been a sentence said out loud.

nutshell puts a voice in front of one. Say what you need — a question, a
task, a piece of research — and the reply comes back *in a nutshell*: two or
three spoken sentences, while the agent does the work in your project. The
full write-up is not read at you; it waits on screen. Open it, and you can
hand any part of it back: select a passage to hear it read, to hear it
summarized, to ask about it, or to ask about it somewhere else entirely (see
[side threads](#side-threads)) — and the whole thing has a player, so you can
listen to all of it while you do something else.

nutshell starts a coding agent (Claude Code today) in the current directory,
opens a small web UI on a local port, and wires it to speech-to-text
and text-to-speech through OpenRouter.

```mermaid
flowchart TD
    Speak([🗣️ You speak]) --> Agent[Coding agent<br/>working in your project]
    Agent --> Short[🔊…
