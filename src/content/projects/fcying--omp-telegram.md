---
repo: "fcying/omp-telegram"
name: "omp-telegram"
description: "Control and interact with Oh My Pi remotely through Telegram, with persistent sessions, reliable message delivery, and workspace-aware task routing."
readmeQualityOk: true
url: "https://github.com/fcying/omp-telegram"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["oh-my-pi", "oh-my-pi-extension", "telegram-bot"]
stars: 11
forks: 3
openIssues: 4
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-16T11:48:44Z"
lastCommitAt: "2026-11-04T08:03:36Z"
lastReleaseAt: "2026-09-25T02:15:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 49
maintainers: ["fcying", "accemlcc"]
openGraphImageUrl: "https://opengraph.githubassets.com/5df4b26a21fcdf49ef583ebe22b8f8ae0ceb9ca62da99e33feeb61dcd122f8b3/fcying/omp-telegram"
---

# omp-telegram

English | [中文](https://github.com/fcying/omp-telegram/blob/HEAD/README.zh.md)

`omp-telegram` is a Telegram bridge for [Oh My Pi](https://github.com/can1357/oh-my-pi).

It provides persistent Telegram conversations backed by OMP sessions, including:

- session recovery after a service restart
- streaming task progress and Stop controls
- text and attachment delivery
- model, thinking, and fast-mode controls
- durable final-reply delivery
- structured logging

Each ordinary private chat or topic has its own OMP session. Different conversations can work concurrently.

## Requirements

- Linux on amd64 or arm64.
- An omp installation supporting RPC protocol v2 and its runtime, such as Bun. Configure models and authentication for the same user that will run this service.
- Git is needed only for OMP's native autoresearch workflows.
- Network access to Telegram and your model provider.
- A Telegram bot. Ordinary private chats, private-chat topics, and group topics are supported; groups without a topic are not.

Tested with OMP 18.12.2. See the [architecture document](https://github.com/fcying/omp-telegram/blob/HEAD/doc/architecture.md) for verification scenarios and…
