---
repo: "webxos/unixsi"
name: "unixsi"
description: "UNIXAI is a self‑contained agent harness designed to run off one bash entirely in your terminal."
readmeQualityOk: true
url: "https://github.com/webxos/unixsi"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-08-07T09:41:01Z"
lastCommitAt: "2026-10-09T18:57:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 72
undervaluedScore: 33
maintainers: ["webxos"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd1aedcb23b8659dc248ae47a6e6210c0e296b1b1cd75638687ef8d9b2b7821d/webxos/unixsi"
---

# UNIXSI – Under Development
```
▖▖▖ ▖▄▖▖▖▄▖▄▖
▌▌▛▖▌▐ ▚▘▚ ▐ 
▙▌▌▝▌▟▖▌▌▄▌▟▖
    UNIXSI – Agent Harness
```
Version 3.6 – A minimalist, single‑script bash harness that turns any local Ollama model into an autonomous conversational agent with an endless reflection mode, message queue, and built‑in tool‑calling.

---

## Overview

UNIXSI is a self‑contained Bash script that designed to run off one bash entirely in your terminal. It connects to a local Ollama server and lets you chat with any model. It offers a unique **Reflection Loop** – a self‑dialogue where the SI continuously responds to its own previous messages, simulating a conversation between a user and an assistant. The loop can be started with any initial prompt and runs indefinitely until you interrupt it.

Agent capabilities (command suggestion via `<cmd>...</cmd>` tags) are always active, making it useful for system administration, development, or exploring model behavior.

---

## Features

- **Reflection Loop** – `/reflect on <prompt>` starts an autonomous self‑dialogue: the SI replies to itself, alternating between `User (Reflect)` and `SI` roles. Perfect for brainstorming, idea refinement, or testing model reasoning.…
